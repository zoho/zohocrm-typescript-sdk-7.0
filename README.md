# ZOHO CRM TYPESCRIPT SDK 7.0 for API Version 7

The TypeScript SDK for Zoho CRM allows developers to easily create TypeScript applications that can be integrated with Zoho CRM. This SDK serves as a wrapper for the REST APIs, making it easier to access and utilize the services of Zoho CRM. 
Authentication to access the CRM APIs is done through OAuth2.0, and the authentication process is streamlined through the use of the TypeScript SDK. The grant and access/refresh tokens are generated and managed within the SDK code, eliminating the need for manual handling during data synchronization between Zoho CRM and the client application.

This repository includes the TypeScript SDK for API v7 of Zoho CRM. Check [Versions](https://github.com/zoho/zohocrm-typescript-sdk-7.0/releases) for more details on the versions of SDK released for this API version.

License
=======

    Copyright (c) 2021, ZOHO CORPORATION PRIVATE LIMITED 
    All rights reserved. 

    Licensed under the Apache License, Version 2.0 (the "License"); 
    you may not use this file except in compliance with the License. 
    You may obtain a copy of the License at 
    
        http://www.apache.org/licenses/LICENSE-2.0 
    
    Unless required by applicable law or agreed to in writing, software 
    distributed under the License is distributed on an "AS IS" BASIS, 
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. 
    See the License for the specific language governing permissions and 
    limitations under the License.

## Latest Version

- [1.0.0](/versions/1.0.0/README.md)
    - TypeScript SDK upgraded to support v7 APIs.
    - TypeScript SDK improved to support the following new APIs
      - [Export Audit Log API](https://www.zoho.com/crm/developer/docs/api/v7/create-export-audit-log.html)
      - [Cadence API](https://www.zoho.com/crm/developer/docs/api/v7/cadences/get-cadences.html)
      - [Record Clone API](https://www.zoho.com/crm/developer/docs/api/v7/record-clone.html)
      - [Duplicate Record Check API](https://www.zoho.com/crm/developer/docs/api/v7/enable-duplicate-record-check.html)
      - [Data People Enrichment API](https://www.zoho.com/crm/developer/docs/api/v7/zia-enrichment/create-ppl-enrichment.html)
      - [Data Org Enrichment API](https://www.zoho.com/crm/developer/docs/api/v7/zia-enrichment/get-config.html)
      - [Mass Delete Tags API](https://www.zoho.com/crm/developer/docs/api/v7/mass-delete-tags.html)
      - [Picklist Option API](https://www.zoho.com/crm/developer/docs/api/v7/picklist-values.html)
      - [API Fetcher](https://www.zoho.com/crm/developer/docs/api/v7/list-available-rest-apis.html)



For older versions, please [refer](https://github.com/zoho/zohocrm-typescript-sdk-7.0/releases).


## Including the SDK in your project
You can include the SDK to your project using:

For including the latest [version](https://github.com/zoho/zohocrm-typescript-sdk-7.0/releases/tag/1.0.0) using npm

  - Install **Node** from [nodejs.org](https://nodejs.org/en/download/) (if not installed).

  - Install **TypeScript SDK**

    - Navigate to the workspace of your client app.
    
    - Run the command below:

        ```sh
        npm install @zohocrm/typescript-sdk-7.0
        ```
### Dependencies

- Dependencies that should be included in your project

  - install **form-data**
    ```sh
    npm i form-data
    ```
  - install **ts-node**
    ```sh
    npm i ts-node
    ```
  - install **typescript**
    ```sh
    npm i typescript
    ```
  - install **got**
    ```sh
    npm i got
    ```
  - install **moment-timezone**
    ```sh
    npm i moment-timezone
    ```
  - install **mysql**
    ```sh
    npm i mysql
    ```
  - install **tunnel**
    ```sh
    npm i tunnel
    ```
  - install **winston**
    ```sh
    npm i winston
    ```
  - install **@types/mysql**
    ```sh
    npm i @types/mysql
    ```
  - install **@types/tunnel**
    ```sh
    npm i @types/tunnel
    ```
---

**NOTE** 

> - The **access and refresh tokens are environment-specific and domain-specific**. When you handle various environments and domains such as **Production**, **Sandbox**, or **Developer** and **IN**, **CN**, **US**, **EU**, **JP**, or **AU**, respectively, you must use the access token and refresh token generated only in those respective environments and domains. The SDK throws an error, otherwise.
For example, if you generate the tokens for your Sandbox environment in the CN domain, you must use only those tokens for that domain and environment. You cannot use the tokens generated for a different environment or a domain.

> - For **Deal Contact Roles API and Records API**, you will need to provide the **ZohoCRM.settings.fields.ALL** scope along with the **ZohoCRM.modules.ALL** scope while generating the OAuthtoken. Otherwise, the system returns the **OAUTH-SCOPE-MISMATCH** error.

> - For **Related Records API**, the scopes required for generating OAuthtoken are **ZohoCRM.modules.ALL**, **ZohoCRM.settings.fields.ALL** and **ZohoCRM.settings.related_lists.ALL**. Otherwise, the system returns the **OAUTH-SCOPE-MISMATCH** error.

> - For **Mass Convert API**, you will need to provide the **ZohoCRM.settings.fields.ALL** scope along with the **ZohoCRM.mass_convert.leads.CREATE** and **ZohoCRM.mass_convert.leads.READ** scope while generating the OAuthtoken. Otherwise, the system returns the **OAUTH-SCOPE-MISMATCH** error.

---
For more details, kindly refer [here](/versions/1.0.0/README.md).
