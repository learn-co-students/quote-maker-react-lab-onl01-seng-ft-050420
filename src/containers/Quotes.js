import React, { Component } from 'react';
import { connect } from 'react-redux';
import {removeQuote, upvoteQuote, downvoteQuote} from '../actions/quotes';
import QuoteCard from '../components/QuoteCard';

class Quotes extends Component {
  renderQuoteCards() {
      return this.props.quotes.map(quote => {
          return (<QuoteCard quote={quote} handleClick={this.handleClick} />)
        }
      )}

    handleClick = (e) => {
      let button = e.target
      this.props[button.name](button.id)
    }
  render() {
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
              {this.renderQuoteCards()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {quotes: state.quotes}
}

export default connect(mapStateToProps, {removeQuote, upvoteQuote, downvoteQuote})(Quotes);
