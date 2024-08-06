import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-7.0"


class GetZiaPeopleEnrichments {
    static async getZiaPeopleEnrichments() {
        const ziaPeopleEnrichmentOperations = new ZOHOCRMSDK.EnrichmentPeopleZia.ZiaPeopleEnrichmentOperations();
        const paramInstance = new ZOHOCRMSDK.ParameterMap();

        const response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.EnrichmentPeopleZia.ResponseHandler.MasterModel> = await ziaPeopleEnrichmentOperations.getZiaPeopleEnrichments(paramInstance);

        if (response != null) {
            console.log('Status Code: ' + response.getStatusCode());

            if (response.getStatusCode() === 204) {
                console.log('No Content');
                return;
            }

            const responseHandler: ZOHOCRMSDK.EnrichmentPeopleZia.ResponseHandler.MasterModel = response.getObject();

            if (responseHandler instanceof ZOHOCRMSDK.EnrichmentPeopleZia.ResponseWrapper) {
                const responseWrapper: ZOHOCRMSDK.EnrichmentPeopleZia.ResponseWrapper = responseHandler;
                const ziapeopleenrichment: ZOHOCRMSDK.EnrichmentPeopleZia.ZiaPeopleEnrichment[] = responseWrapper.getZiapeopleenrichment();

                if (ziapeopleenrichment != null) {
                    for (const ziapeopleenrichment1 of ziapeopleenrichment) {
                        console.log('ZiaPeopleEnrichment CreatedTime: ' + ziapeopleenrichment1.getCreatedTime());
                        console.log('ZiaPeopleEnrichment Id: ' + ziapeopleenrichment1.getId());

                        const user: ZOHOCRMSDK.EnrichmentPeopleZia.User = ziapeopleenrichment1.getCreatedBy();
                        if (user != null) {
                            console.log('ZiaPeopleEnrichment User Id: ' + user.getId());
                            console.log('ZiaPeopleEnrichment User Name: ' + user.getName());
                        }
                        console.log('ZiaPeopleEnrichment Status: ' + ziapeopleenrichment1.getStatus());
                    }
                }

                const info: ZOHOCRMSDK.EnrichmentPeopleZia.Info = responseWrapper.getInfo();
                if (info !== null) {
                    if (info.getPerPage() != null) {
                        console.log('ZiaPeopleEnrichment Info PerPage: ' + info.getPerPage().toString());
                    }
                    if (info.getCount() !=null) {
                        console.log('ZiaPeopleEnrichment Info Count: ' + info.getCount().toString());
                    }
                    if (info.getPage() != null) {
                        console.log('ZiaPeopleEnrichment Info Page: ' + info.getPage().toString());
                    }
                    if (info.getMoreRecords() != null) {
                        console.log('ZiaPeopleEnrichment Info MoreRecords: ' + info.getMoreRecords().toString());
                    }
                }
            } else if (responseHandler instanceof ZOHOCRMSDK.EnrichmentPeopleZia.APIException) {
                const exception: ZOHOCRMSDK.EnrichmentPeopleZia.APIException = responseHandler;
                console.log('Status: ' + exception.getStatus().getValue());
                console.log('Code: ' + exception.getCode().getValue());
                console.log('Details: ');
                for (const [key, value] of Object.entries(exception.getDetails())) {
                    console.log(`${key}: ${value}`);
                }
                console.log('Message: ' + exception.getMessage());
            }
        }
    }

    static async initializeAndCall() {
        let environment = ZOHOCRMSDK.USDataCenter.PRODUCTION();
        let token = new ZOHOCRMSDK.OAuthBuilder()
            .clientId("client_id")
            .clientSecret("client_secret")
            .grantToken("grant_token")
            .build();
        await(new ZOHOCRMSDK.InitializeBuilder())
            .environment(environment)
            .token(token)
            .initialize();
        await GetZiaPeopleEnrichments.getZiaPeopleEnrichments();
    }
}

GetZiaPeopleEnrichments.initializeAndCall()