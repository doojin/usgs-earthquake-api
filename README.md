## The "what?"
This is the [usgs.gov](https://earthquake.usgs.gov/fdsnws/event/1/) earthquake catalog API wrapper for NodeJS.
It provides methods for accessing the data from all available endpoints:

* application.json (request known enumerated parameter values for the interface)
* application.wadl (request WADL for the interface)
* catalogs (request available catalogs)
* contributors (request available contributors)
* count (to perform a count on a data request. Count uses the same parameters as the query method)
* **query (to submit a data request)**
* version (request full service version number)

## The "why"
While working on one of my "pet" projects I was looking for the source of real-time earthquake data.
Quick search on the internet brought me to the [usgs.gov](https://www.usgs.gov/) website which contains all the data 
I needed. They also provide a free API for developers to access their data.

Since my project's back-end is written in NodeJS I started looking for a wrapper package for this service.
Unfortunatelly I didn't find any up-to-date and still-maintained ready solution.

Even tho I only needed a peace of USGS earthquake catalog API functionality, 
I decided to implement an NodeJS wrapper for all of their 
available endpoints and move out the code into a separate package.

## The "how"

### Installation

```
npm install --save usgs-earthquake-api
```

### Usage

In your code:

```javascript
const api = require('usgs-earthquake-api');
```

#### Interface parameters `/application.json`

```javascript
const parameters = await api.application.getInterfaceParameters();
```

<details>
  <summary>Result</summary>

  ```json
  {
    "catalogs": [
      "38457511",
      "=c",
      "ak",
      "at",
      "atlas",
      "av",
      "cdmg",
      "cgs",
      "choy",
      "ci",
      "cidev",
      "dr",
      "duputel",
      "eqh",
      "ew",
      "ew_dm",
      "gcmt",
      "gsc",
      "hv",
      "id",
      "is",
      "iscgem",
      "iscgemsup",
      "ismpkansas",
      "ld",
      "mb",
      "nc",
      "ne",
      "nm",
      "nn",
      "official",
      "official19631013051759_30",
      "ok",
      "pr",
      "pt",
      "sc",
      "se",
      "unknown",
      "us",
      "ushis",
      "uu",
      "uw"
    ],
    "contributors": [
      "admin",
      "ak",
      "at",
      "atlas",
      "av",
      "cgs",
      "ci",
      "ew",
      "hv",
      "ismp",
      "ld",
      "mb",
      "nc",
      "nm",
      "nn",
      "np",
      "official",
      "ok",
      "pr",
      "pt",
      "se",
      "us",
      "uu",
      "uw"
    ],
    "producttypes": [
      "associate",
      "cap",
      "deleted-text",
      "disassociate",
      "dyfi",
      "earthquake-name",
      "eq-location-map",
      "finite-fault",
      "focal-mechanism",
      "general-header",
      "general-link",
      "general-text",
      "geoserve",
      "ground-failure",
      "historical-moment-tensor-map",
      "historical-seismicity-map",
      "image",
      "impact-link",
      "impact-text",
      "internal-origin",
      "isoseismal-map",
      "losspager",
      "losspager-admin",
      "moment-tensor",
      "moreinformation",
      "nearby-cities",
      "oaf",
      "origin",
      "p-wave-travel-times",
      "phase-data",
      "poster",
      "scitech-link",
      "scitech-text",
      "shake-alert",
      "shakemap",
      "significance",
      "tectonic-summary",
      "touch",
      "trump",
      "trump-cap",
      "trump-dyfi",
      "trump-general-link",
      "trump-general-text",
      "trump-geoserve",
      "trump-ground-failure",
      "trump-impact-text",
      "trump-losspager",
      "trump-moment-tensor",
      "trump-nearby-cities",
      "trump-origin",
      "trump-phase-data",
      "trump-shakemap",
      "trump-tectonic-summary",
      "unassociated-amplitude"
    ],
    "eventtypes": [
      "acoustic noise",
      "acoustic_noise",
      "anthropogenic_event",
      "building collapse",
      "chemical explosion",
      "chemical_explosion",
      "collapse",
      "earthquake",
      "eq",
      "experimental explosion",
      "explosion",
      "ice quake",
      "induced or triggered event",
      "industrial explosion",
      "landslide",
      "meteor",
      "meteorite",
      "mine collapse",
      "mine_collapse",
      "mining explosion",
      "mining_explosion",
      "not reported",
      "not_reported",
      "nuclear explosion",
      "nuclear_explosion",
      "other event",
      "other_event",
      "quarry",
      "quarry blast",
      "quarry_blast",
      "rock burst",
      "Rock Slide",
      "rockslide",
      "rock_burst",
      "snow_avalanche",
      "sonic boom",
      "sonicboom",
      "sonic_boom",
      "volcanic eruption",
      "volcanic explosion"
    ],
    "magnitudetypes": [
      "2",
      "4",
      "fa",
      "H",
      "lg",
      "m",
      "ma",
      "mb",
      "MbLg",
      "mb_lg",
      "mc",
      "Md",
      "mdl",
      "Me",
      "mfa",
      "mh",
      "Mi",
      "mint",
      "ml",
      "mlg",
      "mlr",
      "mlv",
      "Ms",
      "ms_20",
      "Mt",
      "mun",
      "mw",
      "mwb",
      "mwc",
      "mwp",

      "mww",
      "no",
      "uk",
      "Unknown"
    ]
  }
  ```
</details>

#### WADL for interface `/application.wadl`

```javascript
const wadlData = await api.applicationWadl.getWadl()
```

<details>
  <summary>Result</summary>

  ```json
  {
    "application": {
      "resources": [
        {
          "base": "https://earthquake.usgs.gov/fdsnws/event/1/",
          "resource": [
            {
              "path": "version",
              "method": [
                {
                  "id": "version",
                  "name": "GET",
                  "response": [
                    {
                      "status": "200",
                      "representation": [
                        {
                          "mediaType": "text/plain"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "path": "catalogs",
              "method": [
                {
                  "id": "catalogs",
                  "name": "GET",
                  "response": [
                    {
                      "status": "200",
                      "representation": [
                        {
                          "mediaType": "application/xml"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "path": "contributors",
              "method": [
                {
                  "id": "contributors",
                  "name": "GET",
                  "response": [
                    {
                      "status": "200",
                      "representation": [
                        {
                          "mediaType": "application/xml"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "path": "application.wadl",
              "method": [
                {
                  "id": "application.wadl",
                  "name": "GET",
                  "response": [
                    {
                      "status": "200",
                      "representation": [
                        {
                          "mediaType": "application/xml"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "path": "query",
              "method": [
                {
                  "id": "query",
                  "name": "GET",
                  "response": [
                    {
                      "status": "200",
                      "representation": [
                        {
                          "mediaType": "application/xml",
                          "element": "q:quakeml"
                        },
                        {
                          "mediaType": "text/csv"
                        },
                        {
                          "mediaType": "application/vnd.google-earth.kml+xml"
                        },
                        {
                          "mediaType": "text/javascript"
                        },
                        {
                          "mediaType": "application/json"
                        }
                      ]
                    }
                  ],
                  "request": [
                    {
                      "param": [
                        {
                          "name": "starttime",
                          "style": "query",
                          "type": "xs:dateTime"
                        },
                        {
                          "name": "endtime",
                          "style": "query",
                          "type": "xs:dateTime"
                        },
                        {
                          "name": "updatedafter",
                          "style": "query",
                          "type": "xs:dateTime"
                        },
                        {
                          "name": "minlatitude",
                          "style": "query",
                          "type": "xs:double",
                          "default": "-90"
                        },
                        {
                          "name": "maxlatitude",
                          "style": "query",
                          "type": "xs:double",
                          "default": "90"
                        },
                        {
                          "name": "minlongitude",
                          "style": "query",
                          "type": "xs:double",
                          "default": "-180"
                        },
                        {
                          "name": "minlongitude",
                          "style": "query",
                          "type": "xs:double",
                          "default": "180"
                        },
                        {
                          "name": "latitude",
                          "style": "query",
                          "type": "xs:double",
                          "default": "0"
                        },
                        {
                          "name": "longitude",
                          "style": "query",
                          "type": "xs:double",
                          "default": "0"
                        },
                        {
                          "name": "minradius",
                          "style": "query",
                          "type": "xs:double",
                          "default": "0"
                        },
                        {
                          "name": "maxradius",
                          "style": "query",
                          "type": "xs:double",
                          "default": "180"
                        },
                        {
                          "name": "mindepth",
                          "style": "query",
                          "type": "xs:double"
                        },
                        {
                          "name": "maxdepth",
                          "style": "query",
                          "type": "xs:double"
                        },
                        {
                          "name": "minmagnitude",
                          "style": "query",
                          "type": "xs:double"
                        },
                        {
                          "name": "maxmagnitude",
                          "style": "query",
                          "type": "xs:double"
                        },
                        {
                          "name": "magnitudetype",
                          "style": "query",
                          "type": "xs:string"
                        },
                        {
                          "name": "includeallmagnitudes",
                          "style": "query",
                          "type": "xs:boolean"
                        },
                        {
                          "name": "includeallorigins",
                          "style": "query",
                          "type": "xs:boolean"
                        },
                        {
                          "name": "includearrivals",
                          "style": "query",
                          "type": "xs:boolean"
                        },
                        {
                          "name": "eventid",
                          "style": "query",
                          "type": "xs:string"
                        },
                        {
                          "name": "limit",
                          "style": "query",
                          "type": "xs:integer"
                        },
                        {
                          "name": "offset",
                          "style": "query",
                          "type": "xs:integer",
                          "default": "1"
                        },
                        {
                          "name": "orderby",
                          "style": "query",
                          "default": "time",
                          "option": [
                            {
                              "value": "time"
                            },
                            {
                              "value": "time-asc"
                            },
                            {
                              "value": "magnitude"
                            },
                            {
                              "value": "magnitude-asc"
                            }
                          ]
                        },
                        {
                          "name": "contributor",
                          "style": "query",
                          "type": "xs:string"
                        },
                        {
                          "name": "catalog",
                          "style": "query",
                          "type": "xs:string"
                        },
                        {
                          "name": "format",
                          "style": "query",
                          "default": "quakeml",
                          "option": [
                            {
                              "value": "quakeml",
                              "mediaType": "application/xml"
                            },
                            {
                              "value": "csv",
                              "mediaType": "text/csv"
                            },
                            {
                              "value": "geojson",
                              "mediaType": "application/json"
                            },
                            {
                              "value": "kml",
                              "mediaType": "application/vnd.google-earth.kml+xml"
                            }
                          ]
                        },
                        {
                          "name": "callback",
                          "style": "query",
                          "mediaType": "text/javascript"
                        },
                        {
                          "name": "kmlcolorby",
                          "style": "query",
                          "default": "age",
                          "option": [
                            {
                              "value": "age"
                            },
                            {
                              "value": "depth"
                            }
                          ]
                        },
                        {
                          "name": "kmlanimated",
                          "style": "query",
                          "type": "xs:boolean",
                          "default": "false"
                        },
                        {
                          "name": "eventtype",
                          "style": "query",
                          "type": "xs:string"
                        },
                        {
                          "name": "reviewstatus",
                          "style": "query",
                          "option": [
                            {
                              "value": "automatic"
                            },
                            {
                              "value": "reviewed"
                            }
                          ]
                        },
                        {
                          "name": "minmmi",
                          "style": "query",
                          "type": "xs:double"
                        },
                        {
                          "name": "maxmmi",
                          "style": "query",
                          "type": "xs:double"
                        },
                        {
                          "name": "mincdi",
                          "style": "query",
                          "type": "xs:double"
                        },
                        {
                          "name": "maxcdi",
                          "style": "query",
                          "type": "xs:double"
                        },
                        {
                          "name": "minfelt",
                          "style": "query",
                          "type": "xs:integer"
                        },
                        {
                          "name": "alertlevel",
                          "style": "query",
                          "default": "*",
                          "option": [
                            {
                              "value": "green"
                            },
                            {
                              "value": "yellow"
                            },
                            {
                              "value": "orange"
                            },
                            {
                              "value": "red"
                            },
                            {
                              "value": "*"
                            }
                          ]
                        },
                        {
                          "name": "mingap",
                          "style": "query",
                          "type": "xs:double"
                        },
                        {
                          "name": "maxgap",
                          "style": "query",
                          "type": "xs:double"
                        },
                        {
                          "name": "minsig",
                          "style": "query",
                          "type": "xs:integer"
                        },
                        {
                          "name": "maxsig",
                          "style": "query",
                          "type": "xs:integer"
                        },
                        {
                          "name": "producttype",
                          "style": "query",
                          "option": [
                            {
                              "value": "moment-tensor"
                            },
                            {
                              "value": "focal-mechanism"
                            },
                            {
                              "value": "shakemap"
                            },
                            {
                              "value": "losspager"
                            },
                            {
                              "value": "dyfi"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  }
  ```
</details>

#### Available catalogs `/catalogs`

```javascript
const catalogs = await api.catalogs.getCatalogs()
```

<details>
  <summary>Result</summary>

  ```json
  [
    "38457511",
    "=c",
    "ak",
    "at",
    "atlas",
    "av",
    "cdmg",
    "cgs",
    "choy",
    "ci",
    "cidev",
    "dr",
    "duputel",
    "eqh",
    "ew",
    "ew_dm",
    "gcmt",
    "gsc",
    "hv",
    "id",
    "is",
    "iscgem",
    "iscgemsup",
    "ismpkansas",
    "ld",
    "mb",
    "nc",
    "ne",
    "nm",
    "nn",
    "official",
    "official19631013051759_30",
    "ok",
    "pr",
    "pt",
    "sc",
    "se",
    "unknown",
    "us",
    "ushis",
    "uu",
    "uw"
  ]
  ```
</details>

#### Available contributors `/contributors`

```javascript
const contributors = await api.contributors.getContributors()
```

<details>
  <summary>Result</summary>

  ```json
  [
    "admin",
    "ak",
    "at",
    "atlas",
    "av",
    "cgs",
    "ci",
    "ew",
    "hv",
    "ismp",
    "ld",
    "mb",
    "nc",
    "nm",
    "nn",
    "np",
    "official",
    "ok",
    "pr",
    "pt",
    "se",
    "us",
    "uu",
    "uw"
  ]
  ```
</details>

#### Count on data request `/count`

```javascript
const count = await api.count.getCount({ maxdepth: 5 });
```

[Supported parameters](#supported-parameters)

<details>
  <summary>Result</summary>

  ```json
  {
    "count": 4983,
    "maxAllowed": 20000
  }
  ```
</details>

#### Query `/query`

```javascript
const earthquakes = await api.query.earthquakes({ limit: 1, maxdepth: 5 });
```

[Supported parameters](#supported-parameters)

<details>
  <summary>Result</summary>

  ```json
  {
    "type": "FeatureCollection",
    "metadata": {
      "generated": 1596245138000,
      "url": "https://earthquake.usgs.gov/fdsnws/event/1/query?limit=1&maxdepth=5&format=geojson",
      "title": "USGS Earthquakes",
      "status": 200,
      "api": "1.10.3",
      "limit": 1,
      "offset": 1,
      "count": 1
    },
    "features": [
      {
        "type": "Feature",
        "properties": {
          "mag": 0.8,
          "place": "9km WNW of Cobb, CA",
          "time": 1596244682970,
          "updated": 1596245043536,
          "tz": null,
          "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc73436721",
          "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc73436721&format=geojson",
          "felt": null,
          "cdi": null,
          "mmi": null,
          "alert": null,
          "status": "automatic",
          "tsunami": 0,
          "sig": 10,
          "net": "nc",
          "code": "73436721",
          "ids": ",nc73436721,",
          "sources": ",nc,",
          "types": ",nearby-cities,origin,phase-data,scitech-link,",
          "nst": 16,
          "dmin": 0.009233,
          "rms": 0.02,
          "gap": 63,
          "magType": "md",
          "type": "earthquake",
          "title": "M 0.8 - 9km WNW of Cobb, CA"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -122.8236694,
            38.8383331,
            1.81
          ]
        },
        "id": "nc73436721"
      }
    ]
  }
  ```
</details>

#### Service version `/version`

```javascript
const version = await api.version.getVersion();
```

<details>
  <summary>Result</summary>

  ```json
  {
    "result": "1.10.3"
  }
  ```
</details>


#### <a name="supported-parameters"></a>Supported parameters

`api.count.getCount` and `api.query.earthquakes` methods accept an object with following possible 
properties:

| property             | type                          | default        | description                                                                                                                                                 |
|----------------------|-------------------------------|----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| endtime              | String                        | present time   | Limit to events on or before the specified end time (ISO8601 format)                                                                                      |
| starttime            | String                        | NOW - 30 days | Limit to events on or after the specified start time (ISO8601 format)                                                                                     |
| updatedafter         | String                        | null           | Limit to events updated after the specified time (ISO8601 format)                                                                                         |
||||
| minlatitude          | Decimal [-90,90] degrees   | -90           | Limit to events with a latitude larger than the specified minimum                                                                                           |
| minlongitude         | Decimal [-360,360] degrees | -180          | Limit to events with a longitude larger than the specified minimum                                                                                          |
| maxlatitude          | [-90,90] degrees           | 90             | Limit to events with a latitude smaller than the specified maximum                                                                                          |
| maxlongitude         | Decimal [-360,360] degrees | 180            | Limit to events with a longitude smaller than the specified maximum                                                                                        |
||||
| latitude             | Decimal [-90,90] degrees   | null           | Specify the latitude to be used for a radius search                                                                                                         |
| longitude            | Decimal [-180,180] degrees | null           | Specify the longitude to be used for a radius search                                                                                                        |
| maxradius            | Decimal [0, 180] degrees    | 180            | Limit to events within the specified maximum number of degrees from the geographic point defined by the latitude and longitude parameters                   |
| maxradiuskm          | Decimal [0, 20001.6] km    | 20001.6       | Limit to events within the specified maximum number of kilometers from the geographic point defined by the latitude and longitude parameters                |
||||
| catalog              | String                        | null           | Limit to events from a specified catalog                                                                                                                    |
| contributor          | String                        | null           | Limit to events contributed by a specified contributor                                                                                                      |
| eventid              | String                        | null           | Select a specific event by ID                                                                                                                               |
| includeallmagnitudes | Boolean                       | false          | Specify if all magnitudes for the event should be included                                                                                                  |
| includeallorigins    | Boolean                       | false          | Specify if all origins for the event should be included                                                                                                     |
| includearrivals      | Boolean                       | false          | Specify if phase arrivals should be included                                                                                                                |
| includedeleted       | Boolean, or `only`           | false          | Specify if deleted products and events should be included. The value `only` returns only deleted events.                                                 |
| includesuperseded    | Boolean                       | false          | Specify if superseded products should be included. This also includes all deleted products, and is mutually exclusive to the `includedeleted` parameter. |
| limit                | Integer [1,20000]           | null           | Limit the results to the specified number of events                                                                                                         |
| maxdepth             | Decimal [-100, 1000]       | 1000           | Limit to events with depth less than the specified maximum                                                                                                  |
| maxmagnitude         | Decimal                       | null           | Limit to events with a magnitude smaller than the specified maximum                                                                                         |
| mindepth             | Decimal [-100, 1000] km    | -100          | Limit to events with depth more than the specified minimum                                                                                                  |
| minmagnitude         | Decimal                       | null           | Limit to events with a magnitude larger than the specified minimum                                                                                          |
| offset               | Integer[1,∞]                | 1              | Return results starting at the event count specified, starting at 1                                                                                         |
| orderby              | String                        | time           | Order the results. The allowed values are: `time`, `time-asc`, `magnitude`, `magnitude-asc`                                                             |
||||
| alertlevel           | String                        | null           | Limit to events with a specific PAGER alert level. The allowed values are: `green`, `yellow`, `orange`, `red`                                             |
| eventtype            | String                        | null           | Limit to events of a specific type                                                                                                                          |
| maxcdi               | Decimal [0,12]              | null           | Maximum value for Maximum Community Determined Intensity reported by DYFI                                                                                   |
| maxgap               | Decimal [0,360] degrees     | null           | Limit to events with no more than this azimuthal gap                                                                                                        |
| maxmmi               | Decimal [0,12]              | null           | Maximum value for Maximum Modified Mercalli Intensity reported by ShakeMap                                                                                  |
| maxsig               | Integer                       | null           | Limit to events with no more than this significance                                                                                                         |
| mincdi               | Decimal                       | null           | Minimum value for Maximum Community Determined Intensity reported by DYFI                                                                                   |
| minfelt              | Integer[1,∞]                | null           | Limit to events with this many DYFI responses                                                                                                               |
| mingap               | Decimal[0,360] degrees      | null           | Limit to events with no less than this azimuthal gap                                                                                                        |
| minsig               | Integer                       | null           | Limit to events with no less than this significance                                                                                                         |
| producttype          | String                        | null           | Limit to events that have this type of product associated                                                                                                   |
| productcode          | String                        | null           | Return the event that is associated with the productcode; The event will be returned even if the productcode is not the preferred code for the event        |
| reviewstatus         | String                        | all            | Limit to events with a specific review status; The different review statuses are: `automatic`, `reviewed`                                                  |

### Error handling

Wrapper automagically processes all the API request failures and re-throws an error with a descriptive message.

From documentation about the `limit` parameter:

> Limit the results to the specified number of events. NOTE: The service limits queries to 20000, and any that exceed this limit will generate a HTTP response code "400 Bad Request".

Example:

```javascript
try {
  const earthquakes = await api.query.earthquakes({ limit: 50000 })
} catch (e) {
  console.log(e.message)
}

```


<details>
  <summary>Result</summary>

  ```
  Error: Bad limit value "50000". Valid values are 0 <= limit <= 20000
  ```
</details>
