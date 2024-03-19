let item1=document.getElementsByClassName('ptn')[0];
let audio=document.getElementsByClassName('audio_list')[0];
let sign=document.getElementsByClassName('sign_bar_in_footer')[0];
let audio1=document.getElementById('audio_first');
item1.addEventListener('click',()=>{
audio.style.display='block';
sign.style.display='none';
audio1.play();
})