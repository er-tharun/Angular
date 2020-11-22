import { Injectable } from "@angular/core";
import { product } from './product';


@Injectable(
    {
        providedIn:'root'
    }
)

export class ProductService {
    products:product[] = [
        {
            "ProductName":"Moto G5",
            "Quantity":2
        },
        {
            "ProductName":"Racold Geyser",
            "Quantity":3
        }
    ];

    getProducts() {
        return this.products;
    }

    setMobiles(updateinput:product) {
        //let updateinput = JSON.stringify("name", year);
        //this.mobiles.push(updateinput)
        this.products.push(updateinput);
        console.log(this.products)
        
    }
}