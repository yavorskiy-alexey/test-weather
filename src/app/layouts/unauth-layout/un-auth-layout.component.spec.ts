import {ComponentFixture, TestBed} from '@angular/core/testing';

import {UnAuthLayoutComponent} from './un-auth-layout.component';

describe('UnauthLayoutComponent', () => {
  let component: UnAuthLayoutComponent;
  let fixture: ComponentFixture<UnAuthLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UnAuthLayoutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UnAuthLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
