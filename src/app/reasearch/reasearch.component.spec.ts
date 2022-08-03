import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReasearchComponent } from './reasearch.component';

describe('ReasearchComponent', () => {
  let component: ReasearchComponent;
  let fixture: ComponentFixture<ReasearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReasearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReasearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
