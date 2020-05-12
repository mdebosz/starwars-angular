import { HttpClient } from '@angular/common/http';

import { ApiConfiguration } from './api.config';

export class BaseService {
  constructor(protected config: ApiConfiguration, protected http: HttpClient) {}

  // tslint:disable-next-line: variable-name
  private _rootUrl = '';

  /**
   * Returns the root url for all operations in this service. If not set directly in this
   * service, will fallback to `ApiConfiguration.rootUrl`.
   */
  get rootUrl(): string {
    return this._rootUrl || this.config.rootUrl;
  }

  /**
   * Sets the root URL for API operations in this service.
   */
  set rootUrl(rootUrl: string) {
    this._rootUrl = rootUrl;
  }
}
