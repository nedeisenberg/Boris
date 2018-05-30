container = document.createElement('div');
container.classList.add('app_container');

video_column = document.createElement('div');
video_column.classList.add('column_third');

transcript_column = video_column.cloneNode(true);
vtt_column = video_column.cloneNode(true);

container.appendChild(video_column);
container.appendChild(transcript_column);
container.appendChild(vtt_column);


///LABEL COLUMNS
title = document.createElement('div');
title.classList.add('title');
title.innerHTML = 'TRANSCRIPT2SUB Tool';

instructions = document.createElement('div');
instructions.classList.add('text')
instructions.innerHTML = 'Please click blocks as they\'re spoken...  # keys change the playback rate: '
signal = document.createElement('div');
signal.classList.add('heads_up');
signal.innerHTML = "0.75";

result = document.createElement('div');
result.classList.add('title');
result.innerHTML = 'VTT subtitles';

video_column.appendChild(title);
transcript_column.appendChild(instructions);
transcript_column.appendChild(signal);
vtt_column.appendChild(result);

///CREATE MODULES
  //VIDEO
playhead_counter = document.createElement('div');
playhead_counter.setAttribute('id','playhead_counter');
playhead_counter.style.display = 'none';
mp4_submission = document.createElement('div');
mp4_submission.setAttribute('id','mp4_submission');
  mp4_url = document.createElement('input')
  mp4_url.setAttribute('id','mp4_url');
  mp4_url.setAttribute('value','PASTE MP4 URL');
  submit_mp4 = document.createElement('input');
  submit_mp4.setAttribute('type','button');
  submit_mp4.setAttribute('id','submit_mp4');
  submit_mp4.setAttribute('value','Ok');
  mp4_submission.appendChild(mp4_url);
  mp4_submission.appendChild(submit_mp4);
active_video = document.createElement('video');
active_video.style.width = '33.333vw';
active_video.setAttribute('id','active_video');
video_column.appendChild(playhead_counter);
video_column.appendChild(mp4_submission);
video_column.appendChild(active_video);

  //TRANSCRIPT
transcript_submission = document.createElement('div');
transcript_submission.setAttribute('id','transcript_submission');
  transcript_entry = document.createElement('textarea');
  transcript_entry.setAttribute('id','transcript_entry');
  transcript_entry.style.height = '80%';
  transcript_entry.style.width = '85%';
  transcript_entry.innerHTML = 'PASTE TRANSCRIPT HERE';
  submit_transcript = document.createElement('input');
  submit_transcript.setAttribute('id', 'submit_transcript');
  submit_transcript.setAttribute('value', 'Submit');
  transcript_submission.appendChild(transcript_entry);
  transcript_submission.appendChild(submit_transcript);
transcript_renderer = document.createElement('div');
transcript_renderer.setAttribute('id','transcript_renderer');
transcript_renderer.setAttribute('style','overflow-y:scroll;');
transcript_renderer.setAttribute('onkeydown','onkp()');
transcript_column.appendChild(transcript_submission);
transcript_column.appendChild(transcript_renderer);

  //RESULTS
url_flag = document.createElement('div');
url_flag.setAttribute('id','url_flag');
url_flag.setAttribute('class','flag');
url_flag.innerHTML = 'Please enter video URL';
transcript_flag = document.createElement('div');
transcript_flag.setAttribute('id','transcript_flag');
transcript_flag.setAttribute('class','flag');
transcript_flag.innerHTML = 'Please paste the video transcript';
vtt_renderer = document.createElement('div');
vtt_renderer.setAttribute('id','vtt_renderer');
vtt_renderer.setAttribute('style','overflow-y:scroll;white-space: pre;');
vtt_renderer.innerHTML = 'WEBVTT \n 00:00:01.000 --> '
download_vtt = document.createElement('div');
download_vtt.setAttribute('id','download_vtt');
download_vtt.style.display = 'none';
download_vtt.innerHTML = 'Download VTT';

vtt_column.appendChild(url_flag);
vtt_column.appendChild(transcript_flag);
vtt_column.appendChild(vtt_renderer);
vtt_column.appendChild(download_vtt);

//attach content to hook
jQuery("#content").append(container);

var ready=false;
var video;
var speed=1.0;

jQuery(document).keypress(function(e) {
  if(e.which == 49) {
      console.log('You pressed 1!');
      speed=.5;
      document.getElementById("heads_up").textContent=""+speed;
      video.playbackRate=speed;
  }
  if(e.which == 50) {
      console.log('You pressed 2!');
      speed=.75;
      document.getElementById("heads_up").textContent=""+speed;
      video.playbackRate=speed;
  }
  if(e.which == 51) {
      console.log('You pressed 3!');
      speed=1.0;
      document.getElementById("heads_up").textContent=""+speed;
      video.playbackRate=speed;
  }
  if(e.which == 52) {
      console.log('You pressed 4!');
      speed=1.25;
      document.getElementById("heads_up").textContent=""+speed;
      video.playbackRate=speed;
  }
  if(e.which == 53) {
      console.log('You pressed 5!');
      speed=1.5;
      document.getElementById("heads_up").textContent=""+speed;
      video.playbackRate=speed;
  }
  if(e.which == 54) {
      console.log('You pressed 6!');
      speed=1.75;
      document.getElementById("heads_up").textContent=""+speed;
      video.playbackRate=speed;
  }
  if(e.which == 55) {
      console.log('You pressed 7!');
      speed=2.0;
      document.getElementById("heads_up").textContent=""+speed;
      video.playbackRate=speed;
  }
  if(e.which == 56) {
      console.log('You pressed 8!');
      speed=2.25;
      document.getElementById("heads_up").textContent=""+speed;
      video.playbackRate=speed;
  }
  if(e.which == 57) {
      console.log('You pressed 9!');
      speed=2.5;
      document.getElementById("signal").textContent=""+speed;
      video.playbackRate=speed;
  }

});

