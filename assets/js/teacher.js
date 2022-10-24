const buttonTeachers = document.querySelectorAll('.js-lets-go-teacher')

const pickModalClassTeacher = document.querySelector('.js-teacher')

const closeModalClassTeacher = document.querySelector('.js-close-teacher')

const pickContainerModalClassTeacher = document.querySelector('.js-container-teacher')
// Hàm hiển thị FORM
function showLetsGoFormTeacher(){
    pickModalClassTeacher.classList.add('open')
}
// Hàm ẩn Form
function hideLetsGoFormTeacher(){
    pickModalClassTeacher.classList.remove('open')
}
//Lặp qua từng thẻ button và nghe hành vi Click
for(const buttonTeacher of buttonTeachers){
    buttonTeacher.addEventListener('click', showLetsGoFormTeacher)
}
//Nghe Click để Close
closeModalClassTeacher.addEventListener('click', hideLetsGoFormTeacher)
pickModalClassTeacher.addEventListener('click', hideLetsGoFormTeacher)

//Chặn việc nghe Click của Form mới hiện do theo thẻ cha ảnh hưởng
function stopFollowClickByModalClassTeacher(){
    event.stopPropagation()
}
pickContainerModalClassTeacher.addEventListener('click',stopFollowClickByModalClassTeacher)