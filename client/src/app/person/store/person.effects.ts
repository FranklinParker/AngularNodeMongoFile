import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';


@Injectable()
export class PersonEffects {

  constructor(private actions$: Actions) {}
}
