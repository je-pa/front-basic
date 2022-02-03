const subButton = document.querySelectorAll('.sub_hide');
const subMenu = document.querySelectorAll('.sub_hide + ul');

for(let i=0 ; i<subButton.length ; i++){
    subButton[i].previousSibling.addEventListener('click',()=>{
        subMenuButtonClick(i);
    })
    subButton[i].addEventListener('click',()=>{
        subMenuButtonClick(i);
    })
}

function subMenuButtonClick(index){
    for(let j=0;j<subButton.length;j++){
        if(subButton[j].childNodes[0].classList.contains('fa-chevron-up') && j!=index){
            subMenu[j].classList.remove('active');
            subButton[j].childNodes[0].classList.replace('fa-chevron-up','fa-chevron-down');
        }
    }
    subMenu[index].classList.toggle('active');
    if(subButton[index].childNodes[0].classList.contains('fa-chevron-down')){
        subButton[index].childNodes[0].classList.replace('fa-chevron-down','fa-chevron-up');
    }else{
        subButton[index].childNodes[0].classList.replace('fa-chevron-up','fa-chevron-down');
    }
}

const contactUsButton = document.querySelector('#contact_bt');
const contact = document.querySelector('.contact');
const modalBackground = document.querySelector('.modal_background');

contactUsButton.addEventListener('click',()=>{
    contact.classList.toggle('active');
    modalBackground.classList.toggle('active');
})
const contactCloseButton = document.querySelector('.contact > a > .fa-times');

contactCloseButton.addEventListener('click',()=>{
    contact.classList.remove('active');
    modalBackground.classList.remove('active');
})
modalBackground.addEventListener('click',()=>{
    contact.classList.remove('active');
    modalBackground.classList.remove('active');
})

const contactOpenCloseButton = document.querySelector('.contact > a > i:nth-child(1)');
contactOpenCloseButton.addEventListener('click',()=>{
    if(contact.classList.contains('open')){
        contact.classList.remove('open');
        contactOpenCloseButton.classList.replace('fa-chevron-right','fa-chevron-left');

    }else{
        contact.classList.add('open');
        contactOpenCloseButton.classList.replace('fa-chevron-left','fa-chevron-right');
    }
})