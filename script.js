/* =========================================================
   PROFILE TEMPLATE ENGINE - REUSABLE JS
   =========================================================
   Instructions:
   1. Edit only the CONFIGURATION OBJECT below
   2. All sections will auto-populate
   3. Copy this file for each new profile
   ========================================================= */

/* =========================================================
   PROFILE CONFIGURATION - ✏️ EDIT THIS SECTION ONLY
   ========================================================= */
const PROFILE = {
    // Basic Info
    name: "Saumitra Rajput",
    role: "Cloud & DevOps Engineer",
    shortRole: "5x Azure Certified | 2x GitHub Certified",
    location: "Lucknow, Uttar Pradesh India (Open to Remote)",
    email: "saumitrarajput3jan@gmail.com",
    
    // Social Links
    social: {
        linkedin: "https://www.linkedin.com/in/saumitra-rajput-18268120a/",
        github: "https://github.com/saumitra-rajput",
        linkhub: "https://saumitra-rajput.github.io/portfolio/",
        resume: "assets/docs/saumitra-rajput.pdf",
        certifications: "https://learn.microsoft.com/en-us/users/saumitrarajput-5854/credentials/certifications"
    },

    // Skills Configuration
    skills: {
        visual: [
            { icon: '<i class="fa-brands fa-microsoft"></i>', name: 'Azure' },
            { icon: '<i class="fa-brands fa-docker"></i>', name: 'Docker' },
            { icon: '<i class="fa-solid fa-cubes"></i>', name: 'K8s' },
            { icon: '<i class="fa-solid fa-code-branch"></i>', name: 'Terraform' },
            { icon: '<i class="fa-solid fa-gears"></i>', name: 'Ansible' },
            { icon: '<i class="fa-brands fa-github"></i>', name: 'GitHub' },
            { icon: '<i class="fa-brands fa-linux"></i>', name: 'Linux' },
            { icon: '<i class="fa-solid fa-chart-line"></i>', name: 'Prometheus' }
        ],
        list: [
            { title: 'Microsoft Azure Cloud', desc: 'VMs, VNet, Entra ID, RBAC, PIM, Azure Policy, Azure CLI', percent: '90%' },
            { title: 'Docker & Containerization', desc: 'Dockerfiles, Docker Compose, Images, Volumes, Networking', percent: '85%' },
            { title: 'Kubernetes', desc: 'Pods, Deployments, Services, HPA, PV/PVC, KIND', percent: '80%' },
            { title: 'Infrastructure as Code', desc: 'Terraform (AWS EC2, VPC), Ansible (Playbooks, Inventory)', percent: '85%' },
            { title: 'CI/CD & DevSecOps', desc: 'GitHub Actions, 8-stage security pipelines, Trivy, Bandit, Gitleaks', percent: '85%' },
            { title: 'Linux Administration', desc: 'Users, Permissions, Processes, Services, Bash Scripting', percent: '90%' },
            { title: 'Monitoring & Observability', desc: 'Prometheus, Grafana, Loki, cAdvisor, Node Exporter', percent: '75%' },
            { title: 'AWS Cloud', desc: 'EC2, S3, IAM, VPC', percent: '70%' }
        ]
    },

    // Projects Configuration - Updated with latest DevOps projects
    projects: [
        {
            title: 'Notes App - Full DevOps Project',
            description: 'Full-stack notes app (Django/React) with complete DevOps pipeline: Terraform (IaC) → Ansible (Config Mgmt) → Docker → Kubernetes (HPA) → Prometheus/Grafana/Loki monitoring.',
            imageUrl: 'https://saumitra-rajput.github.io/portfolio/assets/images/azure.webp',
            tags: ['Terraform', 'Ansible', 'Docker', 'Kubernetes', 'Prometheus', 'Grafana'],
            link: 'https://github.com/saumitra-rajput/notes-app'
        },
        {
            title: 'DevSecOps Pipeline',
            description: 'End-to-end CI/CD DevSecOps pipeline with GitHub Actions - 8-stage security scanning, testing, containerization, and automated deployment to AWS EC2 on port 80.',
            imageUrl: 'https://saumitra-rajput.github.io/portfolio/assets/images/azure.webp',
            tags: ['GitHub Actions', 'Docker', 'AWS EC2', 'Trivy', 'Bandit', 'Gitleaks'],
            link: 'https://github.com/saumitra-rajput/DevSecOps'
        },
        {
            title: 'WanderlustAI',
            description: 'AI-powered travel assistant with modern tech stack and cloud deployment.',
            imageUrl: 'https://saumitra-rajput.github.io/portfolio/assets/images/azure.webp',
            tags: ['AI/ML', 'Cloud', 'API Integration'],
            link: 'https://github.com/saumitra-rajput/WanderlustAI'
        },
        {
            title: 'E-commerce App',
            description: 'Full-stack e-commerce application with secure payment integration and modern architecture.',
            imageUrl: 'https://saumitra-rajput.github.io/portfolio/assets/images/azure.webp',
            tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            link: 'https://github.com/saumitra-rajput/E-commerce-app'
        },
        {
            title: 'Bash Scripting & Automation',
            description: 'Production-ready Bash scripts for backup automation, log rotation, cron scheduling, system health monitoring, and resource tracking.',
            imageUrl: 'https://saumitra-rajput.github.io/portfolio/assets/images/bash.webp',
            tags: ['Bash', 'Linux', 'Cron', 'System Monitoring'],
            link: 'https://github.com/saumitra-rajput/bash-scripting'
        },
        {
            title: 'Azure Infrastructure & IAM',
            description: 'Hands-on implementation of Azure VMs, VNet Peering, VPN Gateways, NSG, Azure AD, RBAC, PIM, and Azure Policy for enterprise cloud security.',
            imageUrl: 'https://saumitra-rajput.github.io/portfolio/assets/images/azure.webp',
            tags: ['Azure', 'Terraform', 'Azure CLI', 'RBAC', 'PIM'],
            link: 'https://github.com/saumitra-rajput/my-azure'
        },
        {
            title: 'Linux Administration Lab',
            description: 'Comprehensive Linux administration covering user/group management, file permissions, process monitoring, package management, service configuration, and networking basics.',
            imageUrl: 'https://saumitra-rajput.github.io/portfolio/assets/images/linux.webp',
            tags: ['Linux', 'User Management', 'Networking', 'Systemd'],
            link: 'https://github.com/saumitra-rajput/my-linux'
        },
        {
            title: 'Microsoft & GitHub Certifications',
            description: '5x Microsoft Azure Certified (AZ-104, AZ-500, AZ-900, AI-900, SC-900) and 2x GitHub Certified (Foundations, Actions).',
            imageUrl: 'https://saumitra-rajput.github.io/portfolio/assets/images/cert.webp',
            tags: ['AZ-104', 'AZ-500', 'GH-900', 'GH-200', 'Cloud Security'],
            link: 'https://learn.microsoft.com/en-us/users/saumitrarajput-5854/credentials/certifications'
        }
    ],

    // Timeline Configuration - Updated with DevOps transition
    timeline: [
        {
            category: 'education',
            icon: '🎓',
            year: '2018 – 2021',
            title: 'Bachelor of Arts',
            company: 'Lucknow University',
            description: 'Developed strong analytical, communication, and critical thinking skills while independently building technical expertise in Linux, Cloud Computing, and Python.'
        },
        {
            category: 'work',
            icon: '💼',
            year: 'June 2021 – June 2022',
            title: 'Executive – Zomato Project',
            company: 'Startek',
            description: 'Handled customer operations across India and UAE regions, resolving high-volume service issues while maintaining SLA compliance. Recognized as Winner of the "All Ideas Matter" Contest for innovation-driven process enhancement.',
            skills: ['Incident Management', 'Process Improvement', 'SLA Management', 'Operations Support']
        },
        {
            category: 'work',
            icon: '💼',
            year: 'Nov 2022 – Present',
            title: 'Analyst – Cloud Engineer',
            company: 'HCL Technologies (Tenet Healthcare Project)',
            description: 'Manage enterprise Azure infrastructure including VMs, VNets, NSGs, Azure SQL VMs, DNS, Policies, and Subscriptions. Work on Azure IAM (Entra ID, RBAC, PIM) and configure VNET peering, VPN, Application Gateway. Perform backup, disaster recovery, and cross-region replication.',
            skills: ['Azure', 'Entra ID', 'RBAC', 'PIM', 'VNet', 'VPN', 'Azure CLI', 'ServiceNow']
        },
        {
            category: 'project',
            icon: '🚀',
            year: '2025 – Present',
            title: 'DevOps Engineering Journey',
            company: 'Hands-on Projects',
            description: 'Building end-to-end DevOps projects: Notes App (Terraform → Ansible → Docker → K8s → Monitoring) and DevSecOps pipeline (GitHub Actions with security scanning). Mastering Docker, Kubernetes, Terraform, Ansible, Prometheus, and Grafana.',
            skills: ['Docker', 'Kubernetes', 'Terraform', 'Ansible', 'GitHub Actions', 'Prometheus', 'Grafana']
        },
        {
            category: 'project',
            icon: '☁️',
            year: '2026 – Present',
            title: 'Learning Advanced DevOps',
            company: 'Train with Shubham',
            description: 'Expanding knowledge in Infrastructure as Code, CI/CD security, monitoring stacks, and exploring Agentic AI applications in DevOps workflows.',
            skills: ['Python', 'Helm', 'EKS', 'Datadog', 'GitOps']
        }
    ],

    // About Section - Updated
    about: {
        intro: "I am a 5x Azure-certified Cloud Engineer with 3+ years of enterprise experience at HCLTech, actively transitioning into DevOps. Experienced in Azure infrastructure, IAM, networking, and disaster recovery.",
        fullBio: "My expertise includes Azure VMs, VNet Peering, VPN, Entra ID, RBAC, PIM, and Azure Policy. I have hands-on DevOps skills in Docker, Kubernetes, Terraform, Ansible, GitHub Actions, Prometheus, and Grafana. I build end-to-end automation pipelines, infrastructure as code, and cloud-native solutions.",
        currentFocus: "Currently building end-to-end DevOps projects including Notes App (Terraform → Ansible → Docker → K8s → Monitoring) and DevSecOps pipeline with GitHub Actions.",
        careerGoal: "To secure a DevOps Engineer role where I can apply my cloud expertise, automation skills, and DevOps practices to build scalable, secure, and resilient infrastructure."
    },

    // Availability Tags - Updated
    availability: [
        "Azure Administrator",
        "Cloud Engineer",
        "Jr. DevOps Engineer",
        "DevOps Intern",
        "Azure Cloud Engineer"
    ]
};

