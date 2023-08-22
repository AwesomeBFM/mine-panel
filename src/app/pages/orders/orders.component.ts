import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";

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
export class OrdersComponent implements AfterViewInit {
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
            method: Provider.GOOGLE,
            items: '4'
        },
        {
            id: '1234',
            timestamp: '14:32 8/22/23',
            username: 'Joe Biden',
            pfpRoute: '/assets/pfp.jpg',
            status: Status.PENDING,
            total: '$53.23',
            method: Provider.PAYPAL,
            items: '4'
        },
        {
            id: '1234',
            timestamp: '14:32 8/22/23',
            username: 'Joe Biden',
            pfpRoute: '/assets/pfp.jpg',
            status: Status.REFUNDED,
            total: '$53.23',
            method: Provider.VISA,
            items: '4'
        },
        {
            id: '1234',
            timestamp: '14:32 8/22/23',
            username: 'Joe Biden',
            pfpRoute: '/assets/pfp.jpg',
            status: Status.CHARGEBACK,
            total: '$53.23',
            method: Provider.MASTERCARD,
            items: '4'
        },
        {
            id: '1234',
            timestamp: '14:32 8/22/23',
            username: 'Joe Biden',
            pfpRoute: '/assets/pfp.jpg',
            status: Status.SUCCESS,
            total: '$53.23',
            method: Provider.AMEX,
            items: '4'
        },
        {
            id: '1234',
            timestamp: '14:32 8/22/23',
            username: 'Joe Biden',
            pfpRoute: '/assets/pfp.jpg',
            status: Status.SUCCESS,
            total: '$53.23',
            method: Provider.DISCOVER,
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

    @ViewChild('card') card!: ElementRef;
    maxRows = 0;

    constructor(private http: HttpClient) {
    }

    ngAfterViewInit() {
        this.calculateMaxRows();
    }


    calculateMaxRows() {
        const cardElement = this.card.nativeElement;
        const cardHeight = cardElement.offsetHeight;
        const maxRowHeight = 48; // Adjust this to match your max-h-12 TailwindCSS class

        const maxRows = Math.floor(cardHeight / maxRowHeight);
        this.maxRows = maxRows - 1;
    }

    protected readonly Status = Status;
    protected readonly Provider = Provider;
}
