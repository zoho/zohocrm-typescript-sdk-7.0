import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-7.0"

class CreateAuditlogExport {
    public static async createAuditlogExport() {
        let auditLogExportOperations = new ZOHOCRMSDK.AuditExportLog.AuditLogExportOperations();
        let request = new ZOHOCRMSDK.AuditExportLog.BodyWrapper();
        let auditLogExport: Array<ZOHOCRMSDK.AuditExportLog.AuditLogExport> = [];
        let auditLogExport1 = new ZOHOCRMSDK.AuditExportLog.AuditLogExport();
        let criteria = new ZOHOCRMSDK.AuditExportLog.Criteria();

        criteria.setComparator("between");

        let field = new ZOHOCRMSDK.AuditExportLog.Field();
        field.setAPIName("audited_time");
        criteria.setField(field);

        let values = [];
        values.push(new Date(2024, 2, 20, 10, 10, 19));
        values.push(new Date(2024, 2, 20, 10, 10, 10));
        criteria.setValue(values);

        auditLogExport1.setCriteria(criteria);
        auditLogExport.push(auditLogExport1);
        request.setAuditLogExport(auditLogExport);

        let response = await auditLogExportOperations.createAuditlogExport(request);

        if (response !== null) {
            console.log("Status Code: " + response.getStatusCode());
            let actionHandler = response.getObject();
            if (actionHandler instanceof ZOHOCRMSDK.AuditExportLog.ActionWrapper) {
                let actionWrapper: ZOHOCRMSDK.AuditExportLog.ActionWrapper = actionHandler;
                let actionResponses = actionWrapper.getAuditLogExport();
                for (let actionResponse of actionResponses) {
                    if (actionResponse instanceof ZOHOCRMSDK.AuditExportLog.SuccessResponse) {
                        let successResponse: ZOHOCRMSDK.AuditExportLog.SuccessResponse = actionResponse;
                        console.log("Status: " + successResponse.getStatus().getValue());
                        console.log("Code: " + successResponse.getCode().getValue());
                        console.log("Details: ");
                        for (let [key, value] of Object.entries(successResponse.getDetails())) {
                            console.log(`${key}: ${value}`);
                        }
                        console.log("Message: " + successResponse.getMessage());
                    } else if (actionResponse instanceof ZOHOCRMSDK.AuditExportLog.APIException) {
                        let exception: ZOHOCRMSDK.AuditExportLog.APIException = actionResponse;
                        console.log("Status: " + exception.getStatus().getValue());
                        console.log("Code: " + exception.getCode().getValue());
                        console.log("Details: ");
                        for (let [key, value] of Object.entries(exception.getDetails())) {
                            console.log(`${key}: ${value}`);
                        }
                        console.log("Message: " + exception.getMessage());
                    }
                }
            } else if (actionHandler instanceof ZOHOCRMSDK.AuditExportLog.APIException) {
                let exception: ZOHOCRMSDK.AuditExportLog.APIException = actionHandler;
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

    public static async initializeAndCall() {
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
        await CreateAuditlogExport.createAuditlogExport();
    }
}

CreateAuditlogExport.initializeAndCall();
