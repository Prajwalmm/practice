import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DashBoardComponent } from "../components/dash-board/dash-board.component";
import { CategoryNavComponent } from "../components/category-nav/category-nav.component";
import { HomeComponent } from "../components/home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DashBoardComponent, CategoryNavComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Near';
}
