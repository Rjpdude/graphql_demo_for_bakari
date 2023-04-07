import { Query, Resolver } from "type-graphql";
import { Parser } from "./entity/parser";

@Resolver()
export class RootQuery {
  @Query(() => [Parser])
  parsers() {
    return [
      { parserName: "parser1" },
      { parserName: "parser2" },
    ]
  }
}
