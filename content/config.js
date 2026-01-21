var constants = {
  "config": {
    "appTitle": "Historic Tale Construction Kit",
    "appSub": "Fraktur",
    "repository": "https://github.com/rmiessle/fraktur",
    "authors": [
      {
        "name": "R.C.",
        "link": "https://github.com/rmiessle"
      }
    ]
  },
  "colors": [
    "#000000",
    "#ffffff",
    "#c2a355",
    "#853520",
    "#82834b",
    "#3a4036",
    "#878b56",
    "#342f24",
    "#725034"
  ],
  "tabs": [
    {
      "title": "Heaven",
      "images": [
        "content//images/heaven/01_angel1.png",
        "content//images/heaven/02_angel2.png",
        "content//images/heaven/03_jesus1.png",
        "content//images/heaven/04_jesus2.png"
      ]
    },
    {
      "title": "Hell",
      "images": [
        "content//images/hell/01_crow1.png",
        "content//images/hell/02_devil2.png",
        "content//images/hell/03_whore-of-babylon3.png"
      ]
    },
    {
      "title": "Decor",
      "images": [
        "content//images/decor/01_sun1.png",
        "content//images/decor/02_sun2.png",
        "content//images/decor/03_tree1.png"
      ]
    },
    {
      "title": "Folks",
      "images": [
        "content//images/folx/01_saint-boy1.png",
        "content//images/folx/02_sinner-man1.png",
        "content//images/folx/03_sinner-man2.png"
      ]
    },
    {
      "title": "Misc",
      "images": [
        "content//images/misc/01_building1.png",
        "content//images/misc/02_road1.png",
        "content//images/misc/03_road2.png"
      ]
    }
  ],
  "backgrounds": [
    "content//images/backgrounds/background_1.jpg"
  ],
  "fonts": [
    {
      font: "Germania One",
      size: 25,
      uppercase: true
    },
    {
      font: "UnifrakturMaguntia",
      size: 35,
      uppercase: false
    }
  ],
  "brushes": [
    {
      name: "Folks",
      icon: "content//images/folx/01_saint-boy1.png",
      speed: 100,
      randScaleRange: 0.1,
      randRotationRange: 3,
      scale: 0.8,
      mirror: false,
      randMirror: false,
      images: [
        { img: "content//images/folx/01_saint-boy1.png" },
        {
          img: "content//images/folx/02_sinner-man1.png",
          mirror: true,
          scale: 0.8
        },
        {
          img: "content//images/folx/03_sinner-man2.png",
          scale: 0.9
        }
      ]
    }
  ]
};
