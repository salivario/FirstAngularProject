import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteeditorComponent } from './siteeditor.component';

describe('SiteeditorComponent', () => {
  let component: SiteeditorComponent;
  let fixture: ComponentFixture<SiteeditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteeditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiteeditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
