let tabContent = document.getElementsByClassName('tab-content');
let tabButton = document.getElementsByClassName('tab-button');


/*for(let i = 0; i < tabButton.length; i++){
    tabButton[i].addEventListener('click', function(){
       let click = i; //현재 클릭된 요소를 설정
       
       for(let j = 0; j < tabButton.length; j++){
        tabContent[j].classList.remove('show');
       } // 클릭된 i 빼고 싹다 show 없앰
       
       tabContent[click].classList.add('show');
       // 클릭 [click] = i 에는 show 추가

       for(let k = 0; k < tabButton.length; k++){
        tabButton[k].classList.remove('orange');
       } //마찬가지로 클릭된 i 빼고 싹다 orange없앰

       tabButton[click].classList.add('orange');
       // 클릭 [click] = i 에는 orange 추가
    })
}*/

/*document.getElementsByClassName('list')[0].addEventListener('click', function(e) {
    if (e.target == document.getElementsByClassName('tab-button')[0]) {
        document.getElementsByClassName('tab-content')[0].classList.add('show');
    }
    if (e.target == document.getElementsByClassName('tab-button')[1]) {
        document.getElementsByClassName('tab-content')[1].classList.add('show');
    }
    if (e.target == document.getElementsByClassName('tab-button')[2]) {
        document.getElementsByClassName('tab-content')[2].classList.add('show');
    }
});/*/
document.getElementsByClassName('list')[0].addEventListener('click', function(e){
    var targetId = e.target.dataset.id;
    document.getElementById(targetId).classList.add('show');
});