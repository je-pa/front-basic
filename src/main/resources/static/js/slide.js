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

let timer;
const mainSections = document.querySelectorAll('main section');
const lists = document.querySelectorAll('main ul li a');
document.addEventListener('scroll',()=>{
    if (timer) {
        clearTimeout(timer);
    }
    timer = setTimeout(()=>{
        const scrollValue = document.documentElement.scrollTop;
        console.log(scrollValue);
        // for(let i=0; i<mainSections.length; i++){
        //     if(i=0 && 0<=scrollValue && scrollValue<mainSections[i+1].offsetTop){
        //         console.log(i);
        //     }else if(i=mainSections.length-1 && mainSections[i-1].offsetTop < scrollValue && scrollValue < document.body.scrollHeight ){
        //         console.log(i);
        //     }else if(mainSections[i-1].offsetTop < scrollValue && scrollValue<mainSections[i+1].offsetTop){
        //         console.log(i);
        //     }
        // }
        if(0<=scrollValue && scrollValue<mainSections[1].offsetTop){
            console.log(1);
            setColor(0);
        }else if(mainSections[0].offsetTop < scrollValue && scrollValue<mainSections[2].offsetTop){
            console.log(2);
            setColor(1);
        }else if(mainSections[1].offsetTop < scrollValue && scrollValue<mainSections[3].offsetTop){
            console.log(3);
            setColor(2);
        }else if(mainSections[2].offsetTop < scrollValue && scrollValue<mainSections[4].offsetTop){
            console.log(4);
            setColor(3);
        }else if(mainSections[3].offsetTop < scrollValue && scrollValue < document.body.scrollHeight ){
            console.log(5);
            setColor(4);
        }
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