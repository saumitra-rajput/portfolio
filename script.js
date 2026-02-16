/* =========================================================
   DATA CONFIG : edit only this section
   ========================================================= */

/* -------- Skills (Azure-Focused) -------- */
const visualSkills = [
  { icon: '<i class="fa-brands fa-microsoft"></i>', name: 'Microsoft Azure' },
  { icon: '<i class="fa-brands fa-linux"></i>', name: 'Linux' },
  { icon: '<i class="fa-brands fa-git-alt"></i>', name: 'Git' },
  { icon: '<i class="fa-solid fa-terminal"></i>', name: 'Bash' },
  { icon: '<i class="fa-solid fa-network-wired"></i>', name: 'Networking' },
  { icon: '<i class="fa-solid fa-shield-halved"></i>', name: 'Cloud Security' },
];

const listSkills = [
  { 
    title: 'Azure Administration', 
    desc: 'VMs, VNet, NSG, VPN (P2S/S2S), App Gateway, Azure Policy, PIM', 
    percent: '90%' 
  },
  { 
    title: 'Identity & Security', 
    desc: 'Azure AD (Entra ID), RBAC, MFA, Defender for Cloud', 
    percent: '88%' 
  },
  { 
    title: 'Linux Administration', 
    desc: 'Users, Permissions, Services, SSH, Log Analysis', 
    percent: '85%' 
  },
  { 
    title: 'Automation & Scripting', 
    desc: 'Bash, Azure CLI, GitHub Actions (Basics)', 
    percent: '80%' 
  },
  { 
    title: 'Monitoring & Troubleshooting', 
    desc: 'Azure Monitor, Log Analytics, ServiceNow Incident Handling', 
    percent: '87%' 
  }
];

/* -------- Projects -------- */
const projectsData = [
{
  title: 'Azure Infrastructure Management',
  description: 'Hands-on implementation of Azure Virtual Machines, Virtual Networks, NSGs, RBAC, and Azure Policy configurations in simulated enterprise environments. Demonstrates cloud administration and identity management skills.',
  imageUrl: 'assets/images/azure-project.webp',
  tags: ['Azure', 'VNet', 'RBAC', 'NSG', 'Cloud Infra'],
  link: 'https://github.com/saumitra-rajput/my-azure'
},
{
  title: 'Linux Administration Lab',
  description: 'Practical Linux administration including user management, file permissions, service management, SSH configuration, and system log analysis. Focused on troubleshooting and server-level operations.',
  imageUrl: 'assets/images/linux-project.webp',
  tags: ['Linux', 'SSH', 'Permissions', 'Systemctl'],
  link: 'https://github.com/saumitra-rajput/my-linux'
},
{
  title: 'Bash Automation & Log Rotation',
  description: 'Developed automation scripts for backup creation, cron scheduling, and log rotation using Bash. Demonstrates DevOps-oriented scripting and system automation skills.',
  imageUrl: 'assets/images/bash-project.webp',
  tags: ['Bash', 'Automation', 'Cron', 'DevOps'],
  link: 'https://github.com/saumitra-rajput/bash-scripting'
}
];

/* -------- Timeline -------- */
const timelineData = [
  {
    category: 'education',
    icon: '🎓',
    year: '2018 – 2021',
    title: 'Bachelor of Arts',
    company: 'Lucknow University',
    description: 'Completed graduation while building strong interest in IT infrastructure and cloud technologies.'
  },
  {
    category: 'work',
    icon: '💼',
    year: 'Nov 2022 – Present',
    title: 'Azure Cloud Engineer (Analyst)',
    company: 'HCL Technologies – Tenet Healthcare Project',
    description: 'Managing Azure VMs, VNet Peering, VPN (P2S/S2S), RBAC, Azure Policy, PIM, Backup & Disaster Recovery for enterprise healthcare workloads. Handling production incidents via ServiceNow.',
    skills: ['Azure VMs', 'VNet', 'RBAC', 'PIM', 'Azure Policy']
  },
  {
    category: 'work',
    icon: '📞',
    year: 'June 2021 – June 2022',
    title: 'Customer Support Executive',
    company: 'Startek (Zomato Project)',
    description: 'Handled high-volume support operations across India & UAE. Strengthened troubleshooting and incident resolution skills.',
    skills: ['Incident Handling', 'Troubleshooting', 'SLA Management']
  },
  {
    category: 'project',
    icon: '🚀',
    year: '2023 – Present',
    title: 'Cloud & DevOps Upskilling',
    company: 'Self-Learning & Hands-On Labs',
    description: 'Building Azure-based projects, Linux labs, and automation scripts. Exploring DevOps fundamentals and CI/CD workflows using GitHub Actions.',
    skills: ['Azure', 'Linux', 'Bash', 'GitHub Actions']
  }
];
