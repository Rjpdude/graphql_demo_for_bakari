import { ArgsType, Field, Int } from 'type-graphql';
import { Fallback, Of } from '../helpers/utils';

@ArgsType()
export class Paginate {
  @Field(
    Of(Int),
    Fallback(0)
  )
  skip: number;

  @Field(
    Of(Int),
    Fallback(25)
  )
  take: number;
}
