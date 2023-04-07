import { ObjectType, Field, Int } from "type-graphql";
import { Alias, Multi, Of } from "../helpers/utils";

@ObjectType()
export class Reference {
  @Field()
  container: string;
  @Field()
  id: string;
  @Field()
  partitionKey: string;
}

@ObjectType()
export class EmcVnxeEnclosure {
  @Field()
  manufacturer: string;
  @Field()
  model: string;
  @Field()
  name: string;
  @Field()
  partNumber: string;
  @Field()
  serialNumber: string;
  @Field()
  sparePartNumber: string;
  @Field()
  sparePartSupportability: string;
}

@ObjectType()
export class AlternateSku {
  @Field()
  sku: string;
}

@ObjectType()
export class ItemMasterDisk {
  @Field()
  id: string;
  @Field(Multi(AlternateSku))
  alternates: AlternateSku[];
  @Field()
  capacity: string;
  @Field()
  container: string;
  @Field()
  formFactor: string;
  @Field()
  interface: string;
  @Field()
  manufacturer: string;
  @Field()
  partitionKey: string;
  @Field()
  ref: Reference;
  @Field()
  sku: string;
  @Field()
  speed: string;
  @Field()
  supportedStatus: string;
  @Field()
  transferRate: string;
  @Field()
  type: string;
}

@ObjectType()
export class EmcVnxeDisk {
  @Field()
  enclosure: string;
  @Field(Of(ItemMasterDisk))
  itemMasterDisk: ItemMasterDisk;
  @Field()
  manufacturer: string;
  @Field()
  model: string;
  @Field(Of(Int))
  number: number;
  @Field()
  partNumber: string;
  @Field()
  serialNumber: string;
  @Field()
  sparePartNumber: string;
  @Field()
  sparePartSupportability: string;
}

@ObjectType()
export class EmcVnxeEnclosureSummary {
  @Field()
  diskFormFactor: string;

  @Field()
  quantity: number;

  @Field(Multi(EmcVnxeEnclosure))
  enclosures: EmcVnxeEnclosure[];
}

@ObjectType()
export class EmcVnxeDiskSummary {
  @Field()
  partNumber: string;

  @Field(() => Int)
  quantity: number;

  @Field(Multi(EmcVnxeDisk))
  disks: EmcVnxeDisk[];
}

@ObjectType()
export class EmcVnxe {
  @Field(
    Multi(EmcVnxeDiskSummary),
    Alias("daeDisks")
  )
  vnxeDaeDiskSummaries: EmcVnxeDiskSummary[]

  @Field(
    Multi(EmcVnxeEnclosureSummary),
    Alias("daeEnclosures")
  )
  vnxeDaeEnclosureSummaries: EmcVnxeEnclosureSummary[]

  @Field(
    Multi(EmcVnxeDiskSummary),
    Alias("dpeDisks")
  )
  vnxeDpeDiskSummaries: EmcVnxeDiskSummary[]

  @Field(
    Multi(EmcVnxeEnclosureSummary),
    Alias("dpeEnclosures")
  )
  vnxeDpeEnclosures: EmcVnxeEnclosureSummary[]
}
