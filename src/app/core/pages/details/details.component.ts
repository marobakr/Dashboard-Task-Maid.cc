import { AfterContentInit, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { UserDetails } from '../../interface/user-details';
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
export class DetailsComponent implements AfterContentInit {
  constructor(
    private _userService: UserService,
    private _activatedRoute: ActivatedRoute
  ) {}

  userDetails: UserDetails = {} as UserDetails;
  ngAfterContentInit(): void {
    this.getIdPrameter();
  }

  getIdPrameter(): void {
    this._activatedRoute.paramMap.subscribe({
      next: (respons: any) => {
        this.displayDetails(respons.params.id);
      },
    });
  }

  displayDetails(id: number): void {
    this._userService.getDetailsUser(id).subscribe({
      next: (response) => {
        console.log(response);
        this.userDetails = response;
      },
    });
  }
}
