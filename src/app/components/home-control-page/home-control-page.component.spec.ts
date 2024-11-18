import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeControlPageComponent } from './home-control-page.component';

describe('HomeControlPageComponent', () => {
  let component: HomeControlPageComponent;
  let fixture: ComponentFixture<HomeControlPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeControlPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeControlPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
