import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { downvoteQuote, upvoteQuote } from '../actions/quotes'

class Quotes extends Component {

  displayQuotes = () => {
    return this.props.quotes.map((quote) => <QuoteCard quote={quote} downvoteQuote={(id) => {this.props.downvoteQuote(id)}} upvoteQuote={(id) => this.props.upvoteQuote(id)} />)
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
              {this.displayQuotes()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {quotes: state.quotes}
}
export default connect(mapStateToProps, {downvoteQuote, upvoteQuote})(Quotes);
