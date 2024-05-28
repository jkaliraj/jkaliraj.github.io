export default {
  // Override config/style.yaml defaults here if needed
  config: {
    content: {},
  },
  pages: {
    home: {
      config: {
        content: {
          title: "Home",
          link: "/",
          navigation: true,
          template: "home",
          inverse: false,
          poster_fade: 0.8,
          poster_image_opacity: 0.5,
          poster_title_fade: 0.5,
        },
      },
      me: {
        localFile: "https://placehold.co/400x400/b3a577/181818?text=KR",
      },

      index: {
        content:
          '<div style="text-align: center">\n<img src="https://placehold.co/394x394/b3a577/181818?text=KR" style="border-radius: 50%; width: 394px; height: 394px;">\n</div>\n\n<br />\n\n👋 Hey, I am __Kaliraj__,  \na passionate __full-stack developer__ crafting elegant web solutions. I specialize in building scalable applications with modern technologies like __React__, __Node.js__, and __Python__. I love turning complex problems into simple, beautiful interfaces.\n\nI have experience working with various tech stacks and frameworks, always eager to learn and adapt to new technologies. Whether it\'s frontend magic or backend architecture, I enjoy the entire development process.\n\nIf you want to collaborate or just say hi, feel free to [drop me a line](mailto:kaliraj.jeganathan@gmail.com).\n\n__Let\'s build something amazing together!__\n\n',
        rev: "home-001",
      },
    },
    about: {
      config: {
        content: {
          title: "About",
          link: "/about",
          navigation: true,
          template: "page",
          poster_height: 90,
          poster_scale: 0,
          poster_parallax: 0.5,
          poster_move: 0,
          poster_blur: 0.1,
          poster_fixed: true,
          poster_title_move: 0,
          poster_vignette: true,
          poster_gradient: true,
          poster_fade: 1,
          poster_image_opacity: 1,
          poster_title_fade: 0,
        },
      },
      poster: {
        localFile: "https://placehold.co/1920x1080/181818/b3a577?text=About+Me",
      },
      index: {
        content:
          "# About Me\n\nI'm __Kaliraj__, a full-stack developer passionate about creating elegant and efficient web solutions.\n\n## What I Do\n\nI specialize in:\n- Building modern web applications with __React__ and __Node.js__\n- Designing scalable backend systems with __Python__ and __FastAPI__\n- Creating responsive, user-friendly interfaces\n- Writing clean, maintainable code\n\n## My Approach\n\nI believe in continuous learning and staying up-to-date with the latest technologies. Every project is an opportunity to learn something new and deliver exceptional results.\n\n## Get In Touch\n\nInterested in working together? Let's connect!\n\n📧 [kaliraj.jeganathan@gmail.com](mailto:kaliraj.jeganathan@gmail.com)\n",
        rev: "about-001",
      },
    },
    bits: {
      config: {
        content: {
          title: "Bits",
          link: "/bits",
          navigation: true,
          template: "list",
        },
      },
      index: {
        content: "",
        rev: "bits-001",
      },
      "react-portfolio": {
        path: "react-portfolio",
        config: {
          content: {
            title: "React Portfolio",
            link: "/bits/react-portfolio",
            category: "Web Development",
            template: "page",
          },
        },
        index: {
          content:
            "# React Portfolio\n\nA modern portfolio template built with React and Redux.",
          rev: "react-portfolio-001",
        },
      },
      "js-library": {
        path: "js-library",
        config: {
          content: {
            title: "JavaScript Library",
            link: "/bits/js-library",
            category: "Open Source",
            template: "page",
          },
        },
        index: {
          content:
            "# JavaScript Library\n\nA utility library for common JavaScript tasks.",
          rev: "js-library-001",
        },
      },
      "web-animation": {
        path: "web-animation",
        config: {
          content: {
            title: "Web Animation Demo",
            link: "/bits/web-animation",
            category: "Animation",
            template: "page",
          },
        },
        index: {
          content:
            "# Web Animation Demo\n\nInteractive animation examples using GSAP and CSS.",
          rev: "web-animation-001",
        },
      },
    },
    pixels: {
      config: {
        content: {
          title: "Pixels",
          link: "/pixels",
          navigation: true,
          template: "list",
          twocol: false,
        },
      },
      index: {
        content: "",
        rev: "pixels-001",
      },
      "mountain-landscape": {
        path: "mountain-landscape",
        config: {
          content: {
            title: "Mountain Landscape",
            link: "/pixels/mountain-landscape",
            category: "Landscape",
            preview: "preview",
            template: "collection",
          },
        },
        preview: {
          localFile:
            "https://placehold.co/1200x800/b3a577/181818?text=Mountain+Landscape",
        },
        index: {
          content:
            "# Mountain Landscape\n\nCaptured in the Swiss Alps during golden hour.",
          rev: "mountain-landscape-001",
        },
      },
      "urban-architecture": {
        path: "urban-architecture",
        config: {
          content: {
            title: "Urban Architecture",
            link: "/pixels/urban-architecture",
            category: "Architecture",
            preview: "preview",
            template: "collection",
          },
        },
        preview: {
          localFile:
            "https://placehold.co/1200x800/b3a577/181818?text=Urban+Architecture",
        },
        index: {
          content:
            "# Urban Architecture\n\nModern architecture in downtown Vienna.",
          rev: "urban-architecture-001",
        },
      },
      "street-photography": {
        path: "street-photography",
        config: {
          content: {
            title: "Street Photography",
            link: "/pixels/street-photography",
            category: "Street",
            preview: "preview",
            template: "collection",
          },
        },
        preview: {
          localFile:
            "https://placehold.co/1200x800/b3a577/181818?text=Street+Photography",
        },
        index: {
          content: "# Street Photography\n\nLife on the streets of Berlin.",
          rev: "street-photography-001",
        },
      },
    },
    contact: {
      config: {
        content: {
          title: "Contact",
          link: "/contact",
          navigation: true,
          template: "contact",
        },
      },
      index: {
        content:
          "# LET'S CONNECT!\n\n__Crafting AI-powered solutions.  \nReady to build the future.__\n\n[kaliraj.jeganathan@gmail.com](mailto:kaliraj.jeganathan@gmail.com)\n",
        rev: "contact-001",
      },
    },
  },
  files: {
    "/home/me.png": {
      localFile: "https://placehold.co/394x394/b3a577/181818?text=KR",
    },
    "/bits/react-portfolio/preview": {
      localFile:
        "https://placehold.co/800x600/b3a577/181818?text=React+Portfolio",
    },
    "/bits/js-library/preview": {
      localFile: "https://placehold.co/800x600/b3a577/181818?text=JS+Library",
    },
    "/bits/web-animation/preview": {
      localFile:
        "https://placehold.co/800x600/b3a577/181818?text=Animation+Demo",
    },
    "/pixels/mountain-landscape/preview": {
      localFile:
        "https://placehold.co/1200x800/b3a577/181818?text=Mountain+Landscape",
    },
    "/pixels/urban-architecture/preview": {
      localFile:
        "https://placehold.co/1200x800/b3a577/181818?text=Urban+Architecture",
    },
    "/pixels/street-photography/preview": {
      localFile:
        "https://placehold.co/1200x800/b3a577/181818?text=Street+Photography",
    },
  },
};
