import { Injectable } from "@angular/core";
import { PromoCode } from "../Models/promo-code.model";

@Injectable({
    providedIn: 'root' //sẽ có một instance duy nhất được chia sẻ khắp ứng dụng (singleton).
})
export class PromoCodeService {
    promoCodes: PromoCode[] = [
        {
            code: '123',
            discountPercent: 10
        },
        {
            code: '111',
            discountPercent: 20
        }
    ];

    applyPromoCode(code: string): number {
        const promoCode = this.promoCodes.find(item => item.code === code);
        if (promoCode)
            return promoCode.discountPercent;
        return 0;
    }
}