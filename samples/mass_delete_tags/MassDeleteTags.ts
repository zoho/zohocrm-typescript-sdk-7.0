import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-7.0"


class MassDeleteTags {
    static async massDeleteTags() {
        const massDeleteTagsOperations = new ZOHOCRMSDK.DeleteMassTags.MassDeleteTagsOperations();
        const request = new ZOHOCRMSDK.DeleteMassTags.BodyWrapper();
        const massDeleteArray = [];

        const massDelete1 = new ZOHOCRMSDK.DeleteMassTags.MassDelete();
        const module = new ZOHOCRMSDK.DeleteMassTags.Module();
        module.setAPIName("Leads");
        module.setId(BigInt("727220000037"));

        massDelete1.setModule(module);

        const tags = [];
        let tag = new ZOHOCRMSDK.DeleteMassTags.Tag();
        tag.setId(BigInt("7272200604010"));
        tags.push(tag);

        tag = new ZOHOCRMSDK.DeleteMassTags.Tag();
        tag.setId(BigInt("7272250004011"));
        tags.push(tag);

        massDelete1.setTags(tags);
        massDeleteArray.push(massDelete1);

        request.setMassDelete(massDeleteArray);

        const response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.DeleteMassTags.ActionResponse.MasterModel> = await massDeleteTagsOperations.massDeleteTags(request);

        if (response !== null) {
            console.log("Status Code: " + response.getStatusCode());

            const actionResponse = response.getObject();

            if (actionResponse instanceof ZOHOCRMSDK.DeleteMassTags.SuccessResponse) {
                const successResponse = actionResponse;
                console.log("Status: " + successResponse.getStatus().getValue());
                console.log("Code: " + successResponse.getCode().getValue());
                console.log("Details: ");
                for (const [key, value] of Object.entries(successResponse.getDetails())) {
                    console.log(key + ": " + value);
                }
                console.log("Message: " + successResponse.getMessage());
            } else if (actionResponse instanceof ZOHOCRMSDK.DeleteMassTags.APIException) {
                const exception = actionResponse;
                console.log("Status: " + exception.getStatus().getValue());
                console.log("Code: " + exception.getCode().getValue());
                console.log("Details: ");
                for (const [key, value] of Object.entries(exception.getDetails())) {
                    console.log(key + ": " + value);
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
        await MassDeleteTags.massDeleteTags();
    }
}

MassDeleteTags.initializeAndCall();
