import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <section class="hero">
      <p class="eyebrow">Real estate analytics</p>
      <h1>Build Alpha</h1>
      <p class="description">
        Discover whether a listing looks cheap, normal or expensive compared with its local market.
      </p>
      <div class="status-card">
        <strong>Frontend status</strong>
        <span>Angular app is running.</span>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      display: grid;
      place-content: center;
      min-height: 100vh;
      padding: 2rem;
      text-align: center;
    }

    .eyebrow {
      margin: 0 0 0.75rem;
      color: #3b6eea;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    h1 {
      margin: 0;
      font-size: clamp(3rem, 8vw, 6rem);
      line-height: 1;
    }

    .description {
      max-width: 42rem;
      margin: 1.5rem auto;
      color: #4b587c;
      font-size: 1.2rem;
    }

    .status-card {
      display: inline-flex;
      flex-direction: column;
      gap: 0.25rem;
      margin: 1rem auto 0;
      padding: 1rem 1.25rem;
      border: 1px solid #d7def2;
      border-radius: 1rem;
      background: white;
      box-shadow: 0 20px 60px rgb(23 32 51 / 8%);
    }

    .status-card span {
      color: #65708e;
    }
  `]
})
export class HomeComponent {}
