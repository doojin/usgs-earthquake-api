declare const u: u.EarthquakeApi

declare namespace u {
  interface EarthquakeApi {
    version: VersionApi,
    application: ApplicationApi,
    applicationWadl: ApplicationWadlApi,
    catalogs: CatalogApi,
    contributors: ContributorsApi,
    count: CountApi,
    query: QueryApi
  }

  // Version API types

  interface VersionApi {
    getVersion(): Promise<VersionApiResponse>
  }

  type VersionApiResponse = {
    result: string
  }

  // Application API types

  interface ApplicationApi {
    getInterfaceParameters(): Promise<ApplicationApiResponse>
  }

  type ApplicationApiResponse = {
    "catalogs": Array<string>
    "contributors": Array<string>,
    "producttypes": Array<string>,
    "eventtypes": Array<string>,
    "magnitudetypes": Array<string>
  }

  // Application WADL API types

  interface ApplicationWadlApi {
    getWadl(): Promise<ApplicationWadlResponse>
  }

  type ApplicationWadlResponse = {
    application: {
      resources: Array<ApplicationResource>;
    }
  }

  type ApplicationResource = {
    base: string;
    resource: Array<Resource>;
  }

  type Resource = {
    path: string;
    method: Method;
  }

  type Method = {
    id: string;
    name: string;
    request: Array<Request>;
    response: Array<Response>;
  }

  type Request = {
    param: Array<Parameter>;
  }

  type Parameter = {
    name: string;
    style: string;
    type: string;
    default: string;
    option: Array<Option>;
    mediaType: string;
  }

  type Option = {
    value: string;
    mediaType: string;
  }

  type Response = {
    status: string;
    representation: Array<Representation>;
  }

  type Representation = {
    mediaType: string;
    element: string;
  }

  // Catalog API types

  interface CatalogApi {
    getCatalogs(): Promise<Array<string>>
  }

  // Contributors API types

  interface ContributorsApi {
    getContributors(): Promise<any>
  }

  // Count API types

  interface CountApi {
    getCount(): Promise<any>
  }

  // Query API types

  interface QueryApi {
    earthquakes(): Promise<any>
  }
}

export = u
