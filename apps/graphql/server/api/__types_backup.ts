
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum DisplayType {
    PROPERTIES = "PROPERTIES",
    TABLE = "TABLE"
}

export enum ParsingModel {
    DataDomain = "DataDomain",
    EMCUNITY = "EMCUNITY",
    EMCVNX = "EMCVNX",
    EMCVNXE = "EMCVNXE",
    HP3PAR = "HP3PAR",
    NETAPP = "NETAPP",
    SYMMETRIX = "SYMMETRIX",
    XTREMIO = "XTREMIO"
}

export class SymmetrixFilter {
    index?: Nullable<number>;
    serialNumber?: Nullable<string>;
}

export interface ParserQuery {
    details?: Nullable<ConfigFile>;
    id: string;
}

export interface ValidationModel {
    validationResult?: Nullable<ValidationResult>;
}

export class AlternateSku {
    sku?: Nullable<string>;
}

export class Block {
    displayType?: Nullable<DisplayType>;
    subTitle?: Nullable<string>;
    title?: Nullable<string>;
}

export class Cage implements ValidationModel {
    cage?: Nullable<string>;
    manufacturer?: Nullable<string>;
    name?: Nullable<string>;
    serialNumber?: Nullable<string>;
    sku?: Nullable<string>;
    validationResult?: Nullable<ValidationResult>;
}

export class CageSummaries {
    assem_Part?: Nullable<string>;
    cages?: Nullable<Nullable<Cage>[]>;
    quantity?: Nullable<number>;
}

export class ConfigFile {
    lastModifiedByName?: Nullable<string>;
    lastModifiedOn?: Nullable<string>;
    name?: Nullable<string>;
    parsedResult?: Nullable<ParsedResult>;
    partitionKey?: Nullable<string>;
    rawFileLocation?: Nullable<string>;
    status?: Nullable<string>;
    type?: Nullable<string>;
}

export class DataDomain {
    diskSummaries?: Nullable<Nullable<DataDomainDiskSummary>[]>;
    enclosures?: Nullable<Nullable<DataDomainEnclosure>[]>;
    model?: Nullable<string>;
    quantity?: Nullable<number>;
}

export class DataDomainDisk implements ValidationModel {
    capacity?: Nullable<string>;
    disk?: Nullable<number>;
    enclosure?: Nullable<number>;
    firmware?: Nullable<string>;
    manufacturer?: Nullable<string>;
    model?: Nullable<string>;
    serialNumber?: Nullable<string>;
    slot?: Nullable<string>;
    type?: Nullable<string>;
    validationResult?: Nullable<ValidationResult>;
}

export class DataDomainDiskSummary {
    capacity?: Nullable<string>;
    disks?: Nullable<Nullable<DataDomainDisk>[]>;
    quantity?: Nullable<number>;
    type?: Nullable<string>;
}

export class DataDomainEnclosure implements ValidationModel {
    capacity?: Nullable<number>;
    enclosure?: Nullable<number>;
    modelNumber?: Nullable<string>;
    oemName?: Nullable<string>;
    oemValue?: Nullable<string>;
    serialNumber?: Nullable<string>;
    state?: Nullable<string>;
    validationResult?: Nullable<ValidationResult>;
}

export class DataDomainQuery implements ParserQuery {
    details?: Nullable<ConfigFile>;
    id: string;
    summary?: Nullable<Nullable<DataDomain>[]>;
}

export class DataPair {
    index: number;
    key?: BlockDataKey;
    value?: BlockDataValue;
}

export class DiskItem {
    cage?: Nullable<string>;
    id?: Nullable<string>;
    itemMasterDisk?: Nullable<ItemMasterDisk>;
    manufacturer?: Nullable<string>;
    model?: Nullable<string>;
    serialNumber?: Nullable<string>;
}

export class DiskSummaries {
    disks?: Nullable<Nullable<DiskItem>[]>;
    model?: Nullable<string>;
    quantity?: Nullable<number>;
}

export class DiskSummary {
    disks?: Nullable<Nullable<Drive>[]>;
    quantity?: Nullable<number>;
    rpm?: Nullable<string>;
    size?: Nullable<string>;
    supportedStatus?: Nullable<string>;
    type?: Nullable<string>;
}

