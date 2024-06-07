let listaProductos = document.querySelector('#listaProductos')



function obtieneProductos(){
    fetch('https://jsonplaceholder.typicode.com/todos/')
            .then(res=>res.json())
            .then(productosObtenidos =>{
                console.log("Productos obtenidos" , productosObtenidos)
            
                productosObtenidos.forEach((producto, indice) => {
                    console.log("Producto", producto);
                
                listaProductos.innerHTML += `
                
                
                <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${producto.title}</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="card-link">Card link</a>
                    <a href="#" class="card-link">Another link</a>
                </div>
                </div>     
                `;
                });
            });

}
            obtieneProductos();
