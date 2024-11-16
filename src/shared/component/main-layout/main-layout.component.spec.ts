import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'; // If routing is involved
import { MainLayoutComponent } from './main-layout.component'; // Import the component

describe('MainLayoutComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainLayoutComponent, RouterTestingModule],  // Import the standalone component
      providers: [
        // Your providers if necessary
      ]
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(MainLayoutComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
