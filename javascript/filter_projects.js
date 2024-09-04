function filterDivs(category) {
    let divs = document.getElementsByClassName('container');

    for (let i = 0; i < divs.length; i++) {
        let keywords = divs[i].getAttribute('data-keywords');
        
        if (category === 'todas') {
            divs[i].style.display = "";
        } else if (keywords.includes(category)) {
            divs[i].style.display = "";
        } else {
            divs[i].style.display = "none";
        }
    }
}