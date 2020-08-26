import axios from 'axios';

export const payForProudcts = async (data) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify(data);

    try{
        const res = await axios.post('api/shipping', body, config);
        console.log(res)
    } catch (e) {
        const errors = e.response.data.errors.msg;
        console.log(errors)
    }
}
