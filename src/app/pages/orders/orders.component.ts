import { Component } from '@angular/core';

enum Provider {
  VISA,
  APPLE,
  GOOGLE,
  MASTERCARD,
  DISCOVER,
  PAYPAL,
  AMEX
}

enum Status {
  SUCCESS,
  FAILED,
  PENDING,
  REFUNDED,
  CHARGEBACK
}

interface Order {
  id: string;
  timestamp: string;
  username: string;
  pfpRoute: string;
  status: Status;
  total: string;
  method: Provider;
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
      id: '1234',
      timestamp: '14:32 8/22/23',
      username: 'Joe Biden',
      pfpRoute: '/assets/pfp.jpg',
      status: Status.SUCCESS,
      total: '$53.23',
      method: Provider.APPLE,
      items: '4'
    },
    {
      id: '1234',
      timestamp: '14:32 8/22/23',
      username: 'Joe Biden',
      pfpRoute: '/assets/pfp.jpg',
      status: Status.FAILED,
      total: '$53.23',
      method: Provider.APPLE,
      items: '4'
    },
    {
      id: '1234',
      timestamp: '14:32 8/22/23',
      username: 'Joe Biden',
      pfpRoute: '/assets/pfp.jpg',
      status: Status.PENDING,
      total: '$53.23',
      method: Provider.APPLE,
      items: '4'
    },
    {
      id: '1234',
      timestamp: '14:32 8/22/23',
      username: 'Joe Biden',
      pfpRoute: '/assets/pfp.jpg',
      status: Status.REFUNDED,
      total: '$53.23',
      method: Provider.APPLE,
      items: '4'
    },
    {
      id: '1234',
      timestamp: '14:32 8/22/23',
      username: 'Joe Biden',
      pfpRoute: '/assets/pfp.jpg',
      status: Status.CHARGEBACK,
      total: '$53.23',
      method: Provider.APPLE,
      items: '4'
    },
    {
      id: '1234',
      timestamp: '14:32 8/22/23',
      username: 'Joe Biden',
      pfpRoute: '/assets/pfp.jpg',
      status: Status.SUCCESS,
      total: '$53.23',
      method: Provider.APPLE,
      items: '4'
    }
  ];

  protected readonly Status = Status;
  protected readonly Provider = Provider;
}
