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
    addProduct(product){
        const productList = document.getElementById('product-list')
        const element = document.createElement('div')
        element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <bold>${product.name.toUpperCase()}</bold><br>
                    Precio: <strong>${product.price}</strong>
                    Año: <strong>${product.year}</strong>
                    </div>
            </div>
        `
        productList.appendChild(element)
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
    const ui = new UI()

    ui.addProduct(product)


    e.preventDefault()
})