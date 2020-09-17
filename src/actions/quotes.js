export const addQuote = (quote) => ({type: "ADD_QUOTE", quote: quote});
export const removeQuote = (id) => ({type: "REMOVE_QUOTE", quoteId: id});
export const upvoteQuote = (id) => ({type: "UPVOTE_QUOTE", quoteId: id});
export const downvoteQuote = (id) => ({type: "DOWNVOTE_QUOTE", quoteId: id});