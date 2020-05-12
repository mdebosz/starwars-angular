import { NgModule, ModuleWithProviders } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ApiConfigurationParams, ApiConfiguration } from './api.config';

@NgModule({
  imports: [CommonModule],
  exports: [],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders{
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    };
  }
}
