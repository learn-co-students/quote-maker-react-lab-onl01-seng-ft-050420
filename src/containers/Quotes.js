import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import {upvoteQuote, downvoteQuote} from '../actions/quotes';

class Quotes extends Component {

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
              {/*
                TODO:

                Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
               */}
               {this.props.quotes.map(quote => <QuoteCard quote={quote} upvoteQuote={this.props.upvoteQuote} downvoteQuote={this.props.downvoteQuote}/>)}
               {/* //use props to map over, quote represents each object in array of quotes */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {quotes: state.quotes, pictures: state.pictures}
    //coming from combine reducers, also called root state
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     upvoteQuote: (quoteId)=> dispatch(upvoteQuote(quoteId)),
//     downvoteQuote: (quoteId)=>dispatch(downvoteQuote(quoteId))
//   }
// }
//getting something added to your props to pass down to your child quotecard

//add arguments to connect as needed
export default connect(mapStateToProps, {upvoteQuote, downvoteQuote})(Quotes);
//getting the state form the props

