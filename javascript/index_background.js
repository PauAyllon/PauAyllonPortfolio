window.onload = function () {
    var i = 0;
    const elem1 = document.getElementById("body");
    
    /** */
    var background_index=[
        './multimedia/index/5.jpg',
        './multimedia/index/6.jpg',
        './multimedia/index/3.jpg',
        './multimedia/index/2.jpg',
        './multimedia/index/4.jpg',
        './multimedia/index/1.jpg',
    ]  

    background_index.forEach(url => {
        const link = document.createElement('a');
        link.href = url;
        link.download = url.split('/').pop();
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });



    setInterval(changeBackground, 7000);

    function changeBackground() {
        
        if (background_index.length-1 == i) { i = -1; }

        i = i + 1;
        
        console.log(i)
        
        elem1.style.backgroundImage = "url('" + background_index[i] + "')";
    }
}