import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DuvidasPage } from './duvidas.page';

describe('DuvidasPage', () => {
  let component: DuvidasPage;
  let fixture: ComponentFixture<DuvidasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DuvidasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