export class Drive implements ValidationModel {
    firmware?: Nullable<string>;
    itemMasterDisk?: Nullable<ItemMasterDisk>;
    location?: Nullable<string>;
    manufacturer?: Nullable<string>;
    model?: Nullable<string>;
    sect?: Nullable<string>;
    serialNumber?: Nullable<string>;
    validationResult?: Nullable<ValidationResult>;
}

export class EmcSymmetrixQuery implements ParserQuery {
    details?: Nullable<ConfigFile>;
    id: string;
    summary?: Nullable<Nullable<SymmetrixSystem>[]>;
}

export class EmcUnity {
    unityDaeDiskSummaries?: Nullable<Nullable<EmcVnxeDiskSummary>[]>;
    unityDaeEnclosureSummaries?: Nullable<Nullable<EmcVnxeEnclosureSummary>[]>;
    unityDpeDiskSummaries?: Nullable<Nullable<EmcVnxeDiskSummary>[]>;
    unityDpeEnclosureSummaries?: Nullable<Nullable<EmcVnxeEnclosureSummary>[]>;
}

export class EmcUnityQuery implements ParserQuery {
    details?: Nullable<ConfigFile>;
    id: string;
    summary?: Nullable<EmcUnity>;
}

export class EmcVnx {
    emcvnxChassisSummaries?: Nullable<Nullable<EmvVnxDiskChassisSummary>[]>;
    emcvnxDiskSummaries?: Nullable<Nullable<EmcVnxDiskSummary>[]>;
}

export class EmcVnxDiskChassis implements ValidationModel {
    assemblyName?: Nullable<string>;
    busNumber?: Nullable<number>;
    emcPartNumber?: Nullable<string>;
    emcSerialNumber?: Nullable<string>;
    enclosureNumber?: Nullable<number>;
    itemMasterExpansion?: Nullable<ItemMasterExpansion>;
    sparePartNumber?: Nullable<string>;
    validationResult?: Nullable<ValidationResult>;
}

export class EmcVnxDiskSummary {
    disks?: Nullable<Nullable<VnxDisk>[]>;
    model?: Nullable<string>;
    quantity?: Nullable<number>;
}

export class EmcVnxQuery implements ParserQuery {
    details?: Nullable<ConfigFile>;
    id: string;
    summary?: Nullable<EmcVnx>;
}

export class EmcVnxe {
    vnxeDaeDiskSummaries?: Nullable<Nullable<EmcVnxeDiskSummary>[]>;
    vnxeDaeEnclosureSummaries?: Nullable<Nullable<EmcVnxeEnclosureSummary>[]>;
    vnxeDpeDiskSummaries?: Nullable<Nullable<EmcVnxeDiskSummary>[]>;
    vnxeDpeEnclosureSummaries?: Nullable<Nullable<EmcVnxeEnclosureSummary>[]>;
}

export class EmcVnxeDisk implements ValidationModel {
    enclosure?: Nullable<string>;
    itemMasterDisk?: Nullable<ItemMasterDisk>;
    manufacturer?: Nullable<string>;
    model?: Nullable<string>;
    number?: Nullable<number>;
    partNumber?: Nullable<string>;
    serialNumber?: Nullable<string>;
    sparePartNumber?: Nullable<string>;
    sparePartSupportability?: Nullable<string>;
    validationResult?: Nullable<ValidationResult>;
}

export class EmcVnxeDiskSummary {
    disks?: Nullable<Nullable<EmcVnxeDisk>[]>;
    partNumber?: Nullable<string>;
    quantity?: Nullable<number>;
}

export class EmcVnxeEnclosure implements ValidationModel {
    manufacturer?: Nullable<string>;
    model?: Nullable<string>;
    name?: Nullable<string>;
    partNumber?: Nullable<string>;
    serialNumber?: Nullable<string>;
    sparePartNumber?: Nullable<string>;
    sparePartSupportability?: Nullable<string>;
    validationResult?: Nullable<ValidationResult>;
}

export class EmcVnxeEnclosureSummary {
    diskFormFactor?: Nullable<string>;
    enclosures?: Nullable<Nullable<EmcVnxeEnclosure>[]>;
    quantity?: Nullable<number>;
}

