/**
 * ============================================================================
 * AHMED ABDELAZIM — HIGH-CONVERSION AUTOMATION SPECIALIST PORTFOLIO
 * ============================================================================
 * 
 * To update your portfolio content, simply edit the PORTFOLIO_DATA object below.
 * When you save this file and refresh index.html, all content, projects,
 * social links, opportunities, and contact methods will update automatically!
 * ============================================================================
 */

/* ============================================================================
   1. PORTFOLIO CONFIGURATION DATA (EDIT YOUR INFORMATION HERE)
   ============================================================================ */

const PORTFOLIO_DATA = {
  // --- Personal & Identity ---
  personal: {
    name: "Ahmed Abdelazim",
    title: "Business Automation & AI Automation Specialist",
    shortRole: "Business Automation",
    badgeText: "Business Automation & AI Specialist",
    headline: "I Turn Manual Business Processes Into Automated Systems.",
    heroSubtitle: "I build practical automation solutions that help businesses eliminate repetitive work, save time, reduce operational friction, and improve the way their teams work.",
    email: "Ahmed.abdelazzim@outlook.com",
    location: "Cairo, Egypt",
    age: "25 Years Old",
    experienceYears: "~5 Years Practical",
    experienceSummary: "~5 Years of Experience",
    clientsCount: "4–5 Real Clients",
    clientsSummary: "4–5 Real & Recurring Clients",
    profileImage: "", // Optional: e.g. "assets/profile.jpg" (leave empty for custom SVG avatar)
    manifestoQuote: "The tool is not the solution. The workflow is.",
    manifestoText: "I focus on understanding the business problem and designing the right workflow before deciding which technology should power it.",
    philosophyQuote: "Less Manual Work. More Automation. Better Operations.",
    philosophyText: "Technology should remove unnecessary work, not create more of it. I focus on building systems that make business processes simpler, faster, and more efficient.",
    copyrightYear: 2026
  },

  // --- Project & Availability Status ---
  availability: {
    enabled: true,
    text: "Currently Available for New Automation Projects"
  },

  // --- Contact & Calendar Booking ---
  contact: {
    email: "Ahmed.abdelazzim@outlook.com",
    calendarUrl: "", // Optional: e.g. "https://calendly.com/your-link" (button appears automatically when added)
    whatsappUrl: ""  // Optional: e.g. "https://wa.me/your-number"
  },

  // --- Social Media Profiles ---
  // Replace "#" with your real profile URLs when available.
  socials: {
    linkedin: "#linkedin",
    github: "#github",
    upwork: "#upwork",
    fiverr: "#fiverr",
    youtube: "#youtube",
    facebook: "#facebook"
  },

  // --- 1. Automation Opportunity Finder (Conversion & Lead Qualification) ---
  opportunityFinder: [
    {
      id: "data-entry",
      label: "Repetitive Data Entry",
      description: "Ideal candidate for automation. Eliminates copy-paste errors, reduces hours of daily repetitive work, and ensures real-time accuracy across spreadsheets and databases.",
      prefillTopic: "Repetitive Data Entry Automation"
    },
    {
      id: "order-processing",
      label: "Order Processing & Tracking",
      description: "High-value automation workflow. Connects ad intake, confirmation calls, telesales queue, shipping carrier dispatch, and live status synchronization.",
      prefillTopic: "E-Commerce Order Lifecycle Automation"
    },
    {
      id: "reporting",
      label: "Reporting & Dashboards",
      description: "Saves critical leadership time. Automatically extracts, aggregates, and transforms data into clean dashboards and scheduled email/Telegram digests.",
      prefillTopic: "Automated Reporting & KPI Dashboards"
    },
    {
      id: "attendance",
      label: "Attendance & Time Tracking",
      description: "Streamlines internal workforce operations. Replaces manual logbooks with secure clock in/out, break logging, and automated hour calculations.",
      prefillTopic: "Staff Attendance & Time Tracking System"
    },
    {
      id: "notifications",
      label: "Instant Team & Client Alerts",
      description: "Removes communication delays. Triggers automated Telegram and email notifications when records update, status changes, or files arrive.",
      prefillTopic: "Multi-Channel Notification Workflows"
    },
    {
      id: "file-handling",
      label: "File Handling & Drive Storage",
      description: "Organizes business assets instantly. Automatically routes uploaded files to structured Google Drive folders and dispatches notifications.",
      prefillTopic: "Automated File Upload & Storage Workflow"
    },
    {
      id: "customer-followup",
      label: "Telesales & Follow-up Queues",
      description: "Eliminates lead friction. Automatically organizes incoming inquiries into actionable queues with status tracking and handover triggers.",
      prefillTopic: "Telesales Queue & Follow-up System"
    },
    {
      id: "other-process",
      label: "Other Manual Processes",
      description: "Have a custom workflow that takes too much time? Let's analyze the steps, isolate repetitive tasks, and design a tailored automation system.",
      prefillTopic: "Custom Operational Workflow Automation"
    }
  ],

  // --- 2. "What Can I Automate?" Interactive Explorer ---
  problemExplorer: [
    {
      id: "ecommerce",
      label: "E-Commerce Pipeline",
      steps: [
        { num: "01", name: "Social Ad Intake", detail: "Automated capture of incoming Facebook / social media order leads." },
        { num: "02", name: "Telesales Queue", detail: "Automatic distribution to agents with confirmation tracking." },
        { num: "03", name: "Carrier Dispatch", detail: "Direct structured handover to shipping and delivery carriers." },
        { num: "04", name: "Live Status Sync", detail: "Real-time updates across operations sheets and reporting logs." }
      ]
    },
    {
      id: "operations",
      label: "Business Operations",
      steps: [
        { num: "01", name: "Data Ingestion", detail: "Capture data from forms, inquiries, or external tools." },
        { num: "02", name: "Validation Logic", detail: "Automated error-checking and business rule enforcement." },
        { num: "03", name: "File Routing", detail: "Automatic sorting into structured Google Drive folder hierarchy." },
        { num: "04", name: "Team Alerts", detail: "Instant notifications sent to operational team channels." }
      ]
    },
    {
      id: "administration",
      label: "Administration & HR",
      steps: [
        { num: "01", name: "Clock In / Out", detail: "Employee login, logout, and break timestamps recorded accurately." },
        { num: "02", name: "Attendance Logs", detail: "Centralized time-tracking data organized without manual entry." },
        { num: "03", name: "Payroll Support", detail: "Automated calculation of hours, overtime, and deductions." },
        { num: "04", name: "Admin Reports", detail: "Structured monthly summaries ready for business administration." }
      ]
    },
    {
      id: "communication",
      label: "Connected Communications",
      steps: [
        { num: "01", name: "Trigger Event", detail: "Form submitted, sheet row updated, or order confirmed." },
        { num: "02", name: "Logic Engine", detail: "Apps Script determines notification destination and payload." },
        { num: "03", name: "Telegram / Mail", detail: "Instant message or file delivered directly to stakeholders." },
        { num: "04", name: "Audit Trail", detail: "Dispatch timestamp logged for transparent accountability." }
      ]
    }
  ],

  // --- 3. Proof Center (Verified Real-World Credibility) ---
  proofPoints: [
    {
      title: "~5 Years Practical Experience",
      description: "Hands-on development of business systems, Google Sheets workflows, and Google Apps Script solutions.",
      icon: "clock"
    },
    {
      title: "Real Client Operations",
      description: "Proven track record delivering operational automation for 4–5 real clients with ongoing recurring relationships.",
      icon: "check-circle"
    },
    {
      title: "In Daily Operational Use",
      description: "Built production-grade systems that actively power daily e-commerce, attendance, and administrative routines.",
      icon: "layers"
    },
    {
      title: "Company & Team Experience",
      description: "Collaborated directly inside company and team environments to solve ground-level operational bottlenecks.",
      icon: "trending-up"
    },
    {
      title: "Problem-First Engineering",
      description: "Focusing on workflow architecture, root causes, and business logic rather than pushing unnecessary complex tools.",
      icon: "help-circle"
    },
    {
      title: "Active Technical Expansion",
      description: "Continuously growing capabilities into n8n workflow orchestration and advanced AI-assisted automation.",
      icon: "star"
    }
  ],

  // --- 4. Who I Help (Target Business Profiles) ---
  whoIHelp: [
    {
      title: "E-Commerce & Social Sellers",
      description: "Businesses selling through Facebook Ads or social media needing automated order confirmation, telesales queues, and carrier dispatch.",
      icon: "shopping-cart"
    },
    {
      title: "Teams on Google Workspace",
      description: "Companies looking to transform standard Google Sheets and Drive into automated internal tools and multi-user web portals.",
      icon: "grid"
    },
    {
      title: "Small & Growing Businesses",
      description: "Operational teams looking to eliminate hours of manual copy-pasting, data entry, and fragmented administrative routines.",
      icon: "trending-up"
    },
    {
      title: "Operations & HR Leads",
      description: "Managers requiring reliable staff time-tracking, structured payroll calculation support, and automated reporting digests.",
      icon: "activity"
    }
  ],

  // --- 5. The 4-Step "How I Work" Process ---
  howIWork: [
    {
      step: "01 • DISCOVER",
      title: "Map the Workflow",
      description: "Understand your current business process from start to finish, identifying where data enters and where delays occur."
    },
    {
      step: "02 • ANALYZE",
      title: "Target Bottlenecks",
      description: "Isolate repetitive manual tasks, copy-paste friction, error-prone handoffs, and time drains."
    },
    {
      step: "03 • AUTOMATE",
      title: "Engineer the System",
      description: "Build robust Google Apps Script and Sheets automation that connects tools, validates data, and removes manual effort."
    },
    {
      step: "04 • IMPROVE",
      title: "Optimize & Scale",
      description: "Continuously identify additional automation opportunities and ensure the system scales with business growth."
    }
  ],

  // --- 6. Featured Project (Case Study) ---
  featuredProject: {
    id: "ecommerce-automation-system",
    badge: "Featured Case Study",
    statusBadge: "In Daily Operational Use",
    metaCategory: "Core Operations Infrastructure",
    title: "E-Commerce Order Management & Automation System",
    description: "Designed and managed a full-scale operational backbone for an active online business selling through Facebook and social ads. The system manages order intake, confirmation workflows, telesales management, status updates, shipping provider dispatch, and real-time operational tracking — actively powering daily company operations.",
    steps: [
      {
        num: "01",
        title: "The Challenge",
        body: "Incoming social media orders caused confirmation bottlenecks, manual telesales tracking friction, and error-prone manual dispatch to shipping carriers."
      },
      {
        num: "02",
        title: "The Workflow",
        body: "Structured the entire order lifecycle into distinct stages: automated intake, telesales queue, status confirmation, and carrier dispatch."
      },
      {
        num: "03",
        title: "Automation Layer",
        list: [
          "Automated order confirmation",
          "Telesales queue distribution",
          "Automated shipping dispatch",
          "Real-time status updates"
        ]
      },
      {
        num: "04",
        title: "Operational Value",
        body: "Created a unified, resilient system used daily by the company and its operations team, eliminating manual friction across all order stages."
      }
    ],
    technologies: [
      "Google Sheets",
      "Google Apps Script",
      "E-Commerce Automation",
      "Telesales Workflow",
      "Shipping Operations"
    ],
    image: "",
    caseStudyUrl: "",
    status: "Case Study Coming Soon"
  },

  // --- 7. Supporting Projects Portfolio ---
  projects: [
    {
      id: "attendance-tracking-system",
      category: "Internal Operations System",
      title: "Employee Attendance & Time Tracking System",
      description: "An automated employee attendance and time-tracking system handling full staff lifecycle events: Login, Logout, Clock In, Clock Out, Break In, and Break Out. Designed to simplify internal workforce time tracking and reduce manual attendance management for teams.",
      technologies: ["Google Sheets", "Google Apps Script", "Time Tracking"],
      image: "",
      caseStudyUrl: "",
      status: "Case Study Coming Soon"
    },
    {
      id: "file-upload-telegram-workflow",
      category: "Workflow & Storage Automation",
      title: "Automated File Upload & Delivery Workflow",
      description: "A specialized automation tool designed to streamline secure file handling and transmission. Seamlessly connects incoming files directly into organized Google Drive storage and triggers instant Telegram-based file dispatch and notifications.",
      technologies: ["Google Drive", "Google Apps Script", "Telegram"],
      image: "",
      caseStudyUrl: "",
      status: "Case Study Coming Soon"
    },
    {
      id: "payroll-management-system",
      category: "Financial & HR Operations",
      title: "Payroll Management System",
      description: "A structured Google Sheets-based payroll management system designed to support payroll-related business calculations, records keeping, and operational workflows for streamlined business administration.",
      technologies: ["Google Sheets", "Data Processing", "Business Systems"],
      image: "",
      caseStudyUrl: "",
      status: "Case Study Coming Soon"
    },
    {
      id: "gym-management-system",
      category: "Business Management Solution",
      title: "Gym Management System",
      description: "A tailored business management system designed specifically for gym operations, organizing member records, administrative tracking, and day-to-day facility workflow coordination.",
      technologies: ["Google Workspace", "Process Automation", "Custom Systems"],
      image: "",
      caseStudyUrl: "",
      status: "Case Study Coming Soon"
    }
  ],

  // --- 8. Skills Hierarchy ---
  skills: {
    businessAutomation: [
      "Business Process Automation",
      "Workflow Automation",
      "Manual Process Elimination",
      "Process Optimization",
      "Multi-Step Automation",
      "Operational Workflow Design",
      "Business Problem Solving"
    ],
    googleWorkspace: [
      "Google Sheets",
      "Google Apps Script",
      "Google Drive Automation",
      "Spreadsheet Automation",
      "Automated Reporting",
      "Data Processing",
      "Workspace Integration"
    ],
    webApps: [
      "Google Apps Script Web Apps",
      "Multi-User Web Applications",
      "Internal Business Tools",
      "Spreadsheet-Based Web Applications",
      "Custom Data Portals"
    ],
    aiAutomation: [
      "AI-Assisted Automation",
      "AI for Reporting",
      "AI for Data Entry Automation",
      "AI for Customer Support",
      "AI-Assisted Development"
    ],
    currentlyLearning: [
      "n8n Workflow Automation",
      "Advanced AI Automation",
      "Multi-Platform Workflows"
    ]
  },

  // --- 9. Experience Timeline ---
  experience: [
    {
      role: "Freelance Business Automation Specialist",
      subtitle: "Independent Practice & Solutions",
      duration: "~5 Years Experience",
      highlights: [
        "Built Google Sheets and Google Apps Script automation systems tailored to solve specific business workflow challenges for real clients.",
        "Developed automated systems that became integral parts of daily company operations and team routines.",
        "Designed robust automated workflows for e-commerce order lifecycles, employee attendance, payroll calculations, and business management.",
        "Worked directly with business owners and team leads to analyze operational friction and design practical automation solutions.",
        "Maintained long-term recurring client relationships through dependable system maintenance and continuous workflow improvements."
      ]
    },
    {
      role: "Client & Team Collaboration",
      subtitle: "Company Environments & Client Projects",
      duration: "4–5 Real Clients",
      highlights: [
        "Successfully delivered automation systems for approximately 4–5 real clients, establishing ongoing recurring client partnerships.",
        "Collaborated within active company and team environments, tailoring systems to match exact operational requirements.",
        "Engineered workflows that directly eliminated hours of daily manual data entry and status updating for operational staff.",
        "Focused steadfastly on resolving fundamental business bottlenecks rather than merely writing technical code."
      ]
    }
  ],

  // --- 10. Services Offerings ---
  services: [
    {
      title: "Business Process Automation",
      description: "Transform repetitive manual business processes into structured, automated workflows that eliminate errors and free up team bandwidth.",
      icon: "activity",
      features: [
        "Manual task elimination",
        "Operational bottleneck diagnosis",
        "Multi-step logic & trigger workflows"
      ]
    },
    {
      title: "Google Sheets & Apps Script Automation",
      description: "Build advanced Google Sheets systems, automated workflows, custom business logic, and reporting dashboards using Google Apps Script.",
      icon: "grid",
      features: [
        "Advanced Apps Script functions",
        "Automated data extraction & reports",
        "Google Workspace tool integrations"
      ]
    },
    {
      title: "Custom Business Web Apps",
      description: "Transform complex spreadsheet-based workflows into intuitive, multi-user Web Applications powered by Google Apps Script.",
      icon: "layout",
      features: [
        "User-friendly web interfaces",
        "Secure internal team portals",
        "Real-time data synchronization"
      ]
    },
    {
      title: "AI & Workflow Automation",
      description: "Build and improve business workflows using AI capabilities and modern automation tools, expanding into n8n-based system orchestration.",
      icon: "zap",
      features: [
        "AI-assisted data processing & summaries",
        "Support and messaging workflows",
        "Expanding n8n workflow integrations"
      ]
    }
  ],

  // --- 11. Differentiators (Why Work With Me) ---
  differentiators: [
    {
      title: "Problem Solver",
      description: "I focus on understanding the real business problem before deciding how to automate it, ensuring the solution addresses root causes.",
      icon: "help-circle"
    },
    {
      title: "Business-Minded Automation",
      description: "I look beyond individual isolated tasks and evaluate the entire operational workflow to create lasting efficiency.",
      icon: "trending-up"
    },
    {
      title: "Creative Solutions",
      description: "I actively identify new automation opportunities and design alternative, streamlined ways to structure existing processes.",
      icon: "star"
    },
    {
      title: "Complex Workflows",
      description: "I design and implement multi-step automation connecting multiple tools, teams, and data flows into unified operational pipelines.",
      icon: "layers"
    },
    {
      title: "Real-World Experience",
      description: "My systems are not hypothetical demos. I build production-grade workflows actively used in daily business routines.",
      icon: "check-circle"
    },
    {
      title: "Time-Focused",
      description: "My core objective is direct: reduce unnecessary manual friction so businesses and teams have more time for high-value priorities.",
      icon: "clock"
    }
  ],

  // --- 12. Education & Analytical Background ---
  education: [
    {
      degree: "Master's Degree in Law",
      institution: "Faculty of Law",
      status: "In Progress",
      note: "Deepening advanced research, structural analysis, and compliance logic."
    },
    {
      degree: "Bachelor of Law",
      institution: "Helwan University",
      status: "Completed",
      note: "Foundation in formal logic, structured problem solving, and analytical detail orientation."
    }
  ],

  // --- 13. Future Testimonials (Hidden when empty or permission false) ---
  testimonials: []
};


