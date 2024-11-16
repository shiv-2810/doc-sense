import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { DocManagerComponent } from './doc-manager.component';

describe('DocManagerComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule, // Import HttpClientModule to provide HttpClient
        NzUploadModule,   // Import NzUploadModule if used in DocManagerComponent
        DocManagerComponent, // Add the standalone component to the imports array
      ],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(DocManagerComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
