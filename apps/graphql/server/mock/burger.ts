import { Field, ObjectType } from "type-graphql";
import { Customer } from "./customer";

@ObjectType()
export class Burger {
  @Field()
  id: string;

  @Field()
  type: string;

  @Field()
  title: string;

  @Field()
  price: string;

  @Field(() => [String])
  resturant: string[];

  @Field(() => [Customer])
  customer: Customer[];
}
