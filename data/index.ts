import ReactIcon from "@/src/assets/react.svg";
import NextIcon from "@/src/assets/next.svg";
import TailIcon from "@/src/assets/tail.svg";
import TsIcon from "@/src/assets/ts.svg";
import ExIcon from "@/src/assets/ex.svg";
import CIcon from "@/src/assets/c.svg";
import PyIcon from "@/src/assets/py.svg";
import ReduxIcon from "@/src/assets/redux.svg";
import PostgresIcon from "@/src/assets/PostgresSQL.svg";
import MysqlIcon from "@/src/assets/MySQL.svg";
import MongoIcon from "@/src/assets/MongoDB.svg";
import AwsIcon from "@/src/assets/awss.svg";
import CppIcon from "@/src/assets/cpp.svg";
import GitIcon from "@/src/assets/git.svg";

export const navItems = [
  { name: "About ", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Skills", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "I craft scalable apps with Next.js, React, TypeScript, Express, Tailwind CSS, and React Native. blending problem-solving with clean UI/UX.",
    description: "",
    className:
      "lg:col-span-3 md:col-span-6 md:row-span-4  lg:min-h-[60vh]  bg-gray/50   ",
    imgClassName: "w-full h-full object-cover object-top  ",

    titleClassName: " h-full ",
    img: "/app.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "Adapting Across Time Zones for Smooth Communication",
    description: "",
    className: "lg:col-span-2 md:col-span-3  md:row-span-4 bg-black ",
    imgClassName: " ",
    titleClassName: "justify-start   ",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "ZenFunds",
    des: `ZenFunds, A modern finance managing app  with advanced AI-powered report analysis, giving clear insights into your income, expenses, and savings. It features a real-time dashboard to monitor spending, predict cash flow, and suggest smarter saving strategies.`,
    img: "/ww.webp",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg"],
    link: "https://zenfunds.vercel.app",
    git: "https://github.com/mudpirate/Zenfunds",
  },
  {
    id: 2,
    title: "The Pitch",
    des: "The Pitch is an AI-powered blog platform that lets you create, manage, and discover content with ease. Featuring Gemini AI for smart blog generation, a rich text editor, advanced search and filtering, personalized dashboards, and optimized image uploads.",
    img: "/newproject.webp",
    git: "https://github.com/mudpirate/Football-blog",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://the-pitch-ruby.vercel.app",
  },
  {
    id: 3,
    title: "ConGame",
    des: "ConGame is a full-stack gaming console rental platform with secure authentication, real-time bookings, and live availability checks. It offers an admin dashboard for managing consoles and users, detailed game listings, owner analytics.",
    img: "/image2.webp",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://gaming-rental.vercel.app",
    git: "https://github.com/mudpirate/Gaming-rental",
  },
  {
    id: 4,
    title: "FootLand",
    des: " A responsive E-Commerce frontend built with React and Tailwind CSS. Features include dynamic product listings, category-based filtering, a functional shopping cart, and smooth page navigation using React Router. Designed for scalability and fast user experience.",
    img: "/image1.webp",
    git: "https://github.com/mudpirate/e-commerce",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg"],
    link: "https://e-commerce-one-lyart-97.vercel.app",
  },
];

export const testimonials = [
  { image: ReactIcon },
  { image: NextIcon },
  { image: TailIcon },
  { image: TsIcon },
  { image: ExIcon },
  { image: CIcon },
  { image: PyIcon },
  { image: ReduxIcon },
  { image: PostgresIcon },
  { image: MysqlIcon },
  { image: MongoIcon },
  { image: AwsIcon },
  { image: CppIcon },
  { image: GitIcon },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Development",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
  },
  {
    id: 2,
    title: "Mobile App Development",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "ap.png",
  },
  {
    id: 3,
    title: "Freelance Developer",
    desc: "Led the dev of a mobile app and websites for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 4,
    title: "Backend Developer",
    desc: "Developed and maintained user-facing features using modern Backend technologies.",
    className: "md:col-span-2",
    thumbnail: "/backend.png",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/mudpirate",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/mud_pirate__",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/nomesh-singh-121510328/",
  },
];
