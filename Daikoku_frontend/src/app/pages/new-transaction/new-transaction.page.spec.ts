import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewTransactionPage } from './new-transaction.page';

describe('NewTransactionPage', () => {
  let component: NewTransactionPage;
  let fixture: ComponentFixture<NewTransactionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTransactionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
