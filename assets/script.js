//armazenar em uma variável cada um dos inputs do nosso html
let usdInput= document.querySelector("#usd")

let brlInput = document.querySelector("#brl")

//agora vc consegue adicionar ações dessa sua variável
//evento  de apertar e soltar a tecla

usdInput.addEventListener("keyup", ()=> {
    console.log("Vish, vc apertou num lugar bacsns")

})

brlInput.addEventListener("keydown", ()=> {
    console.log("Vish, vc apertou num lugar bacsns")
    
})