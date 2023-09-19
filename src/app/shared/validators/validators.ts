import { FormControl } from '@angular/forms';

export const cantBeStrider = (control: FormControl) => {
  //trim -> limpia la posición alante y atrás
  const value: string = control.value.trim().toLowerCase();

  if (value === 'strider') {
    return {
      noStrider: true,
    };
  }

  return null;
};
