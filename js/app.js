var menu = document.querySelector('nav');
var menuBtn = document.querySelector('nav button');
menuBtn.addEventListener('click', () => {
    menu.classList.toggle('opened');
});

function send(){
    /*https://api.whatsapp.com/send?phone=+201208611892&text=Hi*/
    var name = document.getElementById("name").value;
    var msg = document.getElementById("msg").value;
    window.open("https://api.whatsapp.com/send?phone=+201208611892&text=Hi, Ahmed! My name is "+name+", I want to tell you that '"+msg+"'")
}