export enum EOperatorTypes {
  EqualTo = 1,
  GreaterOrEqualTo = 2,
  LessOrEqualTo = 3,
  GreaterThan = 4,
  LessThan = 5,
  ContainsText = 6,
  NotEqualTo = 7,
  Empty = 8,
  NotEmpty = 9,
  StartsWith = 10,
  DoesNotContainText = 11,
  DoesNotStartWith = 12,
  EndsWith = 13,
  DoesNotEndWith = 14,
  QuickFilter = 15
}

type TAfasConfigEnvType = 'production' | 'test' | 'accept';

export type TUpdateConnectorName =
  | 'KnAppointment'
  | 'KnUser'
  | 'KnCustomK01'
  | 'KnCustomK02'
  | 'KnCustomK03'
  | 'KnCustomK04'
  | 'KnCustomK05'
  | 'KnCustomK06'
  | 'KnCustomK07'
  | 'KnCustomK08'
  | 'KnCustomK09'
  | 'KnCustomK10'
  | 'KnPerson'
  | 'KnOrganisation'
  | 'KnContact'
  | 'KnSubject'
  | 'KnSubjectWorkflowReaction'
  | 'KnSubjectWorkflowReaction'
  | 'KnCoursGroupLines'
  | 'KnCourseMember'
  | 'KnCourseSessionMember'
  | 'KnCourseEvent'
  | 'KnProvApplication'
  | 'CmForecast'
  | 'KnSalesRelationOrg'
  | 'KnSalesRelationPer'
  | 'KnPurchaseRelationOrg'
  | 'KnPurchaseRelationPer'
  | 'KnAccount'
  | 'KnDimCode'
  | 'FiEntries'
  | 'FiEntriesCustom'
  | 'FiBudget'
  | 'FiInvoice'
  | 'FiElectronicInvoicePurchase'
  | 'KnCurrencyRates'
  | 'FiSepaDirectDebit'
  | 'KnBankTransaction'
  | 'FiContract'
  | 'FiReservation'
  | 'FiCommitment'
  | 'FiProcuration'
  | 'FiFixedAssets'
  | 'FiFixedAssetsSale'
  | 'FiFixedAssetsBuy'
  | 'PtDeclarationCorrection'
  | 'PtDeclaration'
  | 'PtFunction'
  | 'PtItemSet'
  | 'KnSreCostCentre'
  | 'PtCostPriceModel'
  | 'HrSalTable'
  | 'PtPlacementContract'
  | 'PtConceptPlacementContract'
  | 'PtPriceAgreement'
  | 'HrEmployeeDeposit'
  | 'FbItemCodeCustomer'
  | 'PtProject'
  | 'TxClientIB2019'
  | 'TxCFVpb2019'
  | 'TxClientVpb2019'
  | 'TxMachtiging'
  | 'TxKlaarzettenAangifte'
  | 'KnEmployee'
  | 'KnOrgUnit'
  | 'HrApplicant'
  | 'HrCreateApplicant'
  | 'HrOrgUnit'
  | 'HrCompMut'
  | 'HrVarValue'
  | 'HrIllness'
  | 'HrWellnessInSite'
  | 'HrAbsence'
  | 'HrAbsCorrection'
  | 'HrAbsCorrection'
  | 'HrDeclarationInSite'
  | 'HrCostCentre'
  | 'HrCostCarrier'
  | 'KnOrgEmrFun'
  | 'HrJudgement'
  | 'HrEmpCourse'
  | 'HrTimeRegSocSec'
  | 'KnDayContract'
  | 'HrEmpPaySlip'
  | 'FbSalesQuotation'
  | 'FbDirectInvoice'
  | 'FbSales'
  | 'FbFreeOrder'
  | 'FbSettleOrder'
  | 'FbPurch'
  | 'FbPurRequisition'
  | 'FbGoodsReceived'
  | 'FbConfrontation'
  | 'FbDeliveryNote'
  | 'FbDelNoteReceived'
  | 'FbItemArticle'
  | 'FbItemCodeCustomer'
  | 'FbProductGroup'
  | 'FbProductGroupLines'
  | 'FbWarTransferPrep'
  | 'FbWarTransferOut'
  | 'FbWarTransferIn'
  | 'FbUnitBasicItem'
  | 'FbExtraBarcode'
  | 'FbUpdateAdB'
  | 'FbComposition'
  | 'FbAssemblyPrep'
  | 'FbAssembly'
  | 'FbSalesPrice'
  | 'FbPurchPrice'
  | 'FbCostPrice'
  | 'FbStandardPrice'
  | 'FbItemCodeWarehouse'
  | 'FbItemCodeSupplier'
  | 'FbBitVatTarifGroup'
  | 'FbStockMutation'
  | 'FbStockMutation'
  | 'PtRealization'
  | 'PtRealizationWeek'
  | 'PtLinesToBeInvoiced'
  | 'PtProject'
  | 'KnTeamMember'
  | 'KnQuotation'
  | 'PtProjectProgress'
  | 'FbInstalment'
  | 'PtMonitor'
  | 'PtConProjectForecast'
  | 'PtMeasurement';

export type TCustomConnectorName = '';

export interface IAfasConfig {
  env: string;
  envType: TAfasConfigEnvType;
  apiKey: string;
}

export interface IAfasConnectorConfig {
  env: string;
  envType: TAfasConfigEnvType;
  apiKey: string;
  connector?: string;
}

export type TOrderBy = {
  order: 'ASC' | 'DESC'
  fieldId: string
}[]

export type TFilterOr = {
  filtervalue: string,
  operatortype: EOperatorTypes,
}[]

export type TFilter = {
  filterfieldid: string,
  filtervalue: string,
  operatortype: EOperatorTypes,
  or?: TFilterOr
}[]

export interface IFilterConfig { 
  skip?: number, 
  take?: number, 
  orderby?: TOrderBy
  filter?: TFilter,
  jsonFilter?: object
}
// export interface IGetConnectorConfig {
//   skip?: number;
//   take?: number;
//   sortOnFields?: IGetConnectorConfigSortOnField;
//   filters?: IGetconnectorConfigFilter[];
//   jsonFilter?: object;
// }

// interface IGetConnectorConfigSortOnField {
//   [key: string]: IConfigSortOnFieldObject;
// }

// interface IGetconnectorConfigFilter {
//   filterId: string;
//   filterValue: string;
//   operatorType: EOperatorTypes
// }

// interface IConfigSortOnFieldObject {
//   type: 'ascending' | 'descending';
// }

export interface IConstants {
  [key: string]: string;
}

export type THttpMethods = 'GET' | 'POST' | 'PUT' | 'DELETE';

export interface IAfasGetResponse {
  skip: number;
  take: number;
  rows: object[];
}

export interface IAfasMetaInfo {
  id: string;
  description?: string;
  name?: string;
  fields: object[];
  objects?: IAfasMetaInfo[];
}
