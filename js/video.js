// https://umich.instructure.com/courses/655651/assignments/2332993?module_item_id=3593128
let video;
let playButton;
let pauseButton;
let slowButton;
let fastButton;
let skipButton;
let muteButton;

window.addEventListener("load", function() {
    console.log("Good job opening the window");
    
		console.log("Initializing video");
		video = document.getElementById("player1");
		if (video) {
			video.autoplay = false;
			video.loop = false;
		}

		playButton = document.querySelector("#play");
		playButton.addEventListener("click", playVid);
	
		pauseButton = document.querySelector("#pause");
		pauseButton.addEventListener("click", pauseVid);

		slowButton = document.querySelector("#slower");
		slowButton.addEventListener("click", slowVid);
		
		fastButton = document.querySelector("#faster");
		fastButton.addEventListener("click", fastVid);
		
		skipButton = document.querySelector("#skip");
		skipButton.addEventListener("click", skipVid);

		muteButton = document.querySelector("#mute");
		muteButton.addEventListener("click", toggleMute);

		volumeSlider = document.querySelector("#slider");
		volumeSlider.addEventListener("input", changeVolume);

		vintageStyle = document.querySelector("#vintage");
		vintageStyle.addEventListener("click", function() {
			toggleStyle("oldSchool");
		});

		origStyle = document.querySelector("#orig");
		origStyle.addEventListener("click", function() {
			toggleStyle("");
		});
	});

// ------------ FUNCTIONS ------------ 

function playVid() {
	console.log("Playing video");
	if (video) {
		video.play();
	}
}

function pauseVid() {
	console.log("Pausing video");
	if (video) {
		video.pause();
	}
}

function slowVid() {
	console.log("Slowing video");
	if (video) {
		video.playbackRate -= 0.10;
		console.log("New speed:", video.playbackRate.toFixed(2));
	}
}

function fastVid() {
	console.log("Speeding up video");
	if (video) {
		video.playbackRate += 0.10;
		console.log("New speed:", video.playbackRate.toFixed(2));
	}
}

function skipVid() {
	console.log("Skipping ahead 10 seconds");
	if (video) {
		if (video.currentTime + 10 >= video.duration) {
			video.currentTime = 0;
		} else {
			video.currentTime += 10;
		}

		console.log("Current location of the video:", video.currentTime.toFixed(2));
	}
}

function toggleMute() {
	console.log("Toggling Mute");
	if (video) {
			video.muted = !video.muted;
			muteButton.textContent = video.muted ? "Unmute" : "Mute";
	}
}

function changeVolume() {
	console.log("Changing Volume");
	
	if (video) {
		video.volume = parseFloat(this.value) / 100;
		var volumePercentage = Math.round(video.volume * 100);
		document.getElementById("volume").textContent = volumePercentage + "%";
	}
}

function toggleStyle(style) {
	if (video) {
		if (style === "oldSchool") {
			console.log("Implementing vintage style");
			video.classList.add("oldSchool");
		} else {
			console.log("Implementing original style");
			video.classList.remove("oldSchool")
		}
	}
}