let nameDiv=document.getElementById('name')
let button=document.getElementById('btn')
let result=document.getElementById('result')

function getAge(){
    let name= nameDiv.value
    fetch(`https://api.agify.io/?name=${name}`)
     .then(response => response.json())
    .then(date => {
        if(name!=''){
            result.innerHTML=`Hi ${date.name} Your age is ${date.age}`
        }
    })
}
button.onclick =() => getAge()