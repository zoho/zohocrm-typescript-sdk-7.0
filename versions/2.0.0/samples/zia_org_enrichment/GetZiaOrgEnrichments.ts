import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-7.0"



class GetZiaOrgEnrichments {
    static async getZiaOrgEnrichments(){
        const ziaOrgEnrichmentOperations = new ZOHOCRMSDK.EnrichmentOrgZia.ZiaOrgEnrichmentOperations();
        const paramInstance = new ZOHOCRMSDK.ParameterMap();

        const response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.EnrichmentOrgZia.ResponseHandler.MasterModel> = await ziaOrgEnrichmentOperations.getZiaOrgEnrichments(paramInstance);

        if (response) {
            console.log("Status Code: " + response.getStatusCode());

            if (response.getStatusCode() === 204) {
                console.log("No Content");
                return;
            }

            const responseHandler: ZOHOCRMSDK.EnrichmentOrgZia.ResponseHandler.MasterModel = response.getObject();

            if (responseHandler instanceof ZOHOCRMSDK.EnrichmentOrgZia.ResponseWrapper) {
                const responseWrapper: ZOHOCRMSDK.EnrichmentOrgZia.ResponseWrapper = responseHandler;
                const ziaOrgEnrichmentList: ZOHOCRMSDK.EnrichmentOrgZia.ZiaOrgEnrichment[] | undefined = responseWrapper.getZiaorgenrichment();

                if (ziaOrgEnrichmentList) {
                    for (const ziaOrgEnrichment of ziaOrgEnrichmentList) {
                        console.log("ZiaOrgEnrichment CreatedTime : " + ziaOrgEnrichment.getCreatedTime());
                        console.log("ZiaOrgEnrichment Id : " + ziaOrgEnrichment.getId());

                        const user: ZOHOCRMSDK.EnrichmentOrgZia.User | undefined = ziaOrgEnrichment.getCreatedBy();
                        if (user) {
                            console.log("ZiaOrgEnrichment User Id : " + user.getId());
                            console.log("ZiaOrgEnrichment User Name : " + user.getName());
                        }

                        console.log("ZiaOrgEnrichment Status : " + ziaOrgEnrichment.getStatus());
                    }
                }

                const info: ZOHOCRMSDK.EnrichmentOrgZia.Info | undefined = responseWrapper.getInfo();
                if (info) {
                    if (info.getPerPage() !== undefined) {
                        console.log("ZiaOrgEnrichment Info PerPage: " + info.getPerPage().toString());
                    }
                    if (info.getCount() !== undefined) {
                        console.log("ZiaOrgEnrichment Info Count: " + info.getCount().toString());
                    }
                    if (info.getPage() !== undefined) {
                        console.log("ZiaOrgEnrichment Info Page: " + info.getPage().toString());
                    }
                    if (info.getMoreRecords() !== undefined) {
                        console.log("ZiaOrgEnrichment Info MoreRecords: " + info.getMoreRecords().toString());
                    }
                }
            } else if (responseHandler instanceof ZOHOCRMSDK.EnrichmentOrgZia.APIException) {
                const exception: ZOHOCRMSDK.EnrichmentOrgZia.APIException = responseHandler;
                console.log("Status: " + exception.getStatus().getValue());
                console.log("Code: " + exception.getCode().getValue());
                console.log("Details: ");
                if (exception.getDetails()) {
                    for (const [key, value] of Object.entries(exception.getDetails())) {
                        console.log(key + ": " + value);
                    }
                }
                console.log("Message: " + exception.getMessage());
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
        await GetZiaOrgEnrichments.getZiaOrgEnrichments();

    }
}

GetZiaOrgEnrichments.initializeAndCall();
