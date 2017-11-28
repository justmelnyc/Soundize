import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

class AlbumDetail extends Component {
  componentWillMount = () => {
    window.scroll(0, 0)
  }
  render() {
    return (
      <div className="album-detail-component ">
        <h1>AlbumDetail</h1>
      </div>
    )
  }
}

const mapStateToProps = ({ categories }) => {
  return { categories: categories.categories }
}

export default withRouter(connect(mapStateToProps, null)(AlbumDetail))