// import { Injectable } from "@angular/core";
// import { delay, map, Observable, of } from "rxjs";
// import { users } from "./constants";

// @Injectable({
//     providedIn: 'root'
// })
// export class UserService {
//     getUsers(query?: string): Observable<User[]> {
//         return of(users).pipe(
//             delay(2000),
//             map((data: any) =>
//                 data.filter((u: any) => {
//                     if (!query)
//                         return true;
//                     return (
//                         u.name.toLowerCase().startWith(query.toLowerCase()) ||
//                         u.username.toLowerCase().startWith(query.toLowerCase()) ||
//                         u.email.toLowerCase().startWith(query.toLowerCase()) 
//                     );
//                 })
//             )
//         );
//     }
// }