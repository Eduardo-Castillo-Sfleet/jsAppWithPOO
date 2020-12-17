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
                    Nombre: ${product.name.toUpperCase()}
                    Precio: $${product.price}
                    Año:${product.year}
                    <a href="#" class="btn btn-danger" name="delete">Borrar</a>
                    </div>
            </div>
        `
        productList.appendChild(element)
    }

    //Resetear formulario
    resetForm(){
        document.getElementById('product-form').reset()
    }

    //Borrar producto
    deleteProduct(element){
        if(element.name === 'delete')
            element.parentElement.parentElement.parentElement.remove()
    }

    //Mostrar alerta 
    showMessage(message, cssClass){

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
    ui.resetForm()


    e.preventDefault()
})

document.getElementById('product-list').addEventListener('click', (e) => {
    const ui = new UI()
    ui.deleteProduct(e.target)
})