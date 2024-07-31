import { Component } from '@angular/core';
import { ApiCenterService } from 'src/service/api-center.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'sattelite';
  constructor(private apiCenterService: ApiCenterService) {}

  ngOnInit(): void {
    this.apiCenterService.getRecentEarthQuakeData().subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.error('Error fetching earthquake data:', error);
      }
    );
  }
}

