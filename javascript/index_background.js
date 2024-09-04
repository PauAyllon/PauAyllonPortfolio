window.onload = function () {
    var i = 0;
    const elem1 = document.getElementById("body");
    
    /** */
    var background_index=[
        './multimedia/index/7.png',
        './multimedia/index/6.png',
        './multimedia/index/2.png',
        './multimedia/index/3.png',
        './multimedia/index/4.png',
        './multimedia/index/1.png'
    ]  
    /** 
    var background_index=[
        './multimedia/index/7_blur.png',
        './multimedia/index/6.png',
        './multimedia/index/2_blur.png',
        './multimedia/index/3_blur.png',
        './multimedia/index/4_blur.png',
        './multimedia/index/1_blur.png'
    ] 
*/
    setInterval(changeBackground, 7000);

    function changeBackground() {
        
        if (background_index.length-1 == i) { i = -1; }

        i = i + 1;
        
        console.log(i)
        
        elem1.style.backgroundImage = "url('" + background_index[i] + "')";
    }
}