export class EmcVnxeParserQuery implements ParserQuery {
    details?: Nullable<ConfigFile>;
    id: string;
    vnxeDaeDisks?: Nullable<Nullable<EmcVnxeDiskSummary>[]>;
    vnxeDaeEnclosures?: Nullable<Nullable<EmcVnxeEnclosureSummary>[]>;
    vnxeDpeDisks?: Nullable<Nullable<EmcVnxeDiskSummary>[]>;
    vnxeDpeEnclosures?: Nullable<Nullable<EmcVnxeEnclosureSummary>[]>;
}

export class EmvVnxDiskChassisSummary {
    chassis?: Nullable<Nullable<EmcVnxDiskChassis>[]>;
    description?: Nullable<string>;
    formFactor?: Nullable<string>;
    partNumber?: Nullable<string>;
    quantity?: Nullable<number>;
}

export class Hp3Par {
    hp3parCageSummaries?: Nullable<Nullable<CageSummaries>[]>;
    hp3parDiskSummaries?: Nullable<Nullable<DiskSummaries>[]>;
    hp3parNodeSummaries?: Nullable<Nullable<NodeSummaries>[]>;
}

export class Hp3ParQuery implements ParserQuery {
    details?: Nullable<ConfigFile>;
    id: string;
    summary?: Nullable<Hp3Par>;
}

export class ItemMasterDisk {
    alternates?: Nullable<Nullable<AlternateSku>[]>;
    capacity?: Nullable<string>;
    container?: Nullable<string>;
    formFactor?: Nullable<string>;
    id?: Nullable<string>;
    interface?: Nullable<string>;
    manufacturer?: Nullable<string>;
    partitionKey?: Nullable<string>;
    ref?: Nullable<Reference>;
    sku?: Nullable<string>;
    speed?: Nullable<string>;
    supportedStatus?: Nullable<string>;
    transferRate?: Nullable<string>;
    type?: Nullable<string>;
}

export class ItemMasterExpansion {
    description?: Nullable<string>;
    formFactor?: Nullable<string>;
    ref?: Nullable<Reference>;
    sku?: Nullable<string>;
}

export class LastModified {
    by?: Nullable<ModifiedBy>;
    on?: Nullable<string>;
}

export class ModifiedBy {
    email?: Nullable<string>;
    name?: Nullable<string>;
}

export class NetappQuery implements ParserQuery {
    details?: Nullable<ConfigFile>;
    id: string;
    summary?: Nullable<NetappSystem>;
}

export class NetappSummaryShelf implements ValidationModel {
    firmware?: Nullable<string>;
    model?: Nullable<string>;
    module?: Nullable<string>;
    shelfKey?: Nullable<string>;
    shelfName?: Nullable<string>;
    validationResult?: Nullable<ValidationResult>;
}

export class NetappSummaryShelfSummary {
    diskSummaries?: Nullable<Nullable<DiskSummary>[]>;
    model?: Nullable<string>;
    module?: Nullable<string>;
    quantity?: Nullable<number>;
    shelfs?: Nullable<Nullable<NetappSummaryShelf>[]>;
}

export class NetappSystem {
    partnerId?: Nullable<string>;
    shelfSummaries?: Nullable<Nullable<NetappSummaryShelfSummary>[]>;
    systemId?: Nullable<string>;
    systemSummary?: Nullable<NetappSystemSummary>;
}

export class NetappSystemSummary {
    model?: Nullable<string>;
    name?: Nullable<string>;
    serial?: Nullable<string>;
}

export class NodeItem implements ValidationModel {
    manufacturer?: Nullable<string>;
    name?: Nullable<string>;
    node?: Nullable<string>;
    serialNumber?: Nullable<string>;
    sku?: Nullable<string>;
    sparePartNumber?: Nullable<string>;
    validationResult?: Nullable<ValidationResult>;
}

export class NodeSummaries {
    nodes?: Nullable<Nullable<NodeItem>[]>;
    partNumber?: Nullable<string>;
    quantity?: Nullable<number>;
}

