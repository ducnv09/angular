import { AbstractControl, ValidationErrors } from "@angular/forms";

// export function NoWhiteSpaceValidator() {
//     return (control: AbstractControl): ValidationErrors | null => {
//         const { value: controlVal } = control;
//         const isWhiteSpaceOnly = (controlVal || '').trim().length == 0;
//         return isWhiteSpaceOnly ? { whitespace: 'Value is only whitespace' } : null;
//     };
// }

//hữu ích không cần truyền thêm thông tin khác mà user cần provide
export function NoWhiteSpaceValidator(control: AbstractControl): ValidationErrors | null {
    const { value: controlVal } = control;
    const isWhiteSpaceOnly = (controlVal || '').trim().length == 0;
    return isWhiteSpaceOnly ? { whitespace: 'Value is only whitespace' } : null;
}