/* =========================================================
   RENDER ENGINE - DON'T EDIT BELOW THIS LINE
   ========================================================= */

class ProfileRenderer {
    constructor(config) {
        this.config = config;
        this.init();
    }

    init() {
        document.addEventListener('DOMContentLoaded', () => {
            this.renderAll();
            this.setupInteractions();
        });
    }

    renderAll() {
        this.renderSkills();
        this.renderProjects();
        this.renderTimeline();
        this.renderContactInfo();
        this.updateActiveMenuItem();
        this.setupFadeInObserver();
    }

    /* -------- Skills Renderer -------- */
    renderSkills() {
        const circle = document.getElementById('skillsCircle');
        const list = document.getElementById('skillsList');

        if (circle) {
            circle.innerHTML = this.config.skills.visual.map(s => `
                <div class="skill-node">
                    <div class="skill-icon">${s.icon}</div>
                    <div class="skill-name">${s.name}</div>
                </div>
            `).join('') + `<div class="skills-center">☁</div>`;
        }

        if (list) {
            list.innerHTML = this.config.skills.list.map(s => `
                <div class="skill-item">
                    <h4>${s.title}</h4>
                    <p>${s.desc}</p>
                    <div class="skill-progress">
                        <div class="skill-progress-bar" style="width:${s.percent}"></div>
                    </div>
                </div>
            `).join('');
        }
    }

