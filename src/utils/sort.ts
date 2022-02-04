import IResort from "../interfaces/IResort";

export const sortByPrice = (arr: IResort[], type: string) => {
  return arr.sort((a: IResort, b: IResort) => {
    const a_price = +a.price.replace("$", "");
    const b_price = +b.price.replace("$", "");
    if (type === "expensive") return a_price < b_price ? 1 : -1;
    else return a_price < b_price ? -1 : 1;
  });
};

export const sortByTitle = (arr: IResort[], type: string) => {
  return arr.sort((a: IResort, b: IResort) => {
    const a_title = a.title;
    const b_title = b.title;

    if (type === "ascending") {
      if (a_title < b_title) {
        return -1;
      }
      if (a_title > b_title) {
        return 1;
      }
      return 0;
    } else {
      if (a_title < b_title) {
        return 1;
      }
      if (a_title > b_title) {
        return -1;
      }
      return 0;
    }
  });
};
