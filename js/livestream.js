var livestream = function(uid) {
	'use strict';

	var header = document.querySelector("header");
	fetch("https://0xdc.io/dash/" + uid + "/index.mpd")
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

		var player = dashjs.MediaPlayer().create();
		player.initialize(video, url, true);
		header.prepend(video);
	})
	.catch(() => {
		console.log("fetch() returned error. not doing anything...");
	});
};

document.addEventListener("DOMContentLoaded", function() {
	livestream(user);
});
