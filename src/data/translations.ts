export interface CoreService {
  id: string;
  icon: string;
  title: string;
  description: string;
  details: string[];
  keywords: string[];
  slug: string;
}

export interface SecondaryService {
  title: string;
  desc: string;
}

export interface Translation {
  langCode: 'en' | 'ms' | 'zh';
  meta: {
    title: string;
    description: string;
    keywords: string;
  };
  nav: {
    services: string;
    secondary: string;
    about: string;
    gallery: string;
    contact: string;
    callNow: string;
  };
  hero: {
    badge: string;
    titleHtml: string;
    subtitle: string;
    ctaWhatsApp: string;
    ctaCall: string;
    satisfactionGuarantee: string;
  };
  core4: {
    title: string;
    subtitle: string;
    services: CoreService[];
  };
  secondary: {
    title: string;
    subtitle: string;
    list: SecondaryService[];
  };
  whyUs: {
    title: string;
    subtitle: string;
    items: {
      title: string;
      desc: string;
      icon: string;
    }[];
  };
  gallery: {
    title: string;
    subtitle: string;
    beforeLabel: string;
    afterLabel: string;
    categories: Record<string, string>;
  };
  videoSection: {
    title: string;
    subtitle: string;
    watchButton: string;
  };
  contact: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    phone: string;
    service: string;
    servicePlaceholder: string;
    message: string;
    submit: string;
    success: string;
    sending: string;
    infoTitle: string;
    infoDesc: string;
    address: string;
    addressVal: string;
    phoneLabel: string;
    phoneVal: string;
    emailLabel: string;
    emailVal: string;
    hoursLabel: string;
    hoursVal: string;
  };
  whatsappMsg: {
    general: string;
    roof: string;
    plumbing: string;
    electrical: string;
    handyman: string;
  };
  footer: {
    about: string;
    quickLinks: string;
    services: string;
    coverage: string;
    coverageAreas: string;
    rights: string;
  };
}

