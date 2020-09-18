const quotes = (state = [], action) => {
switch (action.type){
  case "ADD_QUOTE":
    //type: "AddQuote", quote:{id: , content:}
    return [...state, action.quote]
    case "REMOVE_QUOTE":
    return state.filter( quote => action.quoteId !== quote.id)
    case "UPVOTE_QUOTE":
    return state.map(quote => {
      if (quote.id === action.quoteId) quote.votes++
      return quote //returning an array of quotes and then if the if statement
      //runs then return a quote with the upvote change
    })
    case "DOWNVOTE_QUOTE":
      return state.map(quote => {
        if (quote.id === action.quoteId && quote.votes > 0) quote.votes--
        return quote 
        })
      default: return state
    }
  } 

export default quotes
//returns an array of quotes, a hash array
//add, delete, vote, downvote quotes
