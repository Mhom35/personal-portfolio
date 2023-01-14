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
import fastapi from "../assets/img/fastapi.svg"
import python from "../assets/img/python.png"
import docker from "../assets/img/docker.png"
import signin from "../assets/img/signin.png"
import signup from "../assets/img/signup.png"
import homepage from "../assets/img/homepage.png"
import stripe2 from "../assets/img/stripe2.png"
import stripe1 from "../assets/img/stripe1.png"
import confirmation from "../assets/img/confirmation.png"
import home from "../assets/img/home.png"
import cart from "../assets/img/cart.png"
import product from "../assets/img/product.png"
import nextjs from "../assets/img/nextjs.png"
import sanity from "../assets/img/sanity.png"
import stripelogo from "../assets/img/stripelogo.png"


 const projects1 = [
    {
      title: "React Map GL",
      description: "A map to see what bars other users have had drinks at based on user input (city, street, etc.) or user’s current location",
      imgUrl: map,
    },
    {
      title: "Heat Map",
      description: "A scrollable component with popularity data to show where the most people are concentrated at on a given day and time",
      imgUrl: sfhm,
    },
    {
      title: "Editable component",
      description: "Drag and drop to edit the trips you have made to let other users know which bars they should visit and in what order",
      imgUrl: edit,
    },
    {
        title: "Authentication",
        description: "Users must be signed in to be able to make trip recommendations to other users",
        imgUrl: signin,
      },
      {
        title: "Authentication",
        description: "New users can sign up and have their information stored in our database",
        imgUrl: signup,
      },
      {
        title: "Landing Page",
        description: " ",
        imgUrl: homepage,
      },
  ];

  const projects2 = [
    {
      title: "Landing Page",
      description: "At this page, customers see a formatted banner that navigates to products that are on sale",
      imgUrl: home,
    },
    {
      title: "Shopping Cart",
      description: "A responsive shopping cart with functional buttons to add, subtract, and delete items",
      imgUrl: cart,
    },
    {
      title: "Product Detail Page",
      description: "Shows product description, options to add to cart or buy now, plus a carousel of items related to the product.",
      imgUrl: product,
    },
  
    {
      title: "Payment System",
      description: "A functional payment processing system via Stripe API",
      imgUrl: stripe1,
    },
    {
      title: "Succesful Purchase",
      description: "Purchase order and customer information enters the database once payment processing completes",
      imgUrl: stripe2,
    },

    {
      title: "Order Confirmation",
      description: "An email confirmation is sent once payment processing completes and enters the system",
      imgUrl: confirmation,
    },
    
      

  ];
  const projects3 = [
    {
      title: "Search Employee Sales",
      description: "Parse employee sales history using responsive React components",
      imgUrl: salesHistory,
    },
    {
      title: "List of Service Appointments",
      description: "List automatically refetches if the service of a car has been finished",
      imgUrl: schedule,
    },
    {
        title: "List of Vehicle Models",
        description: "List automatically refetches if new car models have been added for sale",
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
  const techstack2 = [
    {
        title: "React",
        imgUrl: reactLogo,
    },
    {
        title: "Sanity.io",
        imgUrl: sanity,
    },
    {
      title: "Next JS",
      imgUrl: nextjs,
  },
    {
        title: "Stripe",
        imgUrl: stripelogo,
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

export {projects1, projects2, projects3, techstack1, techstack2, techstack3}


  