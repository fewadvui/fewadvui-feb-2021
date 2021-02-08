import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatforminfoComponent } from './platforminfo.component';

describe('PlatforminfoComponent', () => {
  let component: PlatforminfoComponent;
  let fixture: ComponentFixture<PlatforminfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatforminfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatforminfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
