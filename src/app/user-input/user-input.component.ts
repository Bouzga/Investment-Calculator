import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInput } from '../investment-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  @Output() calculate = new EventEmitter<InvestmentInput>();
  entredInitialInvestment = signal ('0');
  entredAnnualInvestment = signal ('0');
  entredExpectedReturn = signal ('5');
  entredDuration = signal ('10');

  onSubmit() {
    console.log('Form submitted!');
    this.calculate.emit({
      initialInvestment: +this.entredInitialInvestment(), 
        annualInvestment: +this.entredAnnualInvestment(), 
        expectedReturn: +this.entredExpectedReturn(), 
        duration: +this.entredDuration(),
    });
  }
}
