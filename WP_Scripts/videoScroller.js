container = document.createElement('div');
container.classList.add('app_container');

leftColumn = document.createElement('div');
rightColumn = document.createElement('div');
leftColumn.classList.add('column_half');
rightColumn.classList.add('column_half');

leftColumn.innerHTML = 'video and controls';
rightColumn.innerHTML = 'transcript';

container.appendChild(leftColumn);
container.appendChild(rightColumn);

//attach content to hook
jQuery("#content").append(container);