/* ============================================================================
   2. DYNAMIC RENDERING & DOM POPULATION ENGINE
   ============================================================================ */

document.addEventListener('DOMContentLoaded', () => {
  renderPortfolioData();
  initTheme();
  initNavigation();
  initScrollAnimations();
  initWorkflowAnimation();
  initOpportunityFinder();
  initProblemExplorer();
  initContactForm();
  initEmailCopy();
  initBackToTop();
});

function renderPortfolioData() {
  const d = PORTFOLIO_DATA;

  // --- Render Availability Badge ---
  const heroMetaRow = document.getElementById('heroMetaRow');
  if (heroMetaRow && d.availability && d.availability.enabled) {
    heroMetaRow.innerHTML = `
      <div class="hero-badge">
        <span class="pulse-dot" aria-hidden="true"></span>
        ${escapeHtml(d.personal.badgeText)}
      </div>
      <div class="availability-pill">
        <span class="live-dot" aria-hidden="true"></span>
        ${escapeHtml(d.availability.text)}
      </div>
    `;
  }

  // --- Render Profile Metadata & About Cards ---
  const profileLocation = document.getElementById('profileLocation');
  if (profileLocation) profileLocation.textContent = d.personal.location;

  const profileAge = document.getElementById('profileAge');
  if (profileAge) profileAge.textContent = d.personal.age;

  const profileExp = document.getElementById('profileExp');
  if (profileExp) profileExp.textContent = d.personal.experienceYears;

  const statExpYears = document.getElementById('statExpYears');
  if (statExpYears) statExpYears.textContent = d.personal.experienceYears.split(' ')[0];

  const statClientsCount = document.getElementById('statClientsCount');
  if (statClientsCount) statClientsCount.textContent = d.personal.clientsCount.split(' ')[0];

  // Profile Avatar Handler (Image or SVG fallback)
  const avatarContainer = document.getElementById('avatarContainer');
  if (avatarContainer) {
    if (d.personal.profileImage && d.personal.profileImage.trim() !== "") {
      avatarContainer.innerHTML = `<img src="${escapeHtml(d.personal.profileImage)}" alt="${escapeHtml(d.personal.name)}" class="about-avatar-photo" onerror="this.onerror=null; this.parentElement.innerHTML='<div class=\\'about-avatar-inner\\'><svg viewBox=\\'0 0 24 24\\' fill=\\'none\\' stroke=\\'currentColor\\' stroke-width=\\'1.5\\' stroke-linecap=\\'round\\' stroke-linejoin=\\'round\\'><path d=\\'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2\\'></path><circle cx=\\'12\\' cy=\\'7\\' r=\\'4\\'></circle></svg></div>';">`;
    }
  }

  // --- Render Email in Contact Info & Links ---
  const contactEmailText = document.getElementById('contactEmailText');
  if (contactEmailText) contactEmailText.textContent = d.personal.email;

  const directEmailLink = document.getElementById('directEmailLink');
  if (directEmailLink) directEmailLink.setAttribute('href', `mailto:${d.personal.email}`);

  // --- Render Additional Contact Methods (Calendar, WhatsApp) if configured ---
  const additionalContactMethods = document.getElementById('additionalContactMethods');
  if (additionalContactMethods) {
    let methodsHtml = '';
    if (d.contact.calendarUrl && d.contact.calendarUrl.trim() !== '') {
      methodsHtml += `
        <a href="${escapeHtml(d.contact.calendarUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm" style="width:100%;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
          Schedule a Consultation Call
        </a>
      `;
    }
    if (d.contact.whatsappUrl && d.contact.whatsappUrl.trim() !== '') {
      methodsHtml += `
        <a href="${escapeHtml(d.contact.whatsappUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm" style="width:100%;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
          Direct WhatsApp Message
        </a>
      `;
    }
    additionalContactMethods.innerHTML = methodsHtml;
  }

  // --- Render Social Media Links ---
  renderSocialLinks('contactSocialLinks', d.socials);
  renderSocialLinks('footerSocialLinks', d.socials);

  // --- Render Opportunity Finder Chips ---
  renderOpportunityFinderChips(d.opportunityFinder);

  // --- Render "How I Work" ---
  renderHowIWork(d.howIWork);

  // --- Render Proof Center ---
  renderProofCenter(d.proofPoints);

  // --- Render Who I Help ---
  renderWhoIHelp(d.whoIHelp);

  // --- Render Featured Project ---
  renderFeaturedProject(d.featuredProject);

  // --- Render Supporting Projects Grid ---
  renderProjectsGrid(d.projects);

  // --- Render Skills ---
  renderSkillsCloud('skillsBusinessAutomation', d.skills.businessAutomation);
  renderSkillsCloud('skillsGoogleWorkspace', d.skills.googleWorkspace);
  renderSkillsCloud('skillsWebApps', d.skills.webApps);
  renderSkillsCloud('skillsAiAutomation', d.skills.aiAutomation);
  renderSkillsCloud('skillsCurrentlyLearning', d.skills.currentlyLearning, 'skill-tag-learning');

  // --- Render Experience Timeline ---
  renderExperienceTimeline(d.experience);

  // --- Render Services ---
  renderServicesGrid(d.services);

  // --- Render Why Me ---
  renderWhyGrid(d.differentiators);

  // --- Render Education ---
  renderEducationGrid(d.education);
}

