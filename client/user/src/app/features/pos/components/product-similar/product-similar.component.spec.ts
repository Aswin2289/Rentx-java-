import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSimilarComponent } from './product-similar.component';

describe('ProductSimilarComponent', () => {
  let component: ProductSimilarComponent;
  let fixture: ComponentFixture<ProductSimilarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSimilarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductSimilarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
