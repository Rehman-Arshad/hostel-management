import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WardenLayout } from './warden-layout';

describe('WardenLayout', () => {
  let component: WardenLayout;
  let fixture: ComponentFixture<WardenLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WardenLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WardenLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