/* Helper to render social buttons */
function renderSocialLinks(containerId, socials) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const platforms = [
    { key: 'linkedin', label: 'LinkedIn' },
    { key: 'github', label: 'GitHub' },
    { key: 'upwork', label: 'Upwork' },
    { key: 'fiverr', label: 'Fiverr' },
    { key: 'youtube', label: 'YouTube' },
    { key: 'facebook', label: 'Facebook' }
  ];

  container.innerHTML = platforms.map(p => {
    const url = socials[p.key] || '#';
    const isRealUrl = url !== '#' && !url.startsWith('#');
    if (isRealUrl) {
      return `<a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer" class="social-btn" aria-label="${p.label}">${p.label}</a>`;
    } else {
      return `<a href="${escapeHtml(url)}" class="social-btn" aria-label="${p.label} Profile Placeholder">${p.label}</a>`;
    }
  }).join('');
}

/* Render Opportunity Finder Chips */
function renderOpportunityFinderChips(finderData) {
  const container = document.getElementById('finderChipsGrid');
  if (!container) return;

  container.innerHTML = finderData.map((item, idx) => `
    <button type="button" class="finder-chip ${idx === 0 ? 'selected' : ''}" data-finder-id="${escapeHtml(item.id)}">
      ${escapeHtml(item.label)}
    </button>
  `).join('');

  // Update initial result box
  if (finderData.length > 0) {
    updateFinderResult(finderData[0]);
  }
}

