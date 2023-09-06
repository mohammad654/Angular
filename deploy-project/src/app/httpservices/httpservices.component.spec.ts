import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpservicesComponent } from './httpservices.component';

describe('HttpservicesComponent', () => {
  let component: HttpservicesComponent;
  let fixture: ComponentFixture<HttpservicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HttpservicesComponent]
    });
    fixture = TestBed.createComponent(HttpservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
