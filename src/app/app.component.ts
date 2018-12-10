import { Component } from '@angular/core';
import { SearchService } from './search.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [SearchService]
})
export class AppComponent {
    constructor(private searchService: SearchService) {
    }
    results = [];
    search(value) {
        this.searchService.searchItem(value).subscribe((res) => this.updateList(res.hits), (res) => this.handleError(res));
    }
    updateList(res) {
      this.results = res.hit;
        console.log(res);
    }

    handleError(res) {
        console.log(res);
    }
}
