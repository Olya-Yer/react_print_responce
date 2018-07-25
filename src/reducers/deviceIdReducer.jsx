


const deviceIdReducer = (state = {
    devID: ''
}, action) => {
    switch (action.type) {
        case "update_device_id":
            state = {
                ...state,
                devID: action.payload,
            };
            break;
    }
    return state;
}

export default deviceIdReducer
