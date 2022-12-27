//preguntamos el nombre de la persona que comprara en nuestra tienda
function saludoBienvenida(){
    let nombre = prompt("como te llamas? : ");
    alert (`Bienvenido, ${nombre}`);
}

//creamos mas variables para comenza con el stock de productos

let mangas = 0;
let comics = 0;
let manhwas = 0;
let revistas = 0;

//switch case
let agregarProductos = prompt("vas a llevar algo el dia de hoy? (si o no): ");
while(agregarProductos =="si"){
    let elegir = prompt("Que vas a llevar? (mangas, comics,manhwas,revistas");
    switch(elegir){
        case "mangas":
            let cuantosmangas = parseInt(prompt("cuantos mangas queres llevar?"));
            alert(`te estas llevando ${mangas+=cuantosmangas}mangas`);
            break;
            case "comics":
                let cuantoscomics = parseInt(prompt("cuantos comics queres llevar?"));
                alert(`te estas llevando ${comics+=cuantoscomics}comics`);
                break;
                case "manhwas":
                    let cuantosmanhwas = parseInt(prompt("cuantos manhwas queres llevar?"));
                    alert(`te estas llevando ${manhwas+=cuantosmanhwas}manhwas`);
                    break;
                    case "revistas":
                        let cuantasrevistas = parseInt(prompt("cuantas revistas queres llevar?"));
                        alert(`te estas llevando ${revistas+=cuantasrevistas}revistas`);
                    default:
    };
    agregarProductos = prompt("queres seguir agregando algo?(si o no)");
    let saludodeDespedida = prompt("Muchas gracias por comprar en nuestra comiqueria:");
};

let comiqueria = ["mangas,comics,manhwas"]

console.log(comiqueria.length)

let nuevoingreso = comiqueria.push('revistas')

let arr = ['este es el primer elemento', 'este es el segundo elemento','este es el tercer elemento','este es el ultimo elemento']

console.log(arr[0])

console.log(arr[1])

console.log(arr[2])

console.log(arr[arr.length - 1])

let producto = "mangas"

let monto = 750

function triple (x){
    return 250* 3
}

let comicproducto = "comics"

let montocomic = 1050

function triple (x){
    return 350 * 3 
}

let manhwaproducto = "manhwas"

let montomanhwa = 750

function triple (x){
    return 250 * 3 
}

let productorevista = "revistas"

let revistamonto = 450

function triple (x){
    return 150 * 3
}

//guardar_localstorage();
obtener_localStorage();

function obtener_localStorage(){

    if(localStorage.getItem("nombre")){

    //se que existe el nombre en el localstorage
    let nombre = localStorage.getItem("nombre");
    let empleados = JSON.parse(localStorage.getItem("empleados"));

    console.log(nombre);
    console.log(empleados);
    }else{
        console.log("no hay entradas en el local storage");
    }






}


function guardar_localstorage(){

    let empleados = {
        nombre: "Serena",
        edad: 19,
        correo: "asdasda@.com",
        coords:{
            lat :10,
            lng:-10,
        }
    };

    let nombre ="juan";

    localStorage.setItem ("nombre",nombre);
    localStorage.setItem("empleados",JSON.stringify(empleados));



}

let titulo = document.getElementById("titulo")
titulo.style.color = "red"
console.log(titulo.innerHTML);

let segundoTitulo = document.getElementById("segundoTitulo");
console.log(segundoTitulo);





