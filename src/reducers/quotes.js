function quotes(state=[], action) {
  switch(action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote]
    case "REMOVE_QUOTE":
      return state.filter((el) => el.id !== action.quoteId)
    case "UPVOTE_QUOTE":
      return state.map((el) => {
         if(el.id === action.quoteId) el.votes++;
         return el;
        });
    case "DOWNVOTE_QUOTE":
      return state.map((el) => {
        if(el.id === action.quoteId && el.votes > 0) el.votes--;
        return el;
      });
    default:
      return state;
  }
}

export default quotes;
