import {ADD_QUOTE, REMOVE_QUOTE, UPVOTE_QUOTE, DOWNVOTE_QUOTE} from './types';

export const addQuote = (quoteObj) => ({
  type: 'ADD_QUOTE',
  quote: quoteObj,
});

export const removeQuote = (quoteId) => ({
  type: 'REMOVE_QUOTE',
  quoteId,
});

export const upvoteQuote = (quoteId) => ({
  type: 'UPVOTE_QUOTE',
  quoteId,
});

export const downvoteQuote = (quoteId) => ({
  type: 'DOWNVOTE_QUOTE',
  quoteId,
});
