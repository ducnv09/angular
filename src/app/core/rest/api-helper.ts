import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Constant } from "../config/constant";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ApiHelper {

    constructor(
        private http: HttpClient
    ) {}

    private getUrlEndpoint(url: string): string {
        return Constant.API_ENDPOINT + url;
    }

    public post(url: string, body: any, options?: any): Observable<any> {
        url = this.getUrlEndpoint(url);
        return this.http.post<any>(url, body, options);
    }
}