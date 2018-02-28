import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
id: string

  constructor(private router: Router, private route: ActivatedRoute) { 
    route.params.subscribe (params=> {
      this.id = params['id'];
      console.log (`this is the id received: ${this.id}` )
    })
  }

  goToProduct(id: string): void{
    console.log (id)
    this.router.navigate(['./', id], { relativeTo: this.route})
  }

  

}