function updateFinderResult(item) {
  const resultTitle = document.getElementById('finderResultTitle');
  const resultDesc = document.getElementById('finderResultDesc');
  const resultCta = document.getElementById('finderResultCta');

  if (resultTitle) resultTitle.textContent = `${item.label} — Good Candidate for Automation`;
  if (resultDesc) resultDesc.textContent = item.description;
  if (resultCta) {
    resultCta.setAttribute('data-prefill', item.prefillTopic);
  }
}

/* Initialize Opportunity Finder Interactions */
function initOpportunityFinder() {
  const chips = document.querySelectorAll('.finder-chip');
  const resultCta = document.getElementById('finderResultCta');

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('selected'));
      chip.classList.add('selected');
      const finderId = chip.getAttribute('data-finder-id');
      const item = PORTFOLIO_DATA.opportunityFinder.find(f => f.id === finderId);
      if (item) {
        updateFinderResult(item);
      }
    });
  });

  if (resultCta) {
    resultCta.addEventListener('click', (e) => {
      e.preventDefault();
      const prefill = resultCta.getAttribute('data-prefill');
      const processSelect = document.getElementById('contactProcessSelect');
      const messageTextarea = document.getElementById('contactMessage');
      const contactSection = document.getElementById('contact');

      if (processSelect && prefill) {
        // Select matching option or pre-fill message
        for (let i = 0; i < processSelect.options.length; i++) {
          if (processSelect.options[i].text.includes(prefill.split(' ')[0])) {
            processSelect.selectedIndex = i;
            break;
          }
        }
      }

      if (messageTextarea && prefill && !messageTextarea.value.includes(prefill)) {
        messageTextarea.value = `Hi Ahmed, I'd like to explore automating our: ${prefill}.\n\nHere is how we currently handle it: `;
      }

      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
          if (messageTextarea) messageTextarea.focus();
        }, 600);
      }
    });
  }
}

