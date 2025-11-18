import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  // BASIC DETAILS
  name: "Dhanraj Sonawane",
  initials: "DRS",
  url: "https://your-portfolio-url.com", // तुझा Vercel URL नंतर देऊ
  location: "Pune, Maharashtra, India",
  locationLink: "https://www.google.com/maps/place/Pune",

  description:
    "Aspiring Software Developer | MCA Student | Passionate about Web Development, React.js, Node.js, Python & AI.",
  
  summary:
    "I am an MCA student from Trinity Academy of Engineering, Pune. I enjoy building modern web apps using React.js, Next.js, Node.js, and Python. I have worked on multiple personal projects like TaskMate, SIP Calculator, Crime Alert App, and AI tools. I love learning new technologies and building real-world applications.",

  avatarUrl: "/dhanraj-photo.png",

  // SKILLS
  skills: [
    "React.js",
    "Next.js",
    "TailwindCSS",
    "Node.js",
    "Express.js",
    "JavaScript",
    "TypeScript",
    "Python",
    "Django",
    "SQL",
    "MongoDB",
    "Git",
    "Java",
  ],

  // NAVBAR
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],

  // CONTACT
  contact: {
    email: "dhanrajsonawane268@gmail.com",
    tel: "8080904603",

    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/DhanrajSonawane", // तुझा actual link दे
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/dhanraj-sonawane", // Confirm केलेली link
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://twitter.com/", // असेल तर दे
        icon: Icons.x,
        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://youtube.com/@yourchannel", // तुझा असेल तर दे
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:dhanrajsonawane268@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  // WORK / INTERNSHIPS
  work: [
    {
      company: "ABC Tech",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Software Intern",
      logoUrl: "/company1.png",
      start: "June 2024",
      end: "Aug 2024",
      description:
        "Worked on React.js & Node.js projects, built UI components, created REST APIs, and improved UI/UX for internal dashboards.",
    },
    {
      company: "XYZ Solutions",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Python Intern",
      logoUrl: "/company2.png",
      start: "Jan 2023",
      end: "May 2023",
      description:
        "Developed automation scripts using Python, worked with Django backend, and collaborated on data analysis tasks.",
    },
  ],

  // EDUCATION
  education: [
    {
      school: "Trinity Academy of Engineering, Pune",
      href: "https://taepune.com",
      degree: "Master of Computer Applications (MCA)",
      logoUrl: "/mca.png",
      start: "2023",
      end: "Present",
    },
    {
      school: "[Your UG College Name]",
      href: "#",
      degree: "Bachelor of Computer Applications (BCA)",
      logoUrl: "/bca.png",
      start: "2019",
      end: "2022",
    },
    {
      school: "[Your 12th School]",
      href: "#",
      degree: "HSC (12th)",
      logoUrl: "/12.png",
      start: "2017",
      end: "2019",
    },
    {
      school: "[Your 10th School]",
      href: "#",
      degree: "SSC (10th)",
      logoUrl: "/10.png",
      start: "2015",
      end: "2017",
    },
  ],

  // PROJECTS
  projects: [
    {
      title: "TaskMate",
      href: "#",
      dates: "2024",
      active: true,
      description:
        "Task management web application using React.js, Node.js and TailwindCSS.",
      technologies: ["React.js", "Node.js", "TailwindCSS"],
      links: [],
      image: "",
    },
    {
      title: "SIP Calculator",
      href: "#",
      dates: "2023",
      active: true,
      description:
        "A Python Tkinter application used to calculate SIP investment returns.",
      technologies: ["Python", "Tkinter"],
      links: [],
      image: "",
    },
    {
      title: "Local Crime Alert App",
      href: "#",
      dates: "2023",
      active: true,
      description:
        "An Android application providing crime alert notifications using Firebase.",
      technologies: ["Android", "Java", "Firebase"],
      links: [],
      image: "",
    },
  ],

  // OPTIONAL - You can add hackathons later
  hackathons: [],
} as const;
