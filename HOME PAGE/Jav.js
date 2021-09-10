var i = 0;
var slideImages = ["../Images/healthy-spaghetti-squash-recipes.jpeg","../Images/shutterstock_427193719_0.jpg"]

var slideShow = function()
{
    document.slideShow.src = slideImages[i];
    if ( i < slideImages.length - 1 ){
        i++;
    }
    else
    {
        i = 0;
    }
setTimeout("slideShow()",2000);

}
slideShow()