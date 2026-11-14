import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Pause, Play, RotateCw, X } from 'lucide-react';
import { DesignHotspot, TurntableFrame } from '../types/portfolio';

interface SpinViewer360Props {
  projectTitle: string;
  frames: TurntableFrame[];
  hotspots?: DesignHotspot[];
  defaultImage: string;
  compact?: boolean;
  externalAngle?: number | null;
}

const normalizeAngle = (deg: number): number => {
  const mod = deg % 360;
  return mod < 0 ? mod + 360 : mod;
};

const isAngleInRange = (angle: number, min: number, max: number): boolean => {
  const a = normalizeAngle(angle);
  if (min <= max) {
    return a >= min && a <= max;
  }
  return a >= min || a <= max;
};

export const SpinViewer360: React.FC<SpinViewer360Props> = ({
  projectTitle,
  frames,
  hotspots = [],
  defaultImage,
  compact = false,
  externalAngle = null,
}) => {
  const sortedFrames = useMemo(
    () => [...frames].sort((a, b) => a.angle - b.angle),
    [frames]
  );

  const [angle, setAngle] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [autoRotateEnabled, setAutoRotateEnabled] = useState<boolean>(true);
  const [isAutoRotating, setIsAutoRotating] = useState<boolean>(false);
  const [activeHotspot, setActiveHotspot] = useState<DesignHotspot | null>(null);
  const [preloaded, setPreloaded] = useState<boolean>(false);

  const stageRef = useRef<HTMLDivElement | null>(null);
  const angleRef = useRef<number>(0);
  const velocityRef = useRef<number>(0);
  const isDraggingRef = useRef<boolean>(false);
  const lastXRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);
  const lastInteractionRef = useRef<number>(Date.now());
  const rafRef = useRef<number | null>(null);
  const targetAngleRef = useRef<number | null>(null);

  // Reset angle cleanly when switching featured projects
  useEffect(() => {
    angleRef.current = 0;
    velocityRef.current = 0;
    targetAngleRef.current = null;
    setAngle(0);
    setActiveHotspot(null);
  }, [projectTitle]);

  // Allow parent case study sections to jump to a specific design angle
  useEffect(() => {
    if (typeof externalAngle === 'number') {
      lastInteractionRef.current = Date.now();
      setIsAutoRotating(false);
      velocityRef.current = 0;
      targetAngleRef.current = normalizeAngle(externalAngle);
    }
  }, [externalAngle]);

  // Preload all turntable frames immediately for zero-flicker rotation
  useEffect(() => {
    let mounted = true;
    Promise.all(
      sortedFrames.map(
        (frame) =>
          new Promise<void>((resolve) => {
            const img = new Image();
            img.onload = () => resolve();
            img.onerror = () => resolve();
            img.src = frame.src;
          })
      )
    ).then(() => {
      if (mounted) setPreloaded(true);
    });
    return () => {
      mounted = false;
    };
  }, [sortedFrames]);

  // Physics, inertia, smooth snap-to-target, and 3-second idle auto-rotation loop
  useEffect(() => {
    let prevTs = performance.now();

    const tick = (now: number) => {
      const dt = Math.min((now - prevTs) / 1000, 0.05);
      prevTs = now;

      if (!isDraggingRef.current) {
        if (targetAngleRef.current !== null) {
          const current = angleRef.current;
          let diff = targetAngleRef.current - current;
          if (diff > 180) diff -= 360;
          if (diff < -180) diff += 360;

          if (Math.abs(diff) < 0.6) {
            angleRef.current = normalizeAngle(targetAngleRef.current);
            targetAngleRef.current = null;
          } else {
            angleRef.current = normalizeAngle(current + diff * Math.min(1, dt * 10));
          }
          setAngle(angleRef.current);
          setIsAutoRotating(false);
        } else if (Math.abs(velocityRef.current) > 0.08) {
          angleRef.current = normalizeAngle(
            angleRef.current + velocityRef.current * dt * 60
          );
          velocityRef.current *= Math.pow(0.92, dt * 60);
          setAngle(angleRef.current);
          setIsAutoRotating(false);
        } else {
          velocityRef.current = 0;
          const idleMs = Date.now() - lastInteractionRef.current;
          if (autoRotateEnabled && !activeHotspot && idleMs >= 3000) {
            angleRef.current = normalizeAngle(angleRef.current + 16 * dt);
            setAngle(angleRef.current);
            if (!isAutoRotating) setIsAutoRotating(true);
          } else if (isAutoRotating) {
            setIsAutoRotating(false);
          }
        }
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [autoRotateEnabled, activeHotspot, isAutoRotating]);

  const registerInteraction = () => {
    lastInteractionRef.current = Date.now();
    setIsAutoRotating(false);
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).closest('button')) return;
    registerInteraction();
    targetAngleRef.current = null;
    isDraggingRef.current = true;
    setIsDragging(true);
    setActiveHotspot(null);
    lastXRef.current = e.clientX;
    lastTimeRef.current = performance.now();
    velocityRef.current = 0;
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    const now = performance.now();
    const dx = e.clientX - lastXRef.current;
    const dt = Math.max(now - lastTimeRef.current, 4);

    const deltaAngle = -dx * 0.42;
    angleRef.current = normalizeAngle(angleRef.current + deltaAngle);
    setAngle(angleRef.current);

    const instantVel = (deltaAngle / dt) * 16.67;
    velocityRef.current = velocityRef.current * 0.35 + instantVel * 0.65;

    lastXRef.current = e.clientX;
    lastTimeRef.current = now;
    registerInteraction();
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    setIsDragging(false);
    registerInteraction();
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // ignore if pointer was already released
    }
  };

  const jumpToAngle = (target: number) => {
    registerInteraction();
    setActiveHotspot(null);
    velocityRef.current = 0;
    targetAngleRef.current = normalizeAngle(target);
  };

  const { primaryFrame, secondaryFrame, blend } = useMemo(() => {
    if (sortedFrames.length === 0) {
      return {
        primaryFrame: { angle: 0, src: defaultImage, label: 'الواجهة الأمامية' },
        secondaryFrame: { angle: 0, src: defaultImage, label: 'الواجهة الأمامية' },
        blend: 0,
      };
    }

    if (sortedFrames.length === 1) {
      return {
        primaryFrame: sortedFrames[0],
        secondaryFrame: sortedFrames[0],
        blend: 0,
      };
    }

    const a = normalizeAngle(angle);
    let idxA = 0;
    for (let i = 0; i < sortedFrames.length; i++) {
      if (sortedFrames[i].angle <= a) idxA = i;
    }
    const idxB = (idxA + 1) % sortedFrames.length;
    const frameA = sortedFrames[idxA];
    const frameB = sortedFrames[idxB];

    const span =
      idxB === 0
        ? 360 - frameA.angle + frameB.angle
        : frameB.angle - frameA.angle;
    const progress =
      idxB === 0 && a < frameA.angle
        ? 360 - frameA.angle + a
        : a - frameA.angle;

    const rawRatio = span > 0 ? Math.min(Math.max(progress / span, 0), 1) : 0;
    const eased = rawRatio * rawRatio * (3 - 2 * rawRatio);

    return {
      primaryFrame: frameA,
      secondaryFrame: frameB,
      blend: eased,
    };
  }, [angle, sortedFrames, defaultImage]);

  const frontFrame = sortedFrames[0] || { angle: 0, src: defaultImage, label: 'الأمام' };
  const backFrame =
    sortedFrames.find((f) => f.angle === 180) ||
    sortedFrames[Math.floor(sortedFrames.length / 2)] ||
    frontFrame;

  const visibleHotspots = useMemo(
    () => hotspots.filter((h) => isAngleInRange(angle, h.minAngle, h.maxAngle)),
    [hotspots, angle]
  );

  const displayAngle = Math.round(normalizeAngle(angle)) % 360;
  const activeDirectionLabel =
    displayAngle >= 315 || displayAngle < 45
      ? 'الواجهة الأمامية'
      : displayAngle >= 45 && displayAngle < 135
      ? 'الجانب الأيمن'
      : displayAngle >= 135 && displayAngle < 225
      ? 'الواجهة الخلفية'
      : 'الجانب الأيسر';

  return (
    <div className="w-full flex flex-col gap-3 select-none">
      {/* Studio Turntable Stage */}
      <div
        ref={stageRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        role="region"
        aria-label={`معاينة 360 درجة لقطعة ${projectTitle}`}
        className={`relative w-full overflow-hidden bg-[#ECEEF0] border border-[#DDE0E4] touch-pan-y ${
          compact ? 'aspect-[3/4] max-h-[580px]' : 'aspect-[3/4] lg:aspect-[4/5] max-h-[680px]'
        } ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
      >
        {/* Top subtle studio readout bar */}
        <div className="absolute top-3 inset-x-3 z-20 flex items-center justify-between pointer-events-none">
          <div className="flex items-center gap-2 bg-[#F8F8F6]/90 backdrop-blur-sm border border-[#DDE0E4] px-3 py-1.5 text-xs text-[#171717]">
            <RotateCw
              className={`w-3.5 h-3.5 text-[#171717] ${
                isAutoRotating ? 'animate-spin' : ''
              }`}
              style={isAutoRotating ? { animationDuration: '6s' } : undefined}
              strokeWidth={1.5}
            />
            <span className="font-medium">معاينة 360°</span>
            <span className="text-[#62666D]" aria-hidden="true">·</span>
            <span className="text-[#62666D]">{activeDirectionLabel}</span>
          </div>

          <div className="flex items-center gap-1.5 pointer-events-auto">
            <span className="bg-[#171717] text-[#F8F8F6] px-2.5 py-1.5 text-xs font-mono-tabular tracking-wider">
              {String(displayAngle).padStart(3, '0')}°
            </span>
            <button
              type="button"
              onClick={() => {
                registerInteraction();
                setAutoRotateEnabled((prev) => !prev);
              }}
              aria-label={autoRotateEnabled ? 'إيقاف الدوران التلقائي' : 'تفعيل الدوران التلقائي'}
              title={autoRotateEnabled ? 'إيقاف الدوران التلقائي' : 'تفعيل الدوران التلقائي'}
              className="w-8 h-8 flex items-center justify-center bg-[#F8F8F6]/90 border border-[#DDE0E4] text-[#171717] hover:bg-[#171717] hover:text-[#F8F8F6] transition-colors focus-visible:outline-2 focus-visible:outline-[#171717]"
            >
              {autoRotateEnabled ? (
                <Pause className="w-3.5 h-3.5" strokeWidth={1.6} />
              ) : (
                <Play className="w-3.5 h-3.5" strokeWidth={1.6} />
              )}
            </button>
          </div>
        </div>

        {/* Dual-frame crossfade mannequin canvas */}
        <div className="relative w-full h-full flex items-center justify-center">
          <img
            src={primaryFrame.src}
            alt={`${projectTitle} - ${activeDirectionLabel}`}
            draggable={false}
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-contain pointer-events-none"
          />
          {secondaryFrame.src !== primaryFrame.src && (
            <img
              src={secondaryFrame.src}
              alt=""
              aria-hidden="true"
              draggable={false}
              referrerPolicy="no-referrer"
              style={{ opacity: blend }}
              className="absolute inset-0 w-full h-full object-contain pointer-events-none"
            />
          )}

          {/* Subtle Studio Floor Turntable Disc Indicator */}
          <div
            aria-hidden="true"
            className="absolute bottom-5 left-1/2 -translate-x-1/2 w-48 sm:w-64 h-8 pointer-events-none flex items-center justify-center"
          >
            <svg viewBox="0 0 240 36" className="w-full h-full overflow-visible">
              <ellipse
                cx="120"
                cy="18"
                rx="105"
                ry="11"
                fill="none"
                stroke="#171717"
                strokeOpacity="0.16"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
              <circle
                cx={120 + Math.sin((angle * Math.PI) / 180) * 105}
                cy={18 + Math.cos((angle * Math.PI) / 180) * 11}
                r="3.5"
                fill="#171717"
              />
            </svg>
          </div>

          {/* Interactive Design Decision Hotspots */}
          {visibleHotspots.map((spot) => {
            const isSelected = activeHotspot?.id === spot.id;
            return (
              <div
                key={spot.id}
                style={{
                  left: `${spot.xPercent}%`,
                  top: `${spot.yPercent}%`,
                }}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
              >
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    registerInteraction();
                    setActiveHotspot(isSelected ? null : spot);
                  }}
                  aria-label={`قرار تصميمي: ${spot.title}`}
                  aria-expanded={isSelected}
                  className={`group relative w-7 h-7 flex items-center justify-center rounded-full border transition-transform duration-200 focus-visible:outline-2 focus-visible:outline-[#171717] ${
                    isSelected
                      ? 'bg-[#171717] text-[#F8F8F6] border-[#171717] scale-110'
                      : 'bg-[#F8F8F6]/95 text-[#171717] border-[#171717]/45 hover:scale-110 hover:border-[#171717]'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-current" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Active Design Decision Hotspot Card */}
        {activeHotspot && (
          <div
            onClick={(e) => e.stopPropagation()}
            className="absolute bottom-14 inset-x-4 sm:inset-x-auto sm:right-4 sm:w-80 z-30 bg-[#F8F8F6]/95 backdrop-blur-md border border-[#171717]/20 p-4 shadow-lg text-right"
          >
            <div className="flex items-start justify-between gap-3 mb-1.5">
              <div>
                <span className="block text-[11px] font-medium text-[#62666D] mb-0.5">
                  قرار تصميمي
                </span>
                <h4 className="text-sm font-semibold text-[#171717]">
                  {activeHotspot.title}
                </h4>
              </div>
              <button
                type="button"
                onClick={() => setActiveHotspot(null)}
                aria-label="إغلاق شرح القرار التصميمي"
                className="text-[#62666D] hover:text-[#171717] p-0.5"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs leading-relaxed text-[#62666D]">
              {activeHotspot.detail}
            </p>
          </div>
        )}

        {/* Bottom drag instruction */}
        <div className="absolute bottom-2 inset-x-0 flex justify-center pointer-events-none">
          <span className="text-[11px] text-[#62666D] bg-[#F8F8F6]/90 px-2.5 py-0.5 border border-[#DDE0E4]">
            {preloaded
              ? hotspots.length > 0
                ? 'اسحب للتدوير 360° · اضغط على النقاط لقراءة القرارات التصميمية'
                : 'اسحب يميناً أو يساراً للتدوير 360°'
              : 'جارٍ تحميل إطارات المعاينة...'}
          </span>
        </div>
      </div>

      {/* Turntable Controls: Front/Back Thumbnails + Angle Presets + Scrubber */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-[#F8F8F6] border border-[#DDE0E4] p-2.5">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => jumpToAngle(0)}
            className={`flex items-center gap-2 p-1 pl-2.5 border transition-colors text-xs whitespace-nowrap shrink-0 ${
              displayAngle < 45 || displayAngle >= 315
                ? 'border-[#171717] bg-[#171717] text-[#F8F8F6]'
                : 'border-[#DDE0E4] bg-white text-[#171717] hover:border-[#62666D]'
            }`}
          >
            <img
              src={frontFrame.src}
              alt="الواجهة الأمامية"
              referrerPolicy="no-referrer"
              className="w-7 h-9 object-cover bg-[#ECEEF0]"
            />
            <span>الأمام</span>
          </button>

          <button
            type="button"
            onClick={() => jumpToAngle(180)}
            className={`flex items-center gap-2 p-1 pl-2.5 border transition-colors text-xs whitespace-nowrap shrink-0 ${
              displayAngle >= 135 && displayAngle < 225
                ? 'border-[#171717] bg-[#171717] text-[#F8F8F6]'
                : 'border-[#DDE0E4] bg-white text-[#171717] hover:border-[#62666D]'
            }`}
          >
            <img
              src={backFrame.src}
              alt="الواجهة الخلفية"
              referrerPolicy="no-referrer"
              className="w-7 h-9 object-cover bg-[#ECEEF0]"
            />
            <span>الخلف</span>
          </button>
        </div>

        <div className="flex items-center gap-1.5">
          {[
            { label: '0°', deg: 0 },
            { label: '90°', deg: 90 },
            { label: '180°', deg: 180 },
            { label: '270°', deg: 270 },
          ].map((preset) => {
            const isNear =
              Math.abs(displayAngle - preset.deg) < 22 ||
              (preset.deg === 0 && displayAngle > 338);
            return (
              <button
                key={preset.deg}
                type="button"
                onClick={() => jumpToAngle(preset.deg)}
                className={`px-2.5 py-1.5 text-xs font-mono-tabular border transition-colors whitespace-nowrap shrink-0 ${
                  isNear
                    ? 'border-[#171717] bg-[#D5C5AF]/40 text-[#171717] font-medium'
                    : 'border-[#DDE0E4] bg-transparent text-[#62666D] hover:text-[#171717] hover:border-[#62666D]'
                }`}
              >
                {preset.label}
              </button>
            );
          })}
        </div>

        <div className="w-full sm:w-auto sm:flex-1 sm:max-w-[180px] flex items-center gap-2">
          <input
            type="range"
            min={0}
            max={359}
            value={displayAngle}
            aria-label="التحكم بدرجة الدوران"
            onChange={(e) => {
              registerInteraction();
              targetAngleRef.current = null;
              velocityRef.current = 0;
              const next = Number(e.target.value);
              angleRef.current = next;
              setAngle(next);
            }}
            className="w-full accent-[#171717] cursor-pointer h-1.5 bg-[#DDE0E4]"
          />
        </div>
      </div>
    </div>
  );
};
