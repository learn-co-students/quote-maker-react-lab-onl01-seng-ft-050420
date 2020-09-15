import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { upvoteQuote, downvoteQuote, removeQuote } from '../actions/quotes'

class Quotes extends Component {

  renderQuoteCards() {
    console.log(this.props)
    if (!this.props.quote) {
      return null 
    }
    debugger
    return this.props.quotes.map( e => <QuoteCard key={e.id} quote={e} upvoteQuote={this.props.upvoteQuote} downvoteQuote={this.props.downvoteQuote} removeQuote={this.props.removeQuote}/>)
  }

  render() {
    const { quotes, removeQuote, upvoteQuote, downvoteQuote } = this.props;

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
              {/* {this.renderQuoteCards()} */}
              {quotes.map(quote => <QuoteCard key={quote.id} upvoteQuote={upvoteQuote} downvoteQuote={downvoteQuote} removeQuote={removeQuote} quote={quote} />)}

              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//add arguments to connect as needed

const mapStateToProps = state => {
  return ({
    quotes: state.quotes
  })
}

const mapDispatchToProps = dispatch => {
  return {
    upvoteQuote: id => dispatch(upvoteQuote(id)), 
    downvoteQuote: id => dispatch(downvoteQuote(id)),
    removeQuote: id => dispatch(removeQuote(id))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
