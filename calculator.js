let outputDiv = document.getElementById('output-div')

let zeroBtn = document.getElementById('zero-btn').addEventListener('click',  () => {
        let One = 0
        outputDiv.innerHTML += One
        saveata()
})


let dotBtn = document.getElementById('dots-btn').addEventListener('click',  () => {
        let Dotss = '.'
        outputDiv.innerHTML += Dotss
        saveata()
})

let oneBtn = document.getElementById('one-btn').addEventListener('click',  () => {
        let Onee = 1
        outputDiv.innerHTML += Onee
        saveata()

})

let twoBtn = document.getElementById('two-btn').addEventListener('click',  () => {
        let twoo = 2
        outputDiv.innerHTML += twoo
        saveata()
})

let thirdBtn = document.getElementById('three-btn').addEventListener('click',  () => {
        let Three = 3
        outputDiv.innerHTML += Three
        saveata()

})

let plusBtn = document.getElementById('plus-btn').addEventListener('click',  () => {
        let plusss = '+'
        outputDiv.innerHTML += plusss
        saveata()
})

let fourBtn = document.getElementById('four-btn').addEventListener('click',  () => {
        let fourrr = 4
        outputDiv.innerHTML += fourrr
saveata()
})

let fiveBtn = document.getElementById('five-btn').addEventListener('click',  () => {
        let fiveee = 5
        outputDiv.innerHTML += fiveee
        saveata()
})

let sixBtn = document.getElementById('six-btn').addEventListener('click',  () => {
        let sixxx = 6
        outputDiv.innerHTML += sixxx
        saveata()
})

let minusBtn = document.getElementById('minus-btn').addEventListener('click',  () => {
    let minusss = '-'
    outputDiv.innerHTML += minusss
    saveata()
})

let sevenBtn = document.getElementById('seven-btn').addEventListener('click', () => {

        let sevennnn = 7
        outputDiv.innerHTML += sevennnn
        saveata()
})

let eightBtn = document.getElementById('eight-btn').addEventListener('click', () => {

        let eightttt = 8
        outputDiv.innerHTML += eightttt
        saveata()
})

let nineBtn = document.getElementById('nine-btn').addEventListener('click', () => {

        let nineeee = 9
        outputDiv.innerHTML += nineeee
        saveata()
})


let multiplicationBtn = document.getElementById('multiplication-btn').addEventListener('click', () => {

        let multiplicationnn = '*'
        outputDiv.innerHTML += multiplicationnn
        saveata()
})

let resetBtn = document.getElementById('reset-btn').addEventListener('click', () => {

       
        outputDiv.innerHTML = ' '
        saveata()
})

let percentageBtn = document.getElementById('percentage-btn').addEventListener('click', () => {

        let percentageeee = '%'
        outputDiv.innerHTML += percentageeee
        saveata()
})


let divisionBtn = document.getElementById('division-btn').addEventListener('click', () => {
       let divv = '/'
       outputDiv.innerHTML += divv
       saveata()
     
})

let evalBtn = document.getElementById('equal-btn').addEventListener('click', () => {
      
      
    let evalFun =   eval(outputDiv.innerHTML)
    outputDiv.innerHTML = evalFun
    saveata()
  
})
function saveata(){
        localStorage.setItem('data', outputDiv.innerHTML)
}

function getData (){
        outputDiv.innerHTML = localStorage.getItem('data')
}

getData()