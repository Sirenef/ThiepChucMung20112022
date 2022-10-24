const buttonGirls = document.querySelectorAll('.js-lets-go-girl')

const pickModalClassGirl = document.querySelector('.js-girl')

const closeModalClassGirl = document.querySelector('.js-close-girl')

const pickContainerModalClassGirl = document.querySelector('.js-container-girl')
// Hàm hiển thị FORM
function showLetsGoFormGirl(){
    pickModalClassGirl.classList.add('open')
}
// Hàm ẩn Form
function hideLetsGoFormGirl(){
    pickModalClassGirl.classList.remove('open')
}
//Lặp qua từng thẻ button và nghe hành vi Click
for(const buttonGirl of buttonGirls){
    buttonGirl.addEventListener('click', showLetsGoFormGirl)
}
//Nghe Click để Close
closeModalClassGirl.addEventListener('click', hideLetsGoFormGirl)
pickModalClassGirl.addEventListener('click', hideLetsGoFormGirl)

//Chặn việc nghe Click của Form mới hiện do theo thẻ cha ảnh hưởng
function stopFollowClickByModalClassGirl(){
    event.stopPropagation()
}
pickContainerModalClassGirl.addEventListener('click',stopFollowClickByModalClassGirl)