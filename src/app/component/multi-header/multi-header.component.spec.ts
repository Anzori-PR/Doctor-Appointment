import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiHeaderComponent } from './multi-header.component';

describe('MultiHeaderComponent', () => {
  let component: MultiHeaderComponent;
  let fixture: ComponentFixture<MultiHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultiHeaderComponent]
    });
    fixture = TestBed.createComponent(MultiHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
