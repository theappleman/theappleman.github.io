var livestream = function(uid) {
	'use strict';

	var header = document.querySelector("header");
	fetch("https://0xdc.io/hls/" + uid + ".m3u8")
	.then(response => {
		if (!response.ok) {
			throw new Error("http response not okay. not doing anything");
		}
		return response.url;
	})
	.then(url => {
		var video = document.createElement("video");
		video.controls = true;
		video.muted = true;

		if (video.canPlayType("application/vnd.apple.mpegurl")) {
			// native support
			// load the video and go
			video.src = url;
			header.prepend(video);
			video.play();
		} else if (Hls.isSupported()) {
			// using hls.js
			var hls = new Hls();
			hls.loadSource(url);
			hls.attachMedia(video);
			hls.on(Hls.Events.MANIFEST_PARSED, () => {
				header.prepend(video);
				video.play();
			})
		}
	})
	.catch(() => {
		console.log("fetch() returned error. not doing anything...");
	});
};

document.addEventListener("DOMContentLoaded", function() {
	livestream(user);
});
