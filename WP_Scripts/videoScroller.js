//create container for web app
container = document.createElement('div');
container.classList.add('app_container');

//divide into main and sidebar
spacer = document.createElement('div');
spacer.classList.add('space');
main = document.createElement('div');
main.classList.add('main');
sidebar = document.createElement('div');
sidebar.classList.add('sidebar');

container.appendChild(main);
container.appendChild(sidebar);

//divide into left and rightcolumns
leftColumn = document.createElement('div');
rightColumn = document.createElement('div');
leftColumn.classList.add('column_half');
rightColumn.classList.add('column_half');

leftColumn.innerHTML = 'video and controls';
rightColumn.innerHTML = 'transcript';

main.appendChild(leftColumn);
main.appendChild(rightColumn);

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
