import { Component } from '@angular/core';

interface Order {
  username: string;
  pfpRoute: string;
  total: string;
  items: string;
}

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  orders: Order[] = [];

}
