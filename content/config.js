var constants = {
  "config": {
    "appTitle": "Fraktur Construction Kit",
    "appSub": "Based on the Historic Tale Construction Kit",
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
        "content//images/heaven/01_jesus1.png",
        "content//images/heaven/02_jesus2.png",
        "content//images/heaven/03_angel1.png",
        "content//images/heaven/04_angel2.png",
        "content//images/heaven/05_angel3.png",
        "content//images/heaven/06_angel4.png"

      ]
    },
    {
      "title": "Hell",
      "images": [
        "content//images/hell/01_devil1.png",
        "content//images/hell/02_reaper1.png",
        "content//images/hell/03_whore-of-babylon1.png",
        "content//images/hell/04_evil-bird1.png",
        "content//images/hell/05_hellfire1.png"
      ]
    },
    {
      "title": "Decor",
      "images": [
        "content//images/decor/01_sun1.png",
        "content//images/decor/02_sun2.png",
        "content//images/decor/03_moon1.png",
        "content//images/decor/04_tree1.png",
        "content//images/decor/05_tree2.png",
        "content//images/decor/06_heart1.png",
        "content//images/decor/07_heart2.png",
        "content//images/decor/08_border1.png",
        "content//images/decor/09_deer1.png",
        "content//images/decor/10_moth1.png",
        "content//images/decor/11_leaf1.png",
        "content//images/decor/12_bird1.png",
        "content//images/decor/13_bird2.png",
        "content//images/decor/14_bird3.png",
        "content//images/decor/15_bird4.png",
        "content//images/decor/16_bird5.png"
      ]
    },
    {
      "title": "Folks",
      "images": [
        "content//images/folx/01_saint1.png",
        "content//images/folx/02_saint2.png",
        "content//images/folx/03_sinner1.png",
        "content//images/folx/04_sinner2.png",
        "content//images/folx/05_sinner3.png",
        "content//images/folx/06_sinner4.png",
        "content//images/folx/07_adam-eve1.png"
      ]
    },
    {
      "title": "Misc",
      "images": [
        "content//images/misc/01_building1.png",
        "content//images/misc/02_building2.png",
        "content//images/misc/03_road1.png",
        "content//images/misc/04_road2.png",
        "content//images/misc/05_road3.png",
        "content//images/misc/06_road4.png",
        "content//images/misc/07_road5.png"

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
      icon: "content//images/folx/01_saint1.png",
      speed: 100,
      randScaleRange: 0.1,
      randRotationRange: 3,
      scale: 0.8,
      mirror: false,
      randMirror: false,
      images: [
        { img: "content//images/folx/01_saint1.png" },
        {
          img: "content//images/folx/02_saint2.png",
          mirror: true,
          scale: 0.8
        }
      ]
    },
    {
      name: "Hellfire",
      icon: "content//images/hell/05_hellfire1.png",
      speed: 100,
      randScaleRange: 0.1,
      randRotationRange: 3,
      scale: 0.8,
      mirror: false,
      randMirror: false,
      images: [
        { img: "content//images/hell/05_hellfire1.png" }
      ]
    }
  ]
};
