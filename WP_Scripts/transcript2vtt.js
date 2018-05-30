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
mp4_submission = document.createElement('input');
submit_mp4 = document.createElement('input');
active_video = document.createElement('div');

transcript_submission = document.createElement('div');
transcript_entry = document.createElement('textarea');
submit_transcript = document.createElement('input');
transcript_renderer = document.createElement('div');


//attach content to hook
jQuery("#content").append(container);
