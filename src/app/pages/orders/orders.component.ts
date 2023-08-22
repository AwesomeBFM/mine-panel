import { Component } from '@angular/core';

interface Order {
  id: string;
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
  orders: Order[] = [
    {
      id: '1',
      username: 'bidenman',
      pfpRoute: '/assets/pfp.jpg',
      total: '$53.28',
      items: '2'
    }
  ];

}
