export interface ServiceMeta {
  title: string;
  description: string;
  keywords: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface CoreService {
  id: string;
  icon: string;
  title: string;
  description: string;
  details: string[];
  keywords: string[];
  slug: string;
  meta: ServiceMeta;
  intro: string;
  faqs: FAQItem[];
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
  servicePage: {
    viewAllServices: string;
    getQuoteBtn: string;
    faqSectionTitle: string;
    whyChooseTitle: string;
    backToHome: string;
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
          meta: {
            title: 'Professional Roof Leak Repair & Waterproofing KL Selangor | JGR',
            description: 'Permanent roof leak repair & waterproofing services in Kuala Lumpur & Selangor. We handle slab grouting, tile replacement & metal roof leaks.',
            keywords: 'roof leak repair Kuala Lumpur, waterproofing specialist Selangor, concrete slab leaking, roof repair contractor Malaysia, fix roof leak Klang Valley'
          },
          intro: 'Rainwater leaks can compromise structural integrity and trigger dangerous mold growth. JGR Civil Works provides heavy-duty, long-term waterproofing solutions tailored to Malaysia’s heavy tropical downpours. From concrete roof slab PU grouting to corrugated zinc roof repairs, our team uses premium materials and advanced sealing processes to secure your premises permanently.',
          faqs: [
            {
              question: 'How do I know if my roof leak is structural or minor?',
              answer: 'Minor leaks typically stem from broken roof tiles, damaged flashing, or clogged gutters. Structural leaks manifest as wet patches on concrete ceiling slabs, which require specialized injection grouting. JGR performs full thermal inspection before applying any sealant.'
            },
            {
              question: 'What is PU injection grouting and why is it effective?',
              answer: 'Polyurethane (PU) injection grouting is a technique where pressurized polyurethane resin is injected directly into concrete cracks. When the resin contacts water, it expands rapidly to form a dense, flexible rubber seal that blocks leaks from the inside out.'
            },
            {
              question: 'Do you offer warranties on waterproofing works?',
              answer: 'Yes! JGR Civil Works provides a written warranty on all our roof repair and waterproofing works, ranging from 1 to 5 years depending on the waterproofing system chosen.'
            }
          ]
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
          meta: {
            title: 'Professional Plumbing Services & Pipe Leak Repair KL Selangor | JGR',
            description: 'Need an emergency plumber in KL or Selangor? JGR Civil Works fixes burst pipes, replaces water tanks, unclogs drains, and installs water heaters.',
            keywords: 'emergency plumber Selangor, pipe leakage repair Kuala Lumpur, water tank replacement Malaysia, clogged toilet plumber, water pump installation'
          },
          intro: 'Plumbing disruptions require swift, expert solutions. JGR Civil Works offers complete commercial and residential plumbing services across Kuala Lumpur and Selangor. We deploy advanced leak detection devices to pinpoint and fix hidden pipe leaks, replace rusted overhead water tanks, clear deep sewer line clogs, and install new sanitary fixtures with professional grade workmanship.',
          faqs: [
            {
              question: 'What should I do if a water pipe bursts in my home?',
              answer: 'First, locate your main gate valve and turn it off clockwise immediately to stop incoming water. Then, turn off your electrical mains if water is near DB boxes, and call JGR’s 24/7 emergency dispatch line.'
            },
            {
              question: 'How do you locate water leaks hidden behind walls?',
              answer: 'We use acoustic leak detectors and moisture meters to locate hidden leaks without tearing down your walls. This saves you significant restoration costs.'
            },
            {
              question: 'When should I replace my roof water tank?',
              answer: 'If you have an old metal tank, rust will contaminate your drinking water. Fiberglass or poly tanks can crack over time. If your tank shows signs of structural warping or rust stains, it is time for a modern stainless steel replacement.'
            }
          ]
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
          meta: {
            title: 'Certified Electrical Wiring Contractor KL Selangor | JGR Civil Works',
            description: 'Professional electrical wiring, short circuit repair, DB box upgrades, and lighting installations in KL & Selangor. Safe, certified electricians.',
            keywords: 'electrical wiring contractor KL, home rewiring Selangor, short circuit repair Malaysia, certified electrician Kuala Lumpur, DB box upgrade'
          },
          intro: 'Faulty wiring is one of the leading causes of building fires. JGR Civil Works provides safe, certified electrical solutions adhering to Energy Commission (Suruhanjaya Tenaga) safety standards. Our electrical technicians diagnose complex short circuits, upgrade distribution boards (DB Box), execute complete property rewiring projects, and safely install high-load electrical fittings like aircon points and water heaters.',
          faqs: [
            {
              question: 'Why does my electrical DB board keep tripping?',
              answer: 'Frequent trips are caused by overloaded circuits, short circuits in old wiring, or faulty appliances leaking electricity. Our wiremen use insulation resistance testers to isolate and resolve the issue quickly.'
            },
            {
              question: 'How often should a house be rewired?',
              answer: 'Residential electrical wiring typically lasts 20 to 30 years. If your home has old black rubber cables, flickering lights, or burnt sockets, a full or partial rewiring is highly recommended to prevent hazards.'
            },
            {
              question: 'Are your electrical services certified?',
              answer: 'Yes. All electrical wiring, testing, and distribution board upgrades are managed by registered, certified wiremen to ensure compliance with Malaysia’s electrical safety regulations.'
            }
          ]
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
          meta: {
            title: 'Reliable Handyman & Home Repair Services KL Selangor | JGR',
            description: 'Get local professional handyman services in Kuala Lumpur & Selangor. We handle door repairs, ceiling patching, mounting, and general woodwork.',
            keywords: 'professional handyman Selangor, home repair contractor KL, door lock repair service, general handyman Klang Valley, house minor repair'
          },
          intro: 'Finding a reliable technician for small, odd jobs can be challenging. JGR Civil Works fills this gap with our professional handyman services. We assist homeowners and office managers with carpentry repairs, lock replacement, drywall patching, ceiling crack repairs, shelving, and bracket mounting. No job is too small for our expert team.',
          faqs: [
            {
              question: 'Do you charge by the hour or by the project?',
              answer: 'We charge flat-rate, transparent pricing by the job. We provide a detailed quote before we start, so you know exactly what to expect without worrying about running clocks.'
            },
            {
              question: 'Do your handyman teams supply materials?',
              answer: 'We can supply standard mounting hardware, screws, brackets, and patch materials. If you have specific visual hardware (like a particular lock style or decorative shelf), you can purchase it beforehand, or we can source it for you at market rates.'
            },
            {
              question: 'Can you handle multiple repair jobs in one visit?',
              answer: 'Absolutely! Booking multiple tasks together is the most cost-effective way to utilize our handyman services, saving you trip charges and scheduling delays.'
            }
          ]
        }
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
      phoneVal: '+60 11-3782 3199',
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
    servicePage: {
      viewAllServices: 'View All Core Services',
      getQuoteBtn: 'Request Quote for this Service',
      faqSectionTitle: 'Frequently Asked Questions',
      whyChooseTitle: 'Why Choose JGR for this service?',
      backToHome: '← Back to Home',
    }
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
          meta: {
            title: 'Kontraktor Baiki Bumbung Bocor & Waterproofing KL Selangor | JGR',
            description: 'Servis baiki bumbung bocor dan waterproofing profesional di KL & Selangor. Menawarkan PU injection grouting, membaiki atap zink & bumbung genting.',
            keywords: 'baiki bumbung bocor Selangor, pakar waterproofing Kuala Lumpur, bumbung konkrit bocor, kontraktor atap rumah Malaysia, membaiki salur air gutter'
          },
          intro: 'Kebocoran air bumbung boleh menjejaskan struktur bangunan dan menyebabkan pembiakan kulat yang berbahaya. JGR Civil Works menyediakan sistem kalis air (waterproofing) berprestasi tinggi yang tahan lasak mengikut cuaca monsun tropika Malaysia. Dari suntikan grouting PU untuk slab konkrit sehingga pembaikan atap zink, kami menggunakan bahan premium untuk menghentikan kebocoran secara kekal.',
          faqs: [
            {
              question: 'Bagaimana saya tahu kebocoran bumbung saya adalah masalah struktur atau kecil?',
              answer: 'Kebocoran kecil biasanya berpunca daripada kepingan genting bumbung pecah atau salur air (gutter) tersumbat. Kebocoran struktur dikesan apabila terdapat tompokan air basah pada siling konkrit (slab) yang memerlukan rawatan khas suntikan PU. JGR akan melakukan pemeriksaan penuh sebelum memulakan kerja.'
            },
            {
              question: 'Apakah itu suntikan grouting PU dan adakah ia berkesan?',
              answer: 'Suntikan polyurethane (PU) grouting adalah teknik di mana cecair resin PU bertekanan tinggi disuntik terus ke dalam retakan konkrit. Apabila resin ini bersentuhan dengan air, ia akan mengembang untuk membentuk lapisan getah padat yang menyumbat retakan dari dalam.'
            },
            {
              question: 'Adakah perkhidmatan kalis air anda disertakan waranti?',
              answer: 'Ya! JGR Civil Works menawarkan jaminan bertulis untuk semua kerja pembaikan bumbung dan waterproofing kami selama 1 hingga 5 tahun, bergantung kepada jenis sistem kalis air yang digunakan.'
            }
          ]
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
          meta: {
            title: 'Servis Tukang Paip & Baiki Paip Bocor KL Selangor | JGR Civil Works',
            description: 'Mencari plumber atau tukang paip profesional di KL Selangor? Hubungi JGR Civil Works untuk membaiki paip bocor, tukar tangki air, dan pasang water heater.',
            keywords: 'tukang paip Kuala Lumpur, baiki paip bocor Selangor, tukar tangki air rumah, servis plumber paip tersumbat, pasang pam air rumah'
          },
          intro: 'Masalah paip bocor atau tersumbat memerlukan tindakan yang pantas. JGR Civil Works menyediakan perkhidmatan paip komprehensif untuk kediaman dan pejabat di Kuala Lumpur dan Selangor. Kami menggunakan teknologi pengesan kebocoran paip tanpa perlu memecahkan dinding, menggantikan tangki air karat dengan tangki fiber/stainless steel, dan memasang kelengkapan bilik mandi dengan kemas.',
          faqs: [
            {
              question: 'Apakah tindakan segera yang perlu saya ambil jika paip air pecah?',
              answer: 'Langkah pertama ialah menutup injap air utama (main gate valve) berhampiran meter air anda dengan memusingkannya mengikut arah jam. Kemudian tutup suis utama elektrik jika air berada berhampiran soket, dan hubungi talian kecemasan JGR dengan segera.'
            },
            {
              question: 'Bagaimanakah anda mengesan kebocoran paip di sebalik dinding?',
              answer: 'Kami menggunakan alat pengesan akustik frekuensi tinggi dan meter kelembapan untuk mengenal pasti kedudukan paip pecah secara tepat di dalam dinding tanpa memecahkannya secara melulu. Ini mengurangkan kos baik pulih dinding rumah anda.'
            },
            {
              question: 'Bilakah masa yang sesuai untuk menukar tangki air rumah?',
              answer: 'Sekiranya tangki air besi anda sudah berkarat, karat tersebut akan mencemarkan air kegunaan harian. Tangki fiber pula boleh mereput atau retak akibat usia. Jika terdapat tanda kebocoran atau air berkarat, kami menyarankan penukaran segera kepada tangki keluli tahan karat (stainless steel).'
            }
          ]
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
          meta: {
            title: 'Kontraktor Pendawaian Elektrik & Wiring Rumah KL Selangor | JGR',
            description: 'Perkhidmatan wiring elektrik rumah 1-fasa & 3-fasa, baiki litar pintas, pasang lampu, kipas & naik taraf kotak DB elektrik di KL Selangor.',
            keywords: 'kontraktor pendawaian elektrik KL, wiring rumah Selangor, baiki litar pintas, tukang elektrik Kuala Lumpur, pasang kotak DB elektrik'
          },
          intro: 'Sistem pendawaian yang rosak atau lama boleh mengundang bahaya litar pintas dan kebakaran rumah. JGR Civil Works menawarkan perkhidmatan elektrikal yang diselia oleh wireman bertauliah mengikut standard keselamatan Suruhanjaya Tenaga. Kami mengendalikan kerja baik pulih litar pintas, menaik taraf kotak pengedaran elektrik (DB box), serta membuat pendawaian baru untuk lampu, kipas, aircon, dan water heater.',
          faqs: [
            {
              question: 'Mengapakah kotak DB elektrik rumah saya kerap terpelanting (trip)?',
              answer: 'Kerap trip biasanya disebabkan oleh beban elektrik berlebihan (overload), kerosakan pada perkakas elektrik, atau terdapat litar pintas pada kabel pendawaian lama. Wireman kami menggunakan insulation tester untuk mengesan kerosakan kabel dengan selamat.'
            },
            {
              question: 'Berapa lamakah jangka hayat kabel elektrik rumah?',
              answer: 'Kabel elektrik rumah secara amnya bertahan selama 20 hingga 30 tahun. Sekiranya rumah anda berusia lebih 25 tahun, mengalami lampu berkelip-kelip, atau soket mula cair, pendawaian semula (rewiring) adalah sangat penting untuk keselamatan keluarga.'
            },
            {
              question: 'Adakah juruelektrik anda bertauliah?',
              answer: 'Ya, semua kerja elektrikal kami dikendalikan oleh wireman berdaftar yang memiliki sijil kekompetenan daripada Suruhanjaya Tenaga Malaysia demi menjamin keselamatan pemasangan.'
            }
          ]
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
          keywords: ['perkhidmatan handyman Selangor', 'tukang baiki rumah KL', 'servis tukar tombol pintu', 'kontraktor kecil Lembah Klang'],
          slug: 'handyman-services',
          meta: {
            title: 'Servis Handyman Profesional & Baiki Rumah KL Selangor | JGR',
            description: 'Perkhidmatan handyman boleh dipercayai di KL & Selangor. Kami membaiki pintu, siling rosak, menukar tombol pintu, memasang bracket TV & perabot.',
            keywords: 'perkhidmatan handyman Selangor, tukang baiki rumah KL, servis tukar tombol pintu, pasang bracket TV, tampal siling rumah bocor'
          },
          intro: 'Menemui tukang yang mahu melakukan kerja-kerja pembaikan kecil rumah adalah sukar. JGR Civil Works menyediakan servis handyman profesional untuk membantu anda menyelesaikan masalah kecil seperti membaiki pintu rosak, menukar tombol pintu, menampal dinding atau siling kapur pecah, memasang rak hiasan, serta pemasangan bracket TV dan perabot pasang-siap (flat-pack).',
          faqs: [
            {
              question: 'Adakah bayaran dikenakan mengikut jam atau mengikut jenis kerja?',
              answer: 'Kami mengenakan bayaran tetap (flat-rate) berdasarkan skop kerja yang jelas. Kami memberikan sebut harga bertulis terlebih dahulu supaya tiada kos tambahan tersembunyi.'
            },
            {
              question: 'Adakah pihak handyman menyediakan bahan pembaikan sekali?',
              answer: 'Kami boleh menyediakan perkakasan asas seperti skru, bracket dinding, simen siling dan cat plaster. Jika anda mempunyai perkakasan visual khusus (seperti tombol pintu pilihan sendiri), anda boleh membelinya terlebih dahulu atau kami boleh tolong dapatkan di pasaran.'
            },
            {
              question: 'Bolehkah saya menempah beberapa kerja pembaikan dalam satu lawatan?',
              answer: 'Sangat disarankan! Menggabungkan beberapa kerja baiki kecil dalam satu lawatan adalah kaedah paling jimat kerana ia mengurangkan caj perjalanan (trip charge) kami.'
            }
          ]
        }
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
      phoneVal: '+60 11-3782 3199',
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
    servicePage: {
      viewAllServices: 'Lihat Semua Servis Utama',
      getQuoteBtn: 'Minta Sebut Harga Perkhidmatan Ini',
      faqSectionTitle: 'Soalan Lazim (FAQ)',
      whyChooseTitle: 'Mengapa memilih JGR untuk servis ini?',
      backToHome: '← Kembali ke Utama',
    }
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
          meta: {
            title: '专业屋顶漏水维修与防水工程 KL 雪兰莪 | JGR Civil Works',
            description: 'JGR Civil Works 提供吉隆坡和雪兰莪的屋顶漏水修补与天台防水专科服务。十年防水灌浆工程，解决漏水烦恼。',
            keywords: '屋顶漏水维修 KL, 混凝土天台防水专科, 屋顶防漏灌浆工程, 修复铁皮瓦片漏水, 雪兰莪房屋屋顶漏水'
          },
          intro: '雨水渗透不仅会腐蚀墙体，还会引发危险的霉菌滋生并破坏建筑结构。JGR Civil Works 专门为巴生谷的多雨气候定制高性能防水工程。无论是天台混凝土开裂渗水、彩钢瓦锈蚀破损，还是排水天沟堵塞，我们均选用顶级防水涂料与密封材料进行施工，实现终身止水。',
          faqs: [
            {
              question: '如何判断我的屋顶漏水是局部问题还是结构性漏水？',
              answer: '如果只是某处瓦片破损或天沟落叶堵塞，通常为局部维修。若是混凝土天花板出现大面积湿痕、滴水，则属于结构性渗水，需要采用专业的高压注胶（灌浆）技术。我们在施工前会进行全面的渗水点排查。'
            },
            {
              question: '什么是 PU 高压注胶灌浆？其防漏原理是什么？',
              answer: '高压注浆是将化学聚氨酯（PU）材料通过高压泵打入混凝土裂缝深处。PU 材料遇到裂缝内的积水会迅速反应膨胀，固化为不透水的橡胶弹性体，从而由内至外彻底锁死漏水源头。'
            },
            {
              question: '屋顶防水防漏工程有保修期吗？',
              answer: '是的。JGR Civil Works 为所有的屋顶维修和整体防水工程提供 1 至 5 年的书面保修期，具体取决于您选择的防水材质和施工方案。'
            }
          ]
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
          meta: {
            title: '专业水喉服务与水管暗漏维修 KL 雪兰莪 | JGR Civil Works',
            description: '吉隆坡和雪兰莪的持牌水喉匠服务。JGR 提供暗管漏水仪器检测、蓄水箱更换、管道疏通和热水器安装。',
            keywords: '专业水喉匠吉隆坡, 水管漏水检测修补, 更换不锈钢蓄水箱, 下水道疏通马桶阻塞, 加压水泵安装'
          },
          intro: '管道故障需要即刻专业的解决方案。JGR Civil Works 在吉隆坡和雪兰莪提供全天候家居和商用供水系统服务。我们引进先进的超声波测漏仪，能无损定位地砖或墙壁内的暗管爆裂并进行修复，同时承接老化蓄水箱更换、深层排污管高压疏通等重型管道工程。',
          faqs: [
            {
              question: '如果家中突发水管爆裂该怎么办？',
              answer: '请立刻找到您家水表旁边的总水阀，顺时针方向拧紧关闭它以切断水源。如果漏水处靠近电源插座或电箱，请关掉配电箱的总闸，然后拨打 JGR 紧急抢修热线。'
            },
            {
              question: '你们是如何在不砸墙的情况下找到暗管漏水点的？',
              answer: '我们使用高灵敏度的声波管道测漏仪和墙面湿度传感器。这能精准测出地下或墙内水管破裂的位置，避免盲目砸墙破坏昂贵的地砖，最大限度降低后续修复成本。'
            },
            {
              question: '家里的蓄水箱什么情况下需要进行更换？',
              answer: '如果您使用的是传统旧式铁皮水箱，生锈后的铁锈会污染全家日常用水。如果是旧纤维水箱，极易因老化导致开裂漏水。一旦发现水质发黄或水箱外壁渗水，应尽早更换为坚固无毒的食品级不锈钢水箱。'
            }
          ]
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
          meta: {
            title: '持牌电工布线与电路短路维修 KL 雪兰莪 | JGR Civil Works',
            description: '吉隆坡和雪兰莪专业电工布线服务。承接全屋电线重拉（Rewiring）、跳闸短路排查、配电箱DB升级和灯具风扇安装。',
            keywords: '持牌电工布线 KL, 房屋电线拉线雪兰莪, 电路跳闸短路维修, 配电箱DB升级, 电气安全检测'
          },
          intro: '老化或不规范的电路是导致火灾的最大安全隐患。JGR Civil Works 的电气服务完全由持有马来西亚能源局（Suruhanjaya Tenaga）专业执照的电工操刀。我们承接单相/三相全屋老旧线路重拉工程，精准排查跳闸和短路，安全进行总电箱（DB Box）空开升级，确保用电安全。',
          faqs: [
            {
              question: '为什么家里的总电闸频繁跳闸断电？',
              answer: '频繁跳闸的原因主要包括：高功率电器同时开启导致超载、老旧线路绝缘层破损导致短路、或部分电器内部漏电。我们的电工会使用绝缘电阻测试仪（Megger Meter）逐路排查，快速定位故障线路。'
            },
            {
              question: '老旧房屋一般多少年需要进行一次电线重拉？',
              answer: '民用住宅电线材料设计寿命一般为 20 至 30 年。如果您住的房子房龄超过 25 年，且配线为老式单胶线，或经常发生灯光闪烁、插座发烫，强烈建议进行整屋电线重拉。'
            },
            {
              question: '你们的电工师傅有政府认证执照吗？',
              answer: '是的。JGR 所有的强电工程、接地测试和总配电箱调试均由符合大马执业资格的持牌电工亲自执行，严格遵守《电力供应条例》的安全操作规范。'
            }
          ]
        },
        {
          id: 'handyman',
          icon: 'wrench',
          title: '专业家居杂工服务',
          description: '快捷可靠的室内外维护与零星修缮，一站式解决您的家居日常烦恼。',
          details: [
            '门窗破损维修、门锁及插销更换、玻璃拉门轨道校正',
            '石膏板吊顶修补、墙壁裂缝刮腻子刷漆、天花板修补',
            'TV bracket mounting, 挂件及定制家具组装',
            '小规模木工修补与各类日常杂碎维修',
          ],
          keywords: ['雪兰莪家居杂工服务', '吉隆坡房屋微修承包商', '更换门锁师傅', '巴生谷日常家居维修'],
          slug: 'handyman-services',
          meta: {
            title: '专业家居杂工与房屋维修服务 KL 雪兰莪 | JGR Civil Works',
            description: '吉隆坡和雪兰莪专业杂工（Handyman）服务。精修门窗轨道、石膏天花板开裂补土、更换门锁、壁挂支架安装与家具拼装。',
            keywords: '家居杂工服务雪兰莪, 房屋微修承包商吉隆坡, 更换门锁五金, 修复天花板石膏板, 壁挂电视架安装'
          },
          intro: '找大建筑公司不做，找散工又担心质量不保？JGR Civil Works 提供规范的专业杂工服务。我们帮助业主和物业经理修复下沉变形的木门、更换故障防盗锁、修补破损开裂的石膏板天花板、安装电视挂架、悬挂装饰架以及拼装各类运送回家的定制家具。',
          faqs: [
            {
              question: '你们的杂工服务是如何收费的？',
              answer: '我们实施公开的一口价（Flat-rate）包干收费，不做按小时计费的无休止收费。在动手前，您会收到明确的书面费用清单，双方同意再施工。'
            },
            {
              question: '修补和安装时需要自己准备配件和原材料吗？',
              answer: '我们自带标准的打膨胀螺丝、封胶、石膏粉和修补腻子等辅料。如果您有特定的功能性配件（如特定款式防盗锁、特定品牌的毛巾架），您可以提前买好，或者委托我们代购。'
            },
            {
              question: '我可以在一次预约中要求做多项微型修补吗？',
              answer: '非常支持！把家里的各项琐碎修补收集起来，在一次上门中集中修好，是性价比最高的方式，能帮您节省多次上门的出车费用。'
            }
          ]
        }
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
      phoneVal: '+60 11-3782 3199',
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
    servicePage: {
      viewAllServices: '查看全部主要服务项目',
      getQuoteBtn: '获取本项服务专属报价',
      faqSectionTitle: '常见问题解答 (FAQ)',
      whyChooseTitle: '为什么在本项目选择 JGR 施工？',
      backToHome: '← 返回首页',
    }
  },
};
