import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-7.0"


class CreateZiaOrgEnrichment {
    static async createZiaOrgEnrichment() {
        const ziaOrgEnrichmentOperations = new ZOHOCRMSDK.EnrichmentOrgZia.ZiaOrgEnrichmentOperations();
        const request = new ZOHOCRMSDK.EnrichmentOrgZia.BodyWrapper();
        const ziaOrgEnrichments: ZOHOCRMSDK.EnrichmentOrgZia.ZiaOrgEnrichment[] = [];

        const enrichBasedOn = new ZOHOCRMSDK.EnrichmentOrgZia.EnrichBasedOn();
        enrichBasedOn.setName("zoho");
        enrichBasedOn.setEmail("sales@zohocorp.com");
        enrichBasedOn.setWebsite("www.zoho.com");

        const ziaOrgEnrichment = new ZOHOCRMSDK.EnrichmentOrgZia.ZiaOrgEnrichment();
        ziaOrgEnrichment.setEnrichBasedOn(enrichBasedOn);
        ziaOrgEnrichments.push(ziaOrgEnrichment);

        request.setZiaorgenrichment(ziaOrgEnrichments);

        const paramInstance = new ZOHOCRMSDK.ParameterMap();
        await paramInstance.add(ZOHOCRMSDK.EnrichmentOrgZia.CreateZiaOrgEnrichmentParam.MODULE, "Leads");

        const response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.EnrichmentOrgZia.ActionHandler.MasterModel> = await ziaOrgEnrichmentOperations.createZiaOrgEnrichment(request, paramInstance);

        if (response !== null) {
            console.log("Status Code: " + response.getStatusCode());

            const actionHandler = response.getObject();

            if (actionHandler instanceof ZOHOCRMSDK.EnrichmentOrgZia.ActionWrapper) {
                const actionWrapper = actionHandler;
                const actionResponses = actionWrapper.getZiaorgenrichment();

                for (const actionResponse of actionResponses) {
                    if (actionResponse instanceof ZOHOCRMSDK.EnrichmentOrgZia.SuccessResponse) {
                        const successResponse = actionResponse;
                        console.log("Status: " + successResponse.getStatus().getValue());
                        console.log("Code: " + successResponse.getCode().getValue());
                        console.log("Details: ");
                        for (const [key, value] of Object.entries(successResponse.getDetails())) {
                            console.log(key + ": " + value);
                        }
                        console.log("Message: " + successResponse.getMessage().getValue());
                    } else if (actionResponse instanceof ZOHOCRMSDK.EnrichmentOrgZia.APIException) {
                        const exception = actionResponse;
                        console.log("Status: " + exception.getStatus().getValue());
                        console.log("Code: " + exception.getCode().getValue());
                        console.log("Details: ");
                        for (const [key, value] of Object.entries(exception.getDetails())) {
                            console.log(key + ": " + value);
                        }
                        console.log("Message: " + exception.getMessage().getValue());
                    }
                }
            } else if (actionHandler instanceof ZOHOCRMSDK.EnrichmentOrgZia.APIException) {
                const exception = actionHandler as ZOHOCRMSDK.EnrichmentOrgZia.APIException;
                console.log("Status: " + exception.getStatus().getValue());
                console.log("Code: " + exception.getCode().getValue());
                console.log("Details: ");
                for (const [key, value] of Object.entries(exception.getDetails())) {
                    console.log(key + ": " + value);
                }
                console.log("Message: " + exception.getMessage().getValue());
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
        await CreateZiaOrgEnrichment.createZiaOrgEnrichment();
    }
}

CreateZiaOrgEnrichment.initializeAndCall();