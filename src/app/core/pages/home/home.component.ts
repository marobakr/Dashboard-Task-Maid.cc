import { Component, Input, OnInit } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../interface/user';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { SearchPipe } from '../../pipes/search.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    RouterLink,
    MatPaginatorModule,
    SearchPipe,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private _userService: UserService,
    private _viewportScroller: ViewportScroller
  ) {}
  userData: User[] = [];
  search_Id: number = 0;
  lengthOfItems: number = 0;
  pageSize: number = 0;
  totalItems: number = 0;
  ngOnInit(): void {
    this.displayCard();
    this.subScripeOnSearch();
  }

  displayCard(): void {
    this._userService.getUsers().subscribe((reponse) => {
      this.userData = reponse.data;
      this.pageSize = reponse.per_page;
      this.totalItems = reponse.total;
    });
  }
  pageChanged(event: PageEvent): void {
    this._userService.getUsers(event.pageIndex + 1).subscribe({
      next: (response) => {
        this.userData = response.data;
        this._viewportScroller.scrollToPosition([0, 0]);
      },
    });
  }
  subScripeOnSearch(): void {
    this._userService.inputValueSubject.subscribe({
      next: (response) => {
        this.search_Id = response;
      },
    });
  }
}
