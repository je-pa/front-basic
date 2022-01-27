const toggleBtn = document.querySelector('.navbar__toogleBtn');
const menu = document.querySelector('nav');

toggleBtn.addEventListener('click',()=>{
    menu.classList.toggle('active');
})

const subButton = document.querySelectorAll('.sub_hide');
const subMenu = document.querySelectorAll('.sub_hide + ul');

for(let i=0 ; i<subButton.length ; i++){
    subButton[i].addEventListener('click',()=>{
        subMenu[i].classList.toggle('active');
        console.log('2')
        if(subButton[i].childNodes[0].classList.contains('fa-chevron-down')){
            console.log('1');
            // subButton[i].classList.remove('fa-chevron-down')
            subButton[i].childNodes[0].classList.replace('fa-chevron-down','fa-chevron-up');
        }else{
            subButton[i].childNodes[0].classList.replace('fa-chevron-up','fa-chevron-down');
        }
    })
}
const contactUsButton = document.querySelector('#contact_bt');
const contactModal = document.querySelector('.contact');
const modalBackground = document.querySelector('.modal_background');

contactUsButton.addEventListener('click',()=>{
    contactModal.classList.toggle('active');
    modalBackground.classList.toggle('active');
})
const contactCloseButton = document.querySelector('.contact > a > .fa-times');

contactCloseButton.addEventListener('click',()=>{
    contactModal.classList.remove('active');
    modalBackground.classList.remove('active');
})
modalBackground.addEventListener('click',()=>{
    contactModal.classList.remove('active');
    modalBackground.classList.remove('active');
})

//test
//client rolling banner
window.onload = function() {
    var bannerLeft=0;
    var first=1;
    var last;
    var imgCnt=0;
    var $img = $("aside ul li");
    var $first;
    var $last;

    $img.each(function(){   // 5px 간격으로 배너 처음 위치 시킴
        $(this).css("left",bannerLeft);
        bannerLeft += $(this).width()+5;
        $(this).attr("id", "banner"+(++imgCnt));  // img에 id 속성 추가
    });

    if( imgCnt > 9){                //배너 9개 이상이면 이동시킴
        last = imgCnt;

        setInterval(function() {
            $img.each(function(){
                $(this).css("left", $(this).position().left-1); // 1px씩 왼쪽으로 이동
            });
            $first = $("#banner"+first);
            $last = $("#banner"+last);
            if($first.position().left < -200) {    // 제일 앞에 배너 제일 뒤로 옮김
                $first.css("left", $last.position().left + $last.width()+5 );
                first++;
                last++;
                if(last > imgCnt) { last=1; }
                if(first > imgCnt) { first=1; }
            }
        }, 50);   //여기 값을 조정하면 속도를 조정할 수 있다.(위에 1px 이동하는 부분도 조정하면
        //깔끔하게 변경가능하다
    }
};