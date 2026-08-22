import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './landingPage.component.html',
  // template: `
  //   <section>
  //     <app-navbar></app-navbar>

  //     <div class="WelcomeText">
  //       <h1 class="fontRaleway">SAKURA RAMEN</h1>
  //       <h2 class="fontRaleway">BEST RAMEN IN TOWN</h2>
  //     </div>
  //   </section>
  // `,
  styleUrls: ['./landingPage.component.scss'],
})
export class LandingPageComponent {}
