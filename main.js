function generateRandomNumber() {
    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);

    if (isNaN(a) || isNaN(b)) {
        alert("Please enter valid numbers");
        return;
    }

    var i = 0;
    var interval = setInterval(function() {
        var result = Math.floor(Math.random() * (b - a + 1) + a);
        document.getElementById("result").innerHTML = "Số may mắn:" + "<div class='number-generated'>" + result + "</div>";
        i++;
        if (i == 50) { // Thay đổi số lần nhảy ở đây
            clearInterval(interval);
        }
    }, 50); // Thay đổi thời gian nhảy (millisecond) ở đây

    // Play the sound effect
    var soundEffect = document.getElementById("sound-effect");
    soundEffect.currentTime = 0;
    soundEffect.play();

    // Delay for 3 seconds and then play the congratulations sound
    setTimeout(function() {
        var congratulations = document.getElementById("congratulations");
        congratulations.currentTime = 0;
        congratulations.play();
    }, 2500);
}
/* Auto-play the video when it is loaded */
var video = document.getElementById("video-background");
video.addEventListener("loadeddata", function() {
	video.play();
});