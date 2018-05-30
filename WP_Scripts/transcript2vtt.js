container = document.createElement('div');
container.classList.add('app_container');

video_column = document.createElement('div');
video_column.classList.add('column_third');

transcript_column = video_column.cloneNode(true);
vtt_column = video_column.cloneNode(true);

container.appendChild(video_column);
container.appendChild(transcript_column);
container.appendChild(vtt_column);


///LABEL COLUMNS
title = document.createElement('div');
title.classList.add('title');
title.innerHTML = 'TRANSCRIPT2SUB Tool';

instructions = document.createElement('div');
instructions.classList.add('text')
instructions.innerHTML = 'Please click upon the blocks as they\'re spoken...'
signal = document.createElement('div');
signal.classList.add('heads_up');
signal.innerHTML = "Playback Speed: 0.75";

result = document.createElement('div');
result.classList.add('title');
result.innerHTML = 'VTT subtitles';

video_column.appendChild(title);
transcript_column.appendChild(instructions);
transcript_column.appendChild(signal);
vtt_column.appendChild(result);

///CREATE MODULES
playhead_counter = document.createElement('div');
playhead_counter.setAttribute('id','playhead_counter');
playhead_counter.style.display = 'none';
mp4_submission = document.createElement('div');
mp4_submission.setAttribute('id','mp4_submission');
  mp4_url = document.createElement('input')
  mp4_url.setAttribute('id','mp4_url');
  mp4_url.setAttribute('value','PASTE MP4 URL');
  submit_mp4 = document.createElement('input');
  submit_mp4.setAttribute('type','button');
  submit_mp4.setAttribute('id','submit_mp4');
  submit_mp4.setAttribute('value','Ok');
  mp4_submission.appendChild(mp4_url);
  mp4_submission.appendChild(submit_mp4);
active_video = document.createElement('video');
active_video.setAttribute('id','active_video');
video_column.appendChild(playhead_counter);
video_column.appendChild(mp4_submission);
video_column.appendChild(active_video);

transcript_submission = document.createElement('div');
transcript_entry = document.createElement('textarea');
submit_transcript = document.createElement('input');
transcript_renderer = document.createElement('div');

url_flag = document.createElement('div');
transcript_flag = document.createElement('div');
vtt_renderer = document.createElement('div');
download_vtt = document.createElement('div');

// 	<div id="transcript_submission">
// 		<textarea id="transcript_entry" style="height:400px;width:85%;">PASTE TRANSCRIPT HERE</textarea>
// 		<input type="button" id="submit_transcript" value="Submit"></input>
// 	</div>
// 	<div id="transcript_renderer" style="overflow-y: scroll;" onkeydown="onkp()"></div>
//
// <span class="column" id="vtt_column">
// <div id="url_heads_up" class="heads_up">Please enter video URL</div>
// <div id="transcript_heads_up" class="heads_up">Please paste the video transcript</div>
// <div id="vtt_renderer" style="overflow-y: scroll;white-space: pre;">WEBVTT
// 00:00:01.000 --> </div>
// <button id="download_vtt" style="display:none;">Download VTT</button>
// </span>
// </div>


//attach content to hook
jQuery("#content").append(container);
