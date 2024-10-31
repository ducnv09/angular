import { query } from '@angular/animations';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounce, debounceTime, map, startWith, switchAll, tap } from 'rxjs';

@Component({
  selector: 'app-angular-rxjs',
  templateUrl: './angular-rxjs.component.html',
  styleUrl: './angular-rxjs.component.css'
})
export class AngularRxjsComponent {
  // queryControl = new FormControl("");
  // users: User[] = [];
  // loading = true;

  // constructor(
  //   private readonly userService: UserService,
  // ) {}

  // ngOnInit() {
  //   this.queryControl.valueChanges
  //   .pipe(
  //     debounceTime(500),
  //     tap(() => {
  //       this.loading = true;
  //     }),
  //     startWith("")
  //   )
  //   .subscribe(query => {
  //     this.userService.getUsers(query).pipe(
  //       tap(() => {
  //         this.loading = false;
  //       })
  //     ).subscribe((users: any) => {
  //       this.users = users;
  //     });
  //   });


  //   this.queryControl.valueChanges
  //   .pipe(
  //     debounceTime(500),
  //     tap(() => {
  //       this.loading = true; // Hiển thị trạng thái đang tải
  //     }),
  //     startWith(""),
  //     map((query: any) => this.userService.getUsers(query).pipe(
  //       tap(() => {
  //         this.loading = false;
  //       })
  //     )),
  //     switchAll() //Các lần yêu cầu tìm kiếm cũ hơn sẽ bị hủy nếu có tìm kiếm mới.
  //   )
  //   .subscribe(users => {
  //     this.users = users;
  //   });


  //   this.queryControl.valueChanges
  //   .pipe(
  //     debounceTime(500),
  //     tap(() => {
  //       this.loading = true; // Hiển thị trạng thái đang tải
  //     }),
  //     startWith(""),
  //     switchMap((query: any) => this.userService.getUsers(query).pipe(
  //       tap(() => {
  //         this.loading = false;
  //       })
  //     )),
  //   )
  //   .subscribe(users => {
  //     this.users = users;
  //   });
  // }
}
