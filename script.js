let landing = document.getElementByid("landing").style
let images = {
    0:"./CSS/images/back2.jpg",
    1:"./CSS/images/back.png"
}
let random = Math.floor(Math.random() * 2)
console.log("url("+images[random]+")")
landing.style.