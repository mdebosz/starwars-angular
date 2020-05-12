import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiConfiguration {
  rootUrl = '';
}

export interface ApiConfigurationParams {
  rootUrl?: string;
}
