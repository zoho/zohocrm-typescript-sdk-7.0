import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-7.0"


class DeleteDuplicateCheckPreference {
    static async deleteDuplicateCheckPreference(moduleAPIName: string): Promise<void> {
        const duplicateCheckPreferenceOperations = new ZOHOCRMSDK.CheckDuplicatePreference.DuplicateCheckPreferenceOperations(moduleAPIName);
        const response = await duplicateCheckPreferenceOperations.deleteDuplicateCheckPreference();

        if (response !== null) {
            console.log("Status Code: " + response.getStatusCode());
            const actionHandler: ZOHOCRMSDK.CheckDuplicatePreference.ActionHandler.MasterModel = response.getObject();
            if (actionHandler instanceof ZOHOCRMSDK.CheckDuplicatePreference.ActionWrapper) {
                const actionWrapper: ZOHOCRMSDK.CheckDuplicatePreference.ActionWrapper = actionHandler;
                const actionResponse: ZOHOCRMSDK.CheckDuplicatePreference.ActionResponse.MasterModel = actionWrapper.getDuplicateCheckPreference();
                if (actionResponse instanceof ZOHOCRMSDK.CheckDuplicatePreference.SuccessResponse) {
                    const successResponse: ZOHOCRMSDK.CheckDuplicatePreference.SuccessResponse = actionResponse;
                    console.log("Status: " + successResponse.getStatus().getValue());
                    console.log("Code: " + successResponse.getCode().getValue());
                    console.log("Details: ");
                    for (let [key, value] of Object.entries(successResponse.getDetails())) {
                        console.log(`${key}: ${value}`);
                    }
                    console.log("Message: " + successResponse.getMessage());
                } else if (actionResponse instanceof ZOHOCRMSDK.CheckDuplicatePreference.APIException) {
                    const exception: ZOHOCRMSDK.CheckDuplicatePreference.APIException = actionResponse;
                    console.log("Status: " + exception.getStatus().getValue());
                    console.log("Code: " + exception.getCode().getValue());
                    console.log("Details: ");
                    for (let [key, value] of Object.entries(exception.getDetails())) {
                        console.log(`${key}: ${value}`);
                    }
                    console.log("Message: " + exception.getMessage());
                }
            } else if (actionHandler instanceof ZOHOCRMSDK.CheckDuplicatePreference.APIException) {
                const exception: ZOHOCRMSDK.CheckDuplicatePreference.APIException = actionHandler;
                console.log("Status: " + exception.getStatus().getValue());
                console.log("Code: " + exception.getCode().getValue());
                console.log("Details: ");
                for (let [key, value] of Object.entries(exception.getDetails())) {
                    console.log(`${key}: ${value}`);
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
        const moduleAPIName = "Leads";
        await DeleteDuplicateCheckPreference.deleteDuplicateCheckPreference(moduleAPIName);
    }
}

DeleteDuplicateCheckPreference.initializeAndCall();
