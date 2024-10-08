import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    constructor(
        private httpClient: HttpClient // hỗ trợ gửi các yêu cầu HTTP như GET, POST, PUT, DELETE.
    ) {}

    // web socket
    endpoint = 'http://localhost:3000';
    wsEndpoint = 'ws://localhost:8080'; // kết nối thời gian thực.

    // Simple Get request
    get(url: string): Observable<any> {
        return this.httpClient.get(this.endpoint + url);
    }

    // EventSource Observable
    // Kết nối và lắng nghe các sự kiện SSE từ server thông qua EventSource.
    createEventSourceObservable(url: string): Observable<MessageEvent> {
        return new Observable((observer) => {
            const eventSource = new EventSource(this.endpoint + url);

            eventSource.onmessage = (event) => {
                observer.next(event);
            };

            eventSource.onerror = (error) => {
                observer.error(error);
                eventSource.close();
            };

            //clean up function
            return () => {
                eventSource.close();
            };
        });
    }

    // connect to websocket
    // Kết nối và nhận thông điệp thời gian thực từ server qua WebSocket.
    createWebSocketObservable(): Observable<MessageEvent> {
        const webSocket = new WebSocket(this.wsEndpoint);
        return new Observable((observer) => {
            webSocket.onmessage = (event) => {
                observer.next(event);
            };

            webSocket.onerror = (error) => {
                observer.error(error);
                webSocket.close();
            }

            //clean up function
            return () => {
                webSocket.close();
            }
        });
    }
}