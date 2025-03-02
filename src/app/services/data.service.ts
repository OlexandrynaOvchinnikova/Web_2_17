import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Job {
  position: string;
  years: string;
  company: string;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  // Оновлений шлях до JSON
  private dataUrl = '/data.json';

  constructor(private http: HttpClient) {}

  getJobs(): Observable<{ jobs: Job[] }> {
    return this.http.get<{ jobs: Job[] }>(this.dataUrl);
  }
}
