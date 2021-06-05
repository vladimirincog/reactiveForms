import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";
import { resolve } from "url";

export class MyValidators {
  static restrictedEmails(control: FormControl): { [key: string]: Boolean } {
    if (["v@mail.ru", "val@mail.ru"].includes(control.value)) {
      return { restrictedEmail: true };
    }
    return null;
  }

  static uniqEmail(control: FormControl): Promise<any> | Observable<any> {
    return new Promise((resolve) => {
      if (control.value === "uniq@mail.ru") {
        setTimeout(() => { //Очень долгий асинхронный запрос на сервер 4 секунды
          resolve({ uniqEmail: true });
        }, 5000);
      } else {
        resolve(null);
      }
    });
  }
}
