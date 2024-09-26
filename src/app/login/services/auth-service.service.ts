import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, tap } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private baseUrl = 'http://localhost:9091';

    constructor(
        private http: HttpClient
    ) {}

    authSubject = new BehaviorSubject<any>({
        user: null
    });

    // lấy token
    private getHeaders(): HttpHeaders {
        return new HttpHeaders({
            Authorization: `Bearer ${localStorage.getItem("jwt")}`
        })
    }

    login(user: any): Observable<any>{
        return this.http.post<any>(`${this.baseUrl}/auth/signin`, user);
    }

    register(user: any): Observable<any>{
        return this.http.post<any>(`${this.baseUrl}/auth/signup`, user);
    }

    getUserProfile(): Observable<any>{
        const headers = this.getHeaders();

        return this.http.get<any>(`${this.baseUrl}/api/users/profile`, { headers }).pipe(
            tap(user => {
                const currentState = this.authSubject.value;
                this.authSubject.next({ ...currentState, user});
            })
        );
    }

    logout() {
        localStorage.removeItem('jwt');// chỉ xóa jwt
        this.authSubject.next({});
    }
}