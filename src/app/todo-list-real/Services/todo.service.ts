import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Tasks } from "../Models/todo-interface";

@Injectable({
    providedIn: 'root'
})
export class TodoService {
    constructor(private http: HttpClient) {}

    getTodo(): Observable<Tasks[]> {
        return this.http.<Tasks>(URL);
    }
}