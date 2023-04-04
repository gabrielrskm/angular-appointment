import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiginFormComponent } from './sigin-form.component';

describe('SiginFormComponent', () => {
  let component: SiginFormComponent;
  let fixture: ComponentFixture<SiginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiginFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
