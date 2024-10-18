import { Pipe, PipeTransform } from "@angular/core";

interface AddressLike {
    address1: string,
    address2?: string,
    city: string,
    state: string,
    zip: string,
    country?: string
}

@Pipe({
    name: 'formatAddress'
})
export class FormatAddressPipe implements PipeTransform {
    transform(addr: AddressLike, para1?: string) {
        console.log('pipe run', addr, para1);
        return (
            addr.address1 + " " +
            addr.address2 + " " +
            addr.city + " " +
            addr.state + " " +
            addr.zip + " " +
            addr.country
        );
    }
}