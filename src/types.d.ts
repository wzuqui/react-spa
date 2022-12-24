declare module GraphApi {
  export interface MeResponse {
    businessPhones: any[];
    displayName: string;
    givenName: string;
    jobTitle?: any;
    mail: string;
    mobilePhone?: any;
    officeLocation?: any;
    preferredLanguage: string;
    surname: string;
    userPrincipalName: string;
    id: string;
  }
}
