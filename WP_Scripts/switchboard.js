script_name = jQuery('#tag_name').attr('name');
console.log(script_name);
loadScript = document.createElement('script');
loadScript.type = 'text/javascript';

switch(script_name){
   case "transcript2vtt":
      jQuery('#content').children().hide();
      loadScript.src = 'https://nedeisenberg.github.io/Boris/WP_Scripts/transcript2vtt.js';
      break;
   case "else":
      console.log('different');
      break;
   default:
      console.log('tag not found');
}

document.body.appendChild(loadScript);
