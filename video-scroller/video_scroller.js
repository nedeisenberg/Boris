jQuery(document).ready(function ($) {
	
	$.getJSON("/home/ned/Work/job/DRAW/Assets/test_data.json", function(json) {
   	console.log(json);
	});
	
	var video_src = "https://ieeetv.ieee.org/ns/ieeetvdl/History/RAS/RuzenaBajcsy.mp4";
	
	document.write("<video controls height=200 width=300><source src='");
	document.write(video_src);
	document.write("'/></video>");
	
	
	var video = document.getElementsByTagName("video")[0];
	
	function checkLoad() {
		if (video.readyState==4){ //check if video is loaded
			video.currentTime=4000;
		} else {
			setTimeout(checkLoad,200);
			console.log('loading video...');
		}
	}
	checkLoad();
	console.log("ready");
	$('p').on('click', function() {
  	jQuery(this).hide();
  })
})
