import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { FirebaseService } from "./services/firebase.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  public requestData: any = null;

  title = 'SoftTeco';

  index: number = 0;

  requestsArray: any[];

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit(){

    this.firebaseService.getRequests().subscribe((array: any[]) => {
      this.requestsArray = array;
      this.index = array.length;

      this.requestsArray.sort(function (a, b) {       //    Сортировка по дате

        let key1 = new Date(a.date),
          key2 = new Date(b.date);

        if (key1 > key2) {

          return -1;

        } else if (key1 == key2) {

          return 0;

        } else {

          return 1;

        }
      });
    });

    this.requestForm.statusChanges.subscribe((status) => {

      if ( status === 'INVALID' && !!this.requestData ) {

        this.requestData = null;

      }
    });
  }

  public requestForm: FormGroup = new FormGroup({   //   Валидация формы

    request: new FormControl('', [

      Validators.minLength(1),
      Validators.maxLength(100),
      Validators.required

    ])
  });

  public submitForm(e: Event) {                     //   Обработчик формы

    e.preventDefault();

    if ( this.requestForm.invalid ) {

      this.markControlsAsTouched(this.requestForm);

      return false;

    }

    let requestTitle = this.requestForm.value.request,
      requestDate = new Date();

    this.requestData = {

      request: requestTitle,

      date: requestDate.toString()

    };

    this.firebaseService.requests.push( this.requestData );    //   Отправляю данные на сервер

    this.firebaseService.playSound('assets/sounds/coins.mp3');

    this.requestForm.reset();                  //   Перезагружаю форму

  }

  public deleteRequest( request ) {            //   Удаление запроса из истории

    this.firebaseService.playSound('assets/sounds/delete.mp3');

    this.firebaseService.requests.remove( request );

  }

  private markControlsAsTouched(form) {

    for ( let control in form.controls ) {

      form.controls[control].markAsTouched();

      if ( form.controls[control].controls ) {

        this.markControlsAsTouched(form.controls[control]);

      }
    }
  }
}
