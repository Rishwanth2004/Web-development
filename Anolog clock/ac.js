setInterval(setClock,1000)

const hourHand= document.querySelector('[data-hour-hand]')
const minuteHand= document.querySelector('[data-minute-hand]')
const secondHand= document.querySelector('[data-second-hand]')

function setClock(){
    const currentData= new Date()
    const secondsRatio=currentData.getSeconds()/60;
    const minutesRatio=(secondsRatio+currentData.getMinutes())/60;
    const hoursRatio=(minutesRatio+currentData.getHours())/12;

    setRotation(secondHand,secondsRatio)
    setRotation(minuteHand,minutesRatio)
    setRotation(hourHand,hoursRatio)
}

function setRotation(element,rotationRation){
    element.style.setProperty('--rotation',rotationRation*360)
}
setClock()