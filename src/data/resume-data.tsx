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
  avatarUrl: "https://avatars.githubusercontent.com/u/1017620?v=4",
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
        "Implemented new features, led squad, worked on improving the way developers ship the code, started migration from Emotion to Tailwind CSS and more. Technologies: React, TypeScript, GraphQL",
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
      description: "Creating and testing software for LTE base stations",
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
    {
      title: "Year progress",
      techStack: ["Side Project", "TypeScript", "Next.js"],
      description: "Tracks current year progress and displays a countdown",
      logo: YearProgressLogo,
      link: {
        label: "getyearprogress.com",
        href: "https://getyearprogress.com/",
      },
    },
    {
      title: "Evercast",
      techStack: [
        "Lead Frontend Developer",

        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "Creative collaboration platform that combines video conferencing and HD media streaming",
      logo: EvercastLogo,
      link: {
        label: "evercast.us",
        href: "https://www.evercast.us/",
      },
    },
    {
      title: "Mobile Vikings",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for leading virtual mobile operator in Poland",
      logo: MobileVikingsLogo,
      link: {
        label: "mobilevikings.pl",
        href: "https://mobilevikings.pl/",
      },
    },
    {
      title: "Howdy",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Howdy is a place for you to join communities you care about",
      logo: Howdy,
      link: {
        label: "play.google.com",
        href: "https://howdy.co/",
      },
    },
    {
      title: "Tastycloud",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for managing and displaying restaurant menus in kiosk mode",
      logo: TastyCloudLogo,
      link: {
        label: "tastycloud.fr",
        href: "https://www.tastycloud.fr/",
      },
    },
  ],
} as const;
