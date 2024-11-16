import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocManagerComponent } from './doc-manager.component';

describe('DocManagerComponent', () => {
  let component: DocManagerComponent;
  let fixture: ComponentFixture<DocManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocManagerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
