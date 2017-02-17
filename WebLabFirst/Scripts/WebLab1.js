$(document).ready(function () {
    $("#sendingMethod").change(function () {
        if (document.getElementById('sendingMethod').value == "Get") {

            document.getElementById('form').method = "get";
            document.getElementById('form').action = "/Home/FeedBackGet";
        }
        else {

            document.getElementById('form').method = "post";
            document.getElementById('form').action = "/Home/FeedBackPost";
        }
    });
});
function multiply() {
    img_array = new Array();
    for (var i = 0; i < 8; i++) {
        img_array[i] = new Image(100, 100);
        img_array[i].src = "../Images/" + (i + 1) + ".jpg";
        document.images[i].src = img_array[i].src;
    }
}
function changePhotos() {
    setInterval("changePhoto()", 1000);
}
function changePhoto() {
    var src = document.images[0].src;
    for (i = 0; i < 7; i++) {
        document.images[i].src = document.images[i + 1].src;
    }
    document.images[7].src = src;
}
$(document).ready(function () {
    $("img").hover(function () {
        $(this).attr('src', "../Images/9.jpg");
    }
    );
});