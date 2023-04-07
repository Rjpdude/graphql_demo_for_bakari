import { Field, ObjectType, ID, Int, Args } from "type-graphql";
import { Paginate } from "../arguments/paginate";
import { take } from "ramda";
import { ConfigurationFile } from "./configuration-file";
import { Alias, Multi, Of } from "../helpers/utils";

@ObjectType()
export class ValidationResult {
  @Field()
  isSuccess: boolean;
}

@ObjectType()
export class SymmmetrixDae {
  @Field(Of(ID))
  daeId: string;

  @Field()
  location: string;

  @Field()
  partNumber: string;

  @Field()
  serialNumber: string;

  @Field()
  validationResult: ValidationResult;
}

@ObjectType()
export class SymmetrixDaeSummary {
  @Field(Of(Int))
  daeCount: number;

  @Field(Multi(SymmmetrixDae))
  daes: SymmmetrixDae[];

  @Field(Of(Int))
  engineId: string;

  @Field()
  location: string;

  @Field()
  partNumber: string;

  @Field(Of(Int))
  powerSupplyCount: number;

  @Field()
  serialNumber: string;
}

@ObjectType()
export class SymmetrixDimm {
  @Field(Of(ID))
  dimmId: string;

  @Field()
  engine: string;

  @Field()
  location: string;

  @Field()
  partNumber: string;

  @Field()
  serialNumber: string;

  @Field()
  validationResult: ValidationResult;
}

@ObjectType()
export class SymmetrixDimmSummary {
  @Field(Of(Int))
  dimmCount: number;

  @Field(Multi(SymmetrixDimm))
  dimms: SymmetrixDimm[];

  @Field(Of(Int))
  engineId: string;

  @Field()
  location: string;

  @Field()
  partNumber: string;

  @Field()
  serialNumber: string;
}

@ObjectType()
export class SymmetrixDirector {
  @Field()
  id: string;

  @Field(Of(Int))
  coreCount: number;

  @Field(Of(Int))
  engineNumber: number;

  @Field(Of(Int))
  portCount: number;

  @Field()
  status: string;

  @Field()
  type: string;

  @Field()
  validationResult: ValidationResult;
}

@ObjectType()
export class SymmetrixDirectorSummary {
  @Field(Of(Int))
  directorCount: number;

  @Field()
  subTitle: string;

  @Field(Multi(SymmetrixDirector))
  directors: SymmetrixDirector[];
}

@ObjectType()
export class SymmetrixDisk {
  @Field()
  capacityFree: string;

  @Field()
  capacityTotal: string;

  @Field()
  capacityUsed: string;

  @Field(Of(Int))
  daeId: string;

  @Field(Of(Int))
  directorId: string;

  @Field(Of(Int))
  diskId: string;

  @Field()
  location: string;

  @Field()
  manufacturer: string;

  @Field()
  productId: string;

  @Field()
  serialNumber: string;

  @Field()
  validationResult: ValidationResult;
}

@ObjectType()
export class SymmetrixDiskGroup {
  @Field(Of(Int))
  diskCapacity?: number;

  @Field(Of(Int))
  diskCount?: number;

  @Field(Of(Int))
  diskSpeed?: number;

  @Field()
  diskType?: string;

  @Field()
  name?: string;

  @Field()
  validationResult: ValidationResult;
}

@ObjectType()
export class SymmetrixDiskGroupSummary {
  @Field(Of(Int))
  diskGroupCount?: number;

  @Field()
  subTitle?: string;

  @Field(Multi(SymmetrixDiskGroup))
  diskGroups?: SymmetrixDiskGroup[];
}

@ObjectType()
export class SymmetrixDiskSummary {
  @Field(Of(Int))
  daeId?: string;

  @Field(Of(Int))
  directorId?: string;

  @Field(Of(Int))
  diskCount?: number;

  @Field()
  subTitle?: string;

  @Field(
    Multi(SymmetrixDisk),
    Alias("disks")
  )
  filtered(@Args(Of(Paginate)) filter: Paginate) {
    return take(filter.take, this.disks.slice(filter.skip));
  }
  // Hidden field - aliased as `filtered`
  disks: SymmetrixDisk[];
}

@ObjectType()
export class SymmetrixBay {
  @Field(Of(Int))
  driveEnclosureCount?: number;

  @Field()
  name?: string;

  @Field(Of(Int))
  standbyPowerSupplyCount?: number;

  @Field()
  validationResult: ValidationResult;
}

@ObjectType()
export class SymmetrixBaySummary {
  @Field(Of(Int))
  driveBayCount?: number;

  @Field(Of(Int))
  enclosureCount?: number;

  @Field(Of(Int))
  powerSupplyCount?: number;

  @Field(Of(Int))
  subTitle?: string;

  @Field(Of(Int))
  systemBayCount?: number;

  @Field(Multi(SymmetrixBay))
  driveBays?: SymmetrixBay[];

  @Field(Multi(SymmetrixBay))
  systemBays?: SymmetrixBay[];
}

@ObjectType()
export class SymmetrixSystemSummary {
  @Field(Of(Int))
  cacheSize?: number;

  @Field(Of(Int))
  enginecount?: number;

  @Field()
  isValid?: boolean;

  @Field(Of(Int))
  memoryBoardcount?: number;

  @Field()
  model?: string;

  @Field()
  serialNumber?: string;
}

@ObjectType()
export class EmcSymmetrix {
  @Field()
  subTitle: string

  @Field()
  isTextParser: boolean

  @Field(Of(ConfigurationFile))
  configFile: ConfigurationFile;

  @Field(
    Of(SymmetrixDirectorSummary),
    Alias("directorSummary")
  )
  symmetrixDirectorSummary: SymmetrixDirectorSummary

  @Field(
    Multi(SymmetrixDaeSummary),
    Alias("daeSummary")
  )
  symmetrixDaeSummaries: [SymmetrixDaeSummary]

  @Field(
    Multi(SymmetrixDimmSummary),
    Alias("dimmSummary")
  )
  symmetrixDimmSummaries: [SymmetrixDimmSummary]

  @Field(
    Multi(SymmetrixDiskGroupSummary),
    Alias("diskGroupSummary")
  )
  symmetrixDiskGroupSummary: [SymmetrixDiskGroupSummary]

  @Field(
    Multi(SymmetrixDiskSummary),
    Alias("diskSummary")
  )
  symmetrixDiskSummaries: [SymmetrixDiskSummary]

  @Field(
    Multi(SymmetrixBaySummary),
    Alias("baySummary")
  )
  symmetrixBaySummaries: [SymmetrixBaySummary]

  @Field(
    Multi(SymmetrixSystemSummary),
    Alias("systemSummary")
  )
  symmetrixSystemSummaries: [SymmetrixSystemSummary]
}
