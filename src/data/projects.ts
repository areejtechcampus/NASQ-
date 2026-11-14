import { DesignProject } from '../types/portfolio';

import pufferSilverFrontImg from '../assets/images/puffer_silver_front_1794661283306.jpg';
import pufferTurn045Img from '../assets/images/puffer_turn_045_1794661303276.jpg';
import pufferTurn090Img from '../assets/images/puffer_turn_090_1794661303538.jpg';
import pufferTurn135Img from '../assets/images/puffer_turn_135_1794661304176.jpg';
import pufferTurn180Img from '../assets/images/puffer_turn_180_1794661304206.jpg';
import pufferTurn225Img from '../assets/images/puffer_turn_225_1794661305378.jpg';
import pufferTurn270Img from '../assets/images/puffer_turn_270_1794661305655.jpg';
import pufferTurn315Img from '../assets/images/puffer_turn_315_1794661305156.jpg';

import tshirtOversizedBlackImg from '../assets/images/tshirt_oversized_black_1794661289000.jpg';
import tshirtTurn090Img from '../assets/images/tshirt_turn_090_1794661305985.jpg';
import tshirtTurn180Img from '../assets/images/tshirt_turn_180_1794661306123.jpg';
import tshirtTurn270Img from '../assets/images/tshirt_turn_270_1794661307036.jpg';
import tshirtOversizedBeigeImg from '../assets/images/tshirt_oversized_beige_1794661285891.jpg';
import tshirtGraphicWhiteImg from '../assets/images/tshirt_graphic_white_1794661286753.jpg';

import winterHoodieCharcoalImg from '../assets/images/winter_hoodie_charcoal_1794661286413.jpg';
import winterCoatBeigeImg from '../assets/images/winter_coat_beige_1794661287486.jpg';
import winterLeatherJacketImg from '../assets/images/winter_leather_jacket_1794661287333.jpg';
import winterKnitSweaterImg from '../assets/images/winter_knit_sweater_1794661288287.jpg';

export const PUFFER_TURNTABLE_FRAMES = [
  { angle: 0, src: pufferSilverFrontImg, label: 'الواجهة الأمامية' },
  { angle: 45, src: pufferTurn045Img, label: 'زاوية أمامية يمين' },
  { angle: 90, src: pufferTurn090Img, label: 'الجانب الأيمن' },
  { angle: 135, src: pufferTurn135Img, label: 'زاوية خلفية يمين' },
  { angle: 180, src: pufferTurn180Img, label: 'الواجهة الخلفية' },
  { angle: 225, src: pufferTurn225Img, label: 'زاوية خلفية يسار' },
  { angle: 270, src: pufferTurn270Img, label: 'الجانب الأيسر' },
  { angle: 315, src: pufferTurn315Img, label: 'زاوية أمامية يسار' },
];

export const TSHIRT_TURNTABLE_FRAMES = [
  { angle: 0, src: tshirtOversizedBlackImg, label: 'الواجهة الأمامية' },
  { angle: 90, src: tshirtTurn090Img, label: 'الجانب الأيمن' },
  { angle: 180, src: tshirtTurn180Img, label: 'الواجهة الخلفية' },
  { angle: 270, src: tshirtTurn270Img, label: 'الجانب الأيسر' },
];