export class ParsedResult {
    blocks?: Nullable<Nullable<Block>[]>;
    containsValidationErrors?: Nullable<boolean>;
    isSuccess?: Nullable<boolean>;
    parsedOn?: Nullable<string>;
    parserName?: Nullable<string>;
    parserType?: Nullable<string>;
}

export abstract class IQuery {
    abstract dataDomain(configId: string): Nullable<DataDomainQuery> | Promise<Nullable<DataDomainQuery>>;

    abstract emcUnity(configId: string): Nullable<EmcUnityQuery> | Promise<Nullable<EmcUnityQuery>>;

    abstract emcVnx(configId: string): Nullable<EmcVnxQuery> | Promise<Nullable<EmcVnxQuery>>;

    abstract emcVnxe(configId: string): Nullable<EmcVnxeParserQuery> | Promise<Nullable<EmcVnxeParserQuery>>;

    abstract hp3Par(configId: string): Nullable<Hp3ParQuery> | Promise<Nullable<Hp3ParQuery>>;

    abstract netApp(configId: string): Nullable<NetappQuery> | Promise<Nullable<NetappQuery>>;

    abstract symmetrix(configId: string): Nullable<EmcSymmetrixQuery> | Promise<Nullable<EmcSymmetrixQuery>>;

    abstract xtremIO(configId: string): Nullable<XtremIOQuery> | Promise<Nullable<XtremIOQuery>>;
}

export class Reference {
    container?: Nullable<string>;
    id?: Nullable<string>;
    partitionKey?: Nullable<string>;
}

export class SymmetrixBay {
    driveEnclosureCount?: Nullable<number>;
    name?: Nullable<string>;
    standbyPowerSupplyCount?: Nullable<number>;
    validationResult?: Nullable<ValidationResult>;
}

export class SymmetrixBaySummary {
    driveBayCount?: Nullable<number>;
    driveBays?: Nullable<Nullable<SymmetrixBay>[]>;
    enclosureCount?: Nullable<number>;
    powerSupplyCount?: Nullable<number>;
    subTitle?: Nullable<string>;
    systemBayCount?: Nullable<number>;
    systemBays?: Nullable<Nullable<SymmetrixBay>[]>;
}

export class SymmetrixDaeSummary {
    daeCount: number;
    daes: SymmmetrixDae[];
    engineId: string;
    location: string;
    partNumber: string;
    powerSupplyCount: number;
    serialNumber: string;
}

export class SymmetrixDimm {
    dimmId: string;
    engine: string;
    location: string;
    partNumber: string;
    serialNumber: string;
    validationResult: ValidationResult;
}

export class SymmetrixDimmSummary {
    dimmCount: number;
    dimms: SymmetrixDimm[];
    engineId: string;
    location: string;
    partNumber: string;
    serialNumber: string;
}

export class SymmetrixDirector {
    coreCount: number;
    engineNumber: number;
    id: string;
    portCount: number;
    status: string;
    type: string;
    validationResult: ValidationResult;
}

export class SymmetrixDirectorSummary {
    directorCount: number;
    directors: SymmetrixDirector[];
    subTitle: string;
}

export class SymmetrixDisk {
    capacityFree: number;
    capacityTotal: number;
    capacityUsed: number;
    daeId: string;
    directorId: string;
    diskId: string;
    location: string;
    manufacturer: string;
    productId: string;
    serialNumber: string;
    validationResult: ValidationResult;
}

export class SymmetrixDiskGroup {
    diskCapacity?: Nullable<number>;
    diskCount?: Nullable<number>;
    diskSpeed?: Nullable<number>;
    diskType?: Nullable<string>;
    name?: Nullable<string>;
    validationResult?: Nullable<ValidationResult>;
}

export class SymmetrixDiskGroupSummary {
    diskGroupCount?: Nullable<number>;
    diskGroups?: Nullable<Nullable<SymmetrixDiskGroup>[]>;
    subTitle?: Nullable<string>;
}

export class SymmetrixDiskSummary {
    daeId?: Nullable<string>;
    directorId?: Nullable<string>;
    diskCount?: Nullable<number>;
    disks?: Nullable<Nullable<SymmetrixDisk>[]>;
    subTitle?: Nullable<string>;
}

