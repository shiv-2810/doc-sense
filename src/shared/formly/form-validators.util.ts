import { AbstractControl } from '@angular/forms';

export function PhoneNumberValidator(control: AbstractControl) {
  if (!control.value) {
    return null;
  }
  const isValid = /^([+]\d{1,3})?\d{10}$/.test(control.value);
  return isValid ? null : { phoneNumber: true };
}

export function EmailValidator(control: AbstractControl) {
  if (!control.value) {
    return null;
  }
  const isValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(control.value);
  return isValid ? null : { email: true };
}

export function StrongPasswordValidator(control: AbstractControl) {
  if (!control.value) {
    return null;
  }
  const isValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(control.value);
  return isValid ? null : { strongPassword: true };
}

export function NoSpaceValidator(control: AbstractControl) {
  if (!control.value) {
    return null; // If there's no value, no validation needed
  }

  // Check if the password contains any spaces
  const hasSpaces = /\s/.test(control.value);

  // Return an error if there are spaces, otherwise return null
  return hasSpaces ? { noSpaceValidator: true } : null;
}

export function PasswordMatchValidator(control: AbstractControl) {
  const { password, passwordConfirm } = control.value;

  // avoid displaying the message error when values are empty
  if (!passwordConfirm) {
    return null;
  }

  if (passwordConfirm === password) {
    return null;
  }

  return { passwordMatch: true };
}

export function NameValidator(control: AbstractControl) {

  if (!control.value) {
    return null;
  }
  const nameRegex = /^[A-Za-z ]+$/.test(control.value);
  return nameRegex ? null : { invalidName: true };
}

export function PositiveNumberValidator(control: AbstractControl) {
  if (control.value === null || control.value === undefined) {
    return null;
  }

  const value = Number(control.value);
  const isPositiveNumber = !isNaN(value) && value > 0;

  return isPositiveNumber ? null : { positiveInt: true };
}

export function DomainValidator(control: AbstractControl) {
  if (!control.value === null) {
    return null;
  }

  const domainRegex = /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const isValidDomain = domainRegex.test(control.value);

  return isValidDomain ? null : { domain: true };
}

export function CapitalLetterValidator(control: AbstractControl) {
  if (!control.value) {
    return null;
  }

  const capitalLetterRegex = /^[A-Z]/;

  const isFirstLetterCapital = capitalLetterRegex.test(control.value);

  return isFirstLetterCapital ? null : { capitalLetter: true };
}

export function BankAccountNumberValidator(control: AbstractControl) {

  if (!control.value) {
    return null;
  }

  const bankAccountNumberRegex = /^\d{10,16}$/;
  const isValidBankAccountNumber = bankAccountNumberRegex.test(control.value);
  return isValidBankAccountNumber ? null : { invalidBankAccountNumber: true };
}


export function IFSCCodeValidator(control: AbstractControl) {
  if (!control.value) {
    return null;
  }
  const ifscCodeRegex = /^[A-Z]{4}0[A-Z0-9]{6}$/;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const isValidIFSCCode = ifscCodeRegex.test(control.value);
  return isValidIFSCCode ? null : { invalidIFSCCode: true };
}

export function PANCardValidator(control: AbstractControl) {
  if (!control.value) {
    return null;
  }

  const panCardRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
  const isValidPanCard = panCardRegex.test(control.value);
  return isValidPanCard ? null : { invalidPANCard: true };
}
