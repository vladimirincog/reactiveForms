import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  //Создаем поле для формы
  form: FormGroup;

  //Инициализируем форму [formName]='имя группы' создавая объект в который передаем контролы formControlName='имя контрола' по имени из шаблона
  //new FormGroup({ formControlName : newFromControl('начальное значение', [массив валидаторов])

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(6),
      ]),
      //При добававлении подгрупп в группу необходимо найти корневой контейнер подгруппы
      //и написать в нем formGroupName="имя подгруппы"
      //имя подгруппы: new FormFroup(форм контролы)
      address: new FormGroup({
        country: new FormControl("ua", []),
        city: new FormControl("", [])
      }),
    });
  }

  //Тип кнопок в шаблоне type="button" - для всех, type="submit" - для submit
  //для submit можно binding (ngSubmit)="submit()"
  submit() {
    if (this.form.valid) {
      console.log("form submit: ", this.form);
      const formData = { ...this.form.value };
      console.log(formData.email, formData.password);
    }
  }
}

//классы контролов
//ng-untouched - к контролу не претрагивались
//ng-touched - к контролу претрагивались
//ng-invalid - не валидный
//ng-valid - поле валидное
//ng-pristine - в контрол не вводили данные
//ng-dirty - в контрол вводили данные
