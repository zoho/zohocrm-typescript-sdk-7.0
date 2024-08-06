import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-7.0"


class GetDuplicateCheckPreference {



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
        let moduleAPIName = "Leads"
        await GetDuplicateCheckPreference.getDuplicateCheckPreference(moduleAPIName)
    }

    static async getDuplicateCheckPreference(moduleAPIName: string) {
        const duplicateCheckPreferenceOperations = new ZOHOCRMSDK.CheckDuplicatePreference.DuplicateCheckPreferenceOperations(moduleAPIName);
        const response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.CheckDuplicatePreference.ResponseHandler.MasterModel> = await duplicateCheckPreferenceOperations.getDuplicateCheckPreference();

        if (response !== null) {
            console.log("Status Code: " + response.getStatusCode());

            if (response.getStatusCode() === 204) {
                console.log("No Content");
                return;
            }

            const responseHandler: ZOHOCRMSDK.CheckDuplicatePreference.ResponseHandler.MasterModel = response.getObject();

            if (responseHandler instanceof ZOHOCRMSDK.CheckDuplicatePreference.ResponseWrapper) {
                const responseWrapper: ZOHOCRMSDK.CheckDuplicatePreference.ResponseWrapper = responseHandler;
                const duplicateCheckPreference: ZOHOCRMSDK.CheckDuplicatePreference.DuplicateCheckPreference = responseWrapper.getDuplicateCheckPreference();
                console.log("DuplicateCheckPreference Type : " + duplicateCheckPreference.getType().getValue());

                const typeConfigurations: ZOHOCRMSDK.CheckDuplicatePreference.TypeConfiguration[] = duplicateCheckPreference.getTypeConfigurations();
                if (typeConfigurations != null) {
                    for (const typeConfiguration of typeConfigurations) {
                        const mappedModule: ZOHOCRMSDK.CheckDuplicatePreference.MappedModule = typeConfiguration.getMappedModule();
                        if (mappedModule != null) {
                            console.log("DuplicateCheckPreference TypeConfiguration MappedModule Id : " + mappedModule.getId());
                            console.log("DuplicateCheckPreference TypeConfiguration MappedModule Name : " + mappedModule.getName());
                            console.log("DuplicateCheckPreference TypeConfiguration MappedModule APIName : " + mappedModule.getAPIName());
                        }
                        const fieldMappings: ZOHOCRMSDK.CheckDuplicatePreference.FieldMappings[] = typeConfiguration.getFieldMappings();
                        if (fieldMappings != null) {
                            for (const fieldMapping of fieldMappings) {
                                const currentField: ZOHOCRMSDK.CheckDuplicatePreference.CurrentField = fieldMapping.getCurrentField();
                                if (currentField != null) {
                                    console.log("DuplicateCheckPreference TypeConfiguration FieldMappings CurrentField Id : " + currentField.getId());
                                    console.log("DuplicateCheckPreference TypeConfiguration FieldMappings CurrentField Name : " + currentField.getName());
                                    console.log("DuplicateCheckPreference TypeConfiguration FieldMappings CurrentField APIName : " + currentField.getAPIName());
                                }
                                const mappedField: ZOHOCRMSDK.CheckDuplicatePreference.MappedField = fieldMapping.getMappedField();
                                if (mappedField != null) {
                                    console.log("DuplicateCheckPreference TypeConfiguration FieldMappings MappedField Id : " + mappedField.getId());
                                    console.log("DuplicateCheckPreference TypeConfiguration FieldMappings MappedField Name : " + mappedField.getName());
                                    console.log("DuplicateCheckPreference TypeConfiguration FieldMappings MappedField APIName : " + mappedField.getAPIName());
                                }
                            }
                        }
                    }
                }
            } else if (responseHandler instanceof ZOHOCRMSDK.CheckDuplicatePreference.APIException) {
                const exception: ZOHOCRMSDK.CheckDuplicatePreference.APIException = responseHandler;
                console.log("Status: " + exception.getStatus().getValue());
                console.log("Code: " + exception.getCode().getValue());
                console.log("Details: ");
                const details = exception.getDetails();
                for (const [key, value] of Object.entries(details)) {
                    console.log(`${key}: ${value}`);
                }
                console.log("Message: " + exception.getMessage());
            }
        }
    }
}
GetDuplicateCheckPreference.initializeAndCall()
