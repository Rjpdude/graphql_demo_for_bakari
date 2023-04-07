import { Burger } from "./mock/burger";

export interface BestBurgerRanking {
  BestBurgerRanking: Burger[];
}

export const bestBurgerRankingData: BestBurgerRanking = {
  BestBurgerRanking: [
    {
      id: "1234A",
      type: "food",
      title: "Hamburger",
      price: "10.000",
      resturant: ["Wendy's", "Five Guys", "Burger King"],
      customer: [
        { id: '1', firstName: "Bakari", lastName: "Lewis" },
        { id: '2', firstName: "LeBron", lastName: "James" },
        { id: '3', firstName: "Josh", lastName: "Tempesta" },
      ],
    },
    {
      id: "8834G",
      type: "food",
      title: "Hamburger",
      price: "20.000",
      resturant: ["Wendy's", "Five Guys", "Burger King"],
      customer: [
        { id: '1', firstName: "Bakari", lastName: "Lewis" },
        { id: '2', firstName: "LeBron", lastName: "James" },
        { id: '3', firstName: "Josh", lastName: "Tempesta" },
      ],
    },
    {
      id: "9999T",
      type: "food",
      title: "Hamburger",
      price: "5.000",
      resturant: ["Wendy's", "Five Guys", "Burger King"],
      customer: [
        { id: '1', firstName: "Bakari", lastName: "Lewis" },
        { id: '2', firstName: "LeBron", lastName: "James" },
        { id: '3', firstName: "Josh", lastName: "Tempesta" },
      ],
    },
  ],
};
