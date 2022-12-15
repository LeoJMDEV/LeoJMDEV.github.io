const QRG = document.getElementById("QRG");
const QRT = document.getElementById("qrt")
const QR = new QRCode(QRG)
QR.makeCode("https://LeoJM24.github.io/Portafolios")
const Activar = () => {
    
    QR.makeCode(QRT.value)
}

QRT.addEventListener("blur", Activar)