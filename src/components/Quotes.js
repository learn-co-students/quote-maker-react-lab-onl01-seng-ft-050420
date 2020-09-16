import React, { Component } from 'react';
import QuoteCard from './QuoteCard.js';
import { connect } from 'react-redux';
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

    render () {

    let allQuotes = this.props.quotes.map((quote, index) => <div key={index}>{<QuoteCard handleDownvote={this.handleDownvote} handleUpvote={this.handleUpvote} handleDelete={this.handleDelete} quote={quote}/>}</div>)
        if (this.props.quotes.length > 0){
            return (
                <div>{allQuotes}</div>
            )
        } else {
            return (
            <div>{<QuoteCard handleDownvote={this.handleDownvote} handleUpvote={this.handleUpvote} handleDelete={this.handleDelete} quote={{id: null, content: '', author: '', votes: 0}}/>}</div>
            )
        }
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
