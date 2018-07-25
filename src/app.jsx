import React, { Component } from 'react'
import getDeviceID from './actions/getDeviceId'
import { connect } from 'react-redux';
import Btn from './btn'






class App extends Component {

    render() {
        return (
            <div >
                <Btn getDeviceID={() => this.props.getDeviceID()} devID={this.props.deviceIdReducer.devID} />
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        deviceIdReducer: state.deviceIdReducer,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        getDeviceID: () => {
            dispatch(getDeviceID());
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(App);