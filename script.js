var typed = new Typed(".typing",{
    strings:["College Student","Web Designer","Programmer","Web Developer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})
const nav = document.querySelector(".nav"),
navList = nav.querySelectorAll("li"),
totalNavList = navList.length,
allSection = document.querySelectorAll(".section"),
totalSection = allSection.length;
for(let i=0; i<totalNavList; i++)
{
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function()
    {   
        removeBackSection();
        for(let j=0; j<totalNavList; j++)
        {
        if(navList[j].querySelector("a").classList.contains("back-section"))
        {  addBackSection(j);
           //allSection[j].classList.add("back-section");
        }
          navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active")
        showSection(this);
        if(window.innerWidth < 1200)
        {
            asideSectionTogglerBtn();
        }
    })
}
function removeBackSection()
{
    for(let i=0; i<totalSection; i++)
    {
        allSection[i].classList.remove("back-section");
    }
}
function addBackSection(num)
{
    allSection[num].classList.add("back-section");
}
function showSection(element)
{
    for(let i=0; i<totalSection; i++)
    {
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active")
}
function updateNav(element)
{
    for(let i=0; i<totalNavList; i++)
    {
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
        {
            navList[i].querySelector("a").classList.add("active");
        }
    }
}
document.querySelector(".hire-me").addEventListener("click", function()
{
    const sectionIndex = this.getAttribute("data-section-index");
    //console.log(sectionIndex);
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
})
const navTogglerBtn = document.querySelector(".nav-toggler"),
aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click",() =>
{
    asideSectionTogglerBtn();
})
function asideSectionTogglerBtn()
{
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open")
    for(let i=0; i < totalSection; i++)
    {
        allSection[i].classList.toggle("open");
    }
}

//TIME
/*
setInterval(()=>{
    const time = document.querySelector(".display #time");
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let day_night = "AM";
    if(hours > 12){
        day_night="PM";
        hours = hours - 12;
    }
    if(seconds < 10){
        seconds = "0" + seconds;
    }
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    if(hours < 10){
        hours = "0" + hours;
    }
    time.textContent = hours + ":" + minutes + ":" + seconds + " " + day_night;
});

ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2500,
    delay:200
});
ScrollReveal().reveal('.hello,.my-profession', {delay:500, origin:"left"});
ScrollReveal().reveal('.p1,.center', {delay:600, origin:"bottom"});
ScrollReveal().reveal('.home-img', {delay:700, origin:"right"});
ScrollReveal().reveal('.logo', {delay:300, origin:"top", interval: 200});
ScrollReveal().reveal('.nav i ', {delay:300, origin:"left", interval: 200});
ScrollReveal().reveal('.nav a ', {delay:300, origin:"right", interval: 200});

//MENU-BTN SCRIPT
let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');

menu.addEventListener('click', () => {
    menu.classList.toggle('active');
    header.classList.toggle('active');
});

//BLACK-WHITE SCRIPT
let themeToggler = document.querySelector('#theme-toggler');

themeToggler.onclick = () =>{
    themeToggler.classList.toggle("fa-sun");
    if(themeToggler.classList.contains("fa-sun")){
        document.body.classList.add('active');
    }
    else{
        document.body.classList.remove('active');
    }
}

*/







