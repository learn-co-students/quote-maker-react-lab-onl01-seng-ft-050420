import uuid from 'uuid';
import { expect } from 'chai';
import reducer from '../../src/reducers/quotes';
import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import App from '../../src/App';
import { createStore } from 'redux'
import rootReducer from '../../src/reducers/index'
import Adapter from 'enzyme-adapter-react-16'
import QuoteCard from '../../src/components/QuoteCard';

configure({ adapter: new Adapter() })


describe('Quotes Reducer', () => {

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).to.deep.equal([]);
  });

  it('should handle ADD_QUOTE', () => {
    const quote = {
      id: uuid(),
      content: 'Moral indignation is jealousy with a halo.',
      author: 'H.G. Wells',
      votes: 0
    };

    expect(reducer(undefined, {
      type: 'ADD_QUOTE',
      quote
    })).to.deep.equal([quote]);
  });

  it('should handle REMOVE_QUOTE', () => {
    const firstId = uuid();
    const secondId = uuid();
    const initialState = [
      {
        id: firstId,
        content: 'Moral indignation is jealousy with a halo.',
        author: 'H.G. Wells',
        votes: 0
      }, {
        id: secondId,
        content: 'The artist is nothing without the gift, but the gift is nothing without work.',
        author: 'Emile Zola',
        votes: 0
      }
    ];

    expect(reducer(initialState, {
      type: 'REMOVE_QUOTE',
      quoteId: firstId
    })).to.deep.equal([
      {
        id: secondId,
        content: 'The artist is nothing without the gift, but the gift is nothing without work.',
        author: 'Emile Zola',
        votes: 0
      }
    ]);
  });

  it("should handle UPVOTE_QUOTE", () => {
    const firstId = uuid();
    const initialState = [
      {
        id: firstId,
        content: 'Moral indignation is jealousy with a halo.',
        author: 'H.G. Wells',
        votes: 0
      }
    ];

    expect(reducer(initialState, {
      type: 'UPVOTE_QUOTE',
      quoteId: firstId
    })).to.deep.equal(
      [
        {
          id: firstId,
          content: 'Moral indignation is jealousy with a halo.',
          author: 'H.G. Wells',
          votes: 1
        }
      ]
    );
  });

  it("should handle DOWNVOTE_QUOTE and decrement vote count down 1 if vote count is positive", () => {
    const firstId = uuid();
    const initialState = [
      {
        id: firstId,
        content: 'Moral indignation is jealousy with a halo.',
        author: 'H.G. Wells',
        votes: 3
      }
    ];

    expect(reducer(initialState, {
      type: 'DOWNVOTE_QUOTE',
      quoteId: firstId
    })).to.deep.equal(
      [
        {
          id: firstId,
          content: 'Moral indignation is jealousy with a halo.',
          author: 'H.G. Wells',
          votes: 2
        }
      ]
    );
  });

  it("should handle DOWNVOTE_QUOTE and do nothing if vote count is 0", () => {
    const firstId = uuid();
    const initialState = [
      {
        id: firstId,
        content: 'Moral indignation is jealousy with a halo.',
        author: 'H.G. Wells',
        votes: 0
      }
    ];

    expect(reducer(initialState, {
      type: 'DOWNVOTE_QUOTE',
      quoteId: firstId
    })).to.deep.equal(
      [
        {
          id: firstId,
          content: 'Moral indignation is jealousy with a halo.',
          author: 'H.G. Wells',
          votes: 0
        }
      ]
    );
  });
});

