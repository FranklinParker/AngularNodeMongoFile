import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Person} from '../models/person';
import {AppState} from '../../reducers';
import {Store} from '@ngrx/store';
import {AddPerson} from '../store/person.actions';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  apiUrl: string = environment.url;

  constructor(private httpClient: HttpClient,
              private store: Store<AppState>) {
  }

  /**
   * save a person
   *
   * @param file file to save
   * @param person to save
   */
  public async savePerson(file: File, person: Person) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('firstName', person.firstName);
    formData.append('lastName', person.lastName);
    formData.append('email', person.email);
    console.log('savingData', formData);
    try {
      const result = await this.httpClient.post(this.apiUrl + 'api/person', formData)
        .toPromise();
      this.store.dispatch(new AddPerson({person: result['record']}))

    } catch (e) {
      console.log('error saving', e);
      throw e;
    }
  }

  /**
   * load all the people
   *
   *
   */
  public async loadPeople(): Promise<Person[]>{
    try {
      const result = await this.httpClient.get(this.apiUrl + 'api/person')
        .toPromise();
      return result['records'];
    } catch (e) {
      console.log('error loading', e);
    }

  }
}
