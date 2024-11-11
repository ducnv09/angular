import { Component } from '@angular/core';
import { ConverterService } from './service/converter.service';
import { CommonModule } from '@angular/common';
import { SafePipe } from './safe.pipe';

import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

@Component({
  selector: 'app-converter',
  standalone: true,
  imports: [
    CommonModule,
    // SafePipe,
    NgxExtendedPdfViewerModule 
  ],
  templateUrl: './converter.component.html',
  styleUrl: './converter.component.scss'
})
export class ConverterComponent {

  // pdfUrl: string | undefined;
  pdfUrl: Blob | undefined;

  // ngx-extended-pdf-viewer
  // loading = false;
  // error: string | null = null;

  constructor(
    private convertService: ConverterService
  ) {}

  //dùng iframe
  // onFileSelected(event: any) {
  //   const file: File = event.target.files[0];
  //   if (file) {
  //     this.convertService.converterWorldToPdf(file).subscribe(blob => {
  //       // Tạo object URL cho Blob và gán vào `pdfUrl` để hiển thị trong iframe
  //       this.pdfUrl = URL.createObjectURL(blob);
  //       // this.pdfUrl = blob;
  //       console.log('dff', blob);
  //     })
  //   }
  // }

  // dùng ngx-extended-pdf-viewer
  // onFileSelected(event: any) {
  //   const file: File = event.target.files[0];
  //   if (file) {
  //     this.pdfUrl = undefined;
  //     this.convertService.converterWorldToPdf(file).subscribe({
  //       next: (response: ArrayBuffer) => {
  //         try {
  //           this.pdfUrl = new Blob([response], { type: 'application/pdf' });
  //           console.log('PDF URL created', this.pdfUrl);    
  //         }
  //         catch (error) {
  //           console.error('Error creating blob:', error);
  //         }
  //       },
  //       error: (err) => {
  //         console.error('Conversion error:', err);
  //       }
  //     })
  //   }
  // }
  
  onFileSelected(event: any) {
      const file: File = event.target.files[0];
      if (file) {
        this.convertService.converterWorldToPdf(file).subscribe(blob => {
          this.pdfUrl = blob;
          console.log('dff', blob);
        })
      }
    }
}
