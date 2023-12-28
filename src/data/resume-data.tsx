import ConsultlyLogo from "../images/logos/consultly.svg";
import AmbitLogo from "../images/logos/ambit.png";
import BarepapersLogo from "../images/logos/barepapers.svg";
import BimLogo from "../images/logos/bim.png";
import CDGOLogo from "../images/logos/cdgo.png";
import ClevertechLogo from "../images/logos/clevertech.png";
import EvercastLogo from "../images/logos/evercast.svg";
import Howdy from "../images/logos/howdy.png";
import JarockiMeLogo from "../images/logos/jarocki.svg";
import JojoMobileLogo from "../images/logos/jojomobile.png";
import MonitoLogo from "../images/logos/monito.svg";
import MobileVikingsLogo from "../images/logos/mv.png";
import NSNLogo from "../images/logos/nsn.svg";
import ParabolLogo from "../images/logos/parabol.svg";
import TastyCloudLogo from "../images/logos/tastycloud.png";
import YearProgressLogo from "../images/logos/yearprogress.svg";
import Minimal from "../images/logos/minimal.svg";
import { GitHubIcon } from "../components/icons/GitHubIcon";
import { LinkedInIcon } from "../components/icons/LinkedInIcon";
import { XIcon } from "../components/icons/XIcon";

export const RESUME_DATA = {
  name: "Royce Whitaker",
  initials: "RW",
  location: "Oakland, CA",
  locationLink: "https://www.google.com/maps/place/Oakland,CA",
  about:
    "System Administrator focused on implmenenting new products and expanding current products with automation",
  summary:
    "System Administrator with a passion for automation and 4 years of experience in managing and optimizing Windows and Linux servers, cloud services, and network devices. Proficient in PowerShell, Python, Bash, and Microsoft Graph. I have over 8 years of IT experience and can rapidly learn new technologies.",
  avatarUrl: "https://raw.githubusercontent.com/lunarcontrol/resume/main/src/app/profile-pic.png",
  personalWebsiteUrl: "https://whitaker.one",
  contact: {
    email: "roycewhitaker@rocketmail.com",
    tel: "707-504-8474",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/lunarcontrol",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/royce-whitaker/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/RoyceHimself",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "San Jose State University",
      degree: "B.S. Engineering Technology",
      start: "2017",
      end: "2021",
      focus: "Computer Network Systems Management (CNSM)",
      minor: "Business Management",
    },
  ],
  work: [
    {
      company: "Sutro Biopharma",
      link: "https://sutrobio.com",
      badges: [],
      title: "Desktop Support Specialist",
      logo: ParabolLogo,
      start: "2023",
      end: "Present",
      description:
        "After being converted to a full time employee, my responsiblities expanded to include SharePoint administration and expanded opportunities to develop automations. I am responsible for creating and maintaining SharePoint sites for the company. I ensure optimal performance and security of the sites by using industry best-practices and moving permission controls to Azure AD/On-prem AD security groups. I also manage hardware assets and software licensing of user computers, reducing costs and improving efficiency. Additionally, I develop scripts and automations to provision user computers, streamlining the onboarding and maintenance processes. Furthermore, I integrate apps into an Microsoft Intune to manage app installations, improving user experience and productivity.",
    },
    {
      company: "Sutro Biopharma",
      link: "https://sutrobio.com",
      badges: [],
      title: "Contract Desktop Support Specialist",
      logo: ClevertechLogo,
      start: "2022",
      end: "2023",
      description:
        "I provided direct assistance to internal staff and external contractors. I investigated and resolved various issues, such as software malfunctions, data backups, and network connectivity. I also performed computer upgrades and installations, supported multiple systems and platforms, and assisted with Windows patch management and security updates. Additionally, I supported a GxP environment, where I provided technical support to the QC labs and MFG suites. I utilized my strong troubleshooting and problem-solving skills to find effective solutions.",
    },
    {
      company: "San Jose State University - Associated Students",
      link: "https://www.sjsu.edu/as/",
      badges: [],
      title: "IT Support Specialist",
      logo: JojoMobileLogo,
      start: "2017",
      end: "2022",
      description:
        "Built an Android team, created Android apps for biggest Polish companies like LOT, Polskie Radio, Agora, PolskaPress",
    },
    {
      company: "Harbor Electronics",
      link: "https://www.harbor-electronics.com/",
      badges: [],
      title: "Jr. System Administrator",
      logo: NSNLogo,
      start: "2021",
      end: "2022",
      description: "As a Jr. System Administrator, I was responsible for maintaining and managing the company’s network infrastructure, including domain, thin clients, servers, routers, and switches. I also handled various technical issues for machines and devices running on different operating systems and software, such as Windows, Linux, and CentOS. Additionally, I provided remote support for in-production equipment, such as printers, microscopes, cameras, drill machines, lamination machines, and engineering machines, using tools such as ConnectWise Control, VNC, and TeamViewer.",
    },
  ],
  skills: [
    "Windows Server",
    "Python",
    "Powershell",
    "Microsoft Graph",
    "Automation",
    "Scripting",
    "MDM",
    "Intune",
    "Connectwise",
    "Zendesk",
    "Office 365",
    "SharePoint Online",
    "Active Directory",
  ],
  projects: [
    {
      title: "Consultly",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A platform to build and grow your online business",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Jarocki.me",
      techStack: ["Side Project", "Next.js", "MDX"],
      description:
        "My personal website and blog. Built with Next.js and Notion API",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
  ],
} as const;
