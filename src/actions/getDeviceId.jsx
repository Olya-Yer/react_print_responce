import axios from 'axios'

const getDeviceID = () => {
    axios.get("http://localhost:3000/dv")
        .then(function (response) {
            return {
                type: "update_device_id",
                payload: response.data.deviceId,
            }
        }).catch(function (error) {
            console.log(error);
        });
}

export default getDeviceID