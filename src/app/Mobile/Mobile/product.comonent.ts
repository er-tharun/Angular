import {Component} from '@angular/core'
import { NgForm } from '@angular/forms';
import { product } from './product';
import { ProductService } from './product.service';

@Component({
    selector:'my-product',
    templateUrl:'./product.component.html'
})

export class ProductComponent{

    products:product[] = [];
    model = new product();
    constructor(private _mobilelist: ProductService) {
        this.products = this._mobilelist.getProducts();
    }

    onSubmitForm(form:NgForm) {
        if(form.valid)
        {
            console.log(form.value);
            this._mobilelist.setMobiles(form.value)
            form.resetForm()
        }
    }
}

