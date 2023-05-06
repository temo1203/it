// let para = document.createElement('p')
// let box = document.querySelector('#myBox')
// let txt = document.createTextNode('backend-1')
// para.append(txt)
// box.prepend(para)
// let pars = box.querySelectorAll('p')
function remover(){
    this.parentElement.remove();
}
function remover_2(){
    if(this.style.textDecoration == 'none'){
        this.style.textDecoration == 'underline'
    }else {
        
    }
}
// pars.forEach(function(item){
// item.addEventListener('click', remover)
// }) document.getElementById('input_1').value
function inp1(){
let ul_1 = document.getElementById('ul_div')
   let val = document.getElementById('input_1').value
//    console.log(val)
   let li_1 = document.createElement('li')
   let btn = document.createElement('button')
   li_1.innerHTML = val
   btn.innerHTML = 'delete'
   btn.id = 'btn_1'
   li_1.append(btn)
   ul_1.append(li_1)
   let uls = li_1.querySelectorAll('button')
   uls.forEach(function(item){
   item.addEventListener('click',remover)
   })
}