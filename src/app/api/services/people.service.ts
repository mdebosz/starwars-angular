import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiConfiguration } from '../api.config';
import { BaseService } from '../base-service';
import { PersonDto } from '../models/person-dto';

@Injectable({
  providedIn: 'root'
})
export class PeopleService extends BaseService {
  readonly peoplePath = '/people';

  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  getPerson(id: number): Observable<PersonDto> {
    const url = `${this.rootUrl}${this.peoplePath}/${id}`;
    return this.http.get<PersonDto>(url);
  }

  getPeoplePage(): Observable<any> {
    const url = `${this.rootUrl}${this.peoplePath}`;
    return this.http.get<any>(url);
  }
}
