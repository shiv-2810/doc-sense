import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QnaContainerComponent } from './qna-container.component';

describe('QnaContainerComponent', () => {
  let component: QnaContainerComponent;
  let fixture: ComponentFixture<QnaContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QnaContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QnaContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
