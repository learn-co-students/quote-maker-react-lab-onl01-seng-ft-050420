import React from 'react';

const QuoteCard = ({quote, remove, upvote, downvote}) => (
  <div>
    <div className="card card-inverse card-success card-primary mb-3 text-center">
      <div className="card-block">
        <blockquote className="card-blockquote">
          {quote.content}
          <footer>
            - author <cite title="Source Title">{quote.author}</cite>
          </footer>
        </blockquote>
      </div>
      <div className="float-right">
        <div
          className="btn-group btn-group-sm"
          role="group"
          aria-label="Basic example">
          <button
            onClick={() => upvote(quote.id)}
            type="button"
            className="btn btn-primary">
            Upvote
          </button>
          <button
            onClick={() => downvote(quote.id)}
            type="button"
            className="btn btn-secondary">
            Downvote
          </button>
          <button
            onClick={() => remove(quote.id)}
            type="button"
            className="btn btn-danger">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div>Votes: {quote.votes}</div>
      </div>
    </div>
  </div>
);

export default QuoteCard;
