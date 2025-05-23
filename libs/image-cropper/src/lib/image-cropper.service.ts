import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

import { CropperResult } from './image-cropper.interface';

@Injectable({
  providedIn: 'root',
})
export class ImageCropperService {
  private cropperResultSource = new Subject<CropperResult>();

  public cropperResult$ = this.cropperResultSource.asObservable();

  publishCropperResult(result: CropperResult): void {
    this.cropperResultSource.next(result);
  }
}
