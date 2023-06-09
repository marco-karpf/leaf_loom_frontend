import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../shared/models/products";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() product?: Product;

  constructor() { }

  ngOnInit(): void {
    console.log(this.product?.images)
  }

}
