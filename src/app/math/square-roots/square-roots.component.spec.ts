import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquareRootsComponent } from './square-roots.component';

describe('SquareRootsComponent', () => {
  let component: SquareRootsComponent;
  let fixture: ComponentFixture<SquareRootsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SquareRootsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SquareRootsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