export const translations: Record<'en' | 'ms' | 'zh', Translation> = {
  en: {
    langCode: 'en',
    meta: {
      title: 'JGR Civil Works | Roof Leak Repair & Plumber KL Selangor',
      description: 'JGR Civil Works offers professional roof leak repair, plumbing services, electrical wiring & handyman services in Kuala Lumpur & Selangor. 100% Reliable.',
      keywords: 'roof leak repair Kuala Lumpur, plumber Selangor, electrical wiring contractor, local handyman services, JGR Civil Works, waterproofing specialist Klang Valley',
    },
    nav: {
      services: 'Core Services',
      secondary: 'Secondary Services',
      about: 'Why JGR',
      gallery: 'Our Work',
      contact: 'Contact Us',
      callNow: 'Call Us Now',
    },
    hero: {
      badge: '★ Trusted Local Civil Works & Contractor Services',
      titleHtml: 'Professional Home & Building <span class="text-accent-gradient">Maintenance Specialist</span>',
      subtitle: 'Expert roof leak repair, plumbing, electrical wiring, and handyman services in Kuala Lumpur and Selangor. Certified contractors, upfront pricing, and guaranteed durability.',
      ctaWhatsApp: 'WhatsApp for Free Quote',
      ctaCall: 'Call Now: +60 12-345 6789',
      satisfactionGuarantee: '✓ Certified Contractors • Upfront Pricing • 100% Service Guarantee',
    },
    core4: {
      title: 'Our Core 4 Services',
      subtitle: 'Premium property maintenance and contracting services engineered for lasting reliability.',
      services: [
        {
          id: 'roofing',
          icon: 'house-leak',
          title: 'Rooftop & Water Leaking Repair',
          description: 'High-performance waterproofing and structural roof repairs designed to stop leakage permanently.',
          details: [
            'Concrete roof slab waterproofing & PU injection grouting',
            'Roof tile replacement, metal roof repair & flashing fixes',
            'Gutters repair, cleaning & rainwater downpipe installations',
            'Residential and commercial roof waterproofing systems',
          ],
          keywords: ['roof leak repair KL', 'waterproofing specialist Selangor', 'concrete roof leaking repair', 'roof repair contractor Malaysia'],
          slug: 'roof-leak-repair',
        },
        {
          id: 'plumbing',
          icon: 'droplet',
          title: 'Plumbing Services',
          description: 'Comprehensive plumbing solutions from emergency pipe repair to complete water system setups.',
          details: [
            'Burst pipe detection, water leakage repairs & bypass piping',
            'Water tank replacement, cleaning & pressure pump installation',
            'Sewer line clearing, clogged sink & toilet pipe unclogging',
            'Sanitary fixtures, toilet bowls & water heater installation',
          ],
          keywords: ['emergency plumber Selangor', 'pipe leakage repair KL', 'water tank replacement Malaysia', 'clogged toilet plumber'],
          slug: 'plumbing-services',
        },
        {
          id: 'electrical',
          icon: 'bolt',
          title: 'Electrical Wiring',
          description: 'Safe, certified electrical installations, diagnostics, and repairs by registered wiremen.',
          details: [
            'Single-phase & three-phase house rewiring services',
            'Short circuit troubleshooting & DB box upgrades',
            'Lighting, ceiling fans, aircon power point installations',
            'Electrical safety inspection & earthing system diagnostics',
          ],
          keywords: ['electrical wiring contractor KL', 'home rewiring Selangor', 'short circuit repair Malaysia', 'electrician service Kuala Lumpur'],
          slug: 'electrical-wiring',
        },
        {
          id: 'handyman',
          icon: 'wrench',
          title: 'Handyman Services',
          description: 'Versatile, high-quality home and office repair services for minor and major maintenance needs.',
          details: [
            'Door repair, lock replacement & sliding door alignments',
            'Drywall/plasterboard patching, wall damage & ceiling repair',
            'TV bracket mounting, shelving & furniture assembly',
            'General carpentry repairs & custom hanging fittings',
          ],
          keywords: ['professional handyman Selangor', 'home repair contractor KL', 'door lock repair service', 'general handyman Klang Valley'],
          slug: 'handyman-services',
        },
      ],
    },
    secondary: {
      title: 'Secondary Services Catalog',
      subtitle: 'Complete construction and renovation services to keep your property in pristine condition.',
      list: [
        { title: 'Custom Cabinets', desc: 'Custom kitchen cabinet design, installation, wardrobe repair, and shelving solutions.' },
        { title: 'Concrete Table Top', desc: 'Heavy-duty concrete kitchen table tops finished with tiles or quartz overlay.' },
        { title: 'House Refurbishment', desc: 'Full-scale home extension, office renovation, plaster ceiling, and structural modifications.' },
        { title: 'Painting Services', desc: 'Premium interior and exterior wall painting, waterproofing paint coatings, and wood varnishing.' },
        { title: 'Tiling Works', desc: 'Expert floor and wall tile tiling for kitchens, bathrooms, car porches, and living spaces.' },
      ],
    },
    whyUs: {
      title: 'Why Property Owners Trust JGR',
      subtitle: 'We set the standard for civil works and contracting through safety, speed, and integrity.',
      items: [
        {
          title: 'Licensed & Fully Insured',
          desc: 'Rest easy knowing our operations are backed by public liability insurance and certified professionals.',
          icon: 'shield-check',
        },
        {
          title: '10+ Years of Local Service',
          desc: 'Serving homeowners and business owners across Kuala Lumpur and Selangor with decade-long expertise.',
          icon: 'award',
        },
        {
          title: 'Transparent Written Quotes',
          desc: 'No hidden charges. We provide upfront breakdowns before any hammer hits a nail or wiring begins.',
          icon: 'file-text',
        },
        {
          title: 'Fast Response & Support',
          desc: 'Quick emergency team dispatches for pipe leaks, roof collapse risks, and electrical failures.',
          icon: 'clock',
        },
      ],
    },
    gallery: {
      title: 'Before & After Showcases',
      subtitle: 'Real proof of JGR engineering excellence. Browse our recently completed contractor projects.',
      beforeLabel: 'Before',
      afterLabel: 'After',
      categories: {
        all: 'All Projects',
        roofing: 'Roof & Waterproofing',
        plumbing: 'Plumbing Works',
        electrical: 'Electrical & DB Upgrade',
        handyman: 'Renovations & Tiling',
      },
    },
    videoSection: {
      title: 'Watch JGR in Action',
      subtitle: 'View live videos of our specialists diagnosing, repairing, and delivering civil works projects.',
      watchButton: 'Watch on YouTube',
    },
    contact: {
      title: 'Get Your Free Quote Today',
      subtitle: 'Contact our local specialists for inspections, immediate emergency repair, or project quotes.',
      name: 'Full Name',
      email: 'Email Address',
      phone: 'Phone Number',
      service: 'Required Service',
      servicePlaceholder: '-- Choose a service --',
      message: 'Briefly describe your issue or project needs',
      submit: 'Request Free Consultation',
      success: 'Thank you! Your request has been sent. We will contact you shortly.',
      sending: 'Sending...',
      infoTitle: 'JGR Civil Works Headquarters',
      infoDesc: 'Get in touch directly via telephone, WhatsApp, or email. We service the entire Klang Valley region.',
      address: 'Office Address',
      addressVal: '15, Jalan Industry 2/3, Taman Perindustrian Kepong, 52100 Kuala Lumpur, Selangor, Malaysia',
      phoneLabel: 'Emergency Phone Line',
      phoneVal: '+60 12-345 6789',
      emailLabel: 'General Inquiries Email',
      emailVal: 'contact@jgrcivilworks.com',
      hoursLabel: 'Business Hours',
      hoursVal: 'Mon - Sat: 8:00 AM - 6:00 PM (Emergency Line: 24/7)',
    },
    whatsappMsg: {
      general: 'Hello JGR Civil Works, I would like to get a quote for contractor services.',
      roof: 'Hello JGR Civil Works, I need a inspection/quote for roof leaking / waterproofing services.',
      plumbing: 'Hello JGR Civil Works, I need emergency plumbing / pipe leakage repair services.',
      electrical: 'Hello JGR Civil Works, I need an electrician / electrical wiring services.',
      handyman: 'Hello JGR Civil Works, I need professional handyman / repair services.',
    },
    footer: {
      about: 'JGR Civil Works is a leading civil works contractor providing reliable roof repair, plumbing, electrical, and renovation services across Kuala Lumpur & Selangor.',
      quickLinks: 'Quick Links',
      services: 'Our Services',
      coverage: 'Service Coverage',
      coverageAreas: 'Kuala Lumpur • Petaling Jaya • Subang Jaya • Shah Alam • Cheras • Ampang • Puchong • Klang • Rawang • Kepong',
      rights: 'All rights reserved.',
    },
  },
  ms: {
    langCode: 'ms',
    meta: {
      title: 'JGR Civil Works | Baiki Bumbung Bocor & Tukang Paip KL Selangor',
      description: 'JGR Civil Works menawarkan servis profesional membaiki bumbung bocor, perkhidmatan paip, wiring elektrik & servis handyman di Kuala Lumpur & Selangor.',
      keywords: 'kontraktor bumbung bocor, pakar waterproofing Selangor, baiki paip bocor KL, pendawaian elektrik rumah, tukang paip Kuala Lumpur, JGR Civil Works',
    },
    nav: {
      services: 'Perkhidmatan Utama',
      secondary: 'Perkhidmatan Lain',
      about: 'Kenapa Kami',
      gallery: 'Hasil Kerja',
      contact: 'Hubungi Kami',
      callNow: 'Hubungi Sekarang',
    },
    hero: {
      badge: '★ Kontraktor & Perkhidmatan Kerja Awam Tempatan Dipercayai',
      titleHtml: 'Pakar <span class="text-accent-gradient">Penyelenggaraan Bangunan</span> & Rumah Profesional',
      subtitle: 'Pakar membaiki atap bumbung bocor, sistem paip air, wiring elektrik, dan perkhidmatan handyman di Kuala Lumpur & Selangor. Kontraktor bertauliah, harga telus, jaminan ketahanan.',
      ctaWhatsApp: 'WhatsApp untuk Sebut Harga Percuma',
      ctaCall: 'Telefon Sekarang: +60 12-345 6789',
      satisfactionGuarantee: '✓ Kontraktor Bertauliah • Harga Telus • Jaminan Servis 100%',
    },
    core4: {
      title: '4 Perkhidmatan Teras Kami',
      subtitle: 'Penyelenggaraan hartanah premium dan perkhidmatan kontraktor yang direka untuk kebolehpercayaan jangka panjang.',
      services: [
        {
          id: 'roofing',
          icon: 'house-leak',
          title: 'Baiki Bumbung & Kebocoran Air',
          description: 'Penyelesaian kalis air (waterproofing) berprestasi tinggi dan pembaikan bumbung untuk menghentikan kebocoran selama-lamanya.',
          details: [
            'Waterproofing slab konkrit & grouting suntikan PU',
            'Penukaran jubin bumbung, pembaikan atap zink & bumbung logam',
            'Membaiki, membersih salur air (gutter) & pemasangan paip turun hujan',
            'Sistem kalis air bumbung kediaman dan komersial',
          ],
          keywords: ['kontraktor bumbung bocor KL', 'pakar waterproofing Selangor', 'baiki atap bocor rumah', 'kalis air slab konkrit'],
          slug: 'roof-leak-repair',
        },
        {
          id: 'plumbing',
          icon: 'droplet',
          title: 'Perkhidmatan Paip (Plumbing)',
          description: 'Servis paip lengkap daripada pembaikan kebocoran kecemasan sehingga pemasangan sistem air baru.',
          details: [
            'Kesan paip pecah, membaiki paip bocor & laluan pintas paip (bypass)',
            'Pemasangan tangki air baru, pembersihan tangki & pam air tekanan',
            'Pembersihan saluran kumbahan, sinki & tandas tersumbat',
            'Pemasangan perkakasan sanitari, mangkuk tandas & water heater',
          ],
          keywords: ['tukang paip Kuala Lumpur', 'baiki paip bocor Selangor', 'tukar tangki air rumah', 'servis paip tersumbat KL'],
          slug: 'plumbing-services',
        },
        {
          id: 'electrical',
          icon: 'bolt',
          title: 'Pendawaian Elektrik (Wiring)',
          description: 'Pemasangan elektrik yang selamat, pemeriksaan litar, dan pembaikan oleh wireman berdaftar.',
          details: [
            'Pendawaian semula rumah (rewiring) 1-fasa & 3-fasa',
            'Penyelesaian masalah litar pintas & naik taraf kotak DB',
            'Pemasangan lampu, kipas syiling, dan point elektrik penghawa dingin',
            'Pemeriksaan keselamatan elektrikal & sistem bumi (earthing)',
          ],
          keywords: ['kontraktor pendawaian elektrik KL', 'wiring rumah Selangor', 'baiki litar pintas murah', 'tukang elektrik Kuala Lumpur'],
          slug: 'electrical-wiring',
        },
        {
          id: 'handyman',
          icon: 'wrench',
          title: 'Perkhidmatan Handyman',
          description: 'Pembaikan rumah dan pejabat yang serba boleh dan berkualiti tinggi untuk semua jenis keperluan penyelenggaraan.',
          details: [
            'Membaiki pintu, menukar tombol pintu & melaraskan sliding door',
            'Menampal dinding plasterboard pecah, kerosakan siling & drywall',
            'Pemasangan bracket TV, rak dinding & pemasangan perabot',
            'Kerja-kerja pertukangan kayu kecil & pemasangan gantung custom',
          ],
          keywords: ['perkhidmatan handyman Selangor', 'tukang baiki pintu rumah', 'servis tukar tombol pintu', 'kontraktor kecil Lembah Klang'],
          slug: 'handyman-services',
        },
      ],
    },
    secondary: {
      title: 'Katalog Perkhidmatan Tambahan',
      subtitle: 'Perkhidmatan pembinaan dan ubah suai lengkap untuk mengekalkan keindahan hartanah anda.',
      list: [
        { title: 'Kabinet Custom', desc: 'Reka bentuk kabinet dapur, pemasangan almari pakaian, pembaikan rak dan kabinet.' },
        { title: 'Table Top Konkrit', desc: 'Pembinaan table top dapur konkrit tahan lasak dengan kemasan jubin atau kuarza.' },
        { title: 'Ubah Suai Rumah (Refurbished)', desc: 'Penyambungan rumah, renovasi pejabat, siling kapur, dan ubah suai struktur.' },
        { title: 'Perkhidmatan Mengecat', desc: 'Mengecat dinding dalaman & luaran premium, salutan cat kalis air, dan varnis kayu.' },
        { title: 'Kerja Pemasangan Jubin (Tiling)', desc: 'Pemasangan jubin lantai dan dinding untuk dapur, bilik mandi, anjung kereta, dan ruang tamu.' },
      ],
    },
    whyUs: {
      title: 'Kenapa Pemilik Hartanah Memilih JGR',
      subtitle: 'Kami menetapkan piawaian tinggi menerusi keselamatan, kepantasan kerja, dan integriti profesional.',
      items: [
        {
          title: 'Berlesen & Berinsurans',
          desc: 'Operasi kami dilindungi oleh insurans liabiliti awam dan dikendalikan oleh pekerja mahir bertauliah.',
          icon: 'shield-check',
        },
        {
          title: '10+ Tahun Pengalaman Tempatan',
          desc: 'Berpengalaman luas dalam membantu pemilik rumah dan premis perniagaan di Kuala Lumpur & Selangor.',
          icon: 'award',
        },
        {
          title: 'Sebut Harga Bertulis yang Telus',
          desc: 'Tiada kos tersembunyi. Kami berikan pecahan kos penuh sebelum memulakan sebarang kerja.',
          icon: 'file-text',
        },
        {
          title: 'Respons & Tindakan Cepat',
          desc: 'Pasukan kecemasan bersedia digerakkan segera untuk kebocoran paip kritikal, kerosakan elektrik, dan bumbung runtuh.',
          icon: 'clock',
        },
      ],
    },
    gallery: {
      title: 'Galeri Sebelum & Selepas',
      subtitle: 'Bukti nyata hasil kerja berkualiti tinggi kami. Lihat projek-projek yang telah kami selesaikan.',
      beforeLabel: 'Sebelum',
      afterLabel: 'Selepas',
      categories: {
        all: 'Semua Projek',
        roofing: 'Bumbung & Kalis Air',
        plumbing: 'Kerja Perpaipan',
        electrical: 'Elektrikal & DB Box',
        handyman: 'Renovasi & Jubin',
      },
    },
    videoSection: {
      title: 'Tonton Kerja JGR',
      subtitle: 'Lihat video secara langsung tentang bagaimana pakar kami mendiagnosis, membaiki, dan menyelesaikan projek kontraktor.',
      watchButton: 'Tonton di YouTube',
    },
    contact: {
      title: 'Dapatkan Sebut Harga Percuma',
      subtitle: 'Hubungi pakar tempatan kami sekarang untuk khidmat pemeriksaan, pembaikan kecemasan, atau sebut harga projek.',
      name: 'Nama Penuh',
      email: 'Alamat Emel',
      phone: 'Nombor Telefon',
      service: 'Perkhidmatan Diperlukan',
      servicePlaceholder: '-- Pilih Perkhidmatan --',
      message: 'Terangkan secara ringkas masalah atau projek anda',
      submit: 'Hantar Sesi Rundingan Percuma',
      success: 'Terima kasih! Permintaan anda telah diterima. Kami akan menghubungi anda sebentar lagi.',
      sending: 'Menghantar...',
      infoTitle: 'Ibu Pejabat JGR Civil Works',
      infoDesc: 'Hubungi kami secara terus melalui panggilan telefon, WhatsApp, atau emel. Liputan di seluruh Lembah Klang.',
      address: 'Alamat Pejabat',
      addressVal: '15, Jalan Industry 2/3, Taman Perindustrian Kepong, 52100 Kuala Lumpur, Selangor, Malaysia',
      phoneLabel: 'Talian Kecemasan',
      phoneVal: '+60 12-345 6789',
      emailLabel: 'Emel Pertanyaan Umum',
      emailVal: 'contact@jgrcivilworks.com',
      hoursLabel: 'Waktu Operasi',
      hoursVal: 'Isn - Sab: 8:00 PG - 6:00 PTG (Talian Kecemasan: 24/7)',
    },
    whatsappMsg: {
      general: 'Hello JGR Civil Works, saya ingin dapatkan sebut harga untuk perkhidmatan kontraktor.',
      roof: 'Hello JGR Civil Works, saya perlukan pemeriksaan/sebut harga untuk masalah bumbung bocor / waterproofing.',
      plumbing: 'Hello JGR Civil Works, saya memerlukan perkhidmatan paip kecemasan / baiki paip bocor.',
      electrical: 'Hello JGR Civil Works, saya perlukan khidmat wiring elektrik / tukang elektrik.',
      handyman: 'Hello JGR Civil Works, saya perlukan servis handyman profesional / baiki barang rumah.',
    },
    footer: {
      about: 'JGR Civil Works adalah kontraktor kerja awam terkemuka yang menyediakan pembaikan bumbung, perpaipan, elektrikal, dan kerja renovasi rumah yang dipercayai di Kuala Lumpur & Selangor.',
      quickLinks: 'Pautan Pintas',
      services: 'Perkhidmatan Kami',
      coverage: 'Kawasan Liputan',
      coverageAreas: 'Kuala Lumpur • Petaling Jaya • Subang Jaya • Shah Alam • Cheras • Ampang • Puchong • Klang • Rawang • Kepong',
      rights: 'Hak cipta terpelihara.',
    },
  },
  zh: {
    langCode: 'zh',
    meta: {
      title: 'JGR Civil Works | 吉隆坡雪兰莪屋顶防漏工程与专业水喉匠',
      description: 'JGR Civil Works 提供吉隆坡与雪兰莪区的专业屋顶防漏维修、水喉管道服务、电线布线和家居杂工服务。十年老字号，收费透明，安全可靠。',
      keywords: '屋顶漏水维修 KL, 专业屋顶防水雪兰莪, 水喉匠 Kuala Lumpur, 水管漏水维修, 电工接线服务, 家居维修承包商, JGR Civil Works',
    },
    nav: {
      services: '核心服务',
      secondary: '其他增值服务',
      about: '品牌优势',
      gallery: '工程案例',
      contact: '联系我们',
      callNow: '立即拨打',
    },
    hero: {
      badge: '★ 本地信赖的建筑工程与房屋维修承包商',
      titleHtml: '专业房屋与建筑 <span class="text-accent-gradient">维护工程专科</span>',
      subtitle: '精修吉隆坡与雪兰莪区的屋顶漏水、水喉水管、电线布线和家居杂工。资深技工上门，报价公开透明，工程长效保固。',
      ctaWhatsApp: '获取免费微信/WhatsApp报价',
      ctaCall: '拨打热线: +60 12-345 6789',
      satisfactionGuarantee: '✓ 资深持牌技工 • 收费合理透明 • 100% 服务质量保证',
    },
    core4: {
      title: '四大核心服务',
      subtitle: '高标准房屋维护与修缮工程，为您的物业保驾护航。',
      services: [
        {
          id: 'roofing',
          icon: 'house-leak',
          title: '屋顶与漏水维修',
          description: '高品质防水材料与专业施工技术，彻底解决屋顶、天台与外墙漏水难题。',
          details: [
            '混凝土天台（Slab）防水层铺设与 PU 灌浆高压注胶',
            '瓦片更换、铁皮屋顶修补、屋脊防漏修缮',
            '天沟（Gutter）清理与维修、雨水下水管安装更换',
            '住宅与商业大楼屋顶整体防水工程',
          ],
          keywords: ['屋顶漏水维修 KL', '屋顶防水专科雪兰莪', '天台漏水修补', '铁皮屋顶漏水维修'],
          slug: 'roof-leak-repair',
        },
        {
          id: 'plumbing',
          icon: 'droplet',
          title: '水喉与管道服务',
          description: '全方位水喉工程，包括水管破裂紧急维修、供水系统升级及管道疏通。',
          details: [
            '暗管漏水检测、爆裂水管修复与水管改道（Bypass）',
            '家庭蓄水箱更换与清洗、加压水泵安装维护',
            '下水道高压疏通、马桶及洗手盆堵塞清理',
            '卫浴洁具、座便器、电/煤气热水器安装与更换',
          ],
          keywords: ['吉隆坡专业水喉匠', '雪兰莪水管漏水维修', '更换蓄水箱', '疏通马桶堵塞 KL'],
          slug: 'plumbing-services',
        },
        {
          id: 'electrical',
          icon: 'bolt',
          title: '电线布线与电气工程',
          description: '由持牌电工操刀，提供安全规范的住宅电线铺设、故障排查与电箱升级。',
          details: [
            '单相（Single Phase）与三相（Three Phase）全屋电线重拉',
            '电路跳闸短路排查、电插座故障与配电箱（DB Box）升级',
            '灯具、吊扇、热水器及冷气机专属电源插座安装',
            '电气安全检测与避雷接地线（Earthing）系统检查',
          ],
          keywords: ['专业电工布线 KL', '房屋电线重拉雪兰莪', '电路短路维修', '配电箱安装故障'],
          slug: 'electrical-wiring',
        },
        {
          id: 'handyman',
          icon: 'wrench',
          title: '专业家居杂工服务',
          description: '快捷可靠的室内外维护与零星修缮，一站式解决您的家居日常烦恼。',
          details: [
            '门窗破损维修、门锁及插销更换、玻璃拉门轨道校正',
            '石膏板吊顶修补、墙壁裂缝刮腻子刷漆、天花板修补',
            '壁挂电视支架安装、五金挂件及定制家具组装',
            '小规模木工修补与各类日常杂碎维修',
          ],
          keywords: ['雪兰莪家居杂工服务', '吉隆坡房屋微修承包商', '更换门锁师傅', '巴生谷日常家居维修'],
          slug: 'handyman-services',
        },
      ],
    },
    secondary: {
      title: '其他增值服务清单',
      subtitle: '提供全面的室内翻新与装修配套，一次性满足您的全部工程需求。',
      list: [
        { title: '定制橱柜', desc: '厨房系统橱柜设计与安装、衣柜五金件更换维修、储物架安装。' },
        { title: '混凝土灶台 (Table Top)', desc: '定制现浇混凝土厨房灶台，表面铺贴优质瓷砖或石英石台面。' },
        { title: '整屋翻新工程 (Refurbished)', desc: '住宅加建扩建、办公室隔间装潢、石膏天花板及室内格局重塑。' },
        { title: '油漆粉刷服务', desc: '内外墙高级乳胶漆粉刷、外墙防水功能涂料防霉施工、木器漆抛光。' },
        { title: '瓷砖铺贴工程 (Tiling)', desc: '专业地砖与墙砖铺贴，适用于厨房、浴室、车库地面及客厅防滑砖。' },
      ],
    },
    whyUs: {
      title: '为什么业主选择 JGR',
      subtitle: '我们以安全规范、高效率施工和诚信价格，成为本地用户的首选服务商。',
      items: [
        {
          title: '持牌资质与全面保险',
          desc: '所有项目施工均配备公共责任保险，由经验丰富的认证专业技工操作。',
          icon: 'shield-check',
        },
        {
          title: '巴生谷十年老字号',
          desc: '长期深耕吉隆坡及雪兰莪各大社区，积累了丰富的各类老旧房屋维修经验。',
          icon: 'award',
        },
        {
          title: '公开透明的书面报价',
          desc: '坚决杜绝乱收费。施工前提供明细表，双方确认后再动工，无隐形加价。',
          icon: 'file-text',
        },
        {
          title: '紧急故障快速响应',
          desc: '针对水管爆裂、停电跳闸及屋顶暴雨漏水等紧急情况，特设快速出车通道。',
          icon: 'clock',
        },
      ],
    },
    gallery: {
      title: '施工前后实景对比',
      subtitle: '用工程品质说话。展示 JGR Civil Works 近期在各社区完工的真实项目案例。',
      beforeLabel: '施工前 (Before)',
      afterLabel: '施工后 (After)',
      categories: {
        all: '全部案例',
        roofing: '屋顶防漏/防水',
        plumbing: '水喉管道工程',
        electrical: '电工与配电箱升级',
        handyman: '精装翻新与地砖',
      },
    },
    videoSection: {
      title: '施工现场直击',
      subtitle: '观看我们的师傅在工程现场检测、施工与交付的高清实录，见证专业品质。',
      watchButton: '在 YouTube 频道观看',
    },
    contact: {
      title: '立即获取免费报价',
      subtitle: '联系我们的本地专员，安排上门勘察检测、获取紧急维修支持或装修工程报价。',
      name: '您的姓名',
      email: '电子邮箱',
      phone: '联系电话',
      service: '所需服务',
      servicePlaceholder: '-- 请选择服务项目 --',
      message: '简单描述您遇到的问题或工程要求',
      submit: '提交免费咨询申请',
      success: '谢谢！您的申请已成功提交，我们的专员会尽快与您联系。',
      sending: '提交中...',
      infoTitle: 'JGR Civil Works 总部办公室',
      infoDesc: '欢迎通过电话、WhatsApp 或电子邮件直接联系我们。我们的服务覆盖整个巴生谷。',
      address: '公司地址',
      addressVal: '15, Jalan Industry 2/3, Taman Perindustrian Kepong, 52100 Kuala Lumpur, Selangor, Malaysia',
      phoneLabel: '24小时紧急报修热线',
      phoneVal: '+60 12-345 6789',
      emailLabel: '业务咨询邮箱',
      emailVal: 'contact@jgrcivilworks.com',
      hoursLabel: '工作时间',
      hoursVal: '周一至周六: 早上 8:00 - 下午 6:00 (紧急热线: 24/7)',
    },
    whatsappMsg: {
      general: '您好 JGR Civil Works，我想咨询有关建筑与维护工程的报价。',
      roof: '您好 JGR Civil Works，我需要安排屋顶漏水检测/防漏防水工程上门估价。',
      plumbing: '您好 JGR Civil Works，我需要紧急水喉维修/暗管漏水修复服务。',
      electrical: '您好 JGR Civil Works，我需要安排电工师傅上门检修/电线布线服务。',
      handyman: '您好 JGR Civil Works，我需要专业杂工师傅上门提供房屋微修服务。',
    },
    footer: {
      about: 'JGR Civil Works 是巴生谷领先的民用建筑承包商，致力于为吉隆坡与雪兰莪用户提供高标准、安全可靠的屋顶漏水修缮、水管道、电气工程及整屋翻新服务。',
      quickLinks: '快捷链接',
      services: '核心服务目录',
      coverage: '服务区域范围',
      coverageAreas: '吉隆坡 • 八打灵再也 • 梳邦再也 • 莎阿南 • 蕉赖 • 安邦 • 蒲种 • 巴生 • 万挠 • 甲洞',
      rights: '保留所有权利。',
    },
  },
};
