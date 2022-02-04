export const addToBucket = (id: number) => {
  return (dispatch: any) => {
    dispatch({ type: "addToBucket", payload: id });
  };
};
export const removeFromBucket = (id: number) => {
  return (dispatch: any) => {
    dispatch({ type: "removeFromBucket", payload: id });
  };
};
