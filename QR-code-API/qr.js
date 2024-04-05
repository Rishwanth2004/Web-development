
let imgdiv= document.getElementById('qrImg');
let button= document.getElementById('btn');
let textdiv= document.getElementById('qrText')

function generateQR(){
    imgdiv.src=` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${textdiv.value}`;
    // imgdiv.src=`  https://api.agify.io/?name=meelad  `;
}
button.onclick = () =>{
    generateQR()
}