jQuery("#submit_mp4").click(function () {
  var video_url = document.getElementById("mp4_url").value;
  var video_html='<source src="' + video_url + '"/>';
  jQuery("#active_video").html(video_html);
  var video_width = jQuery("#video_column").width();
  document.getElementById("active_video").style.width = ''+video_width-12;

  document.getElementById("mp4_submission").style.display = "none";
  document.getElementById("url_flag").style.display = "none";

  video = jQuery("#active_video")[0];
  video.playbackRate= .75;
});

jQuery("#submit_transcript").click(function () {
  var transcript_text=document.getElementById("transcript_entry").value;
  console.log(transcript_text);
  document.getElementById("transcript_submission").style.display = "none";
  document.getElementById("transcript_flag").style.display = "none";

  var parsed_transcript='';

  parsed_transcript += transcript_text;
  parsed_transcript = parsed_transcript.split('?').join('?</p><p>');
  parsed_transcript = parsed_transcript.split('!').join('!</p><p>');
  parsed_transcript = parsed_transcript.split(".").join(".</p><p>");
  parsed_transcript = parsed_transcript.split(",").join(",</p><p>");
  parsed_transcript = parsed_transcript.split("–").join("–</p><p>");
  parsed_transcript += "</p>";

  var sliced_transcript = parsed_transcript.split("</p><p>");
  parsed_slices=[];

  var id_count = 0;
  var id_tag="";

  for(i=0;i<sliced_transcript.length;i++){
    if(sliced_transcript[i].length>2 && sliced_transcript[i].charAt(0) != "\""){
      //while words<thresh
        //add space plus first line from next word]
        if(i<4){
          console.log(sliced_transcript[i].split(" ").length);
        }
      word_chunk = sliced_transcript[i];

      while (word_chunk.split(" ").length<=24){
        i++;
        word_chunk+=" "+sliced_transcript[i]
        sliced_transcript.push("");
      }


      id_tag='</p><p>'+word_chunk;

      parsed_slices.push(id_tag);
      id_count++;
    }else{
      last_index = parsed_slices.length-1;
      parsed_slices[last_index]+=sliced_transcript[i];
    }
  }

  //check char lengths of slices
  for(s=0; s<parsed_slices.length; s++){
      if(parsed_slices[s].length>40){
        //console.log(""+ s + " length:"+parsed_slices[s].length);
      }
  }


  render_transcript=parsed_slices.join("");

  jQuery("#transcript_renderer").html('<p>' + render_transcript+'</p>');
  checkReady();
})

jQuery("#transcript_renderer").on("click",'p',function(){
  //if ready
    jQuery(this).slideUp();
    var additive_text = "";
    current_timestamp = convert_timestamp(video.currentTime);
    additive_text+=current_timestamp + "\n" + this.textContent.replace(/\r?\n|\r/g,"") + "\n" + current_timestamp + " --> ";

    var vtt_text = document.getElementById("vtt_renderer").textContent + additive_text;
    document.getElementById("vtt_renderer").textContent=vtt_text;
  //else:
    //heads up
  })

  function onkp(){
    console.log(video.currentTime);
  }

function convert_timestamp(seconds){

  return "" + ("0"+(Math.floor(seconds/3600)%60)).slice(-2)+":"+("0"+(Math.ceil(seconds/60)-1)%60).slice(-2) + ":" + ("0"+Math.ceil(seconds%60)).slice(-2)+ (seconds%Math.floor(seconds)).toPrecision(3).substring(1,5);
}

jQuery("#download_vtt").click(function(){
  var blob = new Blob(["Hello, world!"], {type: "text/plain;charset=utf-8"});//
  //saveAs(blob, "hello world.txt");	//
  this.download="helloworld.txt";
})

//code from https://ourcodeworld.com/articles/read/189/how-to-create-a-file-and-generate-a-download-with-javascript-in-the-browser-without-a-server
function download(filename, text) {
  var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}
// Start file download.
document.getElementById("download_vtt").addEventListener("click", function(){
    // Generate download of hello.txt file with some content
    var text = document.getElementById("vtt_renderer").textContent;
    var filename = "tracks.vtt";
   download(filename, text);
}, false);

function checkReady(){
  ready = true;
  document.getElementById("download_vtt").style.display = "block";
  setInterval(function(){
    video.play();
  }, 100);
}
