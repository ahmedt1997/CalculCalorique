import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BesoisCaloriqueComponent } from './besois-calorique.component';

describe('BesoisCaloriqueComponent', () => {
  let component: BesoisCaloriqueComponent;
  let fixture: ComponentFixture<BesoisCaloriqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BesoisCaloriqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BesoisCaloriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
