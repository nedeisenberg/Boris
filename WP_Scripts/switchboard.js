script_name = jQuery('#tag_name').attr('name');
console.log(script_name);
loadScript = document.createElement('script');
loadScript.type = 'text/javascript';

switch(script_name){
   case "transcript2vtt":
      jQuery('#content').children().hide();
      loadScript.src = 'https://nedeisenberg.github.io/Boris/WP_Scripts/transcript2vtt.js';
      break;
   case "videoScroller":
      jQuery('#content').children().hide();
      loadScript.src = 'https://nedeisenberg.github.io/Boris/WP_Scripts/videoScroller.js';
      break;
   case "pdfOCR":
      jQuery('#content').children().hide();
      loadScript.src = 'https://nedeisenberg.github.io/Boris/WP_Scripts/pdf_display.js';
      break;
   default:
      console.log('tag not found');
}

document.body.appendChild(loadScript);
