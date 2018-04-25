import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeEsimtateComponent } from './make-esimtate.component';

describe('MakeEsimtateComponent', () => {
  let component: MakeEsimtateComponent;
  let fixture: ComponentFixture<MakeEsimtateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeEsimtateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeEsimtateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
