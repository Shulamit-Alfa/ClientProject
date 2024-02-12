import axios from 'axios';
import { useEffect, useState } from 'react';

const UseGet = () => {

    // useEffect(() => {
    //     get()
    // }, [])

    const [res, setRes] = useState();

    const get = async (url) => {
        try {
            const response = await axios.get(url);
            setRes(response.data);
        }
        catch (error) {
            console.error(error);
        }
    }

    return [get, res];

}

export default UseGet;
