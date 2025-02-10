import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Welcome to {{ title }}!</h1>
    <div *ngIf="message">Backend Message: {{ message }}</div>
    <div *ngIf="error">Error: {{ error }}</div>
  `,
})
export class AppComponent implements OnInit {
  title = 'My Angular App';
  message: string = '';
  error: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any>('/api/test').subscribe({
      next: (response) => {
        this.message = response.message;
        console.log('Response:', response);
      },
      error: (error) => {
        this.error = 'Could not connect to backend: ' + error.message;
        console.error('Backend connection error:', error);
      },
    });
  }
}
