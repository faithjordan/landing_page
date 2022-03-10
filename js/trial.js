const options = {
    rootMargin:-100px;
    threshold:.65
}

const observer = 
new IntersectionObserver (function(entries, observer){
    entries.forEach(entry =>{
        entry.target.classList.toggle("your-active-class");
    });
}, options);

allSects.forEach(section =>{
    observer.observe(section);
});
