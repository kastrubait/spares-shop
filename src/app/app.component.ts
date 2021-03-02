import {
  Component,
  ViewChild,
  AfterViewInit,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('appTitle') title!: ElementRef;

  ngAfterViewInit(): void {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    this.title.nativeElement.innerHTML = 'parts';
  }
}
