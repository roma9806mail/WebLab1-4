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