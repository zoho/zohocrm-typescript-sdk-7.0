// core file
import * as Coql from "./core/com/zoho/crm/api/coql/import_coql";
import * as DeleteTransferUsers from "./core/com/zoho/crm/api/users_transfer_delete/import_users_transfer_delete";
import * as TypeUserUsers from "./core/com/zoho/crm/api/user_type_users/import_user_type_users";
import * as AssociateEmail from "./core/com/zoho/crm/api/associate_email/import_associate_email";
import * as LinksUnsubscribe from "./core/com/zoho/crm/api/unsubscribe_links/import_unsubscribe_links";
import * as EmailUnblock from "./core/com/zoho/crm/api/unblock_email/import_unblock_email";
import * as Layouts from "./core/com/zoho/crm/api/layouts/import_layouts";
import * as GroupsVariable from "./core/com/zoho/crm/api/variable_groups/import_variable_groups";
import * as Webforms from "./core/com/zoho/crm/api/webforms/import_webforms";
import * as PreferenceService from "./core/com/zoho/crm/api/service_preference/import_service_preference";
import * as BulkRead from "./core/com/zoho/crm/api/bulk_read/import_bulk_read";
import * as HoursShift from "./core/com/zoho/crm/api/shift_hours/import_shift_hours";
import * as Pipeline from "./core/com/zoho/crm/api/pipeline/import_pipeline";
import * as DependencyFieldMap from "./core/com/zoho/crm/api/field_map_dependency/import_field_map_dependency";
import * as ConvertInventory from "./core/com/zoho/crm/api/inventory_convert/import_inventory_convert";
import * as TerritoriesUsers from "./core/com/zoho/crm/api/users_territories/import_users_territories";
import * as AppointmentPreference from "./core/com/zoho/crm/api/appointment_preference/import_appointment_preference";
import * as UnavailabilityUsers from "./core/com/zoho/crm/api/users_unavailability/import_users_unavailability";
import * as Fields from "./core/com/zoho/crm/api/fields/import_fields";
import * as Blueprint from "./core/com/zoho/crm/api/blueprint/import_blueprint";
import * as PreferencePrivacy from "./core/com/zoho/crm/api/privacy_preference/import_privacy_preference";
import * as Taxes from "./core/com/zoho/crm/api/taxes/import_taxes";
import * as Roles from "./core/com/zoho/crm/api/roles/import_roles";
import * as EmailRecordsRelated from "./core/com/zoho/crm/api/email_related_records/import_email_related_records";
import * as Modules from "./core/com/zoho/crm/api/modules/import_modules";
import * as InvitePortal from "./core/com/zoho/crm/api/portal_invite/import_portal_invite";
import * as Attachments from "./core/com/zoho/crm/api/attachments/import_attachments";
import * as GlobalPicklists from "./core/com/zoho/crm/api/global_picklists/import_global_picklists";
import * as AndFindMerge from "./core/com/zoho/crm/api/find_and_merge/import_find_and_merge";
import * as Timelines from "./core/com/zoho/crm/api/timelines/import_timelines";
import * as ContactRoles from "./core/com/zoho/crm/api/contact_roles/import_contact_roles";
import * as GroupsUser from "./core/com/zoho/crm/api/user_groups/import_user_groups";
import * as EntityScores from "./core/com/zoho/crm/api/entity_scores/import_entity_scores";
import * as ConversionOption from "./core/com/zoho/crm/api/conversion_option/import_conversion_option";
import * as Portals from "./core/com/zoho/crm/api/portals/import_portals";
import * as RulesScoring from "./core/com/zoho/crm/api/scoring_rules/import_scoring_rules";
import * as AvailableCurrencies from "./core/com/zoho/crm/api/available_currencies/import_available_currencies";
import * as Digest from "./core/com/zoho/crm/api/digest/import_digest";
import * as MailMerge from "./core/com/zoho/crm/api/mail_merge/import_mail_merge";
import * as Org from "./core/com/zoho/crm/api/org/import_org";
import * as FiscalYear from "./core/com/zoho/crm/api/fiscal_year/import_fiscal_year";
import * as ConfigurationLockingRecord from "./core/com/zoho/crm/api/record_locking_configuration/import_record_locking_configuration";
import * as Users from "./core/com/zoho/crm/api/users/import_users";
import * as ChangeMassOwner from "./core/com/zoho/crm/api/mass_change_owner/import_mass_change_owner";
import * as CustomViews from "./core/com/zoho/crm/api/custom_views/import_custom_views";
import * as Tags from "./core/com/zoho/crm/api/tags/import_tags";
import * as EmailTemplates from "./core/com/zoho/crm/api/email_templates/import_email_templates";
import * as Files from "./core/com/zoho/crm/api/files/import_files";
import * as AppsConfigurablePrivacy from "./core/com/zoho/crm/api/privacy_configurable_apps/import_privacy_configurable_apps";
import * as ConvertMass from "./core/com/zoho/crm/api/mass_convert/import_mass_convert";
import * as ComposeEmailMeta from "./core/com/zoho/crm/api/email_compose_meta/import_email_compose_meta";
import * as Templates from "./core/com/zoho/crm/api/templates/import_templates";
import * as Definition from "./core/com/zoho/crm/api/definition/import_definition";
import * as Territories from "./core/com/zoho/crm/api/territories/import_territories";
import * as DraftsEmail from "./core/com/zoho/crm/api/email_drafts/import_email_drafts";
import * as CancelMeetings from "./core/com/zoho/crm/api/cancel_meetings/import_cancel_meetings";
import * as TerritoryUsers from "./core/com/zoho/crm/api/territory_users/import_territory_users";
import * as BusinessHours from "./core/com/zoho/crm/api/business_hours/import_business_hours";
import * as MetaPortals from "./core/com/zoho/crm/api/portals_meta/import_portals_meta";
import * as DetailsEmailSharing from "./core/com/zoho/crm/api/email_sharing_details/import_email_sharing_details";
import * as RecordsShare from "./core/com/zoho/crm/api/share_records/import_share_records";
import * as InventoryTemplates from "./core/com/zoho/crm/api/inventory_templates/import_inventory_templates";
import * as Features from "./core/com/zoho/crm/api/features/import_features";
import * as AddressesFrom from "./core/com/zoho/crm/api/from_addresses/import_from_addresses";
import * as Holidays from "./core/com/zoho/crm/api/holidays/import_holidays";
import * as Wizards from "./core/com/zoho/crm/api/wizards/import_wizards";
import * as Profiles from "./core/com/zoho/crm/api/profiles/import_profiles";
import * as MailSend from "./core/com/zoho/crm/api/send_mail/import_send_mail";
import * as CvidDeleteMass from "./core/com/zoho/crm/api/mass_delete_cvid/import_mass_delete_cvid";
import * as ContactDealRoles from "./core/com/zoho/crm/api/deal_contact_roles/import_deal_contact_roles";
import * as Currencies from "./core/com/zoho/crm/api/currencies/import_currencies";
import * as ConvertLead from "./core/com/zoho/crm/api/convert_lead/import_convert_lead";
import * as Notes from "./core/com/zoho/crm/api/notes/import_notes";
import * as IscSignature from "./core/com/zoho/crm/api/isc_signature/import_isc_signature";
import * as Backup from "./core/com/zoho/crm/api/backup/import_backup";
import * as AttachmentsField from "./core/com/zoho/crm/api/field_attachments/import_field_attachments";
import * as ConvertInventoryMass from "./core/com/zoho/crm/api/inventory_mass_convert/import_inventory_mass_convert";
import * as ListsRelated from "./core/com/zoho/crm/api/related_lists/import_related_lists";
import * as HistoryReschedule from "./core/com/zoho/crm/api/reschedule_history/import_reschedule_history";
import * as Variables from "./core/com/zoho/crm/api/variables/import_variables";
import * as ChangeOwner from "./core/com/zoho/crm/api/change_owner/import_change_owner";
import * as LockingRecord from "./core/com/zoho/crm/api/record_locking/import_record_locking";
import * as RecordsRelated from "./core/com/zoho/crm/api/related_records/import_related_records";
import * as DownloadImagesInline from "./core/com/zoho/crm/api/download_inline_images/import_download_inline_images";
import * as AssignmentRules from "./core/com/zoho/crm/api/assignment_rules/import_assignment_rules";
import * as Notifications from "./core/com/zoho/crm/api/notifications/import_notifications";
import * as BulkWrite from "./core/com/zoho/crm/api/bulk_write/import_bulk_write";
import * as AttachmentsDownload from "./core/com/zoho/crm/api/download_attachments/import_download_attachments";
import * as PortalTypeUser from "./core/com/zoho/crm/api/portal_user_type/import_portal_user_type";
import * as Record from "./core/com/zoho/crm/api/record/import_record";
import * as ComplianceHipaa from "./core/com/zoho/crm/api/hipaa_compliance/import_hipaa_compliance";

