'use strict'

var url = "http://bclarchive.net/wp-content/uploads/2018/05/00003.pdf";
PDFJS.getDocument(url).then(function(pdf){
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
});