    /* -------- Projects Renderer -------- */
    renderProjects() {
        const grid = document.getElementById('portfolioGrid');
        
        if (!grid) {
            console.error('❌ portfolioGrid not found!');
            return;
        }

        if (!this.config.projects || this.config.projects.length === 0) {
            console.error('❌ No projects found in config!');
            return;
        }

        grid.innerHTML = this.config.projects.map((p, index) => {
            return `
            <a href="${p.link}" target="_blank" class="portfolio-link">
                <div class="portfolio-card">
                    <div class="portfolio-image">
                        <img src="${p.imageUrl}" 
                            alt="${p.title}" 
                            loading="lazy"
                            onerror="console.error('Image failed to load:', '${p.imageUrl}', 'for project:', '${p.title}')">
                    </div>
                    <div class="portfolio-content">
                        <h3>${p.title}</h3>
                        <div class="spacer"></div>
                        <p>${p.description}</p>
                        <div class="spacer"></div>
                        <div class="portfolio-tags">
                            ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
                        </div>
                    </div>
                </div>
            </a>
        `}).join('');
    }

    /* -------- Timeline Renderer -------- */
    renderTimeline(filter = 'all') {
        const container = document.getElementById('timelineContainer');
        if (!container) return;

        const filtered = this.config.timeline.filter(i => 
            filter === 'all' || i.category === filter
        );

        const html = filtered.map(i => `
            <div class="timeline-item visible" data-category="${i.category}">
                <div class="timeline-node">${i.icon}</div>
                <div class="timeline-content">
                    <div class="timeline-year">${i.year}</div>
                    <h3 class="timeline-title">${i.title}</h3>
                    <div class="timeline-company">${i.company}</div>
                    <p class="timeline-description">${i.description}</p>
                    ${i.skills ? `
                        <div class="timeline-skills">
                            ${i.skills.map(s => `<span class="timeline-skill">${s}</span>`).join('')}
                        </div>` : ''}
                </div>
            </div>
        `).join('');

        container.innerHTML = `
            <div class="timeline-line"></div>
            <div class="timeline-progress"></div>
            ${html}
        `;

        this.setupTimelineFilters();
    }

