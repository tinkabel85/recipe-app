import Actions from "../Actions";

function stateReducer(state : any, action: any) {
  switch (action.type) {
    case Actions.getRecipes:
      return { ...state };
    case Actions.setRecipes:
      return { ...state, recipes: action.payload };
    case Actions.getCuisine:
      return { ...state };
    case Actions.setCuisine:
      return { ...state, cuisine: action.payload };
    default:
      return state;
}
}

export default stateReducer;
