/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/


/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables for building navbar
 * 
*/

// html object contains all sections
const allSects = document.querySelectorAll('section');
//ul container for navbar
const navBar = document.getElementById('navbar__list');

//functions building navbar

const buildNav = ()=> {
    //empty string with will populate list to make navbar
    let makeNav = "";
 
    //loop through each section and set id of each section and dataset
    allSects.forEach(section =>{
     let sectId = section.id;
     let sectData = section.dataset.nav;
 
    //add navbar each time in loop
     makeNav += "<li><a class='menu__link' href='#" +sectId+"'>" +sectData+"</a></li>";
    });
    //change the HTML of navbar to write each link 
     navBar.innerHTML= makeNav; 
 };

 //functions for highligting section in viewport
const inView = (getView)=>{
    //getBoundingClientRect() call boxView will be returned 
    //when boxView has certain values for top and bottom
    const boxView =getView.getBoundingClientRect();
    if(boxView.top >= 40 && boxView.top<= window.innerHeight/2 && boxView.bottom>window.innerHeight/2 -1){
            return true;
        } 
};
//add active class when in view or remove active class
const makeActive = (section)=>{
    allSects.forEach(section =>{
        if(inView(section)){
            if(!section.classList.contains("your-active-class")){
                section.classList.add("your-active-class");
            } else{
                    section.classList.remove("your-active-class");
                }
            }
        });
};

// function scroller so that when clicked we get the inner HTMl 
//which is the same as data-set for each setion
//then we scroll to that section
const scroller = () =>{
    const menuLinks = document.querySelectorAll(".menu__link");
    menuLinks.forEach((item) =>{
        item.addEventListener("click", ()=>{
            const insideLink = item.innerHTML;
            const dataInfo = document.querySelector("data-nav='[${insideLink}']");
            dataInfo.scrollIntoView({behavior: "smooth", block: "start"});
        });
});
};

// )all function to build navbar menu 
buildNav();

// Scroll to section on link click
scroller();

// Set sections as active when in view because of scroll funtion
document.addEventListener('scroll', makeActive);

