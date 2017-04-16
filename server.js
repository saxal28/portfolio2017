const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render("./index");
})

app.get("/gallery", (req, res) => {
    res.render("gallery.ejs", {projects});
})

app.get("/gallery/moodtracker", (req, res) => {
    res.render("moodTracker.ejs");
})

app.listen(port);
console.log('started on port 8080');

// project data

const projects = [
    {
        title: "Mood Tracker", 
        image:"https://wallpaperscraft.com/image/panda_smile_white_black_minimalist_74449_2560x1600.jpg",
        description: "",
        github: "",
        link: "/gallery/moodtracker"
    },
    {
        title: "Fit Tools", 
        image:"https://wallpaperscraft.com/image/panda_smile_white_black_minimalist_74449_2560x1600.jpg",
        description: "A medium sized application geared towards health/fitness enthusiasts. Features interactive charts, Meal Tracker, and Run Helper. <strong>Built with React/Redux.</strong>",
        github: "",
        link: "https://retailer-permits-43722.netlify.com/"
    },
    {
        title: "Blog", 
        image:"https://wallpaperscraft.com/image/panda_smile_white_black_minimalist_74449_2560x1600.jpg",
        description: "My Personal Blog! I add new blog posts regularly! <strong>Built with React/Redux, Node, Express, and MongoDB.</strong>",
        github: "",
        link: "http://athlete-cups-17287.netlify.com/"
    },
    {
        title: "Noted...", 
        image:"https://wallpaperscraft.com/image/panda_smile_white_black_minimalist_74449_2560x1600.jpg",
        description: "Noted... is a note app where you can write/save quick notes and sort them by category. <strong>Built with React, Redux, Node, Express, and MongoDB.</strong>",
        github: "",
        link: "http://grave-digger-lorna-16454.netlify.com"
    },
    {
        title: "Youtube Clone", 
        image:"https://wallpaperscraft.com/image/panda_smile_white_black_minimalist_74449_2560x1600.jpg",
        description: "A Minimalist YouTube Clone with a SearchBar and a random button. <strong>Built with React and Redux</strong>",
        github: "",
        link: "http://personnel-officer-wolf-40666.netlify.com"
    },
]


    //  <!--  <div class="slide" id="portfolio-item4">-->
    //   <!--      <h1>Weight / Mood Tracker</h1>-->
    //   <!--      <h4 class="portfolio-text">A Minimalist YouTube Clone with a SearchBar and a random button. <strong>Built with React and Redux</strong></h4>-->
    //   <!--      <a class="btn btn-outline-custom wider-button" href="#projects/0">Back</i></a>-->
    //   <!--      <a class="btn btn-outline-custom wider-button" target="_blank" href="http://personnel-officer-wolf-40666.netlify.com/">Go!</a>-->
    //   <!--  </div>-->
        
        
    //   <!--  <div class="slide" id="portfolio-item2">-->
    //   <!--      <h1>Blog!</h1>-->
    //   <!--      <h4 class="portfolio-text">My Personal Blog! I add new blog posts regularly! <strong>Built with React/Redux, Node, Express, and MongoDB.</strong></h4>-->
    //   <!--      <a class="btn btn-outline-custom wider-button" href="#projects/0">Back</i></a>-->
    //   <!--      <a class="btn btn-outline-custom wider-button" target="_blank" href="http://athlete-cups-17287.netlify.com/#/">Go!</a>-->
    //   <!--  </div>-->
        
    //   <!--  <div class="slide" id="portfolio-item1">-->
    //   <!--      <h1>Fit Tools</h1>-->
    //   <!--      <h4 class="portfolio-text">A medium sized application geared towards health/fitness enthusiasts. Features interactive charts, Meal Tracker, and Run Helper. <strong>Built with React/Redux.</strong></h4>-->
    //   <!--      <a class="btn btn-outline-custom wider-button" href="#projects/0">Back</i></a>-->
    //   <!--      <a class="btn btn-outline-custom wider-button" target="_blank" href="https://retailer-permits-43722.netlify.com/">Go!</i></a>-->
    //   <!--  </div>-->
        
    //   <!--  <div class="slide" id="portfolio-item-11">-->
    //   <!--      <h1>Noted...</h1>-->
    //   <!--      <h4 class="portfolio-text">Noted... is a note app where you can write/save quick notes and sort them by category. <strong>Built with React, Redux, Node, Express, and MongoDB.</strong></h4>-->
    //   <!--      <a class="btn btn-outline-custom wider-button" href="#projects/0">Back</i></a>-->
    //   <!--      <a class="btn btn-outline-custom wider-button" target="_blank" href="http://grave-digger-lorna-16454.netlify.com/">Go!</i></a>-->
    //   <!--  </div>-->
      
    //   <!--  <div class="slide" id="portfolio-item4">-->
    //   <!--      <h1>YouTube Clone</h1>-->
    //   <!--      <h4 class="portfolio-text">A Minimalist YouTube Clone with a SearchBar and a random button. <strong>Built with React and Redux</strong></h4>-->
    //   <!--      <a class="btn btn-outline-custom wider-button" href="#projects/0">Back</i></a>-->
    //   <!--      <a class="btn btn-outline-custom wider-button" target="_blank" href="http://personnel-officer-wolf-40666.netlify.com/">Go!</a>-->
    //   <!--  </div>-->
        