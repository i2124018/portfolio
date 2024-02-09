//スクロール量の検出
let topHeight = document.getElementById("top").offsetHeight;
console.log(topHeight);

window.addEventListener('scroll', function(){

    let scroll = window.scrollY;
    let headerText = document.querySelector(".nav-list");
    let sheets = document.styleSheets
    let sheet = sheets[sheets.length - 1];
    let arrow = document.querySelector(".arrow")

    //スタイルルールの追加

    if(scroll > topHeight - 50){
        headerText.style.color = "#333";
        sheet.insertRule(
            '.nav-list-item a::before { background-Color: #333 }',
            sheet.cssRules.length
        );
        arrow.style.visibility = "visible";
    }else if(scroll < topHeight - 50){
        headerText.style.color = "#fdfdfd";
        sheet.insertRule(
            '.nav-list-item a::before { background-Color: #fdfdfd }',
            sheet.cssRules.length
        );
        arrow.style.visibility = "hidden";
    }
});

const pie = document.querySelector(".pie");

function skillsAnimation(entries){
    let count;
    if (entries[0].intersectionRatio == 0 && b) {

    }else{
        let angle = 0;

        function drawCircle(){
        if(angle <  110){
                angle += 4;
                pie.style.backgroundImage = `conic-gradient(black ${angle}deg, white ${angle}deg)`;
                requestAnimationFrame(drawCircle);
            }else if(angle <  220){
                angle += 2;
                pie.style.backgroundImage = `conic-gradient(black ${angle}deg, white ${angle}deg)`;
                requestAnimationFrame(drawCircle);
            }
            else if(angle <  230){
                angle += 1;
                pie.style.backgroundImage = `conic-gradient(black ${angle}deg, white ${angle}deg)`;
                requestAnimationFrame(drawCircle);
            }
        };
    
        requestAnimationFrame(drawCircle);
        b = false
    }
}

let options = {

    threshold:1
    }
    
    ;
    
let observer = new IntersectionObserver(skillsAnimation,options);
    
    observer.observe(pie);