window.onload = function () {
    var i = 0;
    const elem1 = document.getElementById("body");
    
    /** */
    var background_index=[
        './multimedia/index/5.jpg',
    ]  

    setInterval(changeBackground, 7000);

    function changeBackground() {
        
        if (background_index.length-1 == i) { i = -1; }

        i = i + 1;
        
        console.log(i)
        
        elem1.style.backgroundImage = "url('" + background_index[i] + "')";
    }
}