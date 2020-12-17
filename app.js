//Clase de productos
class Producto{

    //Propiedades


    //Constructor
    constructor(name, price, year){
        this.name = name
        this.price = price
        this.year = year
    }
}


//Clase de la lista UI para despliegue de información
class UI{
    //Metodo para agregar
    addProduct(){

    }

    //Borrar producto
    deleteProducto(){

    }

    //Mostrar alerta 
    showMessage(){

    }
}


//DOM eventos
document.getElementById('product-form').addEventListener('submit', () => {
    name = document.getElementById('name').value
    price = document.getElementById('price').value
    year = document.getElementById('year').value
    console.log(`${name} ${year} ${price}`)

})