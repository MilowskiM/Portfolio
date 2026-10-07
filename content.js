/*
  EDIT THIS FILE TO UPDATE THE WEBSITE.
  Keep quotation marks around text. Add or remove items inside arrays as needed.
*/

window.PORTFOLIO_CONTENT = {
  person: {
    siteTitle: "Michael Milowski — Aerospace Engineer",
    siteDescription: "The engineering portfolio of Michael Milowski.",
    name: "Michael Milowski",
    shortName: "Michael",
    role: "Aerospace Engineering Student",
    location: "University of Illinois Urbana-Champaign",
    graduation: "B.S. Aerospace Engineering · May 2028",
    email: "mdm17@illinois.edu",
    linkedin: "https://www.linkedin.com/in/michaelmilowski/",
    heroEyebrow: "AEROSPACE · SYSTEMS · HARDWARE",
    heroTitle: "Understanding Systems to Design the Future.",
    heroIntro: "I’m an aerospace engineering student focused on space missions, complex systems, and turning concepts into reality.",
    aboutTitle: "Curious about the entire system.",
    aboutParagraphs: [
      "I am an aerospace engineering student at the University of Illinois Urbana-Champaign. I enjoy work that connects analysis, design, manufacturing, and testing—especially when the problem sits at the intersection of hardware and mission objectives.",
      "My experience spans space mission cost analysis at NASA Langley, electromechanical actuation systems at Woodward, cryogenic propellant research, and detailed CAD. I bring a practical, collaborative approach to technical problems and communicate complex work clearly across teams."
    ],
    aboutPhoto: "assets/profile-headshot.jpg?v=20261007-assets",
    aboutPhotoAlt: "Professional headshot of Michael Milowski",
    currentFocus: "Currently supporting the Space Mission Cost Team at NASA Langley Research Center."
  },

  navigation: [
    { label: "Home", route: "home" },
    { label: "Experience", route: "experience" },
    { label: "Portfolio", route: "portfolio" },
    { label: "Résumé", route: "resume" },
    { label: "About", route: "about" }
  ],

  home: {
    selectedWorkLabel: "SELECTED WORK",
    experienceLabel: "FEATURED EXPERIENCE",
    portfolioButton: "View my projects",
    experienceButton: "Explore experience",
    resumeButton: "Download résumé",
    aboutEyebrow: "ABOUT ME",
    aboutTitle: "Building a well-rounded engineering perspective across every phase of complex projects and missions.",
    aboutText: "I’m an aerospace engineering student who enjoys connecting analysis, design, manufacturing, and testing. My recent work has taken me from mission cost analysis at NASA Langley to systems integration and PCB rework and repair at Woodward.",
    portraitCaption: "Michael Milowski",
    portraitLabel: "Aerospace engineering",
    portraitLinkLabel: "View Michael Milowski’s profile",
    nasaLink: "NASA experience",
    woodwardLink: "Woodward experience"
  },

  pageCopy: {
    experienceEyebrow: "PROFESSIONAL EXPERIENCES / 01",
    experienceTitle: "Experiences built to develop my engineering toolbox.",
    experienceIntro: "From early mission analysis to system integration, I’m learning how to make well-informed engineering decisions that carry through an entire program.",
    portfolioEyebrow: "SELECTED PROJECTS / 02",
    portfolioTitle: "My Portfolio",
    portfolioIntro: "A selection of projects that reflect how I apply my engineering knowledge and collaborate with teams to achieve more together than I could alone.",
    projectPrefix: "PROJECT",
    resumeEyebrow: "BACKGROUND / 03",
    educationLabel: "Education",
    toolkitLabel: "Toolkit",
    resumeExperienceLabel: "Experience & leadership",
    recognitionLabel: "Recognition",
    aboutEyebrow: "ABOUT / 04",
    studyingLabel: "Studying",
    basedAtLabel: "Based at",
    reachMeLabel: "Reach me",
    videoFallback: "Your browser cannot play this video. Download it instead."
  },

  experiences: [
    {
      organization: "NASA Langley Research Center",
      role: "Space Mission Analysis Branch · Pathways Intern",
      date: "August 2026 — Present",
      summary: "Supporting the Space Mission Cost Team by analyzing the technical details of past and future missions, developing cost analyses, and helping assess mission feasibility for leadership decisions.",
      details: [
        "Contribute to engineering activities for the Space Mission Cost Team.",
        "Translate mission architectures and technical parameters into structured cost analysis.",
        "Support decision-making with clear, traceable analysis of mission feasibility."
      ],
      image: "assets/images/nasa-langley.webp",
      imageAlt: "NASA Langley Research Center entrance sign",
      imageFit: "contain",
      slug: "nasa",
      accent: "MISSION ANALYSIS"
    },
    {
      organization: "Woodward, Inc.",
      role: "Aerospace Electronics Systems NPI Engineering Intern",
      date: "May 2026 — August 2026",
      summary: "Worked with a small engineering team to troubleshoot and integrate an electromechanical thrust reverser actuation system, review system requirements, improve weight estimates, and design practical test tooling.",
      details: [
        "Performed PCB rework, cable builds, and acceptance test procedures for an actuation system.",
        "Reviewed and corrected military actuation-system requirements against customer specifications.",
        "Designed and 3D-printed tooling that improved resolver testing accuracy and efficiency."
      ],
      image: "assets/images/woodward-experience.jpg",
      imageAlt: "Michael Milowski during his Woodward engineering experience",
      slug: "woodward",
      accent: "ELECTROMECHANICAL SYSTEMS"
    },
    {
      organization: "NASA L’SPACE",
      role: "Deputy Project Manager of Resources",
      date: "January 2025 — May 2025",
      summary: "Led the programmatic strategy for a multidisciplinary NASA mission concept, coordinating cost, schedule, and risk through Preliminary Design Review.",
      details: [
        "Led weekly meetings and delegated work across a multidisciplinary team.",
        "Applied NASA cost models, Gantt charts, and risk matrices to the mission concept.",
        "Produced an organized, traceable final report aligned with NASA project expectations."
      ],
      image: "assets/images/lspace-pdr.png",
      imageAlt: "NASA L’SPACE Team 17 Preliminary Design Review title slide",
      imageFit: "contain",
      slug: "lspace",
      accent: "PROJECT LEADERSHIP"
    }
  ],

  projects: [
    {
      title: "NASA Human Lander Challenge — ECLIPSE",
      meta: "NASA HuLC 2025 · Advanced cryogenics · Technical paper",
      description: "I contributed to ECLIPSE—Efficient Cryogenic Low Invasive Propellant Supply Exchange—a University of Illinois concept for improving cryogenic propellant transfer in microgravity. My research evaluated methods to reduce line chilldown time and propellant boiloff under Artemis transfer conditions.",
      impact: "The team was selected as one of 12 national HuLC finalists and received the award for Best Technical Presentation.",
      mediaType: "image",
      media: "./hulc-project-image.png",
      mediaFit: "contain",
      imageAlt: "Cover page of the ECLIPSE NASA Human Lander Challenge technical paper",
      downloadLabel: "Download technical paper",
      download: "2025-HuLC-UIUC-Technical-Paper.pdf"
    },
    {
      title: "Electronics Prototyping",
      meta: "Circuit design · Fabrication · Iteration",
      description: "A hand-built circuit prototype developed on perfboard. The project reflects my interest in learning beyond the aerospace curriculum and developing practical electronics skills that broaden my technical foundation and deepen my understanding of circuitry.",
      impact: "Learning to read schematics and design and build circuits challenged me to work outside my existing experience and expand my engineering knowledge.",
      mediaType: "image",
      media: "assets/images/circuit-prototype.jpg",
      imageAlt: "Hand-built electronics circuit mounted on a small wheeled prototype"
    },
    {
      title: "Interactive Engineering Open House Exhibit",
      meta: "Kappa Theta Tau · Team design · Public engagement",
      description: "A year-long, team-built exhibit designed to make engineering concepts engaging and approachable for visitors of all ages. I helped ideate, design, and fabricate mechanical components for an interactive automatic slime maker that demonstrated mechanical and electrical principles.",
      impact: "The project combined mechanical design, iteration, teamwork, and technical communication in a very approachable manner.",
      mediaType: "image",
      media: "assets/images/eoh-team.jpg",
      imageAlt: "Engineering students presenting their interactive exhibit"
    },
    {
      title: "Woodward Plane Project",
      meta: "Woodward · Aerospace systems · Interactive prototype",
      description: "A hands-on Woodward demonstration that combines a scale aircraft, an illuminated control PCB display, and mechanical hardware in an easy-to-operate design.",
      impact: "The project allowed the team to design integrated hardware and electronics while challenging us to complete a functioning prototype on a short timeline.",
      mediaType: "video",
      media: "./woodward-plane.mp4",
      poster: "./woodward-plane-poster.jpg",
      imageAlt: "Woodward aircraft demonstration with a scale airplane, illuminated display, and mechanical test stand"
    },
    {
      title: "NASA SLS Block 1 — Digital Model",
      meta: "Siemens NX · CAD · Kinematic simulation",
      description: "A detailed 1:1 digital model of NASA’s Space Launch System Block 1, developed from technical references and photogrammetry. The assembly includes more than 30 moving components, 48 unique materials, 43 decals, detachable stages, renderings, and an assembly animation.",
      impact: "Built to deepen my understanding of launch vehicle architecture while improving my solid, surface, assembly, rendering, and simulation skills in Siemens NX.",
      mediaType: "video",
      media: "assets/video/sls-model.mp4",
      fallbackMedia: "assets/video/sls-model.avi",
      poster: "assets/images/sls-poster.jpg",
      imageAlt: "Animation of a detailed NASA SLS Block 1 CAD model"
    },
    {
      title: "Resolver Test Tooling",
      meta: "Woodward · Rapid prototyping · Test engineering",
      description: "Designed a custom 3D-printed fixture to support resolver testing before installation. Iterative prototypes helped improve test repeatability, protect components, and make the setup faster and easier to use.",
      impact: "The work paired hands-on prototyping with real manufacturing and test constraints, demonstrating how small tooling changes can create meaningful efficiency gains.",
      mediaType: "image",
      media: "assets/images/resolver-tooling.jpg",
      imageAlt: "Resolver beside a tan 3D-printed test fixture"
    }
  ],

  resume: {
    title: "Résumé",
    intro: "A record of my engineering experience, leadership, education, and technical toolkit.",
    primaryDownloadLabel: "Download current résumé",
    primaryDownload: "assets/resume/Michael_Milowski_Resume.pdf",
    education: {
      school: "University of Illinois Urbana-Champaign",
      degree: "Bachelor of Science in Aerospace Engineering",
      date: "August 2024 — May 2028",
      detail: "GPA 3.76/4.00"
    },
    experienceItems: [
      { role: "Pathways Intern", organization: "NASA Langley Research Center", date: "Aug 2026 — Present", detail: "Space Mission Analysis Branch; mission cost analysis and feasibility support." },
      { role: "NPI Engineering Intern", organization: "Woodward, Inc.", date: "May 2026 — Aug 2026", detail: "Electromechanical actuation integration, PCB and cable rework, requirements, testing, and tooling." },
      { role: "HuLC Team Member", organization: "Illinois Space Society", date: "Aug 2024 — May 2026", detail: "Cryogenic propellant-transfer research; national finalist and Best Technical Presentation." },
      { role: "Deputy Project Manager of Resources", organization: "NASA L’SPACE", date: "Jan 2025 — May 2025", detail: "Mission cost, schedule, risk, team coordination, and Preliminary Design Review." }
    ],
    awards: [
      "Best Technical Presentation — NASA HuLC Team",
      "Dean’s List — University of Illinois Urbana-Champaign",
      "Illinois State Scholar",
      "AP Scholar with Distinction"
    ],
    skillGroups: [
      { label: "CAD & Design", items: "Autodesk Inventor, AutoCAD, Siemens NX, Fusion 360, Creo" },
      { label: "Programming", items: "C++, Python, Java" },
      { label: "Engineering Tools", items: "Excel, IBM DOORS, Jira, Windchill, Microsoft 365" }
    ]
  },

  footer: {
    contactLabel: "Contact me",
    copyright: "Built by Michael Milowski"
  }
};
