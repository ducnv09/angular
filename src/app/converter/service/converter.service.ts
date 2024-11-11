import { Injectable } from "@angular/core";
import { ApiHelper } from "../../core/rest/api-helper";
import { Observable } from "rxjs";
import { HttpHeaders } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class ConverterService {

    constructor(
        private apiHelper: ApiHelper,
    ) {}

    converterWorldToPdf(file: File): Observable<any> {
        const formData = new FormData();
        formData.append('file', file);
        // return this.apiHelper.post('/converter/wordToPdf', formData, { 
        //     responseType: 'blob',
        //     headers: new HttpHeaders({
        //         'Accept': 'application/pdf'
        //     })
        // });

        // c1: ngx-extended-pdf-viewer
        // return this.apiHelper.post('/converter/wordToPdf', formData, { 
        //     responseType: 'arraybuffer',
        //     headers: new HttpHeaders({
        //         'Accept': 'application/pdf'
        //     })
        // });

        // c2
        return this.apiHelper.post('/converter/wordToPdf', formData, { responseType: 'blob' });
    }
}