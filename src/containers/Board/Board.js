import React, {Component} from 'react'
import { connect } from 'react-redux'

import classNames from 'classnames'

import * as actions from '../../store/actions/index'

import {BrowserRouter as Router} from 'react-router-dom'

import Header from '../../components/Header/Header'
import Content from '../../components/Content/Content'

class Board extends Component {
    render () {
        const boardClass = classNames('giphy-board', {
            'searched': this.props.searched,
            'result-returned': this.props.data.length
        }) 
        return (
            <Router>
                <div className={boardClass}>
                    <Header
                        searchTerm={this.props.searchTerm}
                        updateSearchTerm={this.props.updateSearchTerm}
                        fetchGiphyData={this.props.fetchGiphyData}/>
                    <Content 
                        searched={this.props.searched}
                        data={this.props.data} 
                        favorites={this.props.favorites} 
                        addToFavorites={this.props.addToFavorites} 
                        removeFromFavorites={this.props.removeFromFavorites}
                        loadMore={this.props.loadMore}
                        hasMore={this.props.hasMore}
                        isLoading={this.props.isLoading}
                        prevSearchTerm={this.props.prevSearchTerm}
                        searchTerm={this.props.searchTerm}
                        error={this.props.error}
                    />
                </div>
            </Router>
        )
    }
}

const mapStateToProps = state => {
  return { ...state.giphyReducer }
};

const mapDispatchToProps = dispatch => {
  return {
    loadMore: () => dispatch( actions.loadMore() ),
    updateSearchTerm: (e) => dispatch( actions.updateSearchTerm(e.target.value) ),
    fetchGiphyData: (e) => {
        if(e.key === 'Enter' || e.type === 'click') dispatch( actions.fetchGiphyData() )
    },
    addToFavorites: (props) => dispatch( actions.addToFavorites(props)),
    removeFromFavorites: (props) => dispatch( actions.removeFromFavorites(props))
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( Board )