import { Component, OnInit } from '@angular/core';
import { AdviceService } from '../services/advice.service';
import { ActivatedRoute } from '@angular/router';
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  providers: [AdviceService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  advice: string = "Success is where preparation and opportunity meet.";
  constructor(private route: ActivatedRoute, private loadingService: LoadingService) {
    localStorage.setItem('token', 'true');
  }

  ngOnInit() {
    this.advice = this.route.snapshot.data['advice'];
  }
}
