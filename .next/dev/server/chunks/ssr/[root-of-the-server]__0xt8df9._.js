module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/lib/ThemeContext.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeProvider",
    ()=>ThemeProvider,
    "useTheme",
    ()=>useTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const ThemeContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])({
    theme: 'light',
    toggle: ()=>{}
});
function ThemeProvider({ children }) {
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('light');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const stored = localStorage.getItem('theme');
        const preferred = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        const initial = stored ?? preferred;
        setTheme(initial);
        applyTheme(initial);
    }, []);
    const toggle = ()=>{
        setTheme((prev)=>{
            const next = prev === 'light' ? 'dark' : 'light';
            localStorage.setItem('theme', next);
            applyTheme(next);
            return next;
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemeContext.Provider, {
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
function applyTheme(theme) {
    const root = document.documentElement;
    if (theme === 'dark') {
        root.classList.add('dark');
    } else {
        root.classList.remove('dark');
    }
}
const useTheme = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(ThemeContext);
}),
"[project]/lib/translations.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/lib/LanguageContext.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguageProvider",
    ()=>LanguageProvider,
    "useLang",
    ()=>useLang,
    "useT",
    ()=>useT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/translations.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
const LanguageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])({
    lang: 'sr',
    setLang: ()=>{},
    toggle: ()=>{}
});
function LanguageProvider({ children }) {
    // Default to Serbian; localStorage will override on the client.
    const [lang, setLangState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('sr');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
    }, []);
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        try {
            document.documentElement.lang = lang;
        } catch  {}
    }, [
        lang
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageContext.Provider, {
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
const useLang = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(LanguageContext);
function useT() {
    const { lang } = useLang();
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translations"][lang];
}
}),
"[project]/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
exports._ = _interop_require_default;
}),
"[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
            else newObj[key] = obj[key];
        }
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
exports._ = _interop_require_wildcard;
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
}
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxRuntime;
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactDOM;
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React;
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/contexts/head-manager-context.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['contexts'].HeadManagerContext;
}),
"[project]/node_modules/next/dist/client/set-attributes-from-props.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "setAttributesFromProps", {
    enumerable: true,
    get: function() {
        return setAttributesFromProps;
    }
});
const DOMAttributeNames = {
    acceptCharset: 'accept-charset',
    className: 'class',
    htmlFor: 'for',
    httpEquiv: 'http-equiv',
    noModule: 'noModule'
};
const ignoreProps = [
    'onLoad',
    'onReady',
    'dangerouslySetInnerHTML',
    'children',
    'onError',
    'strategy',
    'stylesheets'
];
function isBooleanScriptAttribute(attr) {
    return [
        'async',
        'defer',
        'noModule'
    ].includes(attr);
}
function setAttributesFromProps(el, props) {
    for (const [p, value] of Object.entries(props)){
        if (!props.hasOwnProperty(p)) continue;
        if (ignoreProps.includes(p)) continue;
        // we don't render undefined props to the DOM
        if (value === undefined) {
            continue;
        }
        const attr = DOMAttributeNames[p] || p.toLowerCase();
        if (el.tagName === 'SCRIPT' && isBooleanScriptAttribute(attr)) {
            // Correctly assign boolean script attributes
            // https://github.com/vercel/next.js/pull/20748
            ;
            el[attr] = !!value;
        } else {
            el.setAttribute(attr, String(value));
        }
        // Remove falsy non-zero boolean attributes so they are correctly interpreted
        // (e.g. if we set them to false, this coerces to the string "false", which the browser interprets as true)
        if (value === false || el.tagName === 'SCRIPT' && isBooleanScriptAttribute(attr) && (!value || value === 'false')) {
            // Call setAttribute before, as we need to set and unset the attribute to override force async:
            // https://html.spec.whatwg.org/multipage/scripting.html#script-force-async
            el.setAttribute(attr, '');
            el.removeAttribute(attr);
        }
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/client/request-idle-callback.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
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
"[project]/node_modules/next/dist/shared/lib/htmlescape.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
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
"[project]/node_modules/next/dist/client/script.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
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
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-ssr] (ecmascript)");
const _interop_require_wildcard = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-ssr] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
const _reactdom = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)"));
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)"));
const _headmanagercontextsharedruntime = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/contexts/head-manager-context.js [app-ssr] (ecmascript)");
const _setattributesfromprops = __turbopack_context__.r("[project]/node_modules/next/dist/client/set-attributes-from-props.js [app-ssr] (ecmascript)");
const _requestidlecallback = __turbopack_context__.r("[project]/node_modules/next/dist/client/request-idle-callback.js [app-ssr] (ecmascript)");
const _htmlescape = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/htmlescape.js [app-ssr] (ecmascript)");
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
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
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
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0xt8df9._.js.map