// exception
import { SDKException } from "./core/com/zoho/crm/api/exception/sdk_exception.js";

// token store
import { DBBuilder } from "./models/authenticator/store/db_builder.js";
import { DBStore } from "./models/authenticator/store/db_store.js";
import { FileStore } from "./models/authenticator/store/file_store.js";
import * as TokenStore from "./models/authenticator/store/token_store.js";

// authenticator
import { OAuthBuilder } from "./models/authenticator/oauth_builder.js";
import { OAuthToken } from "./models/authenticator/oauth_token.js";
import * as Token from "./models/authenticator/token.js";

// controllers
import { APIHTTPConnector } from "./routes/controllers/api_http_connector.js";
import { APIResponse } from "./routes/controllers/api_response.js";

//dc
import { AUDataCenter } from "./routes/dc/au_data_center.js";
import { CNDataCenter } from "./routes/dc/cn_data_center.js";
import { DataCenter } from "./routes/dc/data_center.js";
import { Environment } from "./routes/dc/environment.js";
import { EUDataCenter } from "./routes/dc/eu_data_center.js";
import { INDataCenter } from "./routes/dc/in_data_center.js";
import { USDataCenter } from "./routes/dc/us_data_center.js";
import { JPDataCenter } from "./routes/dc/jp_data_center.js";
import { CADataCenter } from "./routes/dc/ca_data_center.js";

