import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Parser {
  @Field()
  parserName: string;
}
