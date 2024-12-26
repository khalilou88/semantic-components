import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, NgZone, inject } from '@angular/core';

import { SupabaseClient, createClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private readonly http = inject(HttpClient);
  private readonly ngZone = inject(NgZone);

  private readonly supabase: SupabaseClient;
  supabaseUrl = 'https://qvnsikbntgsdguivtcrj.supabase.co';
  supabaseKey =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF2bnNpa2JudGdzZGd1aXZ0Y3JqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUxNjU3MDcsImV4cCI6MjA1MDc0MTcwN30.e5sUVFLz6uz4adIF3GtJTbZq00qzCFyC6z1ybWszdFU';
  bucket = 'test_bucket';

  constructor() {
    //https://github.com/angular/angular-cli/issues/26395
    this.supabase = this.ngZone.runOutsideAngular(() =>
      createClient(this.supabaseUrl, this.supabaseKey),
    );
  }

  uploadFile(file: File) {
    const blob = new Blob([file], { type: file.type });

    const formData = new FormData();
    formData.append('cacheControl', '3600');
    formData.append('', blob);

    const path = file.name;

    const headers = new HttpHeaders({
      'Content-Type': 'multipart/form-data',
      ...this.supabase['headers'],
    });

    return this.http.post(
      `${this.supabaseUrl}/storage/v1/object/${this.bucket}/${path}`,
      formData,
      {
        headers,
        reportProgress: true,
        observe: 'events',
      },
    );
  }
}
