import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Supplier {
  name: string,
  address: string,
  email: string,
  phone: string,
}

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.scss'
})
export class DataTableComponent {

  suppliers: Array<Supplier> = [
    { name: 'Supplier 1', address: 'Address 1', phone: '0123456789', email: 'suplier@gmail.com' },
    { name: 'Supplier 2', address: 'Address 1', phone: '0123456789', email: 'suplier@gmail.com' },
    { name: 'Supplier 3', address: 'Address 1', phone: '0123456789', email: 'suplier@gmail.com' },
    { name: 'Supplier 4', address: 'Address 1', phone: '0123456789', email: 'suplier@gmail.com' },
    { name: 'Supplier 5', address: 'Address 1', phone: '0123456789', email: 'suplier@gmail.com' },
    { name: 'Supplier 6', address: 'Address 1', phone: '0123456789', email: 'suplier@gmail.com' },
    { name: 'Supplier 7', address: 'Address 1', phone: '0123456789', email: 'suplier@gmail.com' },
    { name: 'Supplier 8', address: 'Address 1', phone: '0123456789', email: 'suplier@gmail.com' },
    { name: 'Supplier 9', address: 'Address 1', phone: '0123456789', email: 'suplier@gmail.com' },
    { name: 'Supplier 10', address: 'Address 1', phone: '0123456789', email: 'suplier@gmail.com' },
    { name: 'Supplier 11', address: 'Address 1', phone: '0123456789', email: 'suplier@gmail.com' },
    { name: 'Supplier 12', address: 'Address 1', phone: '0123456789', email: 'suplier@gmail.com' },
    { name: 'Supplier 13', address: 'Address 1', phone: '0123456789', email: 'suplier@gmail.com' },
    { name: 'Supplier 14', address: 'Address 1', phone: '0123456789', email: 'suplier@gmail.com' },
    { name: 'Supplier 15', address: 'Address 1', phone: '0123456789', email: 'suplier@gmail.com' },
    { name: 'Supplier 16', address: 'Address 1', phone: '0123456789', email: 'suplier@gmail.com' },
    { name: 'Supplier 17', address: 'Address 1', phone: '0123456789', email: 'suplier@gmail.com' },
    { name: 'Supplier 18', address: 'Address 1', phone: '0123456789', email: 'suplier@gmail.com' },
    { name: 'Supplier 19', address: 'Address 1', phone: '0123456789', email: 'suplier@gmail.com' },
    { name: 'Supplier 20', address: 'Address 1', phone: '0123456789', email: 'suplier@gmail.com' },
    { name: 'Supplier 21', address: 'Address 1', phone: '0123456789', email: 'suplier@gmail.com' },
  ];

  currentPage: number = 1; // trang hiện thị đầu tiên khi load trang
  pageSize: number = 5;

  //danh sách lọc
  filteredSupplier: Array<Supplier> = this.suppliers;

  pageSizes: Array<number> = [5, 10, 20];

  ngOnInit(): void {
    this.visibleData();
    this.pageNumbers();
  }

  visibleData() {
    let startIndex = (this.currentPage - 1) * this.pageSize;
    let endIndex = startIndex + this.pageSize;
    // return this.suppliers.slice(startIndex, endIndex);
    return this.filteredSupplier.slice(startIndex, endIndex);
  }

  nextPage() {
    this.currentPage++;
    //load lại bảng 
    this.visibleData();
  }

  previousPage() {
    console.log('current', this.currentPage);
    this.currentPage--;
    //load lại bảng 
    this.visibleData();
  }

  pageNumbers() {
    let totalPages = Math.ceil(this.filteredSupplier.length / this.pageSize);
    let pageNumArray = new Array(totalPages);
    return pageNumArray;
  }

  changePage(pageNumber: number) {
    this.currentPage = pageNumber;
    this.visibleData();
  }

  filterData(searchItem: string) {
    console.log(searchItem);

    this.filteredSupplier = this.suppliers.filter((item) => {
      return Object.values(item).some((val) => {
        return val.toLowerCase().includes(searchItem.toLowerCase());
      });
    });

    this.visibleData();
  }

  changePageSize(pageSize: any) {
    this.pageSize = pageSize;
    this.visibleData();
  }

}