// TODO: استبدل حقل year في المشاريع أدناه بسنوات التنفيذ الفعلية لكل مشروع عند توفرها
export const DESIGN_PROJECTS: DesignProject[] = [
  {
    id: 'project-silver-puffer',
    slug: 'silver-architectural-puffer',
    title: 'جاكيت شتوي فضي مبطن',
    category: 'جاكيتات',
    subCategory: 'تصميم الملابس الخارجية',
    year: 'أرشيف الاستوديو', // TODO: أدخل سنة تنفيذ المشروع الحقيقية
    role: 'مصمم المنتج والأزياء · هندسة الباترون واختيار الخامات',
    summary:
      'صمّمت هذا الجاكيت ليجمع بين العزل الحراري العالي والخطوط المعمارية النظيفة دون المظهر المنتفخ العشوائي.',
    conceptAndProblem: {
      concept:
        'انطلقت من سؤال واضح: كيف أصمّم جاكيتاً شتوياً يحتفظ بكتلة هندسية متماسكة من كل الزوايا ويسمح بالحركة فوق طبقات الشتاء؟',
      problemSolved:
        'تعاني أغلب الجاكيتات المبطنة من تكتل الحشوة عند الكتفين وانبعاج الظهر. عالجت ذلك بتقسيم الحجرات الحرارية بنسب متساوية واستخدام نايلون مطفي يوزع الضوء بهدوء.',
    },
    inspiration:
      'استوحيت النسب من الواجهات المعدنية المصقولة في العمارة الحديثة، حيث تحدّد خطوط التقاء الأسطح شكل القطعة.',
    stages: [
      {
        step: '01',
        title: 'سكتش',
        description:
          'رسمت تخطيطات أولية لتحديد عرض الكتف الصندوقي وارتفاع الياقة بحيث تحمي الرقبة دون ملامسة الذقن.',
      },
      {
        step: '02',
        title: 'باترون',
        description:
          'عدّلت باترون الأكمام وحفرة الإبط بميلان أمامي لتستوعب الكنزات السميكة دون شدّ عند الكتف.',
      },
      {
        step: '03',
        title: 'عينة',
        description:
          'اختبرت عينات متعددة بأوزان حشو مختلفة لضبط انتفاخ الحجرات ومنع هجرة الألياف إلى الأسفل.',
      },
      {
        step: '04',
        title: 'النتيجة النهائية',
        description:
          'قطعة متماسكة بسحاب ثنائي الاتجاه وجيوب مخفية في خط التبطين تبدو نظيفة من جميع الزوايا.',
      },
    ],
    materialsAndTech: {
      materials: 'نايلون ياباني مطفي معاد تدويره (100% بولي أميد) مقاوم للرياح والرطوبة.',
      weight: 'كثافة الحشو 320 جم/م²',
      lining: 'بطانة نايلون ناعمة مضادة للكهرباء الساكنة مع حشوة ألياف حرارية مجوّفة',
      techniques: [
        'تقسيم أفقي للحجرات يمنع هبوط الحشوة',
        'قصة أكتاف منسدلة بباترون ثلاثي الأبعاد',
        'سحاب معدني YKK ثنائي الاتجاه بطبقة مطفية',
        'جيوب جانبية مدمجة داخل خط الدرزة ومبطنة بصوف ناعم',
      ],
    },
    colorPalette: [
      {
        name: 'فضي معدني مطفي',
        hex: '#B4B8BD',
        rationale: 'اخترته للسطح الخارجي ليعكس الضوء بهدوء دون لمعان مزعج.',
      },
      {
        name: 'أسود فحمي',
        hex: '#171717',
        rationale: 'معتمد للسحاب المركزي وحواف الجيوب لتحديد الخط العمودي.',
      },
      {
        name: 'رمادي داكن',
        hex: '#62666D',
        rationale: 'درجة البطانة الداخلية وخطوط الظل بين الحجرات.',
      },
    ],
    gallery: [
      pufferSilverFrontImg,
      pufferTurn045Img,
      pufferTurn090Img,
      pufferTurn180Img,
    ],
    supports360: true,
    featuredInHero: true,
    turntableFrames: PUFFER_TURNTABLE_FRAMES,
    designHotspots: [
      {
        id: 'collar-decision',
        title: 'لماذا ارتفاع الياقة 9.5 سم؟',
        detail:
          'قرّرت رفع الياقة إلى 9.5 سم مع تبطين متماسك لتعمل كحاجز للرياح دون الحاجة لأربطة أو وشاح خارجي.',
        xPercent: 50,
        yPercent: 21,
        minAngle: 310,
        maxAngle: 55,
      },
      {
        id: 'zipper-decision',
        title: 'لماذا السحاب ثنائي الاتجاه؟',
        detail:
          'اخترت سحاباً يفتح من الأسفل لتخفيف الضغط عند الورك أثناء الجلوس، مع إبقاء خط الصدر مغلقاً وثابتاً.',
        xPercent: 50,
        yPercent: 36,
        minAngle: 315,
        maxAngle: 50,
      },
      {
        id: 'pockets-decision',
        title: 'لماذا الجيوب داخل خط التبطين؟',
        detail:
          'فضّلت إخفاء الجيوب داخل خط التبطين الجانبي بدلاً من الجيوب البارزة حتى لا تنكسر خطوط القطعة الهادئة.',
        xPercent: 60,
        yPercent: 44,
        minAngle: 320,
        maxAngle: 110,
      },
      {
        id: 'sleeve-decision',
        title: 'لماذا إزاحة درزة الكتف؟',
        detail:
          'أعدت رسم ميلان الكم إلى الأمام مع اتساع مدروس تحت الإبط حتى لا يتجعّد السطح فوق الملابس الثقيلة.',
        xPercent: 48,
        yPercent: 32,
        minAngle: 60,
        maxAngle: 130,
      },
      {
        id: 'baffles-decision',
        title: 'لماذا توحيد حجرات الظهر؟',
        detail:
          'وحّدت ارتفاع الحجرات الأربع في الخلف والأمام لتأمين استمرارية بصرية دائرية 360° وتوزيع متساوٍ للدفء.',
        xPercent: 50,
        yPercent: 33,
        minAngle: 140,
        maxAngle: 220,
      },
      {
        id: 'shell-decision',
        title: 'لماذا النسيج المطفي؟',
        detail:
          'استبعدت النايلون اللامع المعتاد واخترت نسيجاً مطفياً بملمس جاف ليحافظ على رصانة الكتلة.',
        xPercent: 48,
        yPercent: 41,
        minAngle: 230,
        maxAngle: 305,
      },
    ],
  },
  {
    id: 'project-oversized-tee',
    slug: 'heavyweight-oversized-tee',
    title: 'تيشيرت Oversized ثقيل',
    category: 'تيشيرتات',
    subCategory: 'تطوير القطع الأساسية',
    year: 'أرشيف الاستوديو', // TODO: أدخل سنة تنفيذ المشروع الحقيقية
    role: 'مصمم الأزياء والباترون · تطوير النسيج القطني',
    summary:
      'أعدت هندسة التيشيرت اليومي ليقف على الجسم ببنية واضحة بفضل القطن الثقيل 280 جم/م² وخط الكتف المنسدل.',
    conceptAndProblem: {
      concept:
        'هدفي كان تصميم تيشيرت يمتلك حضوراً وبنية مستقلة ولا يلتصق بالجسم أو يترهل بعد ساعات.',
      problemSolved:
        'تشكو التيشيرتات الخفيفة من تموّج الياقة وشفافية النسيج. رفعت وزن القطن إلى 280 جم/م² وضاعفت كثافة حياكة الياقة.',
    },
    inspiration:
      'استلهمت البساطة الصارمة من ملابس العمل اليابانية التي تعتمد على ثقل النسيج ونظافة الدرزات.',
    stages: [
      {
        step: '01',
        title: 'سكتش',
        description:
          'حدّدت العلاقة بين عرض الصدر وطول الكم بحيث يصل الكم إلى المرفق دون اتساع فوضوي.',
      },
      {
        step: '02',
        title: 'باترون',
        description:
          'أسقطت خط درزة الكتف بمقدار 6 سم لضبط سقوط الأكمام وتقليل الشدّ حول الرقبة.',
      },
      {
        step: '03',
        title: 'عينة',
        description:
          'نفّذت عينات من القطن المصري الممشط مع غسيل أنزيمي مسبق للتحقق من ثبات الأبعاد بعد الغسيل.',
      },
      {
        step: '04',
        title: 'النتيجة النهائية',
        description:
          'قطعة يومية متماسكة بياقة مضلعة عرضها 2.5 سم تحفظ استقامتها طوال اليوم.',
      },
    ],
    materialsAndTech: {
      materials: '100% قطن مصري عضوي ممشط بمعالجة أنزيمية مضادة للوبر.',
      weight: '280 جم/م² (جيرسي ثقيل)',
      lining: 'بدون بطانة · شريط دعم داخلي ممتد بين الكتفين',
      techniques: [
        'حياكة جيرسي أحادية مشدودة تمنح القماش وقفة ثابتة',
        'شريط دعم داخلي يمنع تمدد خط الكتف',
        'غرزة إبرة مزدوجة نظيفة عند الحواف والأكمام',
      ],
    },
    colorPalette: [
      {
        name: 'أسود فحمي',
        hex: '#171717',
        rationale: 'صباغة عميقة تبرز حدود القصة الصندوقية بوضوح.',
      },
      {
        name: 'بيج دافئ',
        hex: '#D5C5AF',
        rationale: 'درجة ترابية هادئة تُظهر ملمس القطن الطبيعي.',
      },
      {
        name: 'أبيض ثلجي',
        hex: '#F8F8F6',
        rationale: 'درجة نقية للتنسيق تحت الجاكيتات والمعاطف.',
      },
    ],
    gallery: [
      tshirtOversizedBlackImg,
      tshirtTurn090Img,
      tshirtTurn180Img,
      tshirtOversizedBeigeImg,
    ],
    supports360: true,
    featuredInHero: true,
    turntableFrames: TSHIRT_TURNTABLE_FRAMES,
    designHotspots: [
      {
        id: 'rib-collar',
        title: 'لماذا عرض الياقة 2.5 سم؟',
        detail:
          'قرّرت زيادة عرض الياقة المضلعة وكثافتها لمنع التموّج وتأطير الرقبة بخط هندسي واضح.',
        xPercent: 51,
        yPercent: 25,
        minAngle: 315,
        maxAngle: 45,
      },
      {
        id: 'shoulder-drop',
        title: 'لماذا موقع درزة الكتف؟',
        detail:
          'أنزلت درزة الكتف بمقدار 6 سم لتخفيف التوتر عند الذراعين ومنح الكم سقوطاً مستقيماً.',
        xPercent: 40,
        yPercent: 29,
        minAngle: 0,
        maxAngle: 120,
      },
      {
        id: 'heavy-drape',
        title: 'لماذا وزن 280 جم/م²؟',
        detail:
          'اخترت هذا الوزن تحديداً لينسدل الظهر عمودياً دون التصاق بالجسم أو تجعّد.',
        xPercent: 50,
        yPercent: 34,
        minAngle: 130,
        maxAngle: 240,
      },
    ],
  },
  {
    id: 'project-wool-overcoat',
    slug: 'tailored-wool-overcoat',
    title: 'معطف شتوي صوفي طويل',
    category: 'معاطف',
    subCategory: 'التفصيل المعماري',
    year: 'أرشيف الاستوديو', // TODO: أدخل سنة تنفيذ المشروع الحقيقية
    role: 'مصمم الأزياء · ضبط الباترون واختيار البطانة',
    summary:
      'صمّمت هذا المعطف الصوفي الطويل ليمنح مرونة عالية فوق الطبقات الشتوية الثقيلة دون شدّ عند الكتف.',
    conceptAndProblem: {
      concept:
        'هدفي كان ابتكار معطف رسمي هادئ يمكن ارتداؤه فوق هودي ثقيل أو كنزة صوفية براحة تامة.',
      problemSolved:
        'المعاطف الضيقة تقيد الحركة وتضغط على الكتف. عدّلت حفرة الإبط وخط الظهر لمنح اتساع خفي يحفظ الرشاقة.',
    },
    inspiration:
      'استلهمت نسب المعاطف الكلاسيكية الطويلة مع تجريدها من الحشوات الصلبة والزخارف الزائدة.',
    stages: [
      {
        step: '01',
        title: 'سكتش',
        description: 'رسمت القامة العمودية الطويلة لتحديد نسبة الياقة العريضة إلى طول المعطف.',
      },
      {
        step: '02',
        title: 'باترون',
        description: 'أزلت حشوات الكتف الصلبة واستبدلتها ببناء كتف ناعم يتكيّف مع الطبقات تحته.',
      },
      {
        step: '03',
        title: 'عينة',
        description: 'اختبرت انزلاق البطانة على الجوخ الصوفي لضمان سهولة الارتداء فوق الكنزات.',
      },
      {
        step: '04',
        title: 'النتيجة النهائية',
        description: 'معطف مبطن بالساتان مع أزرار قرن طبيعي وجيوب مائلة مدمجة في خط القصّة.',
      },
    ],
    materialsAndTech: {
      materials: '80% صوف بكر فاخر ممزوج بـ 20% كشمير ناعم.',
      weight: 'نسيج جوخ صوفي بكثافة 520 جم/م²',
      lining: 'بطانة ساتان ناعمة كاملة لتسهيل الانزلاق فوق الطبقات',
      techniques: [
        'تفصيل الكتف الناعم (Soft Shoulder) دون حشوات صلبة',
        'أزرار من القرن الطبيعي بلمسة دافئة',
        'جيوب جانبية مائلة مدمجة في خط القصّة',
      ],
    },
    colorPalette: [
      {
        name: 'بيج رملي دافئ',
        hex: '#D5C5AF',
        rationale: 'اخترته ليمنح دفئاً بصرياً وسط أجواء الشتاء ويبرز نسيج الصوف.',
      },
      {
        name: 'أسود فحمي',
        hex: '#171717',
        rationale: 'للأزرار والتفاصيل الداخلية المتباينة.',
      },
    ],
    gallery: [winterCoatBeigeImg],
    supports360: false,
  },
  {
    id: 'project-structured-hoodie',
    slug: 'heavyweight-structured-hoodie',
    title: 'هودي هيكلي ثقيل 480 جم',
    category: 'هوديز',
    subCategory: 'القطع الشتوية الثقيلة',
    year: 'أرشيف الاستوديو', // TODO: أدخل سنة تنفيذ المشروع الحقيقية
    role: 'مصمم المنتج · تطوير الباترون والقبعة',
    summary:
      'صمّمت هودياً خالياً من الأربطة بوزن 480 جم/م²، مع قبعة مزدوجة تحافظ على شكلها القائم كإطار للرقبة.',
    conceptAndProblem: {
      concept:
        'تحويل الهودي الرياضي التقليدي إلى قطعة معمارية نظيفة تصلح للإطلالات اليومية الهادئة.',
      problemSolved:
        'الأربطة المتدلية والقبعات الخفيفة تفقد ترتيبها بسرعة. استغنيت عن الأربطة واعتمدت طبقتين من نسيج 480 جم/م².',
    },
    inspiration:
      'استوحيت النقاء الهندسي من الكتل الخرسانية البسيطة والتدرجات الداكنة أحادية اللون.',
    stages: [
      {
        step: '01',
        title: 'سكتش',
        description: 'رسمت فتحة الرقبة بشكل متداخل في الأمام لتغني تماماً عن الحبال المعدنية.',
      },
      {
        step: '02',
        title: 'باترون',
        description: 'أضفت لوحاً أوسط في باترون القبعة ليزيل التجعّد الخلفي عند الكتف.',
      },
      {
        step: '03',
        title: 'عينة',
        description: 'راجعت شدّ الحاشية المضلعة عند الخصر لضبط التماسك وحفظ الدفء.',
      },
      {
        step: '04',
        title: 'النتيجة النهائية',
        description: 'هودي بكتلة ثابتة وخياطة غاطسة غير ظاهرة عند الجيب الأمامي.',
      },
    ],
    materialsAndTech: {
      materials: '85% قطن عضوي ثقيل و15% بوليستر معاد تدويره.',
      weight: '480 جم/م² (ثقيل جداً)',
      lining: 'بطانة فرنسية (French Terry) دافئة بكثافة عالية + قبعة مبطنة بطبقتين من نفس النسيج',
      techniques: [
        'قبعة مزدوجة الطبقات بدون أربطة أو فتحات معدنية',
        'حاشية مضلعة سميكة عند الخصر والمعصم',
        'خياطة مسطحة متينة في نقاط الشد',
      ],
    },
    colorPalette: [
      {
        name: 'فحمي عميق',
        hex: '#171717',
        rationale: 'يحافظ على حدة الخطوط الخارجية ويبرز ثراء النسيج.',
      },
      {
        name: 'رمادي بارد',
        hex: '#DDE0E4',
        rationale: 'الدرجة التكميلية المعتمدة للتباين الهادئ.',
      },
    ],
    gallery: [winterHoodieCharcoalImg],
    supports360: false,
  },
  {
    id: 'project-leather-jacket',
    slug: 'minimalist-leather-jacket',
    title: 'جاكيت جلد طبيعي بقصة صندوقية',
    category: 'جاكيتات',
    subCategory: 'الجلديات المعاصرة',
    year: 'أرشيف الاستوديو', // TODO: أدخل سنة تنفيذ المشروع الحقيقية
    role: 'مصمم المنتج · اختبار الجلود والاكسسوارات المعدنية',
    summary:
      'جرّدت الجاكيت الجلدي الكلاسيكي من السحابات والجيوب الزائدة لأركّز على نقاء السطح الجلدي وقصته الصندوقية.',
    conceptAndProblem: {
      concept:
        'الابتعاد عن الطابع الصاخب لجاكيتات الدراجات النارية وتقديم بديل هادئ يجمع بين المتانة والبساطة.',
      problemSolved:
        'كثرة الأبازيم والياقات المثنية تثقل الجاكيت وتشتت العين. اكتفيت بسحاب أمامي مصقول وياقة قميص منظمة.',
    },
    inspiration:
      'استلهمت الاختصار البصري من السترات الميدانية في التسعينيات.',
    stages: [
      {
        step: '01',
        title: 'سكتش',
        description: 'ألغيت الجيوب المائلة والياقة العريضة لصالح خط أمامي نظيف.',
      },
      {
        step: '02',
        title: 'باترون',
        description: 'صمّمت طول الجاكيت لينتهي تماماً عند عظم الورك بقصة صندوقية متزنة.',
      },
      {
        step: '03',
        title: 'عينة',
        description: 'اختبرت جلد العجل المدبوغ نباتياً ومطابقة زوايا الياقة بعد القصّ.',
      },
      {
        step: '04',
        title: 'النتيجة النهائية',
        description: 'جاكيت جلد مطفي ببطانة قطنية وخياطة مزدوجة بخيوط نايلون مشمعة.',
      },
    ],
    materialsAndTech: {
      materials: '100% جلد عجل طبيعي مدبوغ نباتياً بتشطيب مطفي ناعم.',
      weight: 'سماكة جلد 1.1 – 1.2 مم',
      lining: 'بطانة قطنية ناعمة ومبطنة خفيفاً للراحة الحرارية',
      techniques: [
        'قصّ دقيق لأجزاء الياقة لضمان تطابق الزوايا',
        'خياطة مزدوجة بخيوط نايلون مشمعة عالية التحمل',
        'سحابات معدنية فضية مصقولة',
      ],
    },
    colorPalette: [
      {
        name: 'أسود مطفي',
        hex: '#171717',
        rationale: 'يمنح الجلد عمقاً هادئاً دون لمعان زائد.',
      },
      {
        name: 'رمادي معدني',
        hex: '#A9AEB4',
        rationale: 'لون السحابات المعدنية المصقولة.',
      },
    ],
    gallery: [winterLeatherJacketImg],
    supports360: false,
  },
  {
    id: 'project-merino-knit',
    slug: 'ribbed-merino-knit-study',
    title: 'كنزة صوف ميرينو محبوك',
    category: 'كنزات',
    subCategory: 'تطوير الحياكة الشتوية',
    year: 'أرشيف الاستوديو', // TODO: أدخل سنة تنفيذ المشروع الحقيقية
    role: 'مصمم التريكو والخامات',
    summary:
      'صمّمت هذه الكنزة بحياكة مضلعة عمودية من صوف الميرينو النقي لتتنفس وتحتفظ بشكلها بدون وبر أو تمدّد.',
    conceptAndProblem: {
      concept:
        'استكشاف قدرة الخيط الصوفي على تشكيل بنية مرنة تستجيب لحركة الجسم وتدوم.',
      problemSolved:
        'الكنزات الصوفية التقليدية قد تسبب حكة أو تتمدد عند الأكمام. استخدمت ميرينو 18.5 ميكرون مع تضليع متقارب يرتدّ لشكله.',
    },
    inspiration:
      'استوحيت الإيقاع العمودي من الأعمدة المعمارية وتدرجات الظل على الأنسجة الطبيعية.',
    stages: [
      {
        step: '01',
        title: 'سكتش',
        description: 'حدّدت اتساع التضليع العمودي ليبرز التباين بين الخطوط البارزة والغائرة.',
      },
      {
        step: '02',
        title: 'باترون',
        description: 'ضبطت ارتفاع الياقة شبه المرتفعة (Mock Neck) لراحة الرقبة تحت المعاطف.',
      },
      {
        step: '03',
        title: 'عينة',
        description: 'اختبرت تقنية الربط الحلقي عند الكتف لإزالة سماكة الدرزات الداخلية.',
      },
      {
        step: '04',
        title: 'النتيجة النهائية',
        description: 'كنزة خفيفة ودافئة بحياكة كاملة التشكيل ومقاومة للتوبر.',
      },
    ],
    materialsAndTech: {
      materials: '100% صوف ميرينو أسترالي فائق النعومة مضاد للتوبر.',
      weight: 'خيط 18.5 ميكرون · حياكة متوسطة الكثافة (7 Gauge)',
      lining: 'بدون بطانة · حياكة كاملة التشكيل بوصلات كتف ناعمة',
      techniques: [
        'حياكة مضلعة كاملة التشكيل (Fully Fashioned)',
        'تقنية الربط الحلقي عند الكتف لإزالة الخياطة البارزة',
      ],
    },
    colorPalette: [
      {
        name: 'رمادي أردوازي',
        hex: '#62666D',
        rationale: 'يُظهر التباين بين الخطوط البارزة والغائرة في التضليع.',
      },
      {
        name: 'بيج ناعم',
        hex: '#D5C5AF',
        rationale: 'خيار دافئ متناغم تحت المعاطف الشتوية.',
      },
    ],
    gallery: [winterKnitSweaterImg],
    supports360: false,
  },
  {
    id: 'project-graphic-tee',
    slug: 'architectural-graphic-tee',
    title: 'تيشيرت Graphic خطوط معمارية',
    category: 'تيشيرتات',
    subCategory: 'الجرافيك على القماش',
    year: 'أرشيف الاستوديو', // TODO: أدخل سنة تنفيذ المشروع الحقيقية
    role: 'مصمم الجرافيك والأزياء',
    summary:
      'ترجمت رسومات الخطوط الهندسية إلى طبعة حريرية دقيقة بأحبار مائية تتشربها الألياف دون أن تثقل القطن الأبيض.',
    conceptAndProblem: {
      concept:
        'توظيف الجرافيك كعنصر توازني لا كملصق صاخب؛ خطوط حبرية رفيعة تتحاور مع المساحة البيضاء.',
      problemSolved:
        'الطبعات البلاستيكية تمنع القماش من التنفس وتتشقق مع الغسيل. اعتمدت أحباراً مائية تندمج في ألياف القطن.',
    },
    inspiration:
      'استوحيت التكوين من الرسومات المعمارية الأولية بالحبر الأسود على ورق الكانسون.',
    stages: [
      {
        step: '01',
        title: 'سكتش',
        description: 'جرّبت تكوينات خطية متعددة لضبط نقطة الاتزان أعلى الصدر.',
      },
      {
        step: '02',
        title: 'باترون',
        description: 'ربطت موضع الطبعة بخط الكتف وطول الكم حتى لا تنكسر النسب عند الارتداء.',
      },
      {
        step: '03',
        title: 'عينة',
        description: 'عايرت سماكة الخط (0.8 مم) بالأحبار المائية على قماش 260 جم/م².',
      },
      {
        step: '04',
        title: 'النتيجة النهائية',
        description: 'طبعة ناعمة الملمس لا تشعر بوجودها باليد مع وضوح خطي دقيق.',
      },
    ],
    materialsAndTech: {
      materials: '100% قطن جيرسي ثقيل مطبوع بأحبار مائية صديقة للبيئة.',
      weight: '260 جم/م²',
      lining: 'بدون بطانة · معالجة تثبيت حراري للأحبار داخل النسيج',
      techniques: [
        'طباعة حريرية دقيقة بأحبار مائية غير بلاستيكية',
        'تثبيت حراري يضمن بقاء الخطوط بعد الغسيل المتكرر',
      ],
    },
    colorPalette: [
      {
        name: 'أبيض ثلجي',
        hex: '#F8F8F6',
        rationale: 'خلفية ورقية نقية لإبراز حدة الخطوط الهندسية.',
      },
      {
        name: 'أسود حبري',
        hex: '#171717',
        rationale: 'لون الخطوط المعمارية وتفاصيل الحافة.',
      },
    ],
    gallery: [tshirtGraphicWhiteImg],
    supports360: false,
  },
  {
    id: 'project-organic-basic-tee',
    slug: 'organic-palette-basic-tee',
    title: 'سلسلة التيشيرت الأساسي والألوان الترابية',
    category: 'تيشيرتات',
    subCategory: 'هندسة الأساسيات',
    year: 'أرشيف الاستوديو', // TODO: أدخل سنة تنفيذ المشروع الحقيقية
    role: 'مصمم المنتجات اليومية واللون',
    summary:
      'صمّمت سلسلة تيشيرتات أساسية بدرجات ترابية موحدة وحياكة مزدوجة لتكون طبقة أولى متناغمة مع مشاريع الشتاء.',
    conceptAndProblem: {
      concept:
        'إنشاء قاعدة لونية وقصّة معتدلة تربط بين القطع اليومية والمعاطف الشتوية بلغة واحدة.',
      problemSolved:
        'تلتوي الدرزات الجانبية في التيشيرتات العادية بعد الغسيل؛ اعتمدت حياكة مزدوجة (Interlock) تمنح استقامة دائمة.',
    },
    inspiration:
      'استوحيت الدرجات اللونية من الحجر الجيري والرمال والبازلت.',
    stages: [
      {
        step: '01',
        title: 'سكتش',
        description: 'حدّدت طول الذيل وانحناء الياقة لتبرز بنسب متزنة تحت الجاكيتات.',
      },
      {
        step: '02',
        title: 'باترون',
        description: 'ضبطت اتساع الخصر المستقيم لمنع الالتفاف أثناء الحركة.',
      },
      {
        step: '03',
        title: 'عينة',
        description: 'اختبرت تناسق الصباغة البيئية بين البيج والرمادي تحت الإضاءة الطبيعية.',
      },
      {
        step: '04',
        title: 'النتيجة النهائية',
        description: 'قطعة يومية ناعمة بملمس بارد وحياكة مزدوجة متماسكة.',
      },
    ],
    materialsAndTech: {
      materials: '100% قطن عضوي مزدوج الحياكة (Interlock).',
      weight: '240 جم/م²',
      lining: 'بدون بطانة · نسيج مزدوج الوجه متماسك',
      techniques: [
        'حياكة مزدوجة تمنع التواء الدرزات الجانبية',
        'صباغة بيئية بتركيز لوني هادئ',
      ],
    },
    colorPalette: [
      {
        name: 'بيج دافئ',
        hex: '#D5C5AF',
        rationale: 'الدرجة الترابية الأساسية في هوية الاستوديو.',
      },
      {
        name: 'رمادي بارد',
        hex: '#DDE0E4',
        rationale: 'درجة متوازنة للجمع مع القطع الداكنة.',
      },
      {
        name: 'أسود فحمي',
        hex: '#171717',
        rationale: 'أساس داكن ثابت في كل المواسم.',
      },
    ],
    gallery: [tshirtOversizedBeigeImg, tshirtOversizedBlackImg],
    supports360: false,
  },
];
