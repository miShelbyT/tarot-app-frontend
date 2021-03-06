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
            <div style={{ textAlign: "center" }} className="home-card">
                <img style={{ marginTop: "50px" }} src="https://i.imgur.com/pMSWzhw.png"
                    alt="Eye Logo"
                    />
                    <h1 className="app-name-home">Third Eye Tarot</h1>
                <br></br>
                <button onClick={this.modalClickHandler} className="submit-button">Consult the Cards</button>

                <button onClick={this.learnHandleClick} className="submit-button">Learn More</button>
                {this.state.showModal ? <QuestionModal clickHandler={this.modalClickHandler} /> : null}

            </div>
        )
    }

}

export default withRouter(HomeCard)