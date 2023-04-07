import { ObjectType, Field } from 'type-graphql';
import { Empty, Fallback, Multi } from '../helpers/utils';

@ObjectType({
  description: 'Data Domain disk summary derived from a configuration file.'
})
export class DataDomainDisk {
  @Field()
  capacity: string;

  @Field()
  disk: number;

  @Field()
  enclosure: number;

  @Field()
  firmware: string;

  @Field()
  manufacturer: string;

  @Field()
  model: string;

  @Field()
  serialNumber: string;

  @Field()
  slot: string;

  @Field()
  type: string;
}

@ObjectType()
export class DataDomainDiskSummary {
  @Field()
  capacity: string;

  @Field(Multi(DataDomainDisk))
  disks: DataDomainDisk[];

  @Field()
  quantity: number;

  @Field()
  type: string;
}

@ObjectType()
export class DataDomainEnclosure {
  @Field()
  capacity: number;

  @Field()
  enclosure: number;

  @Field()
  modelNumber: string;

  @Field()
  oemName: string;

  @Field()
  oemValue: string;

  @Field()
  serialNumber: string;

  @Field()
  state: string;
}

@ObjectType()
export class DataDomain {
  @Field()
  model: string;

  @Field()
  quantity: number;

  @Field(
    Multi(DataDomainDiskSummary),
    Fallback(Empty()),
  )
  diskSummaries: DataDomainDiskSummary[];

  @Field(
    Multi(DataDomainEnclosure),
    Fallback(Empty()),
  )
  enclosures: DataDomainEnclosure[];
}
