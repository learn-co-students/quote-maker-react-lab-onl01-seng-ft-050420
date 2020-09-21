export default (state = [], action) => {
  let quotes = [...state]
  switch (action.type) {
    case 'ADD_QUOTE':
      quotes.push(action.quote)
      return quotes
    case 'REMOVE_QUOTE':
      return quotes.filter(quote => quote.id !== action.quoteId)
    case 'UPVOTE_QUOTE':
      let i = quotes.findIndex(quote => quote.id === action.quoteId)
      quotes[i].votes += 1
      return quotes
    case 'DOWNVOTE_QUOTE':
      let idx = quotes.findIndex(quote => quote.id === action.quoteId)
      if (quotes[idx].votes > 0) quotes[idx].votes -= 1
      return quotes
    default:
      return quotes;
  }
}
