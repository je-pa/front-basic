let timer;
const mainSections = document.querySelectorAll('main section');
const lists = document.querySelectorAll('main ul li a');
document.addEventListener('scroll',()=>{
    if (timer) {
        clearTimeout(timer);
    }
    timer = setTimeout(()=>{
        const scrollValue = document.documentElement.scrollTop;
        const sectionNum = mainSections.length;

        mainSections.forEach((e, i, arr) => {
            if(
                ( !(i==0||i==sectionNum-1) && arr[i-1].offsetTop < scrollValue && scrollValue<mainSections[i+1].offsetTop ) || // 첫번째랑 마지막 제외
                ( i==0 && 0<=scrollValue && scrollValue<mainSections[1].offsetTop ) || // 첫번째 - html 젤 위부터 section 두번째 TOP 까지
                ( i==sectionNum-1 && mainSections[sectionNum-2].offsetTop < scrollValue && scrollValue < document.body.scrollHeight ) // 마지막 - section 밑에서 두번째 TOP 부터 html 바닥까지

            ){
                setColor(i);
            }
        })

    },100)

    function setColor(index){
        for(let i=0; i<lists.length ; i++){
            if(index != i){
                lists[i].style.color='white';
            }else{
                lists[i].style.color='black';
            }

        }
    }
})

// var element = document.getElementById("mine"); element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});

// document.addEventListener('scroll',()=>{
//     if(currentScroll<=document.documentElement.scrollTop){
//         if(20 < document.documentElement.scrollTop && document.documentElement.scrollTop < mainSections[0].offsetTop){
//             document.documentElement.scrollTop=mainSections[0].offsetTop;
//         }else if(mainSections[0].offsetTop < document.documentElement.scrollTop && document.documentElement.scrollTop < mainSections[1].offsetTop){
//             document.documentElement.scrollTop=mainSections[1].offsetTop;
//         }else if(mainSections[1].offsetTop < document.documentElement.scrollTop && document.documentElement.scrollTop < mainSections[2].offsetTop){
//             document.documentElement.scrollTop=mainSections[2].offsetTop;
//         }else if(mainSections[2].offsetTop < document.documentElement.scrollTop && document.documentElement.scrollTop < mainSections[3].offsetTop){
//             document.documentElement.scrollTop=mainSections[3].offsetTop;
//         }else if(mainSections[3].offsetTop < document.documentElement.scrollTop && document.documentElement.scrollTop < mainSections[4].offsetTop){
//             document.documentElement.scrollTop=mainSections[4].offsetTop;
//         }
//         currentScroll=document.documentElement.scrollTop;
//         console.log(1);
//     }else{
//         if(20 < document.documentElement.scrollTop && document.documentElement.scrollTop < mainSections[0].offsetTop){
//             document.documentElement.scrollTop=0;
//         }else if(mainSections[0].offsetTop < document.documentElement.scrollTop && document.documentElement.scrollTop < mainSections[1].offsetTop){
//             document.documentElement.scrollTop=mainSections[0].offsetTop;
//         }else if(mainSections[1].offsetTop < document.documentElement.scrollTop && document.documentElement.scrollTop < mainSections[2].offsetTop){
//             document.documentElement.scrollTop=mainSections[1].offsetTop;
//         }else if(mainSections[2].offsetTop < document.documentElement.scrollTop && document.documentElement.scrollTop < mainSections[3].offsetTop){
//             document.documentElement.scrollTop=mainSections[2].offsetTop;
//         }else if(mainSections[3].offsetTop < document.documentElement.scrollTop && document.documentElement.scrollTop < mainSections[4].offsetTop){
//             document.documentElement.scrollTop=mainSections[3].offsetTop;
//         }
//         currentScroll=document.documentElement.scrollTop;
//         console.log(-1);
//     }
//
// })



// window.__scrollPosition = document.documentElement.scrollTop || 0;
//
// document.addEventListener('scroll', function() {
//     let _documentY = document.documentElement.scrollTop;
//     let _direction = _documentY - window.__scrollPosition >= 0 ? 1 : -1;
//     console.log(_direction); // 콘솔창에 스크롤 방향을 출력
//
//     window.__scrollPosition = _documentY; // Update scrollY
// });