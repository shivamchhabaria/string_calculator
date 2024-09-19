import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from './shared.module';
import { StringCalculatorService } from './string-calculator.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SharedModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'string-calculator';
  value: string | undefined;
  result : number | undefined
  constructor(
    private stringCalculaterService : StringCalculatorService
  ){}

  onClick() {
    this.value =  JSON.stringify(this.value)
    this.value = JSON.parse(this.value)
    this.result = this.stringCalculaterService.add(this.value +'')

  }
}