/* Initialize Problem Explorer Tabs */
function initProblemExplorer() {
  const tabBtns = document.querySelectorAll('.explorer-tab-btn');
  const explorerFlow = document.getElementById('explorerStepsFlow');
  if (!explorerFlow || tabBtns.length === 0) return;

  function renderCategorySteps(categoryId) {
    const category = PORTFOLIO_DATA.problemExplorer.find(p => p.id === categoryId);
    if (!category) return;

    explorerFlow.innerHTML = category.steps.map(s => `
      <div class="explorer-step-card">
        <div class="explorer-step-num">${escapeHtml(s.num)}</div>
        <div class="explorer-step-name">${escapeHtml(s.name)}</div>
        <p class="explorer-step-detail">${escapeHtml(s.detail)}</p>
      </div>
    `).join('');
  }

  // Render initial
  renderCategorySteps('ecommerce');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const catId = btn.getAttribute('data-category');
      renderCategorySteps(catId);
    });
  });
}

/* Render "How I Work" */
function renderHowIWork(steps) {
  const container = document.getElementById('howIWorkGrid');
  if (!container) return;

  container.innerHTML = steps.map((item, idx) => `
    <div class="mindset-card reveal-init delay-${(idx % 4)}">
      <div class="mindset-step-number">${escapeHtml(item.step)}</div>
      <h3 class="mindset-title">${escapeHtml(item.title)}</h3>
      <p class="mindset-body">${escapeHtml(item.description)}</p>
    </div>
  `).join('');
}

