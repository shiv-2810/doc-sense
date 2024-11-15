import { FormControl } from '@angular/forms';

export type TypedForm<T> = { [key in keyof T]: FormControl<T[key]> };


export interface EntityFormData {
  panel?: {
    _id: string;
    name: string;
  };
  interviewDuration?: number;
  job?: {
    _id: string;
    name: string;
  };
}

export interface InterviewSlots {
  date: string;
  slots: TimeSlots[]
}

export interface TimeSlots {
  start: string;
  end: string;
}


