// var tag = document.createElement('script');

// tag.src = "https://www.youtube.com/iframe_api";
// var firstScriptTag = document.getElementsByTagName('script')[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// let player;

// function onYouTubeIframeAPIReady(){
//     player = new YT.Player('player');
// }

// $(btnplay).on('click', function(){
//     console.log('clicked'); // works
//     player.playVideo();  // doesn't work
// });

const goButtons = document.querySelectorAll('.js-lets-go')

const pickModalClass = document.querySelector('.js-modal')

const closeModalClass = document.querySelector('.js-close-modal')

const pickContainerModalClass = document.querySelector('.js-container-modal')
// Hàm hiển thị FORM
function showLetsGoForm(){
    pickModalClass.classList.add('open')
}
// Hàm ẩn Form
function hideLetsGoForm(){
    pickModalClass.classList.remove('open')
}
//Lặp qua từng thẻ button và nghe hành vi Click
for(const goButton of goButtons){
    goButton.addEventListener('click', showLetsGoForm)
}
//Nghe Click để Close
closeModalClass.addEventListener('click', hideLetsGoForm)
pickModalClass.addEventListener('click', hideLetsGoForm)

//Chặn việc nghe Click của Form mới hiện do theo thẻ cha ảnh hưởng
function stopFollowClickByModalClass(){
    event.stopPropagation()
}
pickContainerModalClass.addEventListener('click',stopFollowClickByModalClass)

