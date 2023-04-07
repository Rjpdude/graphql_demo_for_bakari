import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class ConfigurationFile {
  @Field()
  name: string;
  @Field()
  rawFileLocation: string;
  @Field()
  lastModifiedByName: string;
  @Field()
  lastModifiedOn: string;
  @Field()
  partitionKey: string;
  @Field()
  status: string;
  @Field()
  type: string;
}
