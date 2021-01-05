import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantsLookupComponent } from './tenants-lookup.component';

describe('TenantsLookupComponent', () => {
  let component: TenantsLookupComponent;
  let fixture: ComponentFixture<TenantsLookupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenantsLookupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantsLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
