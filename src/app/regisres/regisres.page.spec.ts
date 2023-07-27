import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisresPage } from './regisres.page';

describe('RegisresPage', () => {
  let component: RegisresPage;
  let fixture: ComponentFixture<RegisresPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegisresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
