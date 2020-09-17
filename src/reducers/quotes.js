
const findWithIndex = (arr, predicate) => {
  const index = arr.findIndex(predicate);
  return {
    item: index !== -1 ? arr[index] : null,
    index,
  };
};

export default (state = [], action) => {
  let quote;

  switch (action.type) {
    case 'ADD_QUOTE':
      return state.concat(action.quote);
    case 'REMOVE_QUOTE':
      return state.filter((quote) => quote.id !== action.quoteId);
    case 'UPVOTE_QUOTE':
      quote = findWithIndex(state, (item) => item.id === action.quoteId);
      quote.item.votes++;
      return [
        ...state.slice(0, quote.index),
        quote.item,
        ...state.slice(quote.index + 1),
      ];
    case 'DOWNVOTE_QUOTE':
      quote = findWithIndex(state, (item) => item.id === action.quoteId);
      if (quote.item.votes !== 0) {
        quote.item.votes--;
      }
      return [
        ...state.slice(0, quote.index),
        quote.item,
        ...state.slice(quote.index + 1),
      ];
    default:
      return state;
  }
};
