const sortsReduce = (state = { price: "cheapest" }, action: any) => {
    switch (action.type) {
      case "setSorts":
        return { ...state, ...action.payload };
  
      default:
        return state;
    }
  };
  
  export default sortsReduce;