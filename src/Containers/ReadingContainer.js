import React from 'react'
import { connect } from 'react-redux'
import { getReadings } from '../redux/actions'
import ReadingName from '../Components/ReadingName'

class ReadingContainer extends React.Component {

    componentDidMount() {
        this.props.getReadings(this.props.userId).then(x => this.forceUpdate())
    }


    renderReadings = () => {
        return this.props.readings.map(readingObj => <ReadingName key={readingObj.id} readingObj={readingObj} />)
    }


    render() {
        return (
            <div className="reading-container" >
                <h2 className="reading-title">My Readings</h2>
                {this.renderReadings()}

            </div>
        )
    }

}

const msp = (state) => {

    return {
        readings: state.readings,
        userId: state.userId

    }
}

const mdp = (dispatch) => {
    return {
        getReadings: (userId) => dispatch(getReadings(userId))
    }
}

export default connect(msp, mdp)(ReadingContainer)


