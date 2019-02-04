import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

<<<<<<< HEAD
import Map from '../../components/Map/Map'
=======
import EdscMap from '../../components/Map/Map'
>>>>>>> b1d8ae043bb7ba8ae7cd3ac7dbd037a7e00ae97a

import actions from '../../actions/index'

const mapStateToProps = state => ({
  clicks: state.clicks,
  collections: state.collections
})

const mapDispatchToProps = dispatch => ({
  addClick: () => {
    dispatch(actions.addClick())
  },
  getCollections: () => {
    dispatch(actions.getCollections())
  }
})

class Home extends Component {
  componentDidMount() {
    // eslint-disable-next-line
    const { getCollections } = this.props
    getCollections()
  }

  render() {
    const { clicks, collections } = this.props

    const results = collections.collections.map(collection => (
      <li key={collection.id}>
        {collection.id}
      </li>
    ))

    return (
      <div className="route-container route-container--home">
<<<<<<< HEAD
        <Map />
=======
        <EdscMap />
>>>>>>> b1d8ae043bb7ba8ae7cd3ac7dbd037a7e00ae97a
        <h2>
          The current value is:
          {` ${clicks.value}`}
        </h2>
        <ul>
          {results}
        </ul>
      </div>
    )
  }
}

Home.propTypes = {
  clicks: PropTypes.shape({
    value: PropTypes.number
  }).isRequired,
  collections: PropTypes.shape({
    collections: PropTypes.array
  }).isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)