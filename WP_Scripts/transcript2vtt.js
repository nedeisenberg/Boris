video_column = document.createElement('div');
video_column.setAttribute('id','doesntmatter');
video_column.classList.add('column_third');
video_column.innerHTML = 'bonjour';

second_column = video_column.cloneNode(true);

second_column.innerHTML= 'bon nuit';



//attach content to hook
jQuery("#content").append(video_column);
jQuery("#content").append(second_column);
