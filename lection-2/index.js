// let img_2 = document.getElementById('img-1')
// let box = document.getElementById('div-1')
// console.log(box.getAttribute('class'))
// box.setAttribute('class','container-2')
// console.log(box.getAttribute('class'))
// console.log(box.hasAttribute('class'))
// let ex = document.createAttribute('target')
// ex.value = 'lemuri'
// let disable = () => {
//     box.toggleAttribute('disabled')
//     console.log(box.hasAttribute('disabled'))
// }
// let inp = document.getElementById('input-1')
// function clickfunc(){
//     // if(img_2.hasAttribute('type') == 'password'){
//     //     inp.setAttribute('type','text')
//     // } else if(img_2.hasAttribute('type') == 'text'){
//     //     inp.setAttribute('type','password')
//     // }
// }
// function myFunction() {
//     var x = document.getElementById("input-1");
//     if (x.type === "password") {
//     x.setAttribute('type','text')
//     } else {
//         x.setAttribute('type','password')
//     }
//   }
 let div_thing =  document.getElementById('div_3')
 let div_thing_2 =  document.getElementById('div_4')
 const myTimeout = setTimeout(myGreeting, 5000);
 let bd = document.querySelector('body')
 function myGreeting() {
    div_thing.style.transition = "0.5s"
    div_thing.style.display = 'none'
    div_thing_2.style.display = 'block'
    bd.style.backgroundColor = 'white'
  }