import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WowNavbarComponent } from './wow-navbar.component';

describe('WowNavbarComponent', () => {
  let component: WowNavbarComponent;
  let fixture: ComponentFixture<WowNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WowNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WowNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
