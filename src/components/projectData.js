import map from "../assets/img/map.png";
import sfhm from "../assets/img/sfhm.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import github from "../assets/img/github.svg"
import edit from "../assets/img/edit.png"
import salesHistory from "../assets/img/salesHistory.png"
import schedule from "../assets/img/schedule.png"
import vmodels from "../assets/img/vmodels.png"
import reactLogo from "../assets/img/react-logo.png"
import jsLogo from "../assets/img/jsLogo.png"
import djangoLogo from "../assets/img/djangoLogo.png"
import psql from "../assets/img/psql.png"
import mongo from "../assets/img/mongo.png"
import html from "../assets/img/html.png"
import css from "../assets/img/css.png"
import fastapi from "../assets/img/fastapi.svg"
import python from "../assets/img/python.png"
import docker from "../assets/img/docker.png"
import signin from "../assets/img/signin.png"
import signup from "../assets/img/signup.png"
import homepage from "../assets/img/homepage.png"

 const projects1 = [
    {
      title: "React Map GL",
      description: "Map to see where bars other users have drunk at based on user input (city, street, etc) or user's current location",
      imgUrl: map,
    },
    {
      title: "Heat Map",
      description: "Scrollable component with popularity data to show where the where most people are concentrated at on a given day and time",
      imgUrl: sfhm,
    },
    {
      title: "Editable component",
      description: "Drag and drop to edit the trips you have made to let other users know what order of bars they should attend",
      imgUrl: edit,
    },
    {
        title: "Authentication",
        description: "Users must be signed in to make a recommend trips to other users",
        imgUrl: signin,
      },
      {
        title: "Authentication",
        description: "New users can sign up and their information will be stored in the our database",
        imgUrl: signup,
      },
      {
        title: "Landing Page",
        description: "Landing Page",
        imgUrl: homepage,
      },
  ];

  const projects2 = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: projImg3,
      },

  ];
  const projects3 = [
    {
      title: "Search Employee Sales",
      description: "Find employee sales history using responsive react components",
      imgUrl: salesHistory,
    },
    {
      title: "List of Service Appointments",
      description: "Auto refetch if service of car has been finished ",
      imgUrl: schedule,
    },
    {
        title: "List of Vehicle Models",
        description: "Automatically refetch if new car models have been added",
        imgUrl: vmodels,
      },
  ];

  const techstack1 = [
    {
        title: "React",
        imgUrl: reactLogo,
    },
    {
        title: "Fast API",
        imgUrl: fastapi,
    },
    {
        title: "PostgreSQL",
        imgUrl: psql,
    },
    
    {
        title: "python",
        imgUrl: python,
    },

    {
        title: "Javascript",
        imgUrl: jsLogo,
    },

  ]


  const techstack3 = [
    {
        title: "React",
        imgUrl: reactLogo,
    },
    {
        title: "Django",
        imgUrl: djangoLogo,
    },


    {
        title: "Docker",
        imgUrl: docker,
    },
    {
        title: "Javascript",
        imgUrl: jsLogo,
    },

  ]

export {projects1, projects2, projects3, techstack1, techstack3}


  