/* Render Proof Center */
function renderProofCenter(proofs) {
  const container = document.getElementById('proofGrid');
  if (!container) return;

  const iconMap = {
    'clock': '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>',
    'check-circle': '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>',
    'layers': '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>',
    'trending-up': '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>',
    'help-circle': '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>',
    'star': '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>'
  };

  container.innerHTML = proofs.map((item, idx) => `
    <div class="proof-card reveal-init delay-${(idx % 3)}">
      <div class="proof-icon-box" aria-hidden="true">
        ${iconMap[item.icon] || iconMap['check-circle']}
      </div>
      <h3 class="proof-title">${escapeHtml(item.title)}</h3>
      <p class="proof-desc">${escapeHtml(item.description)}</p>
    </div>
  `).join('');
}

/* Render Who I Help */
function renderWhoIHelp(whoList) {
  const container = document.getElementById('whoGrid');
  if (!container) return;

  const iconMap = {
    'shopping-cart': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>',
    'grid': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>',
    'trending-up': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>',
    'activity': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>'
  };

  container.innerHTML = whoList.map((item, idx) => `
    <div class="who-card reveal-init delay-${(idx % 4)}">
      <div class="who-icon-box" aria-hidden="true">
        ${iconMap[item.icon] || iconMap['activity']}
      </div>
      <h3 class="who-title">${escapeHtml(item.title)}</h3>
      <p class="who-desc">${escapeHtml(item.description)}</p>
    </div>
  `).join('');
}

/* Render Featured Project */
function renderFeaturedProject(fp) {
  const container = document.getElementById('featuredProjectContainer');
  if (!container) return;

  const isRealUrl = fp.caseStudyUrl && fp.caseStudyUrl !== '#' && !fp.caseStudyUrl.startsWith('#');
  const actionBtn = isRealUrl 
    ? `<a href="${escapeHtml(fp.caseStudyUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm" data-cta="case-study">View Case Study →</a>`
    : `<span class="btn btn-secondary btn-sm btn-disabled" aria-disabled="true">${escapeHtml(fp.status || 'Case Study Coming Soon')}</span>`;

  const stepsHtml = fp.steps.map(s => {
    let content = '';
    if (s.list && Array.isArray(s.list)) {
      content = `<ul class="case-step-body case-step-list">${s.list.map(li => `<li>${escapeHtml(li)}</li>`).join('')}</ul>`;
    } else {
      content = `<p class="case-step-body">${escapeHtml(s.body)}</p>`;
    }
    return `
      <div class="case-step-card">
        <div class="case-step-header">
          <span class="case-step-num">${escapeHtml(s.num)}</span>
          <span class="case-step-title">${escapeHtml(s.title)}</span>
        </div>
        ${content}
      </div>
    `;
  }).join('');

  const techTagsHtml = fp.technologies.map(t => `<span class="tech-tag">${escapeHtml(t)}</span>`).join('');

  container.innerHTML = `
    <div class="featured-header">
      <div class="featured-badge-group">
        <span class="featured-pill">${escapeHtml(fp.badge)}</span>
        <span class="live-system-badge">
          <span class="live-dot" aria-hidden="true"></span>
          ${escapeHtml(fp.statusBadge)}
        </span>
      </div>
      <span class="sys-meta-badge">${escapeHtml(fp.metaCategory)}</span>
    </div>

    <h3 class="featured-title">${escapeHtml(fp.title)}</h3>
    <p class="featured-desc">${escapeHtml(fp.description)}</p>

    <div class="case-study-grid">
      ${stepsHtml}
    </div>

    <div class="featured-footer">
      <div class="tech-tags-list">
        ${techTagsHtml}
      </div>
      ${actionBtn}
    </div>
  `;
}

/* Render Supporting Projects Grid */
function renderProjectsGrid(projects) {
  const container = document.getElementById('projectsGrid');
  if (!container) return;

  container.innerHTML = projects.map((p, idx) => {
    const isRealUrl = p.caseStudyUrl && p.caseStudyUrl !== '#' && !p.caseStudyUrl.startsWith('#');
    const actionBtn = isRealUrl
      ? `<a href="${escapeHtml(p.caseStudyUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm" data-cta="project-link">View Project →</a>`
      : `<span class="btn btn-outline btn-sm btn-disabled" aria-disabled="true">${escapeHtml(p.status || 'Case Study Coming Soon')}</span>`;

    const techTagsHtml = p.technologies.map(t => `<span class="tech-tag">${escapeHtml(t)}</span>`).join('');

    return `
      <article class="project-card reveal-init delay-${(idx % 2)}">
        <div class="project-category-tag">${escapeHtml(p.category)}</div>
        <h3 class="project-title">${escapeHtml(p.title)}</h3>
        <p class="project-description">${escapeHtml(p.description)}</p>
        <div class="project-card-footer">
          <div class="tech-tags-list">
            ${techTagsHtml}
          </div>
          ${actionBtn}
        </div>
      </article>
    `;
  }).join('');
}

