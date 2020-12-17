//Clase de productos
class Product{
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
document.getElementById('product-form').addEventListener('submit', (e) => {
    name = document.getElementById('name').value
    price = document.getElementById('price').value
    year = document.getElementById('year').value
    //console.log(`${name} ${year} ${price}`)

    //Instancia de producto
    const product = new Product(name, price, year)



    e.preventDefault()
})