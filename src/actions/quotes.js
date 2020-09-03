import {ADD_QUOTE, REMOVE_QUOTE, UPVOTE_QUOTE, DOWNVOTE_QUOTE} from './types';

export const addQuote = (quoteObj) => ({
  type: 'ADD_QUOTE',
  payload: quoteObj,
});

export const removeQuote = (quoteId) => ({
  type: 'REMOVE_QUOTE',
  payload: quoteId,
});

export const upvoteQuote = (quoteId) => ({
  type: 'UPVOTE_QUOTE',
  payload: quoteId,
});

export const downvoteQuote = (quoteId) => ({
  type: 'DOWNVOTE_QUOTE',
  payload: quoteId,
});