/* Render Skills Tag Cloud */
function renderSkillsCloud(elementId, skillsList, extraClass = '') {
  const container = document.getElementById(elementId);
  if (!container || !Array.isArray(skillsList)) return;

  container.innerHTML = skillsList.map(skill => `
    <span class="skill-tag ${extraClass}">${escapeHtml(skill)}</span>
  `).join('');
}

/* Render Experience Timeline */
function renderExperienceTimeline(experiences) {
  const container = document.getElementById('timelineContainer');
  if (!container) return;

  container.innerHTML = experiences.map((item, idx) => `
    <div class="timeline-item reveal-init delay-${(idx % 2)}">
      <div class="timeline-marker" aria-hidden="true"></div>
      <div class="timeline-card">
        <div class="timeline-header">
          <div>
            <h3 class="timeline-role">${escapeHtml(item.role)}</h3>
            <span style="font-size:var(--font-size-xs); color:var(--text-muted);">${escapeHtml(item.subtitle)}</span>
          </div>
          <span class="timeline-duration">${escapeHtml(item.duration)}</span>
        </div>
        <ul class="timeline-list">
          ${item.highlights.map(h => `<li>${escapeHtml(h)}</li>`).join('')}
        </ul>
      </div>
    </div>
  `).join('');
}

/* Render Services Grid */
function renderServicesGrid(services) {
  const container = document.getElementById('servicesGrid');
  if (!container) return;

  const iconMap = {
    'activity': '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path></svg>',
    'grid': '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>',
    'layout': '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>',
    'zap': '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>'
  };

  container.innerHTML = services.map((s, idx) => `
    <div class="service-card reveal-init delay-${(idx % 2)}">
      <div class="service-icon-box" aria-hidden="true">
        ${iconMap[s.icon] || iconMap['activity']}
      </div>
      <h3 class="service-title">${escapeHtml(s.title)}</h3>
      <p class="service-desc">${escapeHtml(s.description)}</p>
      <ul class="service-features">
        ${s.features.map(f => `
          <li>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
            ${escapeHtml(f)}
          </li>
        `).join('')}
      </ul>
    </div>
  `).join('');
}

/* Render Why Work With Me Grid */
function renderWhyGrid(diffs) {
  const container = document.getElementById('whyGrid');
  if (!container) return;

  const iconMap = {
    'help-circle': '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>',
    'trending-up': '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>',
    'star': '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>',
    'layers': '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>',
    'check-circle': '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>',
    'clock': '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>'
  };

  container.innerHTML = diffs.map((item, idx) => `
    <div class="why-card reveal-init delay-${(idx % 3)}">
      <div class="why-icon" aria-hidden="true">
        ${iconMap[item.icon] || iconMap['help-circle']}
      </div>
      <h3 class="why-title">${escapeHtml(item.title)}</h3>
      <p class="why-desc">${escapeHtml(item.description)}</p>
    </div>
  `).join('');
}

/* Render Education Grid */
function renderEducationGrid(edus) {
  const container = document.getElementById('educationGrid');
  if (!container) return;

  container.innerHTML = edus.map((item, idx) => `
    <div class="education-card reveal-init delay-${(idx % 2)}">
      <span class="edu-badge">${escapeHtml(item.status || 'Degree')}</span>
      <h3 class="edu-degree">${escapeHtml(item.degree)}</h3>
      <p class="edu-institution">${escapeHtml(item.institution || 'Faculty of Law')}</p>
      <p class="edu-note">${escapeHtml(item.note)}</p>
    </div>
  `).join('');
}

/* Sanitize HTML to prevent accidental injection */
function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  return str.replace(/[&<>"']/g, match => {
    const escapeMap = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    };
    return escapeMap[match];
  });
}


/* ============================================================================
   3. THEME SWITCHER (DARK / LIGHT MODE)
   ============================================================================ */
function initTheme() {
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  if (!themeToggleBtn) return;

  const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
  applyTheme(savedTheme);

  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
    localStorage.setItem('portfolio-theme', newTheme);
  });
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  if (themeToggleBtn) {
    const isLight = theme === 'light';
    themeToggleBtn.setAttribute('aria-label', isLight ? 'Switch to Dark Mode' : 'Switch to Light Mode');
    themeToggleBtn.setAttribute('title', isLight ? 'Switch to Dark Mode' : 'Switch to Light Mode');
    themeToggleBtn.setAttribute('aria-pressed', isLight ? 'true' : 'false');
  }
}


/* ============================================================================
   4. NAVIGATION & ACCESSIBLE MOBILE MENU
   ============================================================================ */
