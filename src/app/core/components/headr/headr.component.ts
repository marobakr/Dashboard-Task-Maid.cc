import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-headr',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
  templateUrl: './headr.component.html',
  styleUrls: ['./headr.component.scss'],
})
export class HeadrComponent implements OnInit {
  constructor(private _userService: UserService) {}
  searchControl!: FormControl;

  ngOnInit(): void {
    this.createControl();
  }
  createControl(): void {
    this.searchControl = new FormControl();
    /* if the value was string */
    this.searchControl.valueChanges.subscribe((value) => {
      if (isNaN(value)) {
        const newValue = value.replace(/[a-zA-Z]/g, '');
        this.searchControl.setValue(newValue, { emitEvent: false });
      }
    });
  }
  onInputChange() {
    this._userService.inputValueSubject.next(this.searchControl.value);
  }
}
