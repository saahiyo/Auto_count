let myNum = document.querySelectorAll(".num");
let speed = 200;
myNum.forEach((element) => {
    let target_count = element.dataset.number;
    let init =  +element.innerText;
    let increament = Math.floor(target_count / speed);
    
    let update = () => {
       init += increament;
       element.innerText = init;
//      console.log(target_count)
      if(init < target_count){
         setTimeout( () => {
         update();
         },10);
      }      
    }
    update();
});