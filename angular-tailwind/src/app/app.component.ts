import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FeatureComponent } from './feature/feature.component';
import { FooterComponent } from './footer/footer.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HeaderComponent } from './header/header.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FeatureComponent, FooterComponent, GalleryComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-tailwind';
}
