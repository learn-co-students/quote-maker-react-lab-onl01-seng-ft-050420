import uuid from 'uuid';
// const id = uuid();

export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
      action.quote.id = uuid();
      return [...state, action.quote] 
    case 'REMOVE_QUOTE':
      let index = state.findIndex(quote => quote.id === action.quoteId)
      return [...state.slice(0, index), ...state.slice(index + 1)];
    case 'UPVOTE_QUOTE':
      let quote = state.find(quote => quote.id === action.quoteId)
      quote.votes = quote.votes + 1
      return [...state]
      //return [...state, { authorName: action.book.authorName, id: uuid() }];
    case 'DOWNVOTE_QUOTE': 
      let downQuote = state.find(quote => quote.id === action.quoteId)
      if (downQuote.votes > 0) {
        downQuote.votes = downQuote.votes - 1}
      return [...state]
    default:
        return state;
    }
}
