import React from 'react'
import { withRouter } from 'react-router-dom'
import QuestionModal from '../Components/QuestionModal'


class HomeCard extends React.Component {

    state = {
        showModal: false
    }

    learnHandleClick = () => {

        this.props.history.push("/learn-more");
    }

    modalClickHandler = () => {
        this.setState({ showModal: !this.state.showModal })
    }


    render() {

        return (
            <div style={{textAlign:"center"}} className="card-container">
                <h1>Third Eye Tarot</h1>

                <button onClick={this.modalClickHandler} className="submit-button">Consult the Cards</button>

                <button onClick={this.learnHandleClick} className="submit-button">Learn More</button>
                {this.state.showModal ? <QuestionModal clickHandler={this.modalClickHandler} /> : null}

            </div>
        )
    }

}

export default withRouter(HomeCard)