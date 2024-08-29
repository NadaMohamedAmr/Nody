import { Injectable } from "@angular/core";
import { Product } from "../../shared/models/Product"

@Injectable({
    providedIn: 'root'
})
export class ProductsService {
    constructor() {}

    // CRUD: Create - Read - Update - Delete
    //Get All Products (Read)
    getAllProducts(): Product[] {
        const products: Product[] =  [
          {
            id: 1,
            title: "shose",
            price: 100,
            discount: 10,
            color: "black",
            photo: "../../assets/images/shose 1.jpg",
          },
          {
            id: 2,
            title: "bag",
            price: 300,
            discount: 10,
            color: "black",
            photo: "../../assets/images/bag 5.jpg",
          },
          {
            id: 3,
            title: "shose",
            price: 200,
            discount: 10,
            color: "begin",
            photo: "../../assets/images/shose 3.jpg",
          },
          {
            id: 4,
            title: "bag",
            price: 250,
            discount: 10,
            color: "Green",
            photo: "../../assets/images/bag 2.jpg",
          },
          {
            id: 5,
            title: "Converse",
            price: 200,
            discount: 10,
            color: "pink",
            photo: "../../assets/images/shose 2.jpg",
          },
          {
            id: 6,
            title: "bag",
            price: 300,
            discount: 10,
            color: "light pink",
            photo: "../../assets/images/bag 4.jpg",
          },

          ] ;
          return products;
    }

    //Add New Product
    addNewProduct(){

    }
    //Update Product
    updateProduct(){

    }
    //Delete Product
    deleteProduct(){

    }
}
