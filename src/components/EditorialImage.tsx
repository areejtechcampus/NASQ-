import React, { useEffect, useRef, useState } from 'react';
import { Shirt } from 'lucide-react';

interface EditorialImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  loading?: 'lazy' | 'eager';
}

export const EditorialImage: React.FC<EditorialImageProps> = ({
  src,
  alt,
  className = '',
  style,
  loading = 'eager',
}) => {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    console.log('[EditorialImage] src received:', { alt, src });

    if (!src) {
      console.warn('[EditorialImage] placeholder shown — missing or empty src:', {
        alt,
        src,
      });
      setFailed(true);
      setLoaded(false);
      return;
    }

    setFailed(false);
    setLoaded(false);

    // Reveal immediately only if the browser has already decoded this exact image.
    // Never treat (complete && naturalWidth === 0) on mount as an error — rely on onError.
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth > 0) {
      setLoaded(true);
    }
  }, [src, alt]);

  if (failed || !src) {
    return (
      <div
        className={`flex flex-col items-center justify-center w-full h-full bg-[#ECEEF0] text-[#62666D] p-6 text-center ${className}`}
        style={style}
        role="img"
        aria-label={alt}
      >
        <Shirt className="w-8 h-8 mb-2 opacity-40" strokeWidth={1.25} />
        <span className="text-xs font-medium text-[#171717]/70">{alt}</span>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full overflow-hidden bg-[#ECEEF0]">
      {!loaded && (
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-[#ECEEF0] via-[#DDE0E4]/60 to-[#ECEEF0] animate-pulse"
        />
      )}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading={loading}
        referrerPolicy="no-referrer"
        onLoad={() => {
          setFailed(false);
          setLoaded(true);
        }}
        onError={(e) => {
          console.error('[EditorialImage] placeholder shown — image load error (onError):', {
            alt,
            src,
            currentSrc: e.currentTarget.currentSrc,
            naturalWidth: e.currentTarget.naturalWidth,
          });
          setLoaded(false);
          setFailed(true);
        }}
        style={style}
        className={`w-full h-full transition-opacity duration-300 ${
          loaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
      />
    </div>
  );
};
