/*     BUILD PROJECTS SECTION     */
var projects = [
    {
        id: "1",
        title: "Tic Tac Toe Online",
        description: "A xo game where you can play vs easy/hard bot. You can also play vs local/online player. Chat with people, invite them, win more games and rank up. Backend by Ahmed Yasser.",
        url: "https://xo-online.herokuapp.com/",
        img: "./images/xo.png"
    },
    {
        id: "2",
        title: "Ask-Bin",
        description: "Ask-Bin is my first Full Stack website. It's where users can create {forms, quizzes, tests} , share them with people and receive their answers.",
        url: "https://ask-bin.000webhostapp.com/home.php",
        img: "./images/ab.png"
    },
    {
        id: "3",
        title: "Math Exam",
        description: "An online math test that generates random math equations with leaderboard. Backend by Ahmed Yasser.",
        url: "https://mathexams.herokuapp.com/",
        img: "./images/me.png"
    },
    {
        id: "4",
        title: "Online Quiz",
        description: "It's just an one-page web-skills quiz with leaderboard. Using Leaderboard API created by Ahmed Yasser.",
        url: "https://ahmed0saber.github.io/ehrth/HTML_Test.html",
        img: "./images/oq.png"
    },
    {
        id: "5",
        title: "Puzzle 2048",
        description: "A game created by me, supported by leaderboard API which is created by Ahmed Yasser.",
        url: "https://ahmed0saber.github.io/ehrth/puzzle2048remade.html",
        img: "./images/p2.png"
    },
    {
        id: "6",
        title: "Image Store",
        description: "An image store using unsplashAPI where you can search for images and download them.",
        url: "https://ahmed0saber.w3spaces.com/image_store.html",
        img: "./images/is.png"
    },
    {
        id: "7",
        title: "Secret Space",
        description: "A website where you can send and receive messages without mentioning the message-sender name. Backend by Mohammed El Ganainy.",
        url: "https://secret-space.herokuapp.com/",
        img: "./images/ss.png"
    },
    {
        id: "8",
        title: "Global Chat",
        description: "A website where you can send messages globally. Backend by Ahmed Yasser.",
        url: "https://globalonlinechat.herokuapp.com/",
        img: "./images/gc.png"
    }
];
projects.forEach(project => {
    document.getElementById("all_projects").innerHTML+=`<section class="project">
    <div class="before_project" style="background-image: url('${project.img}')"></div>
    <p id="title">${project.title}</p>
    <p id="description">${project.description}</p>
    <a href="${project.url}" target="_blank" class="view">Try Now</a>
</section>`
});
/*     THEMES     */
var current = 0;
var themes = [
    {
        id: 0,
        pri: "#DC143C",
        scrollHover: "#EC244C",
        imgBorder: "#DC143Caa"
    },
    {
        id: 1,
        pri: "#FF4301",
        scrollHover: "#FF5311",
        imgBorder: "#FF4301aa"
    },
    {
        id: 2,
        pri: "#D89216",
        scrollHover: "#E8a226",
        imgBorder: "#D89216aa"
    },
    {
        id: 3,
        pri: "#A7D129",
        scrollHover: "#B7E139",
        imgBorder: "#A7D129aa"
    },
    {
        id: 4,
        pri: "#03C4A1",
        scrollHover: "#13D4B1",
        imgBorder: "#03C4A1aa"
    },
    {
        id: 5,
        pri: "#FD367E",
        scrollHover: "#FD468E",
        imgBorder: "#FD367Eaa"
    },
    {
        id: 6,
        pri: "#C400C6",
        scrollHover: "#D410D6",
        imgBorder: "#C400C6aa"
    },
];
if(localStorage.getItem("theme")){current = parseInt(localStorage.getItem("theme"));}else{current = 0;}
theme();
function theme(){
    document.querySelector(':root').style.setProperty('--pri',themes[current].pri);
    document.querySelector(':root').style.setProperty('--scrollHover',themes[current].scrollHover);
    document.querySelector(':root').style.setProperty('--imgBorder',themes[current].imgBorder);
}
function changeTheme(){
    if(current==themes.length-1){current=0;}else{current+=1;}
    localStorage.setItem("theme", current);
    theme();
}
/*     NAVBAR     */
var menu = document.querySelector('nav');
var menuBtn = document.querySelector('nav button');
menuBtn.addEventListener('click', () => {
    menu.classList.toggle('opened');
});
/*     SEND TO WHATSAPP     */
function send(){
    var name = document.getElementById("name").value;
    var msg = document.getElementById("msg").value;
    window.open("https://api.whatsapp.com/send?phone=+201208611892&text=Hi, Ahmed! My name is "+name+", I want to tell you that '"+msg+"'")
}