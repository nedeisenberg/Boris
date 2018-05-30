container = document.createElement('div');
container.classList.add('app_container');

video_column = document.createElement('div');
video_column.classList.add('column_third');

transcript_column = video_column.cloneNode(true);
vtt_column = video_column.cloneNode(true);

container.appendChild([video_column,transcript_column,vtt_column]);


//attach content to hook
jQuery("#content").append(video_column);
jQuery("#content").append(second_column);
