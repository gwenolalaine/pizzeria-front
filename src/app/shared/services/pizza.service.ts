import { Injectable } from '@angular/core';
import { Pizza } from '../domain/pizza';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
}

@Injectable()
export class PizzaService {

    constructor(private http: HttpClient) { }

    listerPizzas():Promise<Pizza[]> {
        return this.http.get<Pizza[]>('http://localhost:8080/pizzas/').toPromise();
    }

}
