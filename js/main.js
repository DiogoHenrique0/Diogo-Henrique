let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");



menu.onclick = () => {
    navbar.classList.toggle('open-menu')
    menu.classList.toggle('move');
};
 window.onscroll = () =>{
    navbar.classList.remove('open-menu')
    menu.classList.remove('move');
 }

// Email JS
function validate() {
    let name = document.querySelector('.name');
    let email = document.querySelector('.email');
    let msg = document.querySelector('.message');
    let sendBtn = document.querySelector('.send-btn');

    sendBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (name.value == "" || email.value == "" || msg.value == ""){
            emptyerror();
        } else {
            sendmail(name.value, email.value, msg.value);
            success();
        }
    })
}
validate();

function sendmail(name,email,msg){
    emailjs.send("service_gu1ivu5","template_va2ob6x",{
        to_name: email,
        from_name: name,
        message: msg,
        });
}


function emptyerror() {
    swal({
        title: "Oh Não...",
        text: "Os campos não podem ficar vazios!",
        icon: "error",
      });
}
function success() {
    swal({
        title: "E-mail enviado com sucesso",
        text: "Tentamos responder em 24 horas",
        icon: "success",
      });
}
// Header Background Change On Scroll
let header = document.querySelector('header')

window.addEventListener('scroll', () => {
    header.classList.toggle('header-active', window.scrollY> 0)
})

// Scroll Top
let scrollTop = document.querySelector('.scroll-top')

window.addEventListener('scroll', () => {
    scrollTop.classList.toggle('scroll-active', window.scrollY >= 400)
})