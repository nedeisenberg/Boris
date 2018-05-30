container = document.createElement('div');
container.classList.add('app_container');

video_column = document.createElement('div');
video_column.classList.add('column_third');

transcript_column = video_column.cloneNode(true);
vtt_column = video_column.cloneNode(true);

container.appendChild(video_column);
container.appendChild(transcript_column);
container.appendChild(vtt_column);

title = document.createElement('div');
title.innerHTML = 'check';

instructions = document.createElement('div');
instructions.innerHTML = 'Please click upon the blocks as they\'re spoken...'
signal = document.createElement('div');
signal.classList.add('heads_up');
signal.innerHTML = "Playback Speed: 0.75";

result = document.createElement('div');
result.innerHTML = 'VTT subtitles';


video_column.appendChild(title);
transcript_column.appendChild(instructions);
transcript_column.appendChild(signal);
vtt_column.appendChild(result);


//attach content to hook
jQuery("#content").append(container);
