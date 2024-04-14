// toggel itu yang tadinya tidak ada menjadi ada dan yang tadinya tidak ada menjadi ada.
//toggle class active

const navbarNav = document.querySelector(".navbar-nav");

//ketika hamburger menu di klik 
document.querySelector("#hamburger-menu").onclick = () => {
    navbarNav.classList.toggle("active");
};

// klik di luar sliderbar untuk menghilangkan nav
// tolong carikan saya element yang id nya hamburger-menu 
const hamburger = document.querySelector("#hamburger-menu");


document.addEventListener("click", function(e){
    //jika user klik yang bukan hamburger-menu dan navbar
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
        // hamburger-menu dan navbar akan menghilang
        navbarNav.classList.remove("active")
    }
});

// penjelasan: selama user mengklik yang bukan hamburger-menu dan navbar akan menghilang. tetapi jika mengklik di dalam hamburger-menu dan navbar dia tidak akan menghilang

