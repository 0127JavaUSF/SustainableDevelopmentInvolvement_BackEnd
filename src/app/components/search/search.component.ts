import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { ListingService } from '../../services/listing.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  city: string = "";
  page: number = 1;
  selectedType: string = "None";

  //used by pagination
  activeClass: string = "page-item active";
  disabledClass: string = "page-item disabled";
  nonActiveClass: string = "page-item";

  prevClass: string = this.nonActiveClass; //bound to css class
  pageAClass: string = this.nonActiveClass;
  pageBClass: string = this.nonActiveClass;
  pageCClass: string = this.nonActiveClass;
  nextClass: string = this.nonActiveClass;

  pageANum: number = 1;
  pageBNum: number = 2;
  pageCNum: number = 3;

  isFirstPage: boolean = true;
  isLastPage: boolean = true;
  results: any = null;
  totalPages: any = 0; //from server

  constructor(
    private listingService: ListingService,
    private shared: SharedService) { }

  ngOnInit() {

    this.enableDisablePages();
  }

  onDetailsClicked(event, result) {

    //get listing id
    let id: Number = result.id;

    //show the details component
  }

  onPagePrev(event) {
    this.page--;
    this.onSearch(null);
  }
  onPageA(event) {

    this.page = this.pageANum;
    this.onSearch(null);
  }
  onPageB(event) {

    this.page = this.pageBNum;
    this.onSearch(null);
  }
  onPageC(event) {

    this.page = this.pageCNum;
    this.onSearch(null);
  }
  onPageNext(event) {
    this.page++;
    this.onSearch(null);
  }

  onSearch(event) {

    this.listingService.search(this.page - 1, this.shared.typeToNumber(this.selectedType), this.city).subscribe((data: any) => {
      this.results = data.content;

      //save page info
      this.totalPages = data.totalPages;

      this.pageANum = Math.floor(data.pageable.pageNumber / 3) * 3 + 1;
      this.pageBNum = this.pageANum + 1;
      this.pageCNum = this.pageBNum + 1;

      this.isFirstPage = data.first;
      this.isLastPage = data.last;

      this.enableDisablePages();

      if(this.totalPages > 0) {
        const pageNum = data.pageable.pageNumber + 1;

        if(pageNum == this.pageANum) {
          this.pageAClass = this.activeClass;
        }
        else if(pageNum == this.pageBNum) {
          this.pageBClass = this.activeClass;
        }
        else {
          this.pageCClass = this.activeClass;
        }
      }
    }, error => {
      const test = 0;
    });
  }

  enableDisablePages() {

    //disable if no page A
    if (this.totalPages < this.pageANum) {
      this.pageAClass = this.disabledClass;
    }
    else { //enable
      this.pageAClass = this.nonActiveClass;
    }

    //disable if no page B
    if (this.totalPages < this.pageBNum) {
      this.pageBClass = this.disabledClass;
    }
    else {
      this.pageBClass = this.nonActiveClass;
    }

    //disable if no page C
    if (this.totalPages < this.pageCNum) {
      this.pageCClass = this.disabledClass;
    }
    else {
      this.pageCClass = this.nonActiveClass;
    }

    //disable "prev" if this is first page
    if (this.isFirstPage) {
      this.prevClass = this.disabledClass;
    }
    else {
      this.prevClass = this.nonActiveClass;
    }

    //disable "next" if this is next page
    if (this.isLastPage) {
      this.nextClass = this.disabledClass;
    }
    else {
      this.nextClass = this.nonActiveClass;
    }
  }
}