import IResort from "../interfaces/IResort";

export const filterByPrice = (arr: IResort[], value: number) => {
  return arr.filter((item) => +item.price.replace("$", "") >= value);
};

export const filterByTitle = (arr: IResort[], value: string) => {
  return arr.filter((item) => {
    const [title] = item.title.split("—") || [];
    if (title.toLocaleLowerCase().includes(value.toLocaleLowerCase()))
      return true;

    // return false;
  });
};
