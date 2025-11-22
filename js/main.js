(() => {
    gsap.registerPlugin(ScrollTrigger);
    const menu = document.querySelector("#menu");
    const hamburger = document.querySelector("#hamburger");
    const closeButton = document.querySelector("#close");
    const menuLinks = document.querySelectorAll("#menu nav ul li a");
    const navMenu = document.querySelector(".main-nav nav ul");
    const navLinks = document.querySelectorAll(".main-nav nav ul li a");

    function toggleMenu(){
        menu.classList.toggle("open");
    }

    closeButton.addEventListener("click", toggleMenu);

    menuLinks.forEach(link=>{
        link.addEventListener("click", toggleMenu);
    })

    hamburger.addEventListener("click", toggleMenu);

  // console.log("JS file is connected")
  const hotspots = document.querySelectorAll(".Hotspot");
  //console.log(hotspots);

  const infoBoxes = [
    {
      title: "Soft Rubber",
      text: "Soft rubber material protects your ears from injure and surround the sounds mor lively.",
      image: "images/ar_icon.png",
    },
    {
      title: "Volumn Touch Sensor",
      text: "Charger your earbuds within 1 hours but usage time is up to 36 hours",
      image: "images/ar_icon.png",
    },
    {
      title: "On/Off Touch Sensor",
      text: "With a simple tap on the logo noise cancellation will be activated, you will know if the noise cancellation is on or not by seeing the light in the logo.",
      image: "images/ar_icon.png",
    },
    {
      title: "LED Logo",
      text: "With a simple tap on the logo noise cancellation will be activated, you will know if the noise cancellation is on or not by seeing the light in the log",
      image: "images/ar_icon.png",
    },
    {
      title: "LED Mode",
      text: "With LED Mode you can know what mode is your earbuds is activated.",
      image: "images/ar_icon.png",
    },
    {
      title: "Fast & Save Energy Charger",
      text: "Charger your earbuds within 1 hours but usage time is up to 36 hours.",
      image: "images/ar_icon.png",
    },
  ];

  //function for model

  function loadInfo() {
    infoBoxes.forEach((infoBoxes, index) => {
      
      let selected = document.querySelector(`#hotspot-${index + 1}`);
      console.log(selected);

      //let create an h2
      const titleElement = document.createElement(`h2`);
      //lets populate the h2
      titleElement.textContent = infoBoxes.title;

      //lets create an p
      const textElement = document.createElement(`p`);
      //lets populate the p
      textElement.textContent = infoBoxes.text;

      //lets create an img
      const imageElement = document.createElement(`img`);
      imageElement.src = imageElement.alt = "";

      //let's add the h2 to the selected hotspot
      selected.appendChild(titleElement);
      selected.appendChild(textElement);
    });
  }

  loadInfo();

  function showInfo() {
    console.log(`#${this.slot}`);
    // console.log("#"+ this.slot); //This is how they used to do the console log
    const selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, { duration: 1, autoAlpha: 1 });
  }

  function hideInfo() {
    console.log("hideInfo Called");
    const selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, { duration: 1, autoAlpha: 0 });
  }

  hotspots.forEach(function (hotspot) {
    hotspot.addEventListener("mouseenter", showInfo);
    hotspot.addEventListener("mouseleave", hideInfo);
  });

  //Scrub image
  console.log("IIFE Called");

    const canvas = document.querySelector("#explode-view");
    const context = canvas.getContext("2d");

    canvas.width= 1920;
    canvas.height = 1080;

    const frameCount = 90; 

    const images = [];

    //object will hold the current frame
    //we will use GreenSock to animate the frame property
    const buds = {
        frame: 0
    }

    //Run a for loop to populate images array
    for (let i=0; i<frameCount; i++) {
        const img = new Image();
        img.src = `images/WEBP/open_case${(i+1).toString().padStart(2, '0')}.webp`;
        images.push(img);
    }
    console.log(images);

    gsap.to(buds, {
        frame: 89,
        snap: "frame",
        scrollTrigger: {
            trigger: "#explode-view",
            pin: true,
            scrub: 1,
            start: "top top",
            markers: true
        },
        onUpdate: render
    })

    images[0].addEventListener("load", render);

    function render() {
        //console.log(buds.frame);
        //console.log(images[buds.frame]);
        context.clearRect(0,0, canvas.width, canvas.height);
        context.drawImage(images[buds.frame], 0, 0);
    }

    //Slider
    const divisor = document.querySelector("#divisor");
    const slider = document.querySelector("#slider");

    function moveDivisor() {
        // console.log(slider.value);
        divisor.style.width = `${slider.value}%`;
    }

    function resetSlider() {
        slider.value = 50;
    }

    slider.addEventListener("input", moveDivisor);
    window.addEventListener("load", resetSlider);
    
    
})();
