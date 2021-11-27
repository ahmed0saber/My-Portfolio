/*     BUILD PROJECTS SECTION     */
var projects = [
    {
        id: "1",
        title: "Tic Tac Toe Online",
        description: "A xo game where you can play vs easy/hard bot. You can also play vs local/online player. Chat with people, invite them, win more games and rank up. Backend by Ahmed Yasser.",
        url: "https://xo-online.herokuapp.com/"
    },
    {
        id: "2",
        title: "Ask-Bin",
        description: "Ask-Bin is my first Full Stack website. It's where users can create {forms, quizzes, tests} , share them with people and receive their answers.",
        url: "https://ask-bin.000webhostapp.com/home.php"
    },
    {
        id: "3",
        title: "Math Exam",
        description: "An online math test that generates random math equations with leaderboard. Backend by Ahmed Yasser.",
        url: "https://mathexams.herokuapp.com/"
    },
    {
        id: "4",
        title: "Online Quiz",
        description: "It's just an one-page web-skills quiz with leaderboard. Using Leaderboard API created by Ahmed Yasser.",
        url: "https://ahmed0saber.github.io/ehrth/HTML_Test.html"
    },
    {
        id: "5",
        title: "Puzzle 2048",
        description: "A game created by me, supported by leaderboard API which is created by Ahmed Yasser.",
        url: "https://ahmed0saber.github.io/ehrth/puzzle2048remade.html"
    },
    {
        id: "6",
        title: "Image Store",
        description: "An image store using unsplashAPI where you can search for images and download them.",
        url: "https://ahmed0saber.w3spaces.com/image_store.html?bypass-cache=1630284923"
    },
    {
        id: "5",
        title: "Secret Space",
        description: "A website where you can send and receive messages without mentioning the message-sender name. Backend by Mohammed El Ganainy.",
        url: "https://secret-space.herokuapp.com/"
    }
];
projects.forEach(project => {
    document.getElementById("all_projects").innerHTML+=`<section class="project">
    <p id="title">${project.title}</p>
    <p id="description">${project.description}</p>
    <a href="${project.url}" target="_blank" class="view">Try Now</a>
</section>`
});
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