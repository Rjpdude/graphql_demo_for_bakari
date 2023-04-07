import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Burger } from "./burger";
import { bestBurgerRankingData } from "../mock-data"

@Resolver()
export class BurgerResolver {
  // mocked burgers
  private burgers = bestBurgerRankingData.BestBurgerRanking;

  @Query(() => [Burger])
  async bestBurger() {
    return new Promise<Burger[]>((res) => {
      setTimeout(() => res(this.burgers), 420);
    })
  }

  @Mutation(() => Burger)
  async createBurger(
    @Arg("id") id: string,
    @Arg("type") type: string,
    @Arg("title") title: string,
    @Arg("price") price: string,
  ): Promise<Burger> {
    const burger: Burger = {
      id,
      type,
      title,
      price,
      resturant: [],
      customer: []
    };
    this.burgers.push(burger);
    return burger;
  }
}
