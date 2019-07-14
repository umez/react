import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {

    componentWillMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '65607726757-7pov7ad2o215e073veco8aqctcuig740.apps.googleusercontent.com',
                scope: 'email'                 
            }).then (() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }

    onAuthChange = isSignedIn => {
        if(isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        }else {
            this.props.signOut();
        }
    }

    onSignedOutClick = () => {
        this.auth.signOut();
    }
    
    onSignedInClick = () => {
        this.auth.signIn()
    }

    renderButton() {
        if(this.props.isSignedIn === null) {
            return null
        } else if (this.props.isSignedIn) {
            return (
                <button onClick={this.onSignedOutClick} className="ui red google button">
                    <i className="google icon" />
                    Sign Out
                </button>
            )
        } else {
            return (
                <button onClick={this.onSignedInClick} className="ui red google button">
                    <i className="google icon" />
                    Sign In With Google
                </button>
            )
        }
    }

    render() {        
        return (
            <div>{this.renderButton()}</div>
        )
    }
}

const mapStateToProps = state => {
    return {isSignedIn : state.auth.isSignedIn}
}

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);