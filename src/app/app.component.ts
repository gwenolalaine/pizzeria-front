import { Component } from '@angular/core';
import { Pizza } from './shared/domain/pizza';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { PizzaService } from './shared/services/pizza.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    pizzas: Pizza[];

    constructor(public pizzaService: PizzaService) {
     
    }

    ngOnInit() {
        this.pizzaService.listerPizzas().then(pizzas => { return this.pizzas = pizzas });
    }
}
