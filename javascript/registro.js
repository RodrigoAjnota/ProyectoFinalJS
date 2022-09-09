class Usuarios {
    constructor(usuario, contraseña, correo){
        this.usuario = usuario
        this.contraseña = contraseña
        this.correo = correo
    }
}

let usuario = []

if(localStorage.getItem("usuario")){
    usuario = JSON.parse(localStorage.getItem("usuario"))
} else {   
    localStorage.setItem("usuario", JSON.stringify(usuario))
}

const formUsuario = document.getElementById("formUsuario")

formUsuario.addEventListener("submit", (e) => {
    e.preventDefault()
    const datUsuario = new FormData(e.target)
    const user = new Usuarios(datUsuario.get("usuario"), datUsuario.get("contraseña"), datUsuario.get("correo"))
    usuario.push(user)
    localStorage.setItem("usuaio", JSON.stringify(usuario))
})