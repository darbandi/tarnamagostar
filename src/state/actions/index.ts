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
export const setSorts = (sorts: object) => {
  return (dispatch: any) => {
    dispatch({ type: "setSorts", payload: sorts });
  };
};
export const setFilters = (filters: object) => {
  return (dispatch: any) => {
    dispatch({ type: "setFilters", payload: filters });
  };
};
