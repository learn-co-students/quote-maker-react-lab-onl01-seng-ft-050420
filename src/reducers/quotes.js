export default (state = [], action) => {
  const findWithIndex = (arr, predicate) => {
    const index = arr.findIndex(predicate);
    return {
      item: index !== -1 ? arr[index] : null,
      index,
    };
  };

  switch (action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote];

    case "REMOVE_QUOTE":
      return state.filter((x) => x.id !== action.quoteId);
    case "UPVOTE_QUOTE":
      let quote = findWithIndex(state, (x) => x.id === action.quoteId);
      quote.item.votes++;
      return [
        ...state.slice(0, quote.index),
        quote.item,
        ...state.slice(quote.index + 1),
      ];
    case "DOWNVOTE_QUOTE":
      let downVoteQuote = findWithIndex(state, (x) => x.id === action.quoteId);
      if (downVoteQuote.item.votes > 0) downVoteQuote.item.votes--;
      return [
        ...state.slice(0, downVoteQuote.index),
        downVoteQuote.item,
        ...state.slice(downVoteQuote.index + 1),
      ];
    default:
      return state;
  }
};
