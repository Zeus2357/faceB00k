import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginTrapComponent } from './login-trap.component';

describe('LoginTrapComponent', () => {
  let component: LoginTrapComponent;
  let fixture: ComponentFixture<LoginTrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginTrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginTrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
