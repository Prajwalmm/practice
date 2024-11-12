import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-board',
  standalone: true,
  imports: [],
  templateUrl: './dash-board.component.html',
  styleUrl: './dash-board.component.css'
})
export class DashBoardComponent  implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  logoPath: string = 'assets/images/temp.png'; 
}
