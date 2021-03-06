container = document.createElement('div');
container.classList.add('app_container');

leftColumn = document.createElement('div');
rightColumn= document.createElement('div');

leftColumn.classList.add('column_half');
rightColumn.classList.add('column_half');

theCanvas = document.createElement('canvas');
theCanvas.setAttribute('id','the-canvas');
theCanvas.setAttribute('height','400');
theCanvas.setAttribute('width','400');

leftColumn.appendChild(theCanvas);

container.appendChild(leftColumn);
container.appendChild(rightColumn);

var url = "http://bclarchive.net/wp-content/uploads/2018/05/00003.pdf";
pdfjsLib.getDocument(url).then(function(pdf){
  return pdf.getPage(1);
}).then(function(page){
var scale = 1.5;
var viewport = page.getViewport(scale);
var canvas = document.getElementById('the-canvas');
var context = canvas.getContext('2d');
canvas.height = viewport.height;
canvas.width = viewport.width;
var renderContext = {
canvasContext:context,
viewport:viewport
};
page.render(renderContext);
rightColumn.innerHTML= page.getTextContent().items.map(function (s) { return s.str; }).join('');
console.log('updated');
});


jQuery('#content').append(container);
