import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home3PageComponent } from './home3-page.component';

describe('Home3PageComponent', () => {
  let component: Home3PageComponent;
  let fixture: ComponentFixture<Home3PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home3PageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Home3PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
