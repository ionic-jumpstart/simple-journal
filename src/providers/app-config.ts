import { OpaqueToken } from "@angular/core";

// Define a unique named provider using OpaqueToken for application configuration
export let AppConfigToken = new OpaqueToken("app.config");

// Define the interface of Application Configuration so the injector know how to deal with this provider
export interface IAppConfig {
  ApiUrl      : string;
  StorageKeys : {
    UserConfig : string;
    UserData   : string;
  }
};

// Define the actual application configuration
export const AppConfig : IAppConfig = {
  ApiUrl      : 'localhost', // TODO: Replace with firebase API url once its available
  StorageKeys : {
    UserConfig : 'STORAGE_USER_CONFIG',
    UserData   : 'STORAGE_USER_DATA'
  }
};
