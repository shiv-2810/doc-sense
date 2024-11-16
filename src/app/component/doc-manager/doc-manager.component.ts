import { DatePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzUploadFile, NzUploadModule } from 'ng-zorro-antd/upload';

interface Person {
  key: string;
  name: string;
  age: number;
  address: string;
}

@Component({
  selector: 'app-doc-manager',
  standalone: true,
  imports: [
    NzUploadModule,
    NzIconModule,
    NzTableModule,
    NzDividerModule,
    DatePipe
  ],
  templateUrl: './doc-manager.component.html',
  styleUrl: './doc-manager.component.scss'
})
export class DocManagerComponent {

  fileLists = signal<NzUploadFile[]>([])

  beforeUpload = (file: NzUploadFile): boolean => {
    this.fileLists.update(prev => [...prev, file])

    return false;
  };

}
