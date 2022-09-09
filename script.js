const imgAmerica = document.getElementById("imgAmerica")

fetch("../banderas/america.json")
.then(response => response.json())
.then(response => {
    response.forEach((banderas, indice) => {
        imgAmerica.innerHTML = `
            <img class="img-band" src="../img/${banderas.img}" >
        `
    })
})

const botonSig = document.getElementById("botonSig")

botonSig.addEventListener("click", () => {
    console.log("hola")
})

