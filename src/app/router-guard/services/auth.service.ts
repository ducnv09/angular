import { Injectable } from "@angular/core";
import { of } from "rxjs";

@Injectable({
    providedIn: 'root'  
})
export class AuthService {
    get currentUser() {
        // return of( null );
        // return of({ username: 'chau'}); //có giá trị
        return of({ username: 'chau', articles: ['title-1']}); //có giá trị
    }
}