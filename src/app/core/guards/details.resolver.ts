import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { UserService } from '../services/user.service';
import { EMPTY } from 'rxjs';

export const detailsResolver: ResolveFn<boolean> = (route, state) => {
  const productsID = route.paramMap.get('id');
  const productService = inject(UserService);
  return productsID ? productService.getDetailsUser(productsID) : EMPTY;
};
