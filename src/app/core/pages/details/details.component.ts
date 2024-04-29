import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../interface/user';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
  ],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  constructor(private _activatedRoute: ActivatedRoute) {}

  userDetails: User = {} as User;

  ngOnInit(): void {
    this.displayDetails();
  }

  displayDetails(): void {
    this._activatedRoute.data.subscribe({
      next: (respons: any) => {
        this.userDetails = respons.details.data;
        console.log(this.userDetails);
      },
    });
  }
}
