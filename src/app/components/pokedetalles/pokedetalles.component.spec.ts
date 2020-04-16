import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedetallesComponent } from './pokedetalles.component';

describe('PokedetallesComponent', () => {
  let component: PokedetallesComponent;
  let fixture: ComponentFixture<PokedetallesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokedetallesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokedetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
