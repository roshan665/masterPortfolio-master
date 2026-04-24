/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Roshan's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Roshan Sahani Portfolio",
    type: "website",
    url: "http://roshansahani.com/",
  },
};

//Home Page
const greeting = {
  title: "Roshan Sahani",
  logo_name: "RoshanSahani",
  nickname: "",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1x7XOHhfjFl0nKBVkJUqmNDCtsvxG0-yw/view?usp=drivesdk",
  portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
  githubProfile: "https://github.com/roshan665",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/roshan665",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "as1917378@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",

  {
    name: "Github",
    link: "https://github.com/roshan665",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/roshan-sahani-019a7236b?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  
  {
    name: "Gmail",
    link: "mailto:as1917378@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  
  
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Building a strong AI/ML foundation through hands-on projects, internships, and certifications",
        "⚡ Performing data analysis, preprocessing, and visual exploration to discover actionable patterns",
        "⚡ Practicing end-to-end ML workflow: problem framing, model building, evaluation, and iteration",
      ],
      softwareSkills: [
        {
          skillName: "Scikit-learn",
          fontAwesomeClassname: "simple-icons:scikitlearn",
          style: {
            color: "#F7931E",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            color: "#150458",
          },
        },
        {
          skillName: "NumPy",
          fontAwesomeClassname: "simple-icons:numpy",
          style: {
            color: "#013243",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "TensorFlow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive web interfaces using modern frontend fundamentals",
        "⚡ Creating project prototypes quickly and iterating through hackathons and student projects",
        "⚡ Applying clean coding and debugging practices while developing in Python and C++",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#00599C",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#F05032",
          },
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "#181717",
          },
        },
        {
          skillName: "VS Code",
          fontAwesomeClassname: "simple-icons:visualstudiocode",
          style: {
            color: "#007ACC",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "simple-icons:linux",
          style: {
            color: "#FCC624",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Exploring ML deployment and MLOps concepts through masterclasses and guided programs",
        "⚡ Learning cloud-based AI workflows with Google Cloud and Azure-oriented learning tracks",
        "⚡ Understanding scalable AI solution design from data ingestion to model serving",
        "⚡ Continuously practicing build-and-ship mindset through real projects and hackathons",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "Core CS & Problem Solving",
      fileName: "DesignImg",
      skills: [
        "⚡ Strengthening programming logic through consistent coding practice on multiple platforms",
        "⚡ Applying DSA and core CS concepts while solving problems and building projects",
        "⚡ Improving team collaboration, communication, and execution through hackathon experience",
      ],
      softwareSkills: [
        {
          skillName: "LeetCode",
          fontAwesomeClassname: "simple-icons:leetcode",
          style: {
            color: "#F79F1B",
          },
        },
        {
          skillName: "Codeforces",
          fontAwesomeClassname: "simple-icons:codeforces",
          style: {
            color: "#1F8ACB",
          },
        },
        {
          skillName: "CodeChef",
          fontAwesomeClassname: "simple-icons:codechef",
          style: {
            color: "#5B4638",
          },
        },
        {
          skillName: "HackerRank",
          fontAwesomeClassname: "simple-icons:hackerrank",
          style: {
            color: "#2EC866",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/u/AQUSqB4dOM/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/as1917378",
    },
    
   
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/roshansahani321",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "IES College of Technology, Bhopal",
      subtitle: "B.Tech. in Computer Science and Engineering (Undergraduate)",
      alt_name: "IES College of Technology",
      duration: "Pursuing",
      descriptions: [
        "⚡ Currently pursuing undergraduate studies in Computer Science and Engineering.",
        "⚡ Building strong fundamentals in DSA, DBMS, OS, OOP, and practical software development.",
        "⚡ Focused on AI/ML, Python, C++, and project-based learning through certifications and hackathons.",
        "⚡ College is affiliated with Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV), Bhopal.",
      ],
      website_link: "https://iescollege.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Design a Machine Learning Solution",
      subtitle: "- Microsoft Learn",
      logo_path: "microsoft_logo.png",
      certificate_link: "https://learn.microsoft.com/",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "ML Ops Fundamentals - Building, Deploying, and Scaling AI Solutions",
      subtitle: "- Scaler Masterclass",
      logo_path: "coursera_logo.png",
      certificate_link: "https://www.scaler.com/",
      alt_name: "Scaler",
      color_code: "#FF6F00",
    },
    {
      title: "Artificial Intelligence Fundamentals",
      subtitle: "- IBM SkillsBuild",
      logo_path: "ibm_logo.png",
      certificate_link: "https://skillsbuild.org/",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Introduction to AI & ML",
      subtitle: "- Analytics Vidhya",
      logo_path: "coursera_logo.png",
      certificate_link: "https://www.analyticsvidhya.com/",
      alt_name: "Analytics Vidhya",
      color_code: "#7A4CFF99",
    },
    {
      title: "AI & Machine Learning Internship",
      subtitle: "- AICTE x Edunet Foundation",
      logo_path: "ibm_logo.png",
      certificate_link: "https://edunetfoundation.org/",
      alt_name: "Edunet Foundation",
      color_code: "#0C9D5899",
    },
    {
      title: "Virtual Internship in Google Cloud Generative AI",
      subtitle: "- SmartBridge x AICTE",
      logo_path: "google_logo.png",
      certificate_link: "https://www.thesmartbridge.com/",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "5-Day AI Agents Intensive Program",
      subtitle: "- Google x Kaggle",
      logo_path: "google_logo.png",
      certificate_link: "https://www.kaggle.com/",
      alt_name: "Kaggle",
      color_code: "#4285F499",
    },
    {
      title: "Python Coder",
      subtitle: "- Kaggle",
      logo_path: "google_logo.png",
      certificate_link: "https://www.kaggle.com/",
      alt_name: "Kaggle",
      color_code: "#20BEFF99",
    },
    {
      title: "30-Day Python Using AI Program",
      subtitle: "- AI for Techies",
      logo_path: "coursera_logo.png",
      certificate_link: "https://aifortechies.in/",
      alt_name: "AI for Techies",
      color_code: "#3776AB99",
    },
    {
      title: "The Joy of Computing using Python",
      subtitle: "- NPTEL",
      logo_path: "nptel_logo.png",
      certificate_link: "https://nptel.ac.in/",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Startup School: Prompt to Prototype",
      subtitle: "- Google for Startups",
      logo_path: "google_logo.png",
      certificate_link: "https://startup.google.com/",
      alt_name: "Google for Startups",
      color_code: "#4285F499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Internships, Projects and Leadership",
  description:
    "I am an undergraduate CSE student building practical experience through AI/ML internships, hackathon projects, and continuous hands-on development. My focus is on solving real problems with Python, machine learning, and modern development tools.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Projects",
      experiences: [
        {
          title: "Team Finder (Hackathon Build)",
          company: "GitHub Project",
          company_url: "https://github.com/roshan665/Team-finder",
          logo_path: "github_logo.png",
          duration: "2026",
          location: "IES College of Technology, Bhopal",
          description:
            "Developed a team matching solution during a college hackathon to connect collaborators based on skills and project interests. Focused on rapid prototyping, feature prioritization, and teamwork under strict deadlines.",
          color: "#000000",
        },
        {
          title: "House Price Prediction",
          company: "GitHub Project",
          company_url: "https://github.com/roshan665/house-price-prediction2.0",
          logo_path: "github_logo.png",
          duration: "2026",
          location: "Bhopal, Madhya Pradesh",
          description:
            "Built and improved a machine learning project for house price prediction using notebook-based experimentation. Worked on data preprocessing, feature understanding, model training, and iterative performance tuning.",
          color: "#336791",
        },
        {
          title: "Telegram Automation Bot",
          company: "GitHub Project",
          company_url: "https://github.com/roshan665/telegram-order-bot-",
          logo_path: "github_logo.png",
          duration: "2026",
          location: "Remote",
          description:
            "Created a Python-based Telegram bot to automate conversation flow and utility actions. Strengthened practical backend logic, API integration patterns, and bot interaction design.",
          color: "#3776AB",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "AI & Machine Learning Intern",
          company: "Edunet Foundation (AICTE)",
          company_url: "https://edunetfoundation.org/",
          logo_path: "ibm_logo.png",
          duration: "Jan 2026 - Feb 2026",
          location: "Remote",
          description:
            "Completed a structured AI/ML internship program focused on practical understanding of model workflows, experimentation, and implementation. Strengthened foundation in applied machine learning and solution-oriented thinking.",
          color: "#1F70C1",
        },
        {
          title: "Virtual Internship - Google Cloud Generative AI",
          company: "SmartBridge x AICTE",
          company_url: "https://www.thesmartbridge.com/",
          logo_path: "google_logo.png",
          duration: "Sep 2025 - Oct 2025",
          location: "Remote",
          description:
            "Worked through a guided virtual internship on Google Cloud GenAI concepts, learning how modern AI tools can be applied in practical solutions. Built confidence in cloud and AI integration for real-world projects.",
          color: "#0C9D58",
        },
        {
          title: "ML Ops Fundamentals Masterclass",
          company: "Scaler",
          company_url: "https://www.scaler.com/",
          logo_path: "coursera_logo.png",
          duration: "Mar 2026",
          location: "Online",
          description:
            "Completed an industry-oriented masterclass on building, deploying, and scaling AI systems. Gained exposure to MLOps lifecycle concepts from development to production-ready workflows.",
          color: "#FF6F00",
        },
      ],
    },
    {
      title: "Leadership & Community",
      experiences: [
        {
          title: "College Hackathon Winner",
          company: "IES College of Technology",
          company_url: "https://iescollege.ac.in/",
          logo_path: "google_logo.png",
          duration: "2026",
          location: "Bhopal, Madhya Pradesh",
          description:
            "Contributed to a winning solution in a college hackathon by helping convert a concept into a working implementation through collaboration, rapid iteration, and effective problem-solving.",
          color: "#4285F4",
        },
        {
          title: "LinkedIn Learning & Tech Sharing",
          company: "Personal Brand",
          company_url: "https://www.linkedin.com/in/roshan-sahani-019a7236b",
          logo_path: "microsoft_logo.png",
          duration: "2025 - Present",
          location: "Online",
          description:
            "Regularly sharing progress from AI/ML certifications, internship learnings, and project milestones to document growth and connect with the developer community.",
          color: "#D83B01",
        },
        {
          title: "GitHub Project Portfolio",
          company: "GitHub",
          company_url: "https://github.com/roshan665",
          logo_path: "github_logo.png",
          duration: "2025 - Present",
          location: "Remote",
          description:
            "Maintaining a growing GitHub portfolio with student-focused builds in AI/ML and automation, reflecting practical implementation and continuous development practice.",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "A selection of my GitHub repositories covering AI/ML experiments, Python automation, TypeScript builds, and practical student projects developed through continuous learning and hackathons.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Let's Build Something",
    profile_image_path: "roshan_profile.png",
    description:
      "CSE student focused on AI/ML, Python, C++, and Web Development. I enjoy turning ideas into practical projects, collaborating in hackathons, and learning by building.",
  },
  blogSection: {
    title: "Learning Journey",
    subtitle:
      "I regularly share certifications, project updates, and AI/ML learning milestones on LinkedIn.",
    link: "https://www.linkedin.com/in/roshan-sahani-019a7236b",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Location",
    subtitle: "Bhopal, Madhya Pradesh, India",
    locality: "Bhopal",
    country: "India",
    region: "Madhya Pradesh",
    postalCode: "462001",
    streetAddress: "Bhopal",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.google.com/?q=Bhopal+Madhya+Pradesh+India",
  },
  phoneSection: {
    title: "Preferred Collaboration",
    subtitle: "Internships, student tech projects, AI/ML collaboration, and hackathon teams",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
