
const Dataloader = async () => {

    const loadedProducts = await fetch('data.json');
    const Products = await loadedProducts.json()
    console.log(Products)
  
    return Products
  }
  export default Dataloader
 