function initNavigation() {
  const mobileToggle = document.getElementById('mobileNavToggle');
  const navLinks = document.getElementById('primaryNavLinks');
  const navLinksList = document.querySelectorAll('.nav-link');

  function closeMenu() {
    if (mobileToggle && navLinks) {
      mobileToggle.setAttribute('aria-expanded', 'false');
      mobileToggle.classList.remove('active');
      navLinks.classList.remove('mobile-open');
      document.body.classList.remove('nav-locked');
    }
  }

  function openMenu() {
    if (mobileToggle && navLinks) {
      mobileToggle.setAttribute('aria-expanded', 'true');
      mobileToggle.classList.add('active');
      navLinks.classList.add('mobile-open');
      document.body.classList.add('nav-locked');
    }
  }

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
      if (isExpanded) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    navLinksList.forEach(link => {
      link.addEventListener('click', () => {
        closeMenu();
      });
    });

    document.addEventListener('click', (e) => {
      if (
        navLinks.classList.contains('mobile-open') &&
        !navLinks.contains(e.target) &&
        !mobileToggle.contains(e.target)
      ) {
        closeMenu();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navLinks.classList.contains('mobile-open')) {
        closeMenu();
        mobileToggle.focus();
      }
    });
  }

  // Active Navigation Spy via IntersectionObserver
  const sections = document.querySelectorAll('section[id]');
  if ('IntersectionObserver' in window && sections.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -65% 0px',
      threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute('id');
          navLinksList.forEach(link => {
            const href = link.getAttribute('href');
            if (href === `#${currentId}`) {
              link.classList.add('active');
              link.setAttribute('aria-current', 'page');
            } else {
              link.classList.remove('active');
              link.removeAttribute('aria-current');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach(section => sectionObserver.observe(section));
  }
}


/* ============================================================================
   5. SCROLL REVEAL ANIMATIONS (Respects prefers-reduced-motion)
   ============================================================================ */
function initScrollAnimations() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealElements = document.querySelectorAll('.reveal-init');

  if (prefersReducedMotion) {
    revealElements.forEach(el => el.classList.add('reveal-visible'));
    return;
  }

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.08,
      rootMargin: '0px 0px -30px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('reveal-visible'));
  }
}


/* ============================================================================
   6. INTERACTIVE HERO WORKFLOW SIMULATOR
   ============================================================================ */
function initWorkflowAnimation() {
  const nodes = document.querySelectorAll('.pipeline-node');
  if (nodes.length === 0) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  let currentIndex = 0;

  setInterval(() => {
    nodes.forEach((node, idx) => {
      if (idx === currentIndex) {
        node.classList.add('active-node');
      } else {
        node.classList.remove('active-node');
      }
    });
    currentIndex = (currentIndex + 1) % nodes.length;
  }, 2500);
}


/* ============================================================================
   7. CLIENT QUALIFICATION CONTACT FORM
   ============================================================================ */
function initContactForm() {
  const contactForm = document.getElementById('contactForm');
  const successBanner = document.getElementById('contactSuccessBanner');
  const resetFormBtn = document.getElementById('resetFormBtn');

  if (!contactForm) return;

  const nameInput = document.getElementById('contactName');
  const emailInput = document.getElementById('contactEmail');
  const messageInput = document.getElementById('contactMessage');

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;
    let firstInvalidInput = null;

    // Validate Name
    if (!nameInput.value.trim()) {
      showError(nameInput, 'nameError', 'Please enter your name');
      isValid = false;
      if (!firstInvalidInput) firstInvalidInput = nameInput;
    } else {
      clearError(nameInput, 'nameError');
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
      showError(emailInput, 'emailError', 'Please enter a valid email address');
      isValid = false;
      if (!firstInvalidInput) firstInvalidInput = emailInput;
    } else {
      clearError(emailInput, 'emailError');
    }

    // Validate Message
    if (!messageInput.value.trim() || messageInput.value.trim().length < 8) {
      showError(messageInput, 'messageError', 'Please describe your process (at least 8 characters)');
      isValid = false;
      if (!firstInvalidInput) firstInvalidInput = messageInput;
    } else {
      clearError(messageInput, 'messageError');
    }

    if (!isValid && firstInvalidInput) {
      firstInvalidInput.focus();
      return;
    }

    if (isValid) {
      contactForm.style.display = 'none';
      if (successBanner) {
        successBanner.classList.add('visible');
        successBanner.focus();
      }
      contactForm.reset();
    }
  });

  if (resetFormBtn && successBanner) {
    resetFormBtn.addEventListener('click', () => {
      successBanner.classList.remove('visible');
      contactForm.style.display = 'block';
      nameInput.focus();
    });
  }

  [nameInput, emailInput, messageInput].forEach(input => {
    if (!input) return;
    input.addEventListener('input', () => {
      const errorId = input.id.replace('contact', '').toLowerCase() + 'Error';
      clearError(input, errorId);
    });
  });
}

function showError(inputElement, errorElementId, message) {
  inputElement.classList.add('input-error');
  inputElement.setAttribute('aria-invalid', 'true');
  const errorEl = document.getElementById(errorElementId);
  if (errorEl) {
    errorEl.textContent = message;
    errorEl.classList.add('visible');
  }
}

function clearError(inputElement, errorElementId) {
  inputElement.classList.remove('input-error');
  inputElement.removeAttribute('aria-invalid');
  const errorEl = document.getElementById(errorElementId);
  if (errorEl) {
    errorEl.textContent = '';
    errorEl.classList.remove('visible');
  }
}


/* ============================================================================
   8. COPY EMAIL MICRO-INTERACTION
   ============================================================================ */
function initEmailCopy() {
  const copyBtn = document.getElementById('copyEmailBtn');
  if (!copyBtn) return;

  copyBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    const email = PORTFOLIO_DATA.personal.email || 'Ahmed.abdelazzim@outlook.com';
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(email);
      } else {
        const tempInput = document.createElement('input');
        tempInput.value = email;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
      }
      
      const originalText = copyBtn.getAttribute('data-original-text') || copyBtn.textContent;
      copyBtn.setAttribute('data-original-text', originalText);
      copyBtn.textContent = 'Copied to Clipboard!';
      copyBtn.style.borderColor = 'var(--accent-teal)';
      copyBtn.style.color = 'var(--accent-teal)';

      setTimeout(() => {
        copyBtn.textContent = originalText;
        copyBtn.style.borderColor = '';
        copyBtn.style.color = '';
      }, 2400);
    } catch (err) {
      window.location.href = `mailto:${email}`;
    }
  });
}


/* ============================================================================
   9. BACK TO TOP BUTTON
   ============================================================================ */
function initBackToTop() {
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (!backToTopBtn) return;

  backToTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}
