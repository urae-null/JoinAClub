function scrollToComponent(count) {
    let component = ''
    if (count == 0) {
        component = '.choiceClub'
    } else if (count == 1) {
        component = '.first'
    } else if (count == 2) {
        component = '.second'
    }
    let componentHeight = document.querySelector(component).offsetHeight;
    let componentTop = document.querySelector(component).offsetTop;
    window.scrollTo({top:componentTop, behavior:'smooth'});
}