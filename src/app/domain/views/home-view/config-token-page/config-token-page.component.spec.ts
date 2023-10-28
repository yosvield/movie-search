import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigTokenPageComponent } from '@views/home-view';

describe('ConfigTokenPageComponent', () => {
  let component: ConfigTokenPageComponent;
  let fixture: ComponentFixture<ConfigTokenPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfigTokenPageComponent]
    });
    fixture = TestBed.createComponent(ConfigTokenPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
