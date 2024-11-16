import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { QnaService } from '../../../shared/service/qna.service';
import { QnaContainerComponent } from './qna-container.component';

describe('QnaContainerComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule, // Import HttpClientModule to provide HttpClient
        QnaContainerComponent // Import the standalone component here
      ],
      providers: [QnaService], // Optionally provide the QnaService if necessary
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(QnaContainerComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
