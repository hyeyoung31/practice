const tab = document.querySelectorAll('.tab_menu li');
const panel = document.querySelectorAll('.panel >li');
console.log(tab);
console.log(panel);
function showContent(num){
  panel.forEach(function(item){
    item.style.display="none";
  });
  panel[num].style.display="block";
}
 showContent(0);

 //메뉴클릭 이벤트
 tab.forEach(function(item,idx){
  item.addEventListener('click',function(e){
    e.preventDefault();
    showContent(idx);
  });
 });