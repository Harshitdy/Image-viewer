$(function(){
 
    var imagesrc = [
        "/static/img/animal-6603517.jpg",
        "/static/img/beach-6635008.jpg",
        "/static/img/bird-4062359_1920.jpg",
        "/static/img/flowers-6558487_1920.jpg",
        "/static/img/forget-me-nots-5302712_1920.jpg",
        "/static/img/eyes-5248678_1920.jpg",
        "/static/img/mountains-6980701_1920.jpg",
        "/static/img/untitled.png"
    ];

    $storage = $('.storage');
    $viewer = $('.viewer');
    $index = 0;

for (var i= 0;i < imagesrc.length;i++){
    $storage.append("<div class= " + "image" + i + "></div>");
    $('.image'+ i).append("<img src=" + imagesrc[i] + "></img>");
    $viewer.append("<img class='mysliders' src=" + imagesrc[i] + "></img>")
}

$('.viewer .mysliders:eq(0)').css("display", "block");

$('.storage img:eq(0)').addClass('active');

$mysliders = $('.mysliders');
$stimg = $('.storage img');

$(document).on("keydown", () => {
    $mysliders.css("display", "none");
    $stimg.removeClass("active")

$index = show($index);

if($index > imagesrc.length - 1){
    $index = 0;
}else if($index < 0){
    $index = imagesrc.length - 1;
}

$(".mysliders:eq("+ $index + ")").css("display", "block");
$('.storage img:eq(' + $index + ')').addClass('active')

});




function show($index){
    if(event.keyCode == 39){
        $index ++;
    }
    if(event.keyCode == 37){
        $index --;
    }
    return $index;
}



});