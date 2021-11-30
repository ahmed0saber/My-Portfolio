/*     BUILD PROJECTS SECTION     */
fetch('data.json')
    .then(response => response.json())
    .then(data =>
        {
            var projects = data[0];
            for(var i=0; i<projects.length; i++){
                document.getElementById("all_projects").innerHTML+=`<section class="project">
                    <div class="before_project" style="background-image: url('${projects[i].img}')"></div>
                    <p id="title">${projects[i].title}</p>
                    <p id="description">${projects[i].description}</p>
                    <a href="${projects[i].url}" target="_blank" class="view">Try Now</a>
                </section>`;
            }
        }
    );
/*     THEMES     */
var current = 0;
var themes = [];
fetch('data.json')
    .then(response => response.json())
    .then(data =>
        {
            themes = data[1];
            if(localStorage.getItem("theme")){current = parseInt(localStorage.getItem("theme"));}else{current = 0;}
            theme();
        }
    );
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