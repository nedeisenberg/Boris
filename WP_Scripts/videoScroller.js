//create container for web app
container = document.createElement('div');
container.classList.add('app_container');

//divide into main and sidebar
main = document.createElement('div');
sidebar = document.createElement('div');



//divide into left and rightcolumns
leftColumn = document.createElement('div');
rightColumn = document.createElement('div');
leftColumn.classList.add('column_half');
rightColumn.classList.add('column_half');

leftColumn.innerHTML = 'video and controls';
rightColumn.innerHTML = 'transcript';

container.appendChild(leftColumn);
container.appendChild(rightColumn);

videoBlock = document.createElement('div');
controlsBlock = document.createElement('div');
transcriptBlock = document.createElement('div');

active_video = document.createElement('video');
active_video.style.width = '33.333vw';
active_video.setAttribute('id','active_video');


videoBlock.appendChild(active_video);
leftColumn.appendChild(videoBlock);


//attach content to hook
jQuery("#content").append(container);
