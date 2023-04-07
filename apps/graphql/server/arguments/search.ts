import { ArgsType, Field } from 'type-graphql';
import { Paginate } from './paginate';

@ArgsType()
export class Search extends Paginate {
  @Field()
  parserName: string;
}
