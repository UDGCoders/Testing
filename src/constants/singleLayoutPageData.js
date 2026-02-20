export const singleLayoutPageData = {
  singlelayoutpage: {
    topSection: {
      title: "Single-Page",
      subtitle: "Content Blueprint",
      primaryText:
        "This section starts with a split layout: title on the left and supporting primary text on the right. It introduces the page flow before the visual highlight image.",
      image: {
        src: "/wp-content/uploads/EVO-1-1.webp",
        alt: "Full width section visual",
      },
    },
    complexSection: {
      left: {
        title: "Left Blueprint",
        primaryText:
          "This side contains the title, primary text, and one list block.",
        listGroups: [
          {
            heading: "Left List Heading",
            items: [
              "Left list item one",
              "Left list item two",
              "Left list item three",
            ],
          },
        ],
      },
      right: {
        title: "Right Blueprint",
        subtitle: "Detailed Content Side",
        primaryText:
          "This side starts with title and heading, then primary text, then two list groups, and finally two containers in one row.",
        listGroups: [
          {
            heading: "Right List Heading One",
            items: [
              "Right list one - item one",
              "Right list one - item two",
              "Right list one - item three",
            ],
          },
          {
            heading: "Right List Heading Two",
            items: [
              "Right list two - item one",
              "Right list two - item two",
              "Right list two - item three",
            ],
          },
        ],
        cards: [
          {
            heading: "Container One",
            items: ["Priority actions", "Sequence and timeline", "Expected impact"],
          },
          {
            heading: "Container Two",
            items: [
              "Quality controls",
              "Risk handling items",
              "Success checkpoints",
            ],
          },
        ],
      },
    },
    mediaSections: [
      {
        image: {
          src: "/wp-content/uploads/Frame-2608290.webp",
          alt: "Left visual with right text",
        },
        title: "Image Left",
        subtitle: "Text Right",
        primaryText:
          "This section follows the requested pattern: image on the left with heading, primary text, and list on the right side.",
        listHeading: "Included Items",
        listItems: [
          "Heading and explanatory text",
          "Clearly grouped bullet points",
          "Balanced visual hierarchy",
        ],
        reverse: false,
        grayBackground: false,
        darkText: false,
      },
      {
        image: {
          src: "/wp-content/uploads/Frame-2608297.webp",
          alt: "Right visual with left text",
        },
        title: "Text Left",
        subtitle: "Image Right",
        primaryText:
          "The next section repeats the same structure with the image moved to the right and content moved to the left.",
        listHeading: "Section Notes",
        listItems: [
          "Alternating media direction",
          "Consistent spacing and rhythm",
          "Easy scanning for readers",
        ],
        reverse: true,
        grayBackground: false,
        darkText: false,
      },
      {
        image: {
          src: "/wp-content/uploads/Frame-2608293.webp",
          alt: "Gray background split section",
        },
        title: "Gray Background",
        subtitle: "Same Split Layout",
        primaryText:
          "This block keeps the same layout style as the previous sections, but switches to a gray background as requested.",
        listHeading: "Highlights",
        listItems: [
          "Visual contrast for section separation",
          "Reusable split structure",
          "Readable text and list hierarchy",
        ],
        reverse: false,
        grayBackground: true,
        darkText: true,
      },
    ],
    secondLastSection: {
      sides: [
        {
          heading: "Left Side Heading",
          primaryText:
            "Left side includes its own heading, primary text, and list content for balanced split layout.",
          listHeading: "Left List",
          items: [
            "Planning checkpoints",
            "Execution responsibilities",
            "Performance targets",
          ],
        },
        {
          heading: "Right Side Heading",
          primaryText:
            "Right side also includes heading, supporting primary text, and list items as requested.",
          listHeading: "Right List",
          items: [
            "Reporting cadence",
            "Optimization loop",
            "Continuous improvement items",
          ],
        },
      ],
    },
    finalSection: {
      title: "Final Centered",
      subtitle: "Heading And Text",
      primaryText:
        "This is the final section with centered heading and supporting text to close the page flow.",
    },
  },
  scootsee: {
    topSection: {
      title: "SCOOTSEE",
      // subtitle: "Content Blueprint",
      primaryText:
        "Scootsee is a Canadian smart mobility startup providing electric scooter-sharing services. We helped launch their brand from scratch - building everything from the name and identity to the full website and marketing materials.",
      image: {
        src: "/wp-content/uploads/scootsee-1.webp",
        alt: "Full width section visual",
      },
    },
    complexSection: {
      left: {
        title: "Details About The Project",
        primaryText:
          "Scootsee was starting from zero - no brand, no visuals, no platform. We helped them build a full digital identity and presence to support public launch, media outreach, and future investor alignment.",
        listGroups: [
          {
            heading: "Scope",
            items: [
              "Naming consultation and brand messaging",
              "Website design & development",
              "Launch strategy & marketing collateral",
              "Scalable CMS & performance optimization"
            ],
          },
        ],
      },
      right: {
        title: "A Comprehensive",
        subtitle: "Revamp",
        primaryText:
          "We weren't just designing a website — we were launching a brand. The challenge was to bring Scootsee to life as a credible, smart, and accessible solution for city mobility.",
        listGroups: [
          {
            heading: "We Focused On:",
            items: [
              "Building visual & verbal identity from scratch",
              "Creating scalable page design for riders and partners",
              "Establishing user trust through thoughtful UX and clean Ul",
              "Delivering in a tight pre-launch timeline"
            ],
          },
          {
            heading: "Challenges",
            items: [
              "Brand had no previous visual assets",
              "Unclear user journey or brand messaging",
              "Needed to serve multiple stakeholders (riders, cities, investors)",
            ],
          },
        ],
        cards: [
          {
            heading: "Our Role",
            items: ["We led the end-to-end strategy & creative execution - turning a game into a brand, and an idea into a digital presence",
               "Brand idetity (visual + verbal)", 
               "Full UI/UX design",
               "Webflow website design",
               "Marketing & PR launch materials"
            ]
          },
          {
            heading: "Technical",
            items: [
              "The digital experience needed to be fast, clean, and future-proof. We used flexible tools that would allow their internal team to scale later.",
              "Figma (wireframes, UI kit, prototype)",
              "Webflow (frontend & CMS)",
              "On-page SEO structure",
              "Analytics & lead tracking setup"
            ],
          },
        ],
      },
    },
    mediaSections: [
      {
        image: {
          src: "/wp-content/uploads/shiptquick-case.webp",
          alt: "Laying the Foundation: A Vision Takes Shape",
        },
        title: "Laying the Foundation: A Vision Takes Shape",
        // subtitle: "Text Right",
        primaryText:
          "We began with defining brand tone and core architecture. Scootsee needed to feel urban, friendly, and trustworthy.",
        // listHeading: "Included Items",
        listItems: [
          "Brand language developement (mission, tone, tagline)",
          "Page architecture around core flows: ride, partner, explore",
          "Moible-first sitemap and navigation flow",
          "Hero content blocks crafted for conversion"
        ],
        reverse: false,
        grayBackground: false,
        darkText: false,
      },
      {
        image: {
          src: "/wp-content/uploads/scoot-2.webp",
          alt: "Right visual with left text",
        },
        title: "Creating Marketing ",
        subtitle: "Material & Branding",
        primaryText:
          "We equipped the Scootsee team with everything needed for launch and early traction",
        // listHeading: "Section Notes",
        listItems: [
          "Logo system and iconography",
          "Digital color pallete and typography kit",
          "Social post templates",
          "Marketing one-pagers and decks",
          "City partner pitch visuals          ",
          "PR graphics and announcements"
        ],
        reverse: true,
        grayBackground: false,
        darkText: false,
      },
      {
        image: {
          src: "/wp-content/uploads/scoot-2-1.webp",
          alt: "Gray background split section",
        },
        title: "Website Built",
        // subtitle: "Same Split Layout",
        primaryText:
          "The site was designed to be modular, fast, and rider-friendly. We built a scalable webflow system that their team could update without dev support",
        listHeading: "Key features:",
        listItems: [
          "Fully responsive layout",
          "CMS for updates, FAQs, news",
          "SEO-optimized structure",
          "Partner-ready and mobile-friendly UX",
          "Lightweight animations to reinforce modernity"
        ],
        reverse: false,
        grayBackground: true,
        darkText: true,
      },
    ],
    secondLastSection: {
      sides: [
        {
          heading: "Challenges to Triumphs",
          primaryText:
            "In just a few weeks, we brought Scootsee from concept to launch-ready — with a brand identity and digital home that builds trust and traction.",
          // listHeading: "Left List",
          items: [
            "Built full identity + site in under 5 weeks",
            "Ready for pre-beta rollout and city partner demos",
            "Supported marketing and press coverage",
            "Delivered handover for in-house use"
          ],
        },
        {
          heading: "Marketing Strategy & Execution",
          primaryText:
            "Our design thinking was rooted in marketing performance and public perception.",
          // listHeading: "Right List",
          items: [
            "Conversion-first homepage layout",
            "Flexible landing page structure",
            "Email outreach content",
            "Social assets aligned with brand personality",
            "Press-ready visual kit"
          ],
        },
      ],
    },
    finalSection: {
      title: "Conclusion & Future Growth",
      // subtitle: "Heading And Text",
      primaryText:
        "Scootsee is now equipped with a professional, scalable brand system — ready to grow across cities, onboard riders, and pitch new partners. Their digital presence reflects their ambition and communicates their values clearly: simple, smart, sustainable mobility.",
    },
  },
    zen: {
    topSection: {
      title: "ZEN RETREATS",
      // subtitle: "Content Blueprint",
      primaryText:
        "Zen Retreats is a boutique serviced apartment project nestled in the scenic Barrian Valley near Nathia Gali. We helped bring the project to life from the ground up by developing everything from the digital brand identity to investor-focused messaging, marketing assets, and a conversion-ready online experience.",
      image: {
        src: "/wp-content/uploads/zen-1.webp",
        alt: "Full width section visual",
      },
    },
    complexSection: {
      left: {
        title: "Details About The Project",
        primaryText:
          "Zen Retreats started with a powerful vision: To build a serviced apartment experience — a blend of natural calm and commercial return — in the heart of Galivat. There was no digital presence, no cohesive message, and no system to target investors or future guests. We helped create a full-spectrum digital launch from brand clarity to market materials, digital assets, and investor engagement tools.",
        
      },
      right: {
        title: "A Comprehensive",
        subtitle: "Revamp",
        primaryText:
          "This wasn't just a property listing — it was a lifestyle investment product. Our role was to transform Zen Retreats into a premium real estate brand that appeals to both local and overseas Pakistani investors, while staying rooted in its core promise: peace that pays.",
        listGroups: [
          {
            heading: "Challenges",
            items: [
              "No previous brand assets or investor communication system",
              "Needed to attract multiple personas: investors, buyers, and city-based agents",
              "Project based in a remote area, requiring digital-first storytelling",
              "Needed to explain both vacation value and income logic clearly"
            ],
          },
          
        ],
        cards: [
          {
            heading: "Our Role",
            items: [
              "Led brand strategy and creative execution",
              "Transformed vision into digital presence",
              "Led full scale construction and architecural planning for the site",
            ],
          },
          {
            heading: "Technical",
            items: [
              "Figma (design, layout systems)",
              "Webflow + manual CMS (light build)",
              
            ],
          },
        ],
      },
    },
    mediaSections: [
      {
        image: {
          src: "/wp-content/uploads/shiptquick-case.webp",
          alt: "Left visual with right text",
        },
        title: "Laying the Foundation: A Vision Takes Shape",
        // subtitle: "Text Right",
        primaryText:
          "We began with the essence of the project — a getaway that grows in value. The brand language was crafted to appeal to aspirational investors who value nature, simplicity, and passive income. We built the website architecture around investor needs:",
        // listHeading: "Included Items",
        listItems: [
          "Scenic value",
          "ROI insights",
          "Payment flexibility",
          "Ease of management",
          "Construction credibility"
        ],
        reverse: false,
        grayBackground: false,
        darkText: false,
      },
      {
        image: {
          src: "/wp-content/uploads/zen-1-1.webp",
          alt: "Right visual with left text",
        },
        title: "Marketing & Branding ",
        subtitle: "Assets",
        primaryText:
          "We equipped the Zen Retreats team with tools to attract, inform, and convert investors — all tailored for digital-first selling.",
        // listHeading: "Section Notes",
        listItems: [
          "Logo system + iconography",
          "PDF brochures (pricing, floor plan, amenities)",
          "Reels scripts + visual guidelines",
          "Construction update templates",
          "WhatsApp and email message templates",
          "Overseas Pakistani targeting headlines"
        ],
        reverse: true,
        grayBackground: false,
        darkText: false,
      },
      {
        image: {
          src: "/wp-content/uploads/zen-2.webp",
          alt: "Gray background split section",
        },
        title: "Website Built",
        // subtitle: "Same Split Layout",
        primaryText:
          "A fully responsive, performance-focused site was created to convert visitors into leads and make it easy for the Zen team to update on the go.",
        listHeading: "Key features:",
        listItems: [
          "Hero video + scenic imagery",
          "ROI-focused layout blocks",
          "Embedded brochure + floor plan downloads",
          "Whatsapp CTAs with pre-filled investor pitch copy",
          "Mobile-first design",
          "SEO-optimized meta and schema"
        ],
        reverse: false,
        grayBackground: true,
        darkText: true,
      },
    ],
    secondLastSection: {
      sides: [
        {
          heading: "From Vision to Traction",
          primaryText:
            `In just a few weeks, Zen Retreats transformed from concept to credible brand.
            

With a luxury tone, focused visuals and ROl-first messaging, we helped the project earn attention from both domestic investors and overseas Pakistani buyers.`,
        
        },
        {
          heading: "Marketing Strategy & Execution",
          // primaryText:
            // "Right side also includes heading, supporting primary text, and list items as requested.",
          listHeading: "Outcomes",
          items: [
            "Digital brand + website built in under 4 weeks",
            "Assets used for launch events and city partner demos",
            "Ready for construction updates + marketing rollout",
            "Enabled WhatsApp-based investor conversations",
            "Equipped team with brand system + internal CMS"
          ],
        },
      ],
    },
    finalSection: {
      title: "Conclusion & Future Growth",
      // subtitle: "Heading And Text",
      primaryText:
        "Zen Retreats is now positioned as Pakistan's first modern hill investment brand offering luxury, lifestyle, and income in a single asset. With a foundation rooted in brand clarity, digital readiness, and real-time scalability, Zen Retreats is ready to expand across phases and elevate Barrian Valley into a national investment landmark.",
    },
  },
  vividly: {
    topSection: {
      title: "VIVIDLY APP",
      // subtitle: "Content Blueprint",
      primaryText:
        "Enhahcer wasn't built to be 'just another photo editor.' It was designed to make powerful Al photo tools feel invisible. Most people don't want more features. They want one tap that works. Whether it's removing a messy background, restoring an old photo, or colorizing a black & white memory - the goal was the same:",
      image: {
        src: "/wp-content/uploads/Property-1Frame-2608284.webp",
        alt: "Full width section visual",
      },
    },
    complexSection: {
      left: {
        title: "Details About The Project",
        primaryText:
          "Build and launch a mobile photo app that could:          ",
        listGroups: [
          {
            heading: "Scope",
            items: [
              "Compete in the crowded photo tools category with a unique, user-friendly Al experience",
              "Feel intuitive to a global, non-technical audience",
              "Monetize without overwhelming users with ads",
              "Scale across 86 languages",
              "And do all that... without sacrificing beauty or performance"
            ],
          },
        ],
      },
      right: {
        title: "A Comprehensive Revamp",
        // subtitle: "Detailed Content Side",
        primaryText:
          "Make photo magic effortless.",
        listGroups: [
          {
            heading: "We Focused On:",
            items: [
              "This wasn't just app development. It was full-stack product thinking, from Ul polish to ad strategy to backend architecture.",
            ],
          },
          {
            heading: "Challenges",
            items: [
              "The tech was there. But turning it into something mass-ready, monetizable, and multilingual needed something more. That's where RMAAC stepped in.",
            ],
          },
        ],
        cards: [
          {
            heading: "Our Role",
            items: ["We wore every hat on this one - designer, dev, growth strategist, and user advocate.",
              "Development & Architecture",
              "UI/UX & Store Presence",
              "Growth & Localization"
            ],
          },

        ],
      },
    },
    mediaSections: [
      {
        image: {
          src: "/wp-content/uploads/shiptquick-case.webp",
          alt: "Left visual with right text",
        },
        title: "Laying the Foundation: A Vision Takes Shape",
        // subtitle: "Text Right",
        // primaryText:
        // "This section follows the requested pattern: image on the left with heading, primary text, and list on the right side.",
        listHeading: "Development & Architecture",
        listItems: [
          "Built using Kotlin + Jetpack Compose",
          "Clean architecture for long-term stability",
          "Remote config + custom events for live feature control",
          "Integrated ad monetization across banners, interstitials, and rewarded flows"
        ],
        reverse: false,
        grayBackground: false,
        darkText: false,
      },
      {
        image: {
          src: "/wp-content/uploads/vividly-1-scaled.webp",
          alt: "Right visual with left text",
        },
        title: "Creating Marketing Material & Branding",
        // subtitle: "Image Right",
        // primaryText:
        // "The next section repeats the same structure with the image moved to the right and content moved to the left.",
        listHeading: "UI/UX & Store Presence",
        listItems: [
          "Ul that feels light, premium, and genuinely useful",
          "Store listing graphics, icon design, and walkthrough screenshots",
          "Competitor & keyword research across global markets",
          "ASO metadata optimized in 86 languages          ",
          "Google ad groups, A/B tests, and in-app performance tracking"
        ],
        reverse: true,
        grayBackground: false,
        darkText: false,
      },
      {
        image: {
          src: "/wp-content/uploads/vividly-2.webp",
          alt: "Gray background split section",
        },
        title: "What We Built Behind the Scenes",
        // subtitle: "Same Split Layout",
        // primaryText:
        // "This block keeps the same layout style as the previous sections, but switches to a gray background as requested.",
        listHeading: "Key features:",
        listItems: [
          "A remote control panel using Firebase Remote Config to manage feature throttling, ad logic, and seasonal promos",
          "Event tracking to see exactly which tools people loved (and which they ignored)",
          "A lightweight UX that didn't need a tutorial to understand",
        ],
        reverse: false,
        grayBackground: true,
        darkText: true,
      },
    ],
    secondLastSection: {
      sides: [
        {
          heading: "Results We're Proud Of",
          primaryText:
            "50,000+ downloads in just a few months and 10,000+ monthly active users",
          listHeading: "Users from",
          items: [
            "India",
            // "Pakistan",
            "Indonesia",
            "Europe",
            "4* star average rating with zero ad fatigue complaints"
          ],
        },
        {
          heading: "What Made Enhancer Work",
          primaryText:
            "Honestly? We respected the user. Just good tech, wrapped in quiet design and backed by smart growth systems.",
          listHeading: "Right List",
          items: [
            "The Lesson",
            "People don't fall in love with Al",
            "They fall in love with what it lets them do",
          ],
        },
      ],
    },
    finalSection: {
      title: "Final Word",
      // subtitle: "Heading And Text",
      primaryText:
        "Enhancer is now a fast-growing photo suite with loyal users, solid revenue, and a growth engine that doesn't need duct tape. From backend to brand voice, RMAAC helped turn a cool tech idea into a living, breathing product — one that earns its place on users' phones every day.",
    },
  },
  ppgp: {
    topSection: {
      title: "PREMIER PRIVATE GP",
      // subtitle: "Content Blueprint ",
      primaryText:
        "Premier Private GP is a premium private healthcare provider based in Surrey, designed to offer time-rich, discreet, and fully personalised GP care. As a project led by RMAAC, our mission was to evolve PPGP from a traditional clinic into a high-conversion private healthcare brand — trusted by patients, preferred by partners, and primed for scale.",
      image: {
        src: "/wp-content/uploads/Property-1Frame-2608284-1.webp",
        alt: "Full width section visual",
      },
    },
    complexSection: {
      left: {
        title: "Details About The Project",
        primaryText:
          "Premier Private GP was founded with a clear ambition: To redefine what private care feels like - blending modern medicine with a concierge approach, focused on continuity, convenience, and care that doesn't rush. They had a solid clinical offering but lacked the brand clarity, digital systems, and messaging to match their ambition. RMAAC stepped in to lead the entire creative and strategic build - from brand language and website to digital funnels, social presence, and campaign-ready marketing assets.",

      },
      right: {
        title: "A Comprehensive Revamp",
        // subtitle: "Detailed Content Side",
        primaryText:
          "This wasn't just a medical service; it was a lifestyle-led healthcare experience. Our role was to reimagine PPGP as a premium, patient-first brand that resonates with high-value patients, while supporting growth across partnerships, screenings, and memberships.",
        listGroups: [
          {
            heading: "Challenges",
            items: [
              "Needed to reflect high-end positioning with premium messaging and visuals",
              "No previous digital system for social, email, or paid marketing",
              "Clinic services were under-communicated and lacked conversion triggers",
              "Competitive private GP space, especially in Surrey & Berkshire",
              "Built a responsive app for patients' convenience"
            ],
          },

        ],
        cards: [
          {
            heading: "Our Role",
            items: [
              "Led brand narrative and tone-of-voice development",
              "Designed and developed the entire website",
            ],
          },
          {
            heading: "Technical",
            items: [
              "Figma (branding, web UI/UX design)",
              "Webflow (performance website, custom CMS)",
              "Meta Ads Manager (audience, funnel, campaign builds)",
            ],
          },
        ],
      },
    },
    mediaSections: [
      {
        image: {
          src: "/wp-content/uploads/shiptquick-case.webp",
          alt: "Left visual with right text",
        },
        title: "Laying the Foundation: A Vision Takes Shape",
        // subtitle: "Text Right",
        primaryText:
          "We began by establishing what the PPGP brand truly stands for - high access, high trust, no compromises. From that core, we built a digital foundation designed to make patients feel cared for before they even walk in.",
        // listHeading: "Included Items",
        listItems: [
          "Speed, mobile-first performance, and UX clarity",
          "Easy online bookings and clinic discovery",
          "Clear breakdown of services like health screenings, scans, home visits",
          "Pathways for phone consults, same-day care, and weight loss support",
          "Membership comparison pages to encourage retention"
        ],
        reverse: false,
        grayBackground: false,
        darkText: false,
      },
      {
        image: {
          src: "/wp-content/uploads/premier-1-1.webp",
          alt: "Right visual with left text",
        },
        title: "Marketing & Branding Assets",
        // subtitle: "Image Right",
        primaryText:
          "RMAAC equipped the PPGP team with a suite of digital and offline tools to attract, convert, and retain patients — especially those coming via new ad campaigns.",
        // listHeading: "Section Notes",
        listItems: [
          "Membership flyers (digital + print) for clinic display",
          "PDF brochures and onboarding kits",
          "Co-branded vouchers and discounts for patient footfall",
          "Meta + Google ads targeting high-income families and individuals",
          "WhatsApp templates and email copy for follow-up journeys",
          "Social content with a premium, educational tone"
        ],
        reverse: true,
        grayBackground: false,
        darkText: false,
      },
      {
        image: {
          src: "/wp-content/uploads/premier-2.webp",
          alt: "Gray background split section",
        },
        title: "Website Built",
        // subtitle: "Same Split Layout",
        primaryText:
          "Our site was designed to handle two things seamlessly: bookings and belief-building. We wanted prospective patients to trust PPGP instantly and act fast.",
        listHeading: "Key features:",
        listItems: [
          "Hero section with real human copy, not generic health stock messaging",
          "Scroll-stopping hooks for each service",
          "Highly optimized webcopy",
          "Membership comparison block with embedded lead CTAs",
          "Geo-specific SEO (Surrey/Berkshire)",
          "Clinic-specific landing pages for future locations"
        ],
        reverse: false,
        grayBackground: true,
        darkText: true,
      },
    ],
    secondLastSection: {
      sides: [
        {
          heading: "From Vision to Traction",
          primaryText:
            "Within the first month post-launch, Premier Private GP saw marked increases in inquiries, same-day bookings, and phone consult requests. The membership pages helped convert first-time visitors into loyal monthly subscribers.",

        },
        {
          heading: "Marketing Strategy & Execution",
          listHeading: "Outcomes",
          items: [
            "Website designed and launched in under 4 weeks",
            "Meta campaigns with 3x return on ad spend (in first month)",
            "Patient onboarding materials increased call bookings by 40%",
            "Brand tone, design, and flow built for long-term internal use"
          ],
        },
      ],
    },
    finalSection: {
      title: "Conclusion & Future Growth",
      // subtitle: "Heading And Text",
      primaryText:
        "Premier Private GP is now positioned as one of Surrey's most reliable private clinics - offering same-day appointments, elite screening options, and a truly personalised GP experience. With a digital ecosystem built by RMAAC, they are now scaling across services, locations, and partnerships — with every new patient welcomed into a brand that reflects care, class, and continuity.",
    },
  },
  aivigil: {
    topSection: {
      title: "AI-VIGIL",

      primaryText:
        "TAIVIGIL MSP is a North American managed IT and Al automation provider delivering proactive cybersecurity, monitoring, and helpdesk support. Their brand needed a modern, tech-forward digital presence to highlight their Al-enhanced capabilities.",
      image: {
        src: "/wp-content/uploads/Property-1Frame-2608283.webp",
        alt: "Full width section visual",
      },
    },
    complexSection: {
      left: {
        title: "Details About The Project",
        primaryText:
          "AIVIGIL approached us to transform their dated website into a polished, modern platform that clearly communicates advanced IT services and automated Al solutions.",
        listGroups: [
          {
            heading: "Scope",
            items: [
              "Redesigned UI/UX with a clean, technology-forward aesthetic",
              "Mobile-first responsive development",
              "Updated content architecture for clarity",
              "SEO-friendly structure to improve trust and lead generation"
            ],
          },
        ],
      },
      right: {
        title: "A Comprehensive",
        subtitle: "Revamp",
        primaryText:
          "Our mission was to visually express AIVIGIL's Al-powered MSP offering-conveying reliability, intelligence, and technical professionalism.",
        listGroups: [
          {
            heading: "We Focused On:",
            items: [
              "Modern, tech-inspired visuals",
              "Service-first user journeys",
              "Clear, hierarchical content",
              "Scalable backend with CMS flexibility"
            ],
          },
          {
            heading: "Challenges",
            items: [
              "Dense service offerings requiring simplified presentation",
              "Lack of visual cohesion across pages",
              "Weak SEO organization limiting new business inquiries",
            ],
          },
        ],
        cards: [
          {
            heading: "Our Role",
            items: ["Brand Refresh & Creative UI Direction", "Frontend Implementation",],
          },
          {
            heading: "Technical",
            items: [
              "Wordpress + Webflow Hybrid",
              "Figma for design system & wireframes",
              "Custom API Integrations (e.g. security tools)",
              "Mobile-responsive & Tablet-friendly designs",
              "On-page SEO & Schema Markup"
            ],
          },
        ],
      },
    },
    mediaSections: [
      {
        image: {
          src: "/wp-content/uploads/shiptquick-case.webp",
          alt: "Left visual with right text",
        },
        title: "Laying the Foundation: A",
        subtitle: "Vision Takes Shape",
        primaryText:
          "To present AIVIGIL as both cutting-edge and trustworthy, we restructured content into clear categories:",
        // listHeading: "Included Items",
        listItems: [
          "Our Products (FinGuard, MedShield)",
          "Our Services (RMM, Cybersecurity, Helpdesk)",
          "Industries We Serve",
          "Why AI-VIGIL? (value proposition blocks)",
          "Lead funnel in hero section",
          "Clearly segmented services pages",
          "Trust markers (testimonials + uptime stats)"
        ],
        reverse: false,
        grayBackground: false,
        darkText: false,
      },
      {
        image: {
          src: "/wp-content/uploads/ai-1.webp",
          alt: "Right visual with left text",
        },
        title: "Creating Marketing",
        subtitle: "Material & Branding",
        primaryText:
          "We crafted additional assets to support AIVIGIL's commercial and lead-gen efforts:",
        // listHeading: "Section Notes",
        listItems: [
          "Product thumbnails and icons",
          "Hero banners with Al-driven themes",
          "Content blocks for case studies & data sheets",
          "Migration path visuals and architecture diagrams"
        ],
        reverse: true,
        grayBackground: false,
        darkText: false,
      },
      {
        image: {
          src: "/wp-content/uploads/ai-2.webp",
          alt: "Gray background split section",
        },
        title: "Website Built",
        // subtitle: "Same Split Layout",
        primaryText:
          "The new website, built in WordPress with Webflow front-end components, includes:",
        listHeading: "Key features:",
        listItems: [
          "Responsive, modular page layouts",
          "CMS-powered blog and case study integration",
          "Schema markup for MSP services and security claims",
          "Conversion-focused contact forms and chat triggers"
        ],
        reverse: false,
        grayBackground: true,
        darkText: true,
      },
    ],
    secondLastSection: {
      sides: [
        {
          heading: "Challenges to Triumphs",
          primaryText:
            "AIVIGIL had a complex service mix with outdated presentation — we streamlined it into a powerful, modern digital footprint.",
          // listHeading: "Left List",
          items: [
            "Cohesive visual tone that matches branding",
            "Improved clarity around Al-enhanced solutions",
            "SEO-ready site structure with rich snippet optimization",
            "Lead conversions supported by a marketing-first layout"
          ],
        },
        {
          heading: "Marketing Strategy & Execution",
          primaryText:
            "We designed the front-end experience from a lead-generation standpoint: clear service categories, trust-building content, and conversion-focused CTAs.",
          // listHeading: "Right List",
          items: [
            "Hero CTA prompts (Ask Our Experts)",
            "Service-tracking contact forms",
            "Uptime and support metrics showcased dynamically",
            "Employee benefits and industries baked into Ul blocks"
          ],
        },
      ],
    },
    finalSection: {
      title: "Conclusion & Future Growth",
      // subtitle: "Heading And Text",
      primaryText:
        "AIVIGIL now presents as a forward-thinking Al-based MSP with a compelling digital experience. Their new site positions them as reliable tech partners, ready for enterprise clients, healthcare, financial firms, and more.",
    },
  },

};

export default singleLayoutPageData;
