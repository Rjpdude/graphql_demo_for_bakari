import { CageSummaries, ConfigFile, DataDomain, DiskSummaries, EmcVnxDiskSummary, EmcVnxeDiskSummary, EmcVnxeEnclosureSummary, EmvVnxDiskChassisSummary, NetappSystem, NodeSummaries, SymmetrixSystem, XtremIoIbSwitch, XtremIoJbod } from "./__types_backup";

export interface ParsersRes {
  parsers: [{
    parserName: string;
  }];
}

export interface ConfigFileRes {
  configFile: ConfigFile;
  summary: SummaryRes;
}

/**
 * @deprecated Do not use this type. It is only used for backwards compatibility.
 */
export interface SummaryRes {
  emcvnxDiskSummaries: EmcVnxDiskSummary[];
  emcvnxChassisSummaries: EmvVnxDiskChassisSummary[];
  dataDomainEnclosureSummaries: DataDomain[];
  hp3parCageSummaries: CageSummaries[];
  hp3parDiskSummaries: DiskSummaries[];
  hp3parNodeSummaries: NodeSummaries[];
  netAppSystems: NetappSystem[];
  symmetrixSystems: SymmetrixSystem[];
  vnxeDaeDiskSummaries: EmcVnxeDiskSummary[];
  vnxeDaeEnclosureSummaries: EmcVnxeEnclosureSummary[];
  vnxeDpeDiskSummaries: EmcVnxeDiskSummary[];
  vnxeDpeEnclosureSummaries: EmcVnxeEnclosureSummary[];
  unityDaeDiskSummaries: EmcVnxeDiskSummary[];
  unityDaeEnclosureSummaries: EmcVnxeEnclosureSummary[];
  unityDpeDiskSummaries: EmcVnxeDiskSummary[];
  unityDpeEnclosureSummaries: EmcVnxeEnclosureSummary[];
  xtremIoJbodSummaries: XtremIoJbod[];
  xtremIoIbSwitchSummaries: XtremIoIbSwitch[];
}