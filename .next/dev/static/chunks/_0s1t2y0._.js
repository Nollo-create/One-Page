(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/ThemeContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeProvider",
    ()=>ThemeProvider,
    "useTheme",
    ()=>useTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
const ThemeContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    theme: 'light',
    toggle: ()=>{}
});
function ThemeProvider({ children }) {
    _s();
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('light');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeProvider.useEffect": ()=>{
            const stored = localStorage.getItem('theme');
            const preferred = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            const initial = stored ?? preferred;
            setTheme(initial);
            applyTheme(initial);
        }
    }["ThemeProvider.useEffect"], []);
    const toggle = ()=>{
        setTheme((prev)=>{
            const next = prev === 'light' ? 'dark' : 'light';
            localStorage.setItem('theme', next);
            applyTheme(next);
            return next;
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemeContext.Provider, {
        value: {
            theme,
            toggle
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/lib/ThemeContext.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_s(ThemeProvider, "Z8UCD9KudyQA62DCQ9e5cf9+m5k=");
_c = ThemeProvider;
function applyTheme(theme) {
    const root = document.documentElement;
    if (theme === 'dark') {
        root.classList.add('dark');
    } else {
        root.classList.remove('dark');
    }
}
const useTheme = ()=>{
    _s1();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ThemeContext);
};
_s1(useTheme, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
var _c;
__turbopack_context__.k.register(_c, "ThemeProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/translations.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "translations",
    ()=>translations
]);
const translations = {
    en: {
        nav: {
            work: 'Work',
            services: 'Services',
            about: 'About',
            process: 'Process',
            contact: 'Contact'
        },
        cta: {
            startProject: 'Start a Project',
            viewWork: 'View Our Work',
            getInTouch: 'Get in Touch',
            allProjects: 'All Projects',
            learnMore: 'Learn More'
        },
        aria: {
            lightMode: 'Switch to light mode',
            darkMode: 'Switch to dark mode',
            openMenu: 'Open menu',
            closeMenu: 'Close menu',
            backToTop: 'Scroll to top',
            copyEmail: 'Copy email',
            prevTestimonial: 'Previous testimonial',
            nextTestimonial: 'Next testimonial',
            switchToSerbian: 'Switch to Serbian',
            switchToEnglish: 'Switch to English',
            whatsapp: 'Chat on WhatsApp'
        },
        whatsapp: {
            greeting: 'Hello! I am interested in your services.'
        },
        hero: {
            tag: 'Web Design Studio',
            est: 'Est. 2014',
            lines: [
                'We craft',
                'digital',
                'experiences',
                'that captivate.'
            ],
            sub: 'A boutique studio building fast, elegant, high-converting websites for brands that take their craft seriously.',
            stats: [
                {
                    value: 10,
                    suffix: '+',
                    label: 'Years of craft'
                },
                {
                    value: 150,
                    suffix: '+',
                    label: 'Projects shipped'
                },
                {
                    value: 98,
                    suffix: '%',
                    label: 'Client satisfaction'
                }
            ],
            scroll: 'Scroll'
        },
        marquee: [
            'Web Design',
            'Brand Identity',
            'UX Strategy',
            'Web Development',
            'E-commerce',
            'Digital Experiences',
            'Creative Direction',
            'Motion Design',
            'Product Design',
            'Visual Systems'
        ],
        work: {
            label: 'Selected Work',
            heading: [
                'Projects we’re',
                'proud of'
            ],
            projects: {
                dcosmetics: {
                    tagline: 'Premium beauty & skincare brand',
                    category: 'Brand Identity & Web'
                },
                deltoros: {
                    tagline: 'Steakhouse & grill — Tres Hermanos',
                    category: 'Restaurant Identity'
                },
                tonmaster: {
                    tagline: 'Audio production & sound mastering',
                    category: 'Brand & Web'
                },
                tanjarajkovic: {
                    tagline: 'Personal portfolio',
                    category: 'Personal Brand'
                },
                viz: {
                    tagline: 'Streetwear & lifestyle',
                    category: 'Brand Identity'
                }
            }
        },
        services: {
            label: 'What We Do',
            heading: [
                'Full-spectrum',
                'digital craft'
            ],
            desc: 'From concept to launch, we handle every layer of the digital experience — thoughtfully, intentionally.',
            items: [
                {
                    number: '01',
                    title: 'Web Design',
                    desc: 'Pixel-perfect interfaces that balance aesthetics with conversion. Every visual decision serves a strategic purpose — from layout to micro-interaction.',
                    tags: [
                        'UI Design',
                        'Responsive',
                        'Prototyping'
                    ]
                },
                {
                    number: '02',
                    title: 'Web Development',
                    desc: 'Clean, fast, maintainable code built with modern frameworks. We optimize for performance, accessibility, and long-term scalability.',
                    tags: [
                        'Next.js',
                        'TypeScript',
                        'CMS'
                    ]
                },
                {
                    number: '03',
                    title: 'UX Strategy',
                    desc: 'User journeys mapped with precision. We design for how people actually think and behave — removing friction, building trust.',
                    tags: [
                        'Research',
                        'Flows',
                        'Testing'
                    ]
                },
                {
                    number: '04',
                    title: 'Brand Identity',
                    desc: 'Visual systems that communicate before you say a word. Cohesive, memorable brand identities built to last across every touchpoint.',
                    tags: [
                        'Logo',
                        'Guidelines',
                        'Visual Identity'
                    ]
                }
            ]
        },
        about: {
            label: 'About Sajtpress',
            heading: [
                'Small studio.',
                'Big ambition.'
            ],
            p1: 'We’re a focused team of designers and developers who believe that great digital work comes from genuine collaboration, clear thinking, and an obsessive attention to craft.',
            p2: 'We don’t take on dozens of projects at once. We stay selective so every client gets our full attention — from the first call to the day we hit launch, and beyond.',
            stats: [
                {
                    display: '2014',
                    label: 'Year founded'
                },
                {
                    value: 8,
                    label: 'Team members'
                },
                {
                    value: 14,
                    label: 'Industry awards'
                }
            ],
            visual: {
                quality: 'Quality over volume',
                qualityDesc: 'We limit our active projects to ensure each one receives the depth it deserves.',
                quote: '“Design is not decoration — it’s the language through which your business speaks.”',
                author: 'Nikola Ristić',
                role: 'Creative Director, SAJTPRESS',
                based: 'Currently based in',
                location: 'Belgrade, Serbia 🇷🇸',
                remote: 'Remote-first',
                global: 'Global clients'
            }
        },
        process: {
            label: 'How We Work',
            heading: [
                'A process built',
                'for results'
            ],
            desc: 'Transparent, collaborative, and predictable. You’ll always know where we are and what comes next.',
            steps: [
                {
                    number: '01',
                    title: 'Discovery',
                    duration: '1–2 weeks',
                    desc: 'We start by understanding your business, your audience, and your goals. Through structured workshops and conversations, we map the full landscape before touching a single pixel.'
                },
                {
                    number: '02',
                    title: 'Strategy',
                    duration: '1 week',
                    desc: 'We define the direction: information architecture, user flows, content strategy, and the core positioning that will guide every design decision that follows.'
                },
                {
                    number: '03',
                    title: 'Design',
                    duration: '2–4 weeks',
                    desc: 'Visual concepts that align with your brand and speak directly to your users. We iterate quickly, present clearly, and refine until every detail is exactly right.'
                },
                {
                    number: '04',
                    title: 'Development',
                    duration: '2–6 weeks',
                    desc: 'We translate designs into fast, accessible, responsive code. Every interaction is crafted with care. We test across devices and browsers before a single line goes live.'
                },
                {
                    number: '05',
                    title: 'Launch & Grow',
                    duration: 'Ongoing',
                    desc: 'We don’t just deliver and disappear. We support your launch, monitor performance, and remain a strategic partner as your business evolves.'
                }
            ]
        },
        testimonials: {
            label: 'Client Stories',
            heading: [
                'Words from',
                'our clients'
            ],
            items: [
                {
                    quote: 'Working with SAJTPRESS was completely different from any agency we’d worked with before. They understood our brand immediately and pushed us in directions we hadn’t considered — every one of which was right.',
                    author: 'Sarah Chen',
                    role: 'CEO, Portakal Wines',
                    initials: 'SC',
                    rating: 5
                },
                {
                    quote: 'The website they built increased our lead conversion by 40%. But beyond the numbers, it just feels right. Every interaction, every transition — it communicates exactly who Meridian is.',
                    author: 'Marcus Reid',
                    role: 'Founder, Meridian Capital',
                    initials: 'MR',
                    rating: 5
                },
                {
                    quote: 'SAJTPRESS doesn’t just execute a brief — they think with you. Our e-commerce site went from generic to genuinely beautiful, and sales reflect that shift immediately.',
                    author: 'Yuki Tanaka',
                    role: 'Creative Director, Hana Studio',
                    initials: 'YT',
                    rating: 5
                }
            ]
        },
        contact: {
            label: 'Get in Touch',
            heading: [
                'Ready to build',
                'something great?'
            ],
            desc: 'Tell us about your project — we’ll get back to you within one business day with a thoughtful response and next steps.',
            form: {
                name: 'Your Name',
                namePh: 'Nikola Petrović',
                email: 'Email Address',
                emailPh: 'nikola@company.com',
                message: 'Project Brief',
                messagePh: 'Tell us about your project — what you’re building, your timeline, and any specific goals…',
                submit: 'Send Message',
                sending: 'Sending…'
            },
            errors: {
                name: 'Name is required',
                email: 'Valid email required',
                message: 'Tell us about your project'
            },
            success: {
                title: 'Message sent',
                desc: 'Thanks for reaching out. We’ll review your brief and get back to you within one business day.'
            },
            copied: 'Copied!'
        },
        footer: {
            tagline: 'A boutique web design studio crafting premium digital experiences for ambitious brands.',
            navTitle: 'Navigation',
            social: 'Follow Us',
            ctaTitle: 'Start a Project',
            ctaDesc: 'Have a project in mind? We’d love to hear about it.',
            copyright: 'All rights reserved.',
            privacy: 'Privacy Policy',
            terms: 'Terms of Service'
        }
    },
    sr: {
        nav: {
            work: 'Radovi',
            services: 'Usluge',
            about: 'O nama',
            process: 'Proces',
            contact: 'Kontakt'
        },
        cta: {
            startProject: 'Započni projekat',
            viewWork: 'Pogledaj radove',
            getInTouch: 'Kontaktiraj nas',
            allProjects: 'Svi projekti',
            learnMore: 'Saznaj više'
        },
        aria: {
            lightMode: 'Pređi na svetli režim',
            darkMode: 'Pređi na tamni režim',
            openMenu: 'Otvori meni',
            closeMenu: 'Zatvori meni',
            backToTop: 'Vrati se na vrh',
            copyEmail: 'Kopiraj email',
            prevTestimonial: 'Prethodna preporuka',
            nextTestimonial: 'Sledeća preporuka',
            switchToSerbian: 'Prebaci na srpski',
            switchToEnglish: 'Prebaci na engleski',
            whatsapp: 'Piši nam na WhatsApp'
        },
        whatsapp: {
            greeting: 'Zdravo! Zainteresovan/a sam za vaše usluge.'
        },
        hero: {
            tag: 'Studio za web dizajn',
            est: 'Osnovano 2014.',
            lines: [
                'Kreiramo',
                'digitalna',
                'iskustva',
                'koja oduševljavaju.'
            ],
            sub: 'Butik studio koji gradi brze, elegantne sajtove visoke konverzije za brendove koji ozbiljno shvataju svoj posao.',
            stats: [
                {
                    value: 10,
                    suffix: '+',
                    label: 'Godina iskustva'
                },
                {
                    value: 150,
                    suffix: '+',
                    label: 'Završenih projekata'
                },
                {
                    value: 98,
                    suffix: '%',
                    label: 'Zadovoljnih klijenata'
                }
            ],
            scroll: 'Skroluj'
        },
        marquee: [
            'Web dizajn',
            'Brend identitet',
            'UX strategija',
            'Web razvoj',
            'E-commerce',
            'Digitalna iskustva',
            'Kreativno vođenje',
            'Motion dizajn',
            'Dizajn proizvoda',
            'Vizuelni sistemi'
        ],
        work: {
            label: 'Izabrani radovi',
            heading: [
                'Projekti na koje smo',
                'ponosni'
            ],
            projects: {
                dcosmetics: {
                    tagline: 'Premium brend za kozmetiku i negu kože',
                    category: 'Brend identitet i web'
                },
                deltoros: {
                    tagline: 'Restoran i roštilj — Tres Hermanos',
                    category: 'Restoranski identitet'
                },
                tonmaster: {
                    tagline: 'Audio produkcija i mastering zvuka',
                    category: 'Brend i web'
                },
                tanjarajkovic: {
                    tagline: 'Lični portfolio',
                    category: 'Lični brend'
                },
                viz: {
                    tagline: 'Streetwear i lifestyle',
                    category: 'Brend identitet'
                }
            }
        },
        services: {
            label: 'Šta radimo',
            heading: [
                'Pun spektar',
                'digitalnog zanata'
            ],
            desc: 'Od koncepta do lansiranja, brinemo o svakom sloju digitalnog iskustva — promišljeno i sa jasnom namerom.',
            items: [
                {
                    number: '01',
                    title: 'Web dizajn',
                    desc: 'Interfejsi do detalja koji spajaju estetiku sa konverzijom. Svaka vizuelna odluka ima strateški cilj — od rasporeda do mikro-interakcija.',
                    tags: [
                        'UI dizajn',
                        'Responzivnost',
                        'Prototipiranje'
                    ]
                },
                {
                    number: '02',
                    title: 'Web razvoj',
                    desc: 'Čist, brz i održiv kod izgrađen modernim alatima. Optimizujemo za performanse, pristupačnost i dugoročnu skalabilnost.',
                    tags: [
                        'Next.js',
                        'TypeScript',
                        'CMS'
                    ]
                },
                {
                    number: '03',
                    title: 'UX strategija',
                    desc: 'Korisničke putanje precizno mapirane. Dizajniramo prema tome kako ljudi zaista razmišljaju i ponašaju se — uklanjamo prepreke, gradimo poverenje.',
                    tags: [
                        'Istraživanje',
                        'Tokovi',
                        'Testiranje'
                    ]
                },
                {
                    number: '04',
                    title: 'Brend identitet',
                    desc: 'Vizuelni sistemi koji komuniciraju i pre nego što izgovorite reč. Konzistentni, prepoznatljivi identiteti napravljeni da traju kroz svaki dodir sa brendom.',
                    tags: [
                        'Logo',
                        'Smernice',
                        'Vizuelni identitet'
                    ]
                }
            ]
        },
        about: {
            label: 'O Sajtpress-u',
            heading: [
                'Mali studio.',
                'Velika ambicija.'
            ],
            p1: 'Mi smo fokusiran tim dizajnera i developera koji veruju da odličan digitalni rad nastaje iz iskrene saradnje, jasnog razmišljanja i opsesivne posvećenosti zanatu.',
            p2: 'Ne prihvatamo desetine projekata istovremeno. Ostajemo selektivni kako bi svaki klijent dobio našu punu pažnju — od prvog poziva do dana lansiranja, i posle toga.',
            stats: [
                {
                    display: '2014',
                    label: 'Godina osnivanja'
                },
                {
                    value: 8,
                    label: 'Članova tima'
                },
                {
                    value: 14,
                    label: 'Nagrada u industriji'
                }
            ],
            visual: {
                quality: 'Kvalitet umesto kvantiteta',
                qualityDesc: 'Ograničavamo broj aktivnih projekata kako bi svaki dobio dubinu koju zaslužuje.',
                quote: '„Dizajn nije ukras — to je jezik kojim govori vaš biznis.”',
                author: 'Nikola Ristić',
                role: 'Kreativni direktor, SAJTPRESS',
                based: 'Trenutno radimo iz',
                location: 'Beograda, Srbija 🇷🇸',
                remote: 'Rad na daljinu',
                global: 'Klijenti širom sveta'
            }
        },
        process: {
            label: 'Kako radimo',
            heading: [
                'Proces napravljen',
                'za rezultate'
            ],
            desc: 'Transparentno, kroz saradnju i predvidivo. Uvek ćete znati gde smo i šta sledi.',
            steps: [
                {
                    number: '01',
                    title: 'Otkrivanje',
                    duration: '1–2 nedelje',
                    desc: 'Počinjemo razumevanjem vašeg biznisa, publike i ciljeva. Kroz strukturirane radionice i razgovore, mapiramo ceo pejzaž pre nego što dotaknemo nijedan piksel.'
                },
                {
                    number: '02',
                    title: 'Strategija',
                    duration: '1 nedelja',
                    desc: 'Definišemo pravac: arhitekturu informacija, korisničke tokove, strategiju sadržaja i osnovno pozicioniranje koje će voditi svaku dizajnersku odluku koja sledi.'
                },
                {
                    number: '03',
                    title: 'Dizajn',
                    duration: '2–4 nedelje',
                    desc: 'Vizuelni koncepti koji su u skladu sa vašim brendom i govore direktno vašim korisnicima. Iteriramo brzo, prezentujemo jasno i finalizujemo dok svaki detalj nije tačno na svom mestu.'
                },
                {
                    number: '04',
                    title: 'Razvoj',
                    duration: '2–6 nedelja',
                    desc: 'Prevodimo dizajn u brz, pristupačan i responzivan kod. Svaka interakcija je rađena sa pažnjom. Testiramo na različitim uređajima i pretraživačima pre nego što ijedna linija ode uživo.'
                },
                {
                    number: '05',
                    title: 'Lansiranje i rast',
                    duration: 'Kontinuirano',
                    desc: 'Ne isporučujemo i nestajemo. Podržavamo vaše lansiranje, pratimo performanse i ostajemo strateški partner kako vaš biznis raste.'
                }
            ]
        },
        testimonials: {
            label: 'Reči klijenata',
            heading: [
                'Šta kažu',
                'naši klijenti'
            ],
            items: [
                {
                    quote: 'Rad sa SAJTPRESS-om je bio potpuno drugačiji od bilo koje agencije sa kojom smo do tada sarađivali. Razumeli su naš brend trenutno i gurali nas u pravce o kojima nismo razmišljali — svaki od njih je bio ispravan.',
                    author: 'Sarah Chen',
                    role: 'CEO, Portakal Wines',
                    initials: 'SC',
                    rating: 5
                },
                {
                    quote: 'Sajt koji su izgradili povećao je našu stopu konverzije za 40%. Ali van brojeva, jednostavno se ispravno oseća. Svaka interakcija, svaka tranzicija — komuniciraju tačno ono što Meridian jeste.',
                    author: 'Marcus Reid',
                    role: 'Osnivač, Meridian Capital',
                    initials: 'MR',
                    rating: 5
                },
                {
                    quote: 'SAJTPRESS ne samo da izvršava brief — oni razmišljaju sa vama. Naš e-commerce sajt je iz generičnog prešao u istinski lep, a prodaja to odmah odražava.',
                    author: 'Yuki Tanaka',
                    role: 'Kreativna direktorka, Hana Studio',
                    initials: 'YT',
                    rating: 5
                }
            ]
        },
        contact: {
            label: 'Kontakt',
            heading: [
                'Spremni da napravimo',
                'nešto sjajno?'
            ],
            desc: 'Recite nam o svom projektu — javićemo se u roku od jednog radnog dana sa promišljenim odgovorom i sledećim koracima.',
            form: {
                name: 'Vaše ime',
                namePh: 'Nikola Petrović',
                email: 'Email adresa',
                emailPh: 'nikola@kompanija.com',
                message: 'O projektu',
                messagePh: 'Recite nam nešto o svom projektu — šta gradite, vaš rok, i bilo koje konkretne ciljeve…',
                submit: 'Pošalji poruku',
                sending: 'Šaljem…'
            },
            errors: {
                name: 'Ime je obavezno',
                email: 'Unesite validnu email adresu',
                message: 'Recite nam o projektu'
            },
            success: {
                title: 'Poruka poslata',
                desc: 'Hvala što ste nas kontaktirali. Pregledaćemo vaš brief i javiti se u roku od jednog radnog dana.'
            },
            copied: 'Kopirano!'
        },
        footer: {
            tagline: 'Butik studio za web dizajn koji kreira premium digitalna iskustva za ambiciozne brendove.',
            navTitle: 'Navigacija',
            social: 'Prati nas',
            ctaTitle: 'Započni projekat',
            ctaDesc: 'Imate projekat na umu? Voleli bismo da čujemo o njemu.',
            copyright: 'Sva prava zadržana.',
            privacy: 'Politika privatnosti',
            terms: 'Uslovi korišćenja'
        }
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/LanguageContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguageProvider",
    ()=>LanguageProvider,
    "useLang",
    ()=>useLang,
    "useT",
    ()=>useT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/translations.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
'use client';
;
;
const LanguageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    lang: 'sr',
    setLang: ()=>{},
    toggle: ()=>{}
});
function LanguageProvider({ children }) {
    _s();
    // Default to Serbian; localStorage will override on the client.
    const [lang, setLangState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('sr');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LanguageProvider.useEffect": ()=>{
            try {
                const stored = localStorage.getItem('lang');
                if (stored === 'en' || stored === 'sr') {
                    setLangState(stored);
                    return;
                }
                // No stored preference — sniff browser language; default to SR.
                const nav = navigator.language?.toLowerCase() ?? '';
                const initial = nav.startsWith('sr') || nav.startsWith('sr-') || nav === 'sr' ? 'sr' : 'en';
                setLangState(initial);
            } catch  {}
        }
    }["LanguageProvider.useEffect"], []);
    const setLang = (l)=>{
        setLangState(l);
        try {
            localStorage.setItem('lang', l);
        } catch  {}
        try {
            document.documentElement.lang = l;
        } catch  {}
    };
    const toggle = ()=>setLang(lang === 'en' ? 'sr' : 'en');
    // Keep the <html lang="…"> attribute in sync.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LanguageProvider.useEffect": ()=>{
            try {
                document.documentElement.lang = lang;
            } catch  {}
        }
    }["LanguageProvider.useEffect"], [
        lang
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageContext.Provider, {
        value: {
            lang,
            setLang,
            toggle
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/lib/LanguageContext.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
_s(LanguageProvider, "rL5YGJP4wNxtWmKpMH0L319aYSE=");
_c = LanguageProvider;
const useLang = ()=>{
    _s1();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(LanguageContext);
};
_s1(useLang, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
function useT() {
    _s2();
    const { lang } = useLang();
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translations"][lang];
}
_s2(useT, "BpHATZRBXYqVpOgCf2HLIdSY7VA=", false, function() {
    return [
        useLang
    ];
});
var _c;
__turbopack_context__.k.register(_c, "LanguageProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/client/request-idle-callback.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    cancelIdleCallback: null,
    requestIdleCallback: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    cancelIdleCallback: function() {
        return cancelIdleCallback;
    },
    requestIdleCallback: function() {
        return requestIdleCallback;
    }
});
const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(cb) {
    let start = Date.now();
    return self.setTimeout(function() {
        cb({
            didTimeout: false,
            timeRemaining: function() {
                return Math.max(0, 50 - (Date.now() - start));
            }
        });
    }, 1);
};
const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(id) {
    return clearTimeout(id);
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/shared/lib/htmlescape.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This utility is based on https://github.com/zertosh/htmlescape
// License: https://github.com/zertosh/htmlescape/blob/0527ca7156a524d256101bb310a9f970f63078ad/LICENSE
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    ESCAPE_REGEX: null,
    htmlEscapeAttributeString: null,
    htmlEscapeJsonString: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ESCAPE_REGEX: function() {
        return ESCAPE_REGEX;
    },
    htmlEscapeAttributeString: function() {
        return htmlEscapeAttributeString;
    },
    htmlEscapeJsonString: function() {
        return htmlEscapeJsonString;
    }
});
const ESCAPE_LOOKUP = {
    '&': '\\u0026',
    '>': '\\u003e',
    '<': '\\u003c',
    '\u2028': '\\u2028',
    '\u2029': '\\u2029'
};
const ESCAPE_REGEX = /[&><\u2028\u2029]/g;
const ATTRIBUTE_ESCAPE_LOOKUP = {
    '&': '&amp;',
    '"': '&quot;',
    "'": '&#39;',
    '<': '&lt;',
    '>': '&gt;'
};
const ATTRIBUTE_ESCAPE_REGEX = /[&"'<>]/g;
function htmlEscapeJsonString(str) {
    return str.replace(ESCAPE_REGEX, (match)=>ESCAPE_LOOKUP[match]);
}
function htmlEscapeAttributeString(str) {
    return str.replace(ATTRIBUTE_ESCAPE_REGEX, (match)=>ATTRIBUTE_ESCAPE_LOOKUP[match]);
}
}),
"[project]/node_modules/next/dist/client/script.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    handleClientScriptLoad: null,
    initScriptLoader: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    handleClientScriptLoad: function() {
        return handleClientScriptLoad;
    },
    initScriptLoader: function() {
        return initScriptLoader;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _interop_require_wildcard = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _reactdom = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)"));
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _headmanagercontextsharedruntime = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/head-manager-context.shared-runtime.js [app-client] (ecmascript)");
const _setattributesfromprops = __turbopack_context__.r("[project]/node_modules/next/dist/client/set-attributes-from-props.js [app-client] (ecmascript)");
const _requestidlecallback = __turbopack_context__.r("[project]/node_modules/next/dist/client/request-idle-callback.js [app-client] (ecmascript)");
const _htmlescape = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/htmlescape.js [app-client] (ecmascript)");
const ScriptCache = new Map();
const LoadCache = new Set();
const insertStylesheets = (stylesheets)=>{
    // Case 1: Styles for afterInteractive/lazyOnload with appDir injected via handleClientScriptLoad
    //
    // Using ReactDOM.preinit to feature detect appDir and inject styles
    // Stylesheets might have already been loaded if initialized with Script component
    // Re-inject styles here to handle scripts loaded via handleClientScriptLoad
    // ReactDOM.preinit handles dedup and ensures the styles are loaded only once
    if (_reactdom.default.preinit) {
        stylesheets.forEach((stylesheet)=>{
            _reactdom.default.preinit(stylesheet, {
                as: 'style'
            });
        });
        return;
    }
    // Case 2: Styles for afterInteractive/lazyOnload with pages injected via handleClientScriptLoad
    //
    // We use this function to load styles when appdir is not detected
    // TODO: Use React float APIs to load styles once available for pages dir
    if (typeof window !== 'undefined') {
        let head = document.head;
        stylesheets.forEach((stylesheet)=>{
            let link = document.createElement('link');
            link.type = 'text/css';
            link.rel = 'stylesheet';
            link.href = stylesheet;
            head.appendChild(link);
        });
    }
};
const loadScript = (props)=>{
    const { src, id, onLoad = ()=>{}, onReady = null, dangerouslySetInnerHTML, children = '', strategy = 'afterInteractive', onError, stylesheets } = props;
    const cacheKey = id || src;
    // Script has already loaded
    if (cacheKey && LoadCache.has(cacheKey)) {
        return;
    }
    // Contents of this script are already loading/loaded
    if (ScriptCache.has(src)) {
        LoadCache.add(cacheKey);
        // It is possible that multiple `next/script` components all have same "src", but has different "onLoad"
        // This is to make sure the same remote script will only load once, but "onLoad" are executed in order
        ScriptCache.get(src).then(onLoad, onError);
        return;
    }
    /** Execute after the script first loaded */ const afterLoad = ()=>{
        // Run onReady for the first time after load event
        if (onReady) {
            onReady();
        }
        // add cacheKey to LoadCache when load successfully
        LoadCache.add(cacheKey);
    };
    const el = document.createElement('script');
    const loadPromise = new Promise((resolve, reject)=>{
        el.addEventListener('load', function(e) {
            resolve();
            if (onLoad) {
                onLoad.call(this, e);
            }
            afterLoad();
        });
        el.addEventListener('error', function(e) {
            reject(e);
        });
    }).catch(function(e) {
        if (onError) {
            onError(e);
        }
    });
    if (dangerouslySetInnerHTML) {
        // Casting since lib.dom.d.ts doesn't have TrustedHTML yet.
        el.innerHTML = dangerouslySetInnerHTML.__html || '';
        afterLoad();
    } else if (children) {
        el.textContent = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
        afterLoad();
    } else if (src) {
        el.src = src;
        // do not add cacheKey into LoadCache for remote script here
        // cacheKey will be added to LoadCache when it is actually loaded (see loadPromise above)
        ScriptCache.set(src, loadPromise);
    }
    (0, _setattributesfromprops.setAttributesFromProps)(el, props);
    if (strategy === 'worker') {
        el.setAttribute('type', 'text/partytown');
    }
    el.setAttribute('data-nscript', strategy);
    // Load styles associated with this script
    if (stylesheets) {
        insertStylesheets(stylesheets);
    }
    document.body.appendChild(el);
};
function handleClientScriptLoad(props) {
    const { strategy = 'afterInteractive' } = props;
    if (strategy === 'lazyOnload') {
        window.addEventListener('load', ()=>{
            (0, _requestidlecallback.requestIdleCallback)(()=>loadScript(props));
        });
    } else {
        loadScript(props);
    }
}
function loadLazyScript(props) {
    if (document.readyState === 'complete') {
        (0, _requestidlecallback.requestIdleCallback)(()=>loadScript(props));
    } else {
        window.addEventListener('load', ()=>{
            (0, _requestidlecallback.requestIdleCallback)(()=>loadScript(props));
        });
    }
}
function addBeforeInteractiveToCache() {
    const scripts = [
        ...document.querySelectorAll('[data-nscript="beforeInteractive"]'),
        ...document.querySelectorAll('[data-nscript="beforePageRender"]')
    ];
    scripts.forEach((script)=>{
        const cacheKey = script.id || script.getAttribute('src');
        LoadCache.add(cacheKey);
    });
}
function initScriptLoader(scriptLoaderItems) {
    scriptLoaderItems.forEach(handleClientScriptLoad);
    addBeforeInteractiveToCache();
}
/**
 * Load a third-party scripts in an optimized way.
 *
 * Read more: [Next.js Docs: `next/script`](https://nextjs.org/docs/app/api-reference/components/script)
 */ function Script(props) {
    const { id, src = '', onLoad = ()=>{}, onReady = null, strategy = 'afterInteractive', onError, stylesheets, ...restProps } = props;
    // Context is available only during SSR
    let { updateScripts, scripts, getIsSsr, appDir, nonce } = (0, _react.useContext)(_headmanagercontextsharedruntime.HeadManagerContext);
    // if a nonce is explicitly passed to the script tag, favor that over the automatic handling
    nonce = restProps.nonce || nonce;
    /**
   * - First mount:
   *   1. The useEffect for onReady executes
   *   2. hasOnReadyEffectCalled.current is false, but the script hasn't loaded yet (not in LoadCache)
   *      onReady is skipped, set hasOnReadyEffectCalled.current to true
   *   3. The useEffect for loadScript executes
   *   4. hasLoadScriptEffectCalled.current is false, loadScript executes
   *      Once the script is loaded, the onLoad and onReady will be called by then
   *   [If strict mode is enabled / is wrapped in <OffScreen /> component]
   *   5. The useEffect for onReady executes again
   *   6. hasOnReadyEffectCalled.current is true, so entire effect is skipped
   *   7. The useEffect for loadScript executes again
   *   8. hasLoadScriptEffectCalled.current is true, so entire effect is skipped
   *
   * - Second mount:
   *   1. The useEffect for onReady executes
   *   2. hasOnReadyEffectCalled.current is false, but the script has already loaded (found in LoadCache)
   *      onReady is called, set hasOnReadyEffectCalled.current to true
   *   3. The useEffect for loadScript executes
   *   4. The script is already loaded, loadScript bails out
   *   [If strict mode is enabled / is wrapped in <OffScreen /> component]
   *   5. The useEffect for onReady executes again
   *   6. hasOnReadyEffectCalled.current is true, so entire effect is skipped
   *   7. The useEffect for loadScript executes again
   *   8. hasLoadScriptEffectCalled.current is true, so entire effect is skipped
   */ const hasOnReadyEffectCalled = (0, _react.useRef)(false);
    (0, _react.useEffect)(()=>{
        const cacheKey = id || src;
        if (!hasOnReadyEffectCalled.current) {
            // Run onReady if script has loaded before but component is re-mounted
            if (onReady && cacheKey && LoadCache.has(cacheKey)) {
                onReady();
            }
            hasOnReadyEffectCalled.current = true;
        }
    }, [
        onReady,
        id,
        src
    ]);
    const hasLoadScriptEffectCalled = (0, _react.useRef)(false);
    (0, _react.useEffect)(()=>{
        if (!hasLoadScriptEffectCalled.current) {
            if (strategy === 'afterInteractive') {
                loadScript(props);
            } else if (strategy === 'lazyOnload') {
                loadLazyScript(props);
            }
            hasLoadScriptEffectCalled.current = true;
        }
    }, [
        props,
        strategy
    ]);
    if (strategy === 'beforeInteractive' || strategy === 'worker') {
        if (updateScripts) {
            scripts[strategy] = (scripts[strategy] || []).concat([
                {
                    id,
                    src,
                    onLoad,
                    onReady,
                    onError,
                    ...restProps,
                    nonce
                }
            ]);
            updateScripts(scripts);
        } else if (getIsSsr && getIsSsr()) {
            // Script has already loaded during SSR
            LoadCache.add(id || src);
        } else if (getIsSsr && !getIsSsr()) {
            loadScript({
                ...props,
                nonce
            });
        }
    }
    // For the app directory, we need React Float to preload these scripts.
    if (appDir) {
        // Injecting stylesheets here handles beforeInteractive and worker scripts correctly
        // For other strategies injecting here ensures correct stylesheet order
        // ReactDOM.preinit handles loading the styles in the correct order,
        // also ensures the stylesheet is loaded only once and in a consistent manner
        //
        // Case 1: Styles for beforeInteractive/worker with appDir - handled here
        // Case 2: Styles for beforeInteractive/worker with pages dir - Not handled yet
        // Case 3: Styles for afterInteractive/lazyOnload with appDir - handled here
        // Case 4: Styles for afterInteractive/lazyOnload with pages dir - handled in insertStylesheets function
        if (stylesheets) {
            stylesheets.forEach((styleSrc)=>{
                _reactdom.default.preinit(styleSrc, {
                    as: 'style'
                });
            });
        }
        // Before interactive scripts need to be loaded by Next.js' runtime instead
        // of native <script> tags, because they no longer have `defer`.
        if (strategy === 'beforeInteractive') {
            if (!src) {
                // For inlined scripts, we put the content in `children`.
                if (restProps.dangerouslySetInnerHTML) {
                    // Casting since lib.dom.d.ts doesn't have TrustedHTML yet.
                    restProps.children = restProps.dangerouslySetInnerHTML.__html;
                    delete restProps.dangerouslySetInnerHTML;
                }
                return /*#__PURE__*/ (0, _jsxruntime.jsx)("script", {
                    nonce: nonce,
                    dangerouslySetInnerHTML: {
                        __html: `(self.__next_s=self.__next_s||[]).push(${(0, _htmlescape.htmlEscapeJsonString)(JSON.stringify([
                            0,
                            {
                                ...restProps,
                                id
                            }
                        ]))})`
                    }
                });
            } else {
                // @ts-ignore
                _reactdom.default.preload(src, restProps.integrity ? {
                    as: 'script',
                    integrity: restProps.integrity,
                    nonce,
                    crossOrigin: restProps.crossOrigin
                } : {
                    as: 'script',
                    nonce,
                    crossOrigin: restProps.crossOrigin
                });
                return /*#__PURE__*/ (0, _jsxruntime.jsx)("script", {
                    nonce: nonce,
                    dangerouslySetInnerHTML: {
                        __html: `(self.__next_s=self.__next_s||[]).push(${(0, _htmlescape.htmlEscapeJsonString)(JSON.stringify([
                            src,
                            {
                                ...restProps,
                                id
                            }
                        ]))})`
                    }
                });
            }
        } else if (strategy === 'afterInteractive') {
            if (src) {
                // @ts-ignore
                _reactdom.default.preload(src, restProps.integrity ? {
                    as: 'script',
                    integrity: restProps.integrity,
                    nonce,
                    crossOrigin: restProps.crossOrigin
                } : {
                    as: 'script',
                    nonce,
                    crossOrigin: restProps.crossOrigin
                });
            }
        }
    }
    return null;
}
Object.defineProperty(Script, '__nextScript', {
    value: true
});
const _default = Script;
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=_0s1t2y0._.js.map