// logger
import { LogBuilder } from "./routes/logger/log_builder.js";
import { Logger } from "./routes/logger/logger.js";
import { Levels } from "./routes/logger/logger.js";
import { SDKLogger } from "./routes/logger/sdk_logger.js";

// middlewares
import { CommonAPIHandler } from "./routes/middlewares/common_api_handler.js";

// root files
import { HeaderMap } from "./routes/header_map.js";
import { Header } from "./routes/header.js";
import { InitializeBuilder } from "./routes/initialize_builder.js";
import { Initializer } from "./routes/initializer.js";
import { Param } from "./routes/param.js";
import { ParameterMap } from "./routes/parameter_map.js";
import { ProxyBuilder } from "./routes/proxy_builder.js";
import { RequestProxy } from "./routes/request_proxy.js";
import { SDKConfigBuilder } from "./routes/sdk_config_builder.js";
import { SDKConfig } from "./routes/sdk_config.js";
import { UserSignature } from "./routes/user_signature.js";

//util files
import { Choice } from "./utils/util/choice.js";
import { Constants } from "./utils/util/constants.js";
import { Converter } from "./utils/util/converter.js";
import { DatatypeConverter } from "./utils/util/datatype_converter.js";
import { Downloader } from "./utils/util/downloader.js";
import { FormDataConverter } from "./utils/util/form_data_converter.js";
import { HeaderParamValidator } from "./utils/util/header_param_validator.js";
import { JSONConverter } from "./utils/util/json_converter.js";
import { ModuleFieldsHandler } from "./utils/util/module_fields_handler.js";
import { StreamWrapper } from "./utils/util/stream_wrapper.js";
import { Utility } from "./utils/util/utility.js";
import { XMLConverter } from "./utils/util/xml_converter.js";
class zohocrmsdk {
		Coql;
	DeleteTransferUsers;
	TypeUserUsers;
	AssociateEmail;
	LinksUnsubscribe;
	EmailUnblock;
	Layouts;
	GroupsVariable;
	Webforms;
	PreferenceService;
	BulkRead;
	HoursShift;
	Pipeline;
	DependencyFieldMap;
	ConvertInventory;
	TerritoriesUsers;
	AppointmentPreference;
	UnavailabilityUsers;
	Fields;
	Blueprint;
	PreferencePrivacy;
	Taxes;
	Roles;
	EmailRecordsRelated;
	Modules;
	InvitePortal;
	Attachments;
	GlobalPicklists;
	AndFindMerge;
	Timelines;
	ContactRoles;
	GroupsUser;
	EntityScores;
	ConversionOption;
	Portals;
	RulesScoring;
	AvailableCurrencies;
	Digest;
	MailMerge;
	Org;
	FiscalYear;
	ConfigurationLockingRecord;
	Users;
	ChangeMassOwner;
	CustomViews;
	Tags;
	EmailTemplates;
	Files;
	AppsConfigurablePrivacy;
	ConvertMass;
	ComposeEmailMeta;
	Templates;
	Definition;
	Territories;
	DraftsEmail;
	CancelMeetings;
	TerritoryUsers;
	BusinessHours;
	MetaPortals;
	DetailsEmailSharing;
	RecordsShare;
	InventoryTemplates;
	Features;
	AddressesFrom;
	Holidays;
	Wizards;
	Profiles;
	MailSend;
	CvidDeleteMass;
	ContactDealRoles;
	Currencies;
	ConvertLead;
	Notes;
	IscSignature;
	Backup;
	AttachmentsField;
	ConvertInventoryMass;
	ListsRelated;
	HistoryReschedule;
	Variables;
	ChangeOwner;
	LockingRecord;
	RecordsRelated;
	DownloadImagesInline;
	AssignmentRules;
	Notifications;
	BulkWrite;
	AttachmentsDownload;
	PortalTypeUser;
	Record;
	ComplianceHipaa;

