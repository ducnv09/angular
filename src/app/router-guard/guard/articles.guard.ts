import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, CanLoad, GuardResult, MaybeAsync, Route, RouterStateSnapshot, UrlSegment, UrlTree } from "@angular/router";
import { map, Observable, of } from "rxjs";
import { AuthService } from "../services/auth.service";
import { GuardArticleDetailEditComponent } from "../guard-article/guard-article-detail-edit/guard-article-detail-edit.component";
import { CheckDeactivate } from "../check-deactivate";

@Injectable({
    providedIn: 'root'
})
export class ArticlesGuard implements CanActivate, CanActivateChild, CanLoad, CanDeactivate<CheckDeactivate> {

    constructor(
        private readonly authService: AuthService
    ) { }

    canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> {
        // return of(false);   
        return this.authService.currentUser.pipe(map(user => !!user)); //có giá trị
    }

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

    canDeactivate(
        component: CheckDeactivate, 
        currentRoute: ActivatedRouteSnapshot, 
        currentState: RouterStateSnapshot, 
        nextState: RouterStateSnapshot): Observable<GuardResult> {
        return component.checkDeactivate(currentRoute, currentState, nextState);
    }
}