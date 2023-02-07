// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Maurizio",
  middleName: "",
  lastName: "Bussi",
  message: "I love playing Python, Docker and Git. I love playing Chess. I love playing Piano.",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/bigmauri",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/maurizio-bussi/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/picture.jpg"),
  imageSize: 375,
  message:
    "As a Linux lover, CLI it's my daily bread! I strongly adopted TDD approach during OOP development session, cause 'In test we trust'. I stay updated attending courses about BigData|MapReduce and Docker|K8s journey",
//  resume: "https://drive.google.com/file/d/19CDfdcnvqB-Re12EbhX74MXbZ2nR4EPY/view?usp=sharing",
  resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "bigmauri", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: ["python-git", "eagleX"],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "I am able to provide your team with a new positive energy and compassionate leadership qualities.",
  images: [
    { 
      img: require("../editable-stuff/picture.jpg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/picture.jpg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"350",
    height:"380"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "Docker", value: 88 },
    { name: "Azure DevOps", value: 80 },
    { name: "Django/Flask", value: 80 },
    { name: "JavaScript", value: 70 },
    { name: "PostgreSql", value: 70 },
    { name: "MongoDB", value: 65 },
    { name: "Git", value: 92 },
  ],
  softSkills: [
    { name: "Team-Building", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 90 },
    { name: "Determination", value: 80 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Love Coding", value: 99 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently very satisfied of my current position as Test Automation Python Developer! If you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "maurizio.bussi.mb@gmail.com",
};

const experiences = {
  show: true,
  heading: "Last Experience",
  data: [
    {
      role: 'Software Developer at Reply Concept',
      companylogo: require('../assets/img/replyconcept.jpeg'),
      date: 'December 2019 – Present',
    },
    {
      role: 'TestAutomation with Python | Docker | Git | Azure',
      date: '[CI/CD] Remote execution on AZURE CLOUD in order to AUTOMATE test cases validation day by day. PYTHON and PYTEST as core of the framework. Maintainer of internal python packages and PIPELINE definitions exploiting the power of DOCKER. Everything was been versioned using GIT with REBASE strategy, code integration based on Pull Requests.',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