export class SymmetrixSystem {
    isTextParser?: Nullable<boolean>;
    subTitle?: Nullable<string>;
    symmetrixBaySummaries?: Nullable<Nullable<SymmetrixBaySummary>[]>;
    symmetrixDaeSummaries?: Nullable<Nullable<SymmetrixDaeSummary>[]>;
    symmetrixDimmSummaries?: Nullable<Nullable<SymmetrixDimmSummary>[]>;
    symmetrixDirectorSummary?: Nullable<SymmetrixDirectorSummary>;
    symmetrixDiskGroupSummary?: Nullable<SymmetrixDiskGroupSummary>;
    symmetrixDiskSummaries?: Nullable<Nullable<SymmetrixDiskSummary>[]>;
    symmetrixSystemSummaries?: Nullable<Nullable<SymmetrixSystemSummary>[]>;
}

export class SymmetrixSystemSummary {
    cacheSize?: Nullable<number>;
    enginecount?: Nullable<number>;
    isValid?: Nullable<boolean>;
    memoryBoardcount?: Nullable<number>;
    model?: Nullable<string>;
    serialNumber?: Nullable<string>;
}

export class SymmmetrixDae {
    daeId: string;
    location: string;
    partNumber: string;
    serialNumber: string;
    validationResult: ValidationResult;
}

export class ValidatedData implements ValidationModel {
    index: number;
    validationResult?: Nullable<ValidationResult>;
}

export class ValidationResult {
    errors?: Nullable<Nullable<string>[]>;
    isSuccess?: Nullable<boolean>;
}

export class VnxDisk implements ValidationModel {
    busNumber?: Nullable<number>;
    diskNumber?: Nullable<number>;
    enclosureNumber?: Nullable<number>;
    itemMasterDisk?: Nullable<ItemMasterDisk>;
    manufacturer?: Nullable<string>;
    model?: Nullable<string>;
    partNumber?: Nullable<string>;
    sparePartNumber?: Nullable<string>;
    sparePartSupportability?: Nullable<string>;
    state?: Nullable<string>;
    validationResult?: Nullable<ValidationResult>;
}

export class XtremIO {
    xtremIoIbSwitchSummaries?: Nullable<Nullable<XtremIoIbSwitch>[]>;
    xtremIoJbodSummaries?: Nullable<Nullable<XtremIoJbod>[]>;
}

export class XtremIOQuery implements ParserQuery {
    details?: Nullable<ConfigFile>;
    id: string;
    summary?: Nullable<XtremIO>;
}

export class XtremIoDisk {
    brickIndex?: Nullable<string>;
    brickName?: Nullable<string>;
    manufacturer?: Nullable<string>;
    model?: Nullable<string>;
    modelName?: Nullable<string>;
    size?: Nullable<number>;
    slotNumber?: Nullable<string>;
}

export class XtremIoDiskSummary implements ValidationModel {
    disks?: Nullable<Nullable<XtremIoDisk>[]>;
    model?: Nullable<string>;
    modelName?: Nullable<string>;
    quantity?: Nullable<number>;
    size?: Nullable<number>;
    validationResult?: Nullable<ValidationResult>;
}

export class XtremIoIbSwitch {
    model?: Nullable<string>;
    quantity?: Nullable<number>;
    switches?: Nullable<Nullable<XtremIoSwitchSummary>[]>;
}

export class XtremIoJbod {
    diskSummaries?: Nullable<Nullable<XtremIoDiskSummary>[]>;
    jbods?: Nullable<Nullable<XtremIoJbodSummary>[]>;
}

export class XtremIoJbodSummary implements ValidationModel {
    brickIndex?: Nullable<string>;
    brickName?: Nullable<string>;
    model?: Nullable<string>;
    name?: Nullable<string>;
    serialNumber?: Nullable<string>;
    validationResult?: Nullable<ValidationResult>;
}

export class XtremIoSwitchSummary implements ValidationModel {
    firmwareVersion?: Nullable<string>;
    model?: Nullable<string>;
    name?: Nullable<string>;
    serialNumber?: Nullable<string>;
    validationResult?: Nullable<ValidationResult>;
}

export type BlockDataKey = any;
export type BlockDataValue = any;
type Nullable<T> = T | null;
