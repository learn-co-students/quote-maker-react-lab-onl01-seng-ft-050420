import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote } from '../actions/quotes';
import { upvoteQuote } from '../actions/quotes';
import { downvoteQuote } from '../actions/quotes';

class Quotes extends Component {
  handleDelete = (id) => {
    this.props.removeQuote(id)
  }

  handleUpvote = (id) => {
    this.props.upvoteQuote(id)
  }

  handleDownvote = (id) => {
    this.props.downvoteQuote(id)
  }

  render() {
    let allQuotes = this.props.quotes.map((quote, index) => <div key={index}>{<QuoteCard handleDownvote={this.handleDownvote} handleUpvote={this.handleUpvote} handleDelete={this.handleDelete} quote={quote}/>}</div>)

    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {allQuotes}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      quotes: state.quotes
  }
}

const mapDispatchToProps = dispatch => {
  return {
      removeQuote: (quoteId) => dispatch(removeQuote(quoteId)),
      upvoteQuote: (quoteId) => dispatch(upvoteQuote(quoteId)),
      downvoteQuote: (quoteId) => dispatch(downvoteQuote(quoteId))        
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quotes)

