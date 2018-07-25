import React from 'react'

class Btn extends React.Component {
    render() {
        return (
            <div>
                <button onClick={() => this.props.getDeviceID()}>{"get device id"}</button>
                <p>{"device id is: "}{}{this.props.devID}</p>
            </div>
        )
    }
}
export default Btn