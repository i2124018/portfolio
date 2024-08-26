//スクロール量の検出
const mediaQurey = window.matchMedia('(min-width: 431px)');

let topHeight = document.getElementById("top").offsetHeight;
console.log(topHeight);

window.addEventListener('scroll', function(){

    let scroll = window.scrollY;
    let headerText = document.querySelector(".nav-list");
    let sheets = document.styleSheets
    let sheet = sheets[sheets.length - 1];
    let arrow = document.querySelector(".arrow")

    //スタイルルールの追加
    if(mediaQurey.matches){
        if(scroll < topHeight - 2/10*topHeight && scroll > topHeight - 11/12*topHeight){
            headerText.style.color = "#fdfdfd";
            
            sheet.insertRule(
                '.nav-list-item a::before { background-Color: #fdfdfd }',
                sheet.cssRules.length
            );

        }else{
            headerText.style.color = "#333";
            
            sheet.insertRule(
                '.nav-list-item a::before { background-Color: #333 }',
                sheet.cssRules.length
            );
        }
    }
});
