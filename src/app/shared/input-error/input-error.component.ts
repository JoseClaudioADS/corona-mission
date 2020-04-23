import { Component, Input } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "input-error",
  template: `<ion-label color="danger" class="error ion-text-wrap">{{errorMessage}}&nbsp;</ion-label>`,
  styleUrls: ["./input-error.component.scss"],
})
export class InputErrorComponent {
  @Input() control: FormControl;
  @Input() fieldName: string;

  constructor() {}

  get errorMessage() {
    for (let propertyName in this.control.errors) {
      if (
        this.control.errors.hasOwnProperty(propertyName) &&
        this.control.touched
      ) {
        return this.getValidatorErrorMessage(
          propertyName,
          this.control.errors[propertyName]
        );
      }
    }

    return null;
  }

  getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
    let config = {
      required: `O campo ${this.fieldName} é obrigatório`,
      invalidCreditCard: "Is invalid credit card number",
      invalidEmailAddress: "Invalid email address",
      invalidPassword:
        "Invalid password. Password must be at least 6 characters long, and contain a number.",
      minlength: `Minimum length ${validatorValue.requiredLength}`,
    };

    return config[validatorName];
  }
}
