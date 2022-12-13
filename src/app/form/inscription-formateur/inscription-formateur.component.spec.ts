import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionFormateurComponent } from './inscription-formateur.component';

describe('InscriptionFormateurComponent', () => {
  let component: InscriptionFormateurComponent;
  let fixture: ComponentFixture<InscriptionFormateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptionFormateurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscriptionFormateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
