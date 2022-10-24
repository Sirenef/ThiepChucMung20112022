const buttonLets = document.querySelectorAll('.js-lets-go-letter')

const pickModalClassLetter = document.querySelector('.js-model')

const closeModalClassLetter = document.querySelector('.js-close-model')

const pickContainerModalClassLetter = document.querySelector('.js-container-model')
// Hàm hiển thị FORM
function showLetsGoFormLetter(){
    pickModalClassLetter.classList.add('open')
}
// Hàm ẩn Form
function hideLetsGoFormLetter(){
    pickModalClassLetter.classList.remove('open')
}
//Lặp qua từng thẻ button và nghe hành vi Click
for(const buttonLet of buttonLets){
    buttonLet.addEventListener('click', showLetsGoFormLetter)
}
//Nghe Click để Close
closeModalClassLetter.addEventListener('click', hideLetsGoFormLetter)
pickModalClassLetter.addEventListener('click', hideLetsGoFormLetter)

//Chặn việc nghe Click của Form mới hiện do theo thẻ cha ảnh hưởng
function stopFollowClickByModalClassLetter(){
    event.stopPropagation()
}
pickContainerModalClassLetter.addEventListener('click',stopFollowClickByModalClassLetter)