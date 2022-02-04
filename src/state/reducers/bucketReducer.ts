const bucketReducer = (state = [], action: any) => {
  switch (action.type) {
    case "addToBucket":
      return [...state, action.payload];
    case "removeFromBucket":
      return state.filter((x) => x !== action.payload);

    default:
      return state;
  }
};

export default bucketReducer;
