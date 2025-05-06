import { afterNextRender, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductStore } from '../stores/product.store';
import { ProductCardComponent } from '../components/product-card/product-card.component';
import { FormsModule } from '@angular/forms'
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import untilDestroyed from '../utils/untilDestroyed';
import { CartStore } from '../stores/cart.store';
import { Product } from "@prisma/client"

@Component({
  selector: 'app-products',
  imports: [CommonModule, ProductCardComponent, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  productStore = inject(ProductStore);
  cartStore = inject(CartStore);
  searchTerm: string = '';
  searchSubject = new Subject<string>();
  destroyed = untilDestroyed();

  constructor(){
    this.productStore.loadProducts();
    afterNextRender(() => {
      this.searchSubject.pipe(
        debounceTime(500),
        distinctUntilChanged(),
        this.destroyed()
      ).subscribe((term)=>{
        this.productStore.searchProducts(term)
      })
    })
  }

  onSearch(searchTerm: string){
    this.searchSubject.next(searchTerm)
  }

  addToCart(product: Product){
    this.cartStore.addToCart(product);
  }
}
