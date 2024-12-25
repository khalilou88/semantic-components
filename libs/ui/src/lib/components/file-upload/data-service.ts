import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private readonly http = inject(HttpClient);

  SERVER_URL = '';

  uploadFile(formdData: FormData) {
    const headers = new HttpHeaders({
      'Content-Type': 'multipart/form-data',
    });

    return this.http.post(this.SERVER_URL, formdData, {
      headers,
      reportProgress: true,
      observe: 'events',
    });
  }
}
