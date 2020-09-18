

export default (state = [], action) => {
  switch(action.type){
    case 'ADD_QUOTE':
      return [...state, action.quote]
    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId)
    case "UPVOTE_QUOTE":
      return state.map( quote => {
          if(quote.id === action.quoteId) quote.votes++;
          return quote
      })
      case 'DOWNVOTE_QUOTE':
        let index = state.findIndex(quote => quote.id ===action.quoteId)
        if(state[index].votes > 0){
          return [
            ...state.slice(0,index),
            {...state[index], votes: (state[index].votes -= 1)},
            ...state.slice(index+1),
          ]
        }
   default:
    return state;
  }
}

