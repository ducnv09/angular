import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, GuardResult, MaybeAsync, RouterStateSnapshot, UrlTree } from "@angular/router";
import { map, Observable, of } from "rxjs";
import { AuthService } from "../services/auth.service";

@Injectable({
    providedIn: 'root'
})
export class ArticlesGuard implements CanActivate, CanActivateChild {

    constructor(
        private readonly authService: AuthService
    ) {}

    canActivateChild(
        childRoute: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): Observable<boolean> {
        const targetSlug = childRoute.params['slug']; // Lấy slug từ URL params
        if (!targetSlug) {
            return of(true);
        }
        return this.authService.currentUser.pipe(
            map(user => user.articles.includes(targetSlug)) // Kiểm tra slug có thuộc về bài viết của user hay không
        );
    }

    canActivate(
        next: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): Observable<boolean> {
        // return of(false);
        return this.authService.currentUser.pipe(map(user => !!user)); //có giá trị
        // dùng thông tin của route (data)
        // return this.permissionService.hasPermission(next.data.permissions); //dùng tham số
    }
}