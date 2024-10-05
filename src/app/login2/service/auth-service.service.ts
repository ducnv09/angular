import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, tap } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private baseUrl = 'http://localhost:8080';

    constructor(
        private http: HttpClient
    ) {}

    //đối tượng
    authSubject = new BehaviorSubject<any>({
        user: null
    });

    //lấy token
    private getHeader(): HttpHeaders {
        return new HttpHeaders({
            Authorization: `Bearer ${localStorage.getItem("jwt")}`
        })
    }

    login(user: any): Observable<any> {
        return this.http.post<any>(`${this.baseUrl}/identity/auth/login`, user);
    }

    register(user: any): Observable<any> {
        return this.http.post<any>(`${this.baseUrl}/identity/user`, user);
    }

    getUserInfo(): Observable<any> {
        const headers = this.getHeader();
        return this.http.get<any>(`${this.baseUrl}/identity/users/myInfo`, { headers }).pipe(
            tap(user => {
                const currentState = this.authSubject.value;
                this.authSubject.next({ ...currentState, user});
            })
        );
    }

    logout() {
        localStorage.removeItem('jwt');
        this.authSubject.next({});

        // window.location.reload();
    }
}