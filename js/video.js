var video;
var vol;
var slider;

function getVid() {
    video = document.querySelector("#myVideo");
}

function playVid() {
    video.play();
    vol = document.querySelector("#volume");
    vol.innerHTML = video.volume * 100 + "%";
    console.log("Play Video");
}

function pauseVid() {
    video.pause();
    console.log("Pause Video");
}

function decreaseSpeed() {
    video.playbackRate *= 0.8
    console.log("Speed is " + video.playbackRate);
}

function increaseSpeed() {
    video.playbackRate *= 1.25;
    console.log("Speed is " + video.playbackRate);
}


function mute() {
    if (video.muted) {
        video.muted = false;
        console.log("Changing to Unmuted");
        document.querySelector("#mute").innerHTML = "Mute";
    } else {
        video.muted = true;
        console.log("Changing to Muted");
        document.querySelector("#mute").innerHTML = "Unmute";
    }
}

function changeVolume() {
    vol = document.querySelector("#volume");
    slider = document.querySelector("#volumeSlider");
    video.volume = slider.value / 100;
    vol.innerHTML = slider.value + "%";
    console.log("Volume is " + slider.value);
}


function gray() {
    video.classList.add("grayscale");
    console.log("In grayscale")
}

function color() {
    video.classList.remove("grayscale");
    console.log("In color")
}

function skipAhead() {
    if (video.currentTime + 60 >= video.duration) {
        video.currentTime = 0;
        video.playbackRate = 1;
    } else {
        video.currentTime += 60;
    }
    console.log("Current location is " + video.currentTime + "s");
}