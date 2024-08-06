import * as ZOHOCRMSDK from "@zohocrm/typescript-sdk-7.0"
class GetExportedAuditLogs {

    static async getExportedAuditlogs() {
        const auditLogExportOperations = new ZOHOCRMSDK.AuditExportLog.AuditLogExportOperations();
        const response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.AuditExportLog.ResponseHandler.MasterModel> = await auditLogExportOperations.getExportedAuditlogs();

        if (response !== null) {
            console.log("Status Code: " + response.getStatusCode());

            if (response.getStatusCode() === 204) {
                console.log("No Content");
                return;
            }

            const responseHandler: ZOHOCRMSDK.AuditExportLog.ResponseHandler.MasterModel = response.getObject();

            if (responseHandler instanceof ZOHOCRMSDK.AuditExportLog.ResponseWrapper) {
                const responseWrapper: ZOHOCRMSDK.AuditExportLog.ResponseWrapper = responseHandler;
                const auditLogExports: ZOHOCRMSDK.AuditExportLog.AuditLogExport[] = responseWrapper.getAuditLogExport();

                if (auditLogExports != null) {
                    for (const auditLogExport of auditLogExports) {
                        const criteria: ZOHOCRMSDK.AuditExportLog.Criteria = auditLogExport.getCriteria();
                        if (criteria != null) {
                            this.printCriteria(criteria);
                        }
                        console.log("AuditLogExport Id: " + auditLogExport.getId());
                        console.log("AuditLogExport Status: " + auditLogExport.getStatus());

                        const createdBy: ZOHOCRMSDK.AuditExportLog.User = auditLogExport.getCreatedBy();
                        if (createdBy != null) {
                            console.log("AuditLogExport User Id: " + createdBy.getId());
                            console.log("AuditLogExport User Name: " + createdBy.getName());
                        }

                        const downloadLinks: string[] = auditLogExport.getDownloadLinks();
                        if (downloadLinks != null) {
                            downloadLinks.forEach(link =>
                                console.log("AuditLogExport DownloadLink: " + link)
                            );
                        }

                        console.log("AuditLogExport JobStartTime: " + auditLogExport.getJobStartTime());
                        console.log("AuditLogExport JobEndTime: " + auditLogExport.getJobEndTime());
                        console.log("AuditLogExport ExpiryDate: " + auditLogExport.getExpiryDate());
                    }
                }
            } else if (responseHandler instanceof ZOHOCRMSDK.AuditExportLog.APIException) {
                const exception: ZOHOCRMSDK.AuditExportLog.APIException = responseHandler;
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

    public static printCriteria(criteria: ZOHOCRMSDK.AuditExportLog.Criteria) {
        if (criteria.getComparator() != null) {
            console.log("ExportedAuditlogs Criteria Comparator: " + criteria.getComparator());
        }
        if (criteria.getValue() != null) {
            console.log("ExportedAuditlogs Criteria Value: " + criteria.getValue().toString());
        }
        if (criteria.getField() != null) {
            console.log("ExportedAuditlogs Criteria field name: " + criteria.getField().getAPIName());
        }
        const criteriaGroup = criteria.getGroup();
        if (criteriaGroup != null) {
            criteriaGroup.forEach(criteria1 => this.printCriteria(criteria1));
        }
        if (criteria.getGroupOperator() != null) {
            console.log("ExportedAuditlogs Criteria Group Operator: " + criteria.getGroupOperator());
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
        await GetExportedAuditLogs.getExportedAuditlogs();
    }
}
GetExportedAuditLogs.initializeAndCall()