    /* -------- Contact Info Renderer -------- */
    renderContactInfo() {
        // Update contact links
        const linksContainer = document.getElementById('contact-links');
        if (linksContainer) {
            linksContainer.innerHTML = `
                <a href="${this.config.social.linkedin}" target="_blank" class="contact-btn">
                    <i class="fa-brands fa-linkedin"></i> LinkedIn
                </a>
                <a href="${this.config.social.github}" target="_blank" class="contact-btn">
                    <i class="fa-brands fa-github"></i> GitHub
                </a>
                <a href="mailto:${this.config.email}" class="contact-btn email-hover">
                    <i class="fa-solid fa-envelope"></i> Email
                </a>
                <a href="${this.config.social.resume}" class="contact-btn resume-btn" download>
                    <i class="fa-solid fa-file-arrow-down"></i> Resume
                </a>
                <a href="${this.config.social.linkhub}" class="contact-btn">
                    <i class="fa-solid fa-address-card"></i> Portfolio
                </a>
            `;
        }

        // Update availability tags
        const tagsContainer = document.getElementById('availability-tags');
        if (tagsContainer) {
            tagsContainer.innerHTML = this.config.availability.map(tag => 
                `<span class="tag-item">${tag}</span>`
            ).join('');
        }

        // Update location
        const locationEl = document.querySelector('[data-profile-field="location"]');
        if (locationEl) locationEl.textContent = this.config.location;
    }

    /* -------- Interactions Setup -------- */
    setupInteractions() {
        this.setupMobileMenu();
        this.setupSmoothScrolling();
        window.addEventListener('scroll', () => this.updateActiveMenuItem());
    }

    setupTimelineFilters() {
        document.querySelectorAll('.timeline-filter').forEach(btn => {
            btn.removeEventListener('click', this.timelineFilterHandler);
            this.timelineFilterHandler = (e) => {
                document.querySelectorAll('.timeline-filter')
                    .forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.renderTimeline(btn.dataset.filter);
            };
            btn.addEventListener('click', this.timelineFilterHandler);
        });
    }

    setupMobileMenu() {
        const mobileBtn = document.getElementById('mobileMenuBtn');
        const mobileNav = document.getElementById('mobileNav');

        if (mobileBtn && mobileNav) {
            mobileBtn.addEventListener('click', () => {
                mobileBtn.classList.toggle('active');
                mobileNav.classList.toggle('active');
            });

            document.querySelectorAll('.mobile-nav a').forEach(link => {
                link.addEventListener('click', () => {
                    mobileBtn.classList.remove('active');
                    mobileNav.classList.remove('active');
                });
            });
        }
    }

    setupSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
    }

    updateActiveMenuItem() {
        const y = window.scrollY;
        document.querySelectorAll('section[id]').forEach(sec => {
            const top = sec.offsetTop - 120;
            const bottom = top + sec.offsetHeight;
            if (y >= top && y < bottom) {
                document.querySelectorAll('.nav-links a, .mobile-nav a')
                    .forEach(a => a.classList.remove('active'));
                document.querySelectorAll(`a[href="#${sec.id}"]`)
                    .forEach(a => a.classList.add('active'));
            }
        });
    }

    setupFadeInObserver() {
        const observer = new IntersectionObserver(
            entries => entries.forEach(e => 
                e.isIntersecting && e.target.classList.add('visible')
            ),
            { threshold: 0.1 }
        );

        document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
    }
}

/* =========================================================
   INITIALIZE THE RENDERER
   ========================================================= */
new ProfileRenderer(PROFILE);

/* =========================================================
   ADDITIONAL UTILITIES
   ========================================================= */

// Lazy loading for images
document.addEventListener('DOMContentLoaded', () => {
    if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            img.src = img.dataset.src;
        });
    }
});

// Handle resize events
let resizeTimer;
window.addEventListener('resize', () => {
    document.body.classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove('resize-animation-stopper');
    }, 400);
});