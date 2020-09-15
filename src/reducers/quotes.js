

export default function quotes(state = [], action) {
 
  switch(action.type) {
    
    case "ADD_QUOTE":

      return [...state, action.quote] 

    case "UPVOTE_QUOTE": 
      
      //find the quote 
      const upIdx = state.findIndex(e => e.id === action.quoteId)
      const upNewState = [...state]
      upNewState[upIdx].votes += 1 

      return upNewState

    case "DOWNVOTE_QUOTE": 

      const downIdx = state.findIndex(e => e.id === action.quoteId)
      const downNewState = [...state]
      if(downNewState[downIdx].votes > 0) {
        downNewState[downIdx].votes -= 1 
      }
      return downNewState

    case "REMOVE_QUOTE":

      return state.filter( e => e.id !== action.quoteId )
    

      
      
    default:
      return state;
  }
}
