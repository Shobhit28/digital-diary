import { ValidationErrors, AbstractControl } from '@angular/forms';

type NewType = AbstractControl;

export class OnlyNumbersValidators{
    static onlyNumber(control:NewType):ValidationErrors|null{
        if(isNaN((control.value)))
        {
            return {onlyNumber:true};
                    }
                    
    return null;
    }
}