	SDKException;

	DBBuilder;
	DBStore;
	FileStore;
	TokenStore;

	OAuthBuilder;
	OAuthToken;
	Token;

	APIHTTPConnector;
	APIResponse;

	AUDataCenter;
	CNDataCenter;
	DataCenter;
	Environment;
	EUDataCenter;
	INDataCenter;
	USDataCenter;
	JPDataCenter;
	CADataCenter;

	LogBuilder;
	Logger;
	Levels;
	SDKLogger;

	CommonAPIHandler;

	HeaderMap;
	Header;
	InitializeBuilder;
	Initializer;
	Param;
	ParameterMap;
	ProxyBuilder;
	RequestProxy;
	SDKConfigBuilder;
	SDKConfig;
	UserSignature;

	Choice;
	Constants;
	Converter;
	DatatypeConverter;
	Downloader;
	FormDataConverter;
	HeaderParamValidator;
	JSONConverter;
	ModuleFieldsHandler;
	StreamWrapper;
	Utility;
	XMLConverter;

  constructor() {
		this.Coql = Coql;
	this.DeleteTransferUsers = DeleteTransferUsers;
	this.TypeUserUsers = TypeUserUsers;
	this.AssociateEmail = AssociateEmail;
	this.LinksUnsubscribe = LinksUnsubscribe;
	this.EmailUnblock = EmailUnblock;
	this.Layouts = Layouts;
	this.GroupsVariable = GroupsVariable;
	this.Webforms = Webforms;
	this.PreferenceService = PreferenceService;
	this.BulkRead = BulkRead;
	this.HoursShift = HoursShift;
	this.Pipeline = Pipeline;
	this.DependencyFieldMap = DependencyFieldMap;
	this.ConvertInventory = ConvertInventory;
	this.TerritoriesUsers = TerritoriesUsers;
	this.AppointmentPreference = AppointmentPreference;
	this.UnavailabilityUsers = UnavailabilityUsers;
	this.Fields = Fields;
	this.Blueprint = Blueprint;
	this.PreferencePrivacy = PreferencePrivacy;
	this.Taxes = Taxes;
	this.Roles = Roles;
	this.EmailRecordsRelated = EmailRecordsRelated;
	this.Modules = Modules;
	this.InvitePortal = InvitePortal;
	this.Attachments = Attachments;
	this.GlobalPicklists = GlobalPicklists;
	this.AndFindMerge = AndFindMerge;
	this.Timelines = Timelines;
	this.ContactRoles = ContactRoles;
	this.GroupsUser = GroupsUser;
	this.EntityScores = EntityScores;
	this.ConversionOption = ConversionOption;
	this.Portals = Portals;
	this.RulesScoring = RulesScoring;
	this.AvailableCurrencies = AvailableCurrencies;
	this.Digest = Digest;
	this.MailMerge = MailMerge;
	this.Org = Org;
	this.FiscalYear = FiscalYear;
	this.ConfigurationLockingRecord = ConfigurationLockingRecord;
	this.Users = Users;
	this.ChangeMassOwner = ChangeMassOwner;
	this.CustomViews = CustomViews;
	this.Tags = Tags;
	this.EmailTemplates = EmailTemplates;
	this.Files = Files;
	this.AppsConfigurablePrivacy = AppsConfigurablePrivacy;
	this.ConvertMass = ConvertMass;
	this.ComposeEmailMeta = ComposeEmailMeta;
	this.Templates = Templates;
	this.Definition = Definition;
	this.Territories = Territories;
	this.DraftsEmail = DraftsEmail;
	this.CancelMeetings = CancelMeetings;
	this.TerritoryUsers = TerritoryUsers;
	this.BusinessHours = BusinessHours;
	this.MetaPortals = MetaPortals;
	this.DetailsEmailSharing = DetailsEmailSharing;
	this.RecordsShare = RecordsShare;
	this.InventoryTemplates = InventoryTemplates;
	this.Features = Features;
	this.AddressesFrom = AddressesFrom;
	this.Holidays = Holidays;
	this.Wizards = Wizards;
	this.Profiles = Profiles;
	this.MailSend = MailSend;
	this.CvidDeleteMass = CvidDeleteMass;
	this.ContactDealRoles = ContactDealRoles;
	this.Currencies = Currencies;
	this.ConvertLead = ConvertLead;
	this.Notes = Notes;
	this.IscSignature = IscSignature;
	this.Backup = Backup;
	this.AttachmentsField = AttachmentsField;
	this.ConvertInventoryMass = ConvertInventoryMass;
	this.ListsRelated = ListsRelated;
	this.HistoryReschedule = HistoryReschedule;
	this.Variables = Variables;
	this.ChangeOwner = ChangeOwner;
	this.LockingRecord = LockingRecord;
	this.RecordsRelated = RecordsRelated;
	this.DownloadImagesInline = DownloadImagesInline;
	this.AssignmentRules = AssignmentRules;
	this.Notifications = Notifications;
	this.BulkWrite = BulkWrite;
	this.AttachmentsDownload = AttachmentsDownload;
	this.PortalTypeUser = PortalTypeUser;
	this.Record = Record;
	this.ComplianceHipaa = ComplianceHipaa;

    this.SDKException = SDKException;

    this.DBBuilder = DBBuilder;
    this.DBStore = DBStore;
    this.FileStore = FileStore;
    this.TokenStore = TokenStore;

    this.OAuthBuilder = OAuthBuilder;
    this.OAuthToken = OAuthToken;
    this.Token = Token;

    this.APIHTTPConnector = APIHTTPConnector;
    this.APIResponse = APIResponse;

    this.AUDataCenter = AUDataCenter;
    this.CNDataCenter = CNDataCenter;
    this.DataCenter = DataCenter;
    this.Environment = Environment;
    this.EUDataCenter = EUDataCenter;
    this.INDataCenter = INDataCenter;
    this.USDataCenter = USDataCenter;
    this.JPDataCenter = JPDataCenter;
	this.CADataCenter = CADataCenter;

    this.LogBuilder = LogBuilder;
    this.Logger = Logger;
    this.Levels = Levels;
    this.SDKLogger = SDKLogger;

    this.CommonAPIHandler = CommonAPIHandler;

    this.HeaderMap = HeaderMap;
    this.Header = Header;
    this.InitializeBuilder = InitializeBuilder;
    this.Initializer = Initializer;
    this.Param = Param;
    this.ParameterMap = ParameterMap;
    this.ProxyBuilder = ProxyBuilder;
    this.RequestProxy = RequestProxy;
    this.SDKConfigBuilder = SDKConfigBuilder;
    this.SDKConfig = SDKConfig;
    this.UserSignature = UserSignature;

    this.Choice = Choice;
    this.Constants = Constants;
    this.Converter = Converter;
    this.DatatypeConverter = DatatypeConverter;
    this.Downloader = Downloader;
    this.FormDataConverter = FormDataConverter;
    this.HeaderParamValidator = HeaderParamValidator;
    this.JSONConverter = JSONConverter;
    this.ModuleFieldsHandler = ModuleFieldsHandler;
    this.StreamWrapper = StreamWrapper;
    this.Utility = Utility;
    this.XMLConverter = XMLConverter;
  }
}
//
export default zohocrmsdk;
//
export {
		Coql,
	DeleteTransferUsers,
	TypeUserUsers,
	AssociateEmail,
	LinksUnsubscribe,
	EmailUnblock,
	Layouts,
	GroupsVariable,
	Webforms,
	PreferenceService,
	BulkRead,
	HoursShift,
	Pipeline,
	DependencyFieldMap,
	ConvertInventory,
	TerritoriesUsers,
	AppointmentPreference,
	UnavailabilityUsers,
	Fields,
	Blueprint,
	PreferencePrivacy,
	Taxes,
	Roles,
	EmailRecordsRelated,
	Modules,
	InvitePortal,
	Attachments,
	GlobalPicklists,
	AndFindMerge,
	Timelines,
	ContactRoles,
	GroupsUser,
	EntityScores,
	ConversionOption,
	Portals,
	RulesScoring,
	AvailableCurrencies,
	Digest,
	MailMerge,
	Org,
	FiscalYear,
	ConfigurationLockingRecord,
	Users,
	ChangeMassOwner,
	CustomViews,
	Tags,
	EmailTemplates,
	Files,
	AppsConfigurablePrivacy,
	ConvertMass,
	ComposeEmailMeta,
	Templates,
	Definition,
	Territories,
	DraftsEmail,
	CancelMeetings,
	TerritoryUsers,
	BusinessHours,
	MetaPortals,
	DetailsEmailSharing,
	RecordsShare,
	InventoryTemplates,
	Features,
	AddressesFrom,
	Holidays,
	Wizards,
	Profiles,
	MailSend,
	CvidDeleteMass,
	ContactDealRoles,
	Currencies,
	ConvertLead,
	Notes,
	IscSignature,
	Backup,
	AttachmentsField,
	ConvertInventoryMass,
	ListsRelated,
	HistoryReschedule,
	Variables,
	ChangeOwner,
	LockingRecord,
	RecordsRelated,
	DownloadImagesInline,
	AssignmentRules,
	Notifications,
	BulkWrite,
	AttachmentsDownload,
	PortalTypeUser,
	Record,
	ComplianceHipaa,

	SDKException,
	DBBuilder,
	DBStore,
	FileStore,
	TokenStore,
	OAuthBuilder,
	OAuthToken,
	Token,
	APIHTTPConnector,
	APIResponse,
	AUDataCenter,
	CNDataCenter,
	DataCenter,
	Environment,
	EUDataCenter,
	INDataCenter,
	USDataCenter,
	JPDataCenter,
	CADataCenter,
	LogBuilder,
	Logger,
	Levels,
	SDKLogger,
	CommonAPIHandler,
	HeaderMap,
	Header,
	InitializeBuilder,
	Initializer,
	Param,
	ParameterMap,
	ProxyBuilder,
	RequestProxy,
	SDKConfigBuilder,
	SDKConfig,
	UserSignature,
	Choice,
	Constants,
	Converter,
	DatatypeConverter,
	Downloader,
	FormDataConverter,
	HeaderParamValidator,
	JSONConverter,
	ModuleFieldsHandler,
	StreamWrapper,
	Utility,
	XMLConverter,
};
