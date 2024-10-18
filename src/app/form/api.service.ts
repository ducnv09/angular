// import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { delay, Observable, of } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    constructor(
        // private http: HttpClient    
    ) {}

    validateUsername(username: string): Observable<boolean> {
        // bản chất
        // return this.http.get('api/validate-username', { params: { username } }).subscribe();

        console.log(`Trigger API call ${username}`);
        let existedUsers = ['trungvo', 'tiept', 'chautran'];
        let isValid = existedUsers.every((x) => x !== username);
        return of(isValid).pipe(delay(1000));
    }
}