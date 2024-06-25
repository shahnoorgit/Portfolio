export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
  { name: "Experience", link: "#experience" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize building scalable and robust systems",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I have been working with clients across the globe",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Tech-Stack",
    description: "I constantly improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "I am open for work,let's connect!",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "AethetixAI - SaaS AI Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/saasAI.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/c.svg"],
    link: "https://aesthetixai.vercel.app/",
  },
  {
    id: 2,
    title: "DevChats- RealTime Chating webapp Using Sockets",
    des: "A RealTime Chating Fullstack WebApp Made using MERN stack and Socket Styled with Tailwindcss",
    img: "/project.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    link: "https://devchats.onrender.com/",
  },

  {
    id: 3,
    title: "RepoIT- a github alternative with amazing features ",
    des: "A feature-rich alternative to GitHub with seamless authentication, powerful search capabilities, and user interactions.",
    img: "/port3.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    link: "https://repoit-github.onrender.com/",
  },
  {
    id: 4,
    title: "My3D Shirt - fullstack 3D shirt designing Platform",
    des: "An online 3D shirts designing platform with AI bot assistance and many more amazing features.",
    img: "/port4.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg"],
    link: "https://65d1bc1991a5a70f4eec9531--adorable-platypus-aa9ab8.netlify.app/",
  },
  {
    id: 5,
    title: "GenZ AI - fullstack Generative AI Platform",
    des: "A Fullstack Generative AI images building Platform with community share, Build Images With simple prompt!.",
    img: "/project5.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    link: "https://65c739965afb41498450e9da--peppy-frangipane-096f75.netlify.app/",
  },
  {
    id: 6,
    title: "PromptShare -Community Based AI Prompts Sharing Platform",
    des: "Share your amazing AI prompts to our friendly AI prompt sharing community build with next14.",
    img: "/project6.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    link: "https://prompt-share-azrhtd506-shahnoors-projects.vercel.app/",
  },
];

export const testimonials = [
  {
    quote:
      "he has demonstrated exceptional skills and significantly contributed to the organization. He has consistently displayed a strong work ethic, a positive attiude, and a willingness to learn. He was a valuable asset to our team, and we are confident he will contribute his skills to the growth and success of the organization he will be associated with.",
    name: "MANISHA BHALE",
    title: "CEO of Technifyworld Techno Solutions",
    img: "/manisha.webp",
  },
  {
    quote:
      "Collaborating with shahnoor was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project.",
    name: "HIDEKI OKAMURA",
    title: "SR Fullstack Developer Freelancer",
    img: "/olek.jpg",
  },
  {
    quote:
      "Working with shahnoor was great experience, he worked well and fully build the website for our company as contract freelancer. if you are looking for anyone who can deliver stuff quickly,then shahnoor should be your choice.",
    name: "HIADER NADAF",
    title: "CO-Founder of Rideresale",
    img: "/haider.jpg",
  },
  {
    quote:
      "Shahnoor has helped our organization to build website from mere Idea to mvp,he's skills and professionalism has contributed immensily to our company.",
    name: "ASHOK",
    title: "Co-founder of Kitty-bees",
    img: "/ashok.jpg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Full-Stack Developer - TWTS",
    desc: "Assisted in the development of a web-based platform using React.js, nodejs and mongodb.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Data Science Intern - Nullclass",
    desc: "Designed and developed Emotion Detection ML model using Python With Tensorflow.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance Web Developer",
    desc: "Led the dev of a various webapps for a clients around the world, from initial concept to deployment.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Developer - Indiflats",
    desc: "I have co-founded and developed the Realtek startup handling its development and maintainance.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/shahnoorgit",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/shahnoor-mujawar-3960052a1/",
  },
];
