import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Modal from '../modal';
import history from '../../history';
import { fetchStream, deleteStream } from '../../actions';

class StreamDelete extends React.Component {

    onDeleteStream = () => {
        this.props.deleteStream(this.props.match.params.id)
    }

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }
    
    actions = (
        <React.Fragment>
            <button onClick={this.onDeleteStream} className="ui button negative">Delete</button>
            <Link to="/" className="ui button">Cancel</Link>
        </React.Fragment>
    )
    renderContent() {
        if(!this.props.stream) {
            return 'Are you sure you want to delete this stream?'
        }
        return `Are you sure you want to delete this stream with title: ${this.props.stream.title}?`
    }
    render() {
        return (
                <Modal
                    dismiss = {() => history.push('/')}
                    title="Delete Stream"
                    content={this.renderContent()}
                    actions= {this.actions}
                />
        )

    }
}

const mapStateToProps = (state, ownProps) => {
    return {stream: state.streams[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {fetchStream, deleteStream})(StreamDelete);
