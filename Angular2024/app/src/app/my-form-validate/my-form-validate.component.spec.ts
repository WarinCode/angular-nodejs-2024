import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFormValidateComponent } from './my-form-validate.component';

describe('MyFormValidateComponent', () => {
  let component: MyFormValidateComponent;
  let fixture: ComponentFixture<MyFormValidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyFormValidateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyFormValidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
