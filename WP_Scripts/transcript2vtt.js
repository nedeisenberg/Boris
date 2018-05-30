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

video_column.appendChild(title);
)


//attach content to hook
jQuery("#content").append(container);
