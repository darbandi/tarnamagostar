const filtersReducer = (state = { price: "cheapest" }, action: any) => {
  switch (action.type) {
    case "setFilters":
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

export default filtersReducer;
