const INTIAL_STATE = { devID: '' };


const deviceIdReducer = (state = INTIAL_STATE, action) => {
    switch (action.type) {
        case "update_device_id":
            return {
                ...state,
                devID: action.payload,
            }
        default:
            return state;
    }
}

export default deviceIdReducer
