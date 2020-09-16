declare const u: u.EarthquakeApi

declare namespace u {
  interface EarthquakeApi {
    version: VersionApi;
    application: ApplicationApi;
    applicationWadl: ApplicationWadlApi;
    catalogs: CatalogApi;
    contributors: ContributorsApi;
    count: CountApi;
    query: QueryApi;
  }

  // Version API types

  interface VersionApi {
    getVersion(): Promise<VersionApiResponse>;
  }

  type VersionApiResponse = {
    result: string;
  }

  // Application API types

  interface ApplicationApi {
    getInterfaceParameters(): Promise<ApplicationApiResponse>;
  }

  type ApplicationApiResponse = {
    "catalogs": Array<string>;
    "contributors": Array<string>;
    "producttypes": Array<string>;
    "eventtypes": Array<string>;
    "magnitudetypes": Array<string>;
  }

  // Application WADL API types

  interface ApplicationWadlApi {
    getWadl(): Promise<ApplicationWadlResponse>;
  }

  type ApplicationWadlResponse = {
    application: {
      resources: Array<ApplicationResource>;
    };
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
    getCatalogs(): Promise<Array<string>>;
  }

  // Contributors API types

  interface ContributorsApi {
    getContributors(): Promise<any>;
  }

  // Count API types

  interface CountApi {
    getCount(query: Query): Promise<CountApiResponse>;
  }

  type CountApiResponse = {
    count: number;
    maxAllowed: number;
  }

  // Query API types

  interface QueryApi {
    earthquakes(query: Query): Promise<QueryApiResponse>;
  }

  type QueryApiResponse = {
    type: string;
    metadata: Metadata;
    features: Array<Feature>;
  }

  type Metadata = {
    generated: number;
    url: string;
    title: string;
    status: number;
    api: string;
    limit: number;
    offset: number;
    count: number;
  }

  type Feature = {
    type: string;
    properties: Properties
    geometry: Geometry;
    id: string;
  }

  type Properties = {
    mag: number;
    place: string;
    time: number;
    updated: number;
    tz: any;
    url: string;
    detail: string;
    felt: any;
    cdi: any;
    mmi: any;
    alert: any;
    status: string;
    tsunami: number;
    sig: number;
    net: string;
    code: string;
    ids: string;
    sources: string;
    types: string;
    nst: number;
    dmin: number;
    rms: number;
    gap: number;
    magType: string;
    type: string;
    title: string;
  }

  type Geometry = {
    type: string;
    coordinates: [number, number, number];
  }

  type Query = {
    endtime?: string;
    starttime?: string;
    updatedafter?: string;
    minlatitude?: number;
    minlongitude?: number;
    maxlatitude?: number;
    maxlongitude?: number;
    latitude?: number;
    longitude?: number;
    maxradius?: number;
    maxradiuskm?: number;
    catalog?: string;
    contributor?: string;
    eventid?: string;
    includeallmagnitudes?: boolean;
    includeallorigins?: boolean;
    includearrivals?: boolean;
    includedeleted?: boolean | 'only';
    includesuperseded?: boolean;
    limit?: number;
    maxdepth?: number;
    maxmagnitude?: number;
    mindepth?: number;
    minmagnitude?: number;
    offset?: number;
    orderby?: 'time' | 'time-asc' | 'magnitude' | 'magnitude-asc';
    alertlevel?: 'green' | 'yellow' | 'orange' | 'red';
    eventtype?: string;
    maxcdi?: number;
    maxgap?: number;
    maxmmi?: number;
    maxsig?: number;
    mincdi?: number;
    minfelt?: number;
    mingap?: number;
    minsig?: number;
    producttype?: string;
    productcode?: string;
    reviewstatus?: 'automatic' | 'reviewed';
  }
}

export = u
