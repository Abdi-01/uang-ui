import axios from 'axios'
import { URL_API } from '../helper'

export const getItemAction = () => {
    return async (dispatch) => {
        try {
            let config = {
                method: 'get',
                url: URL_API + 'item/read',
                headers: {
                    'Content-Type': 'application/json',
                }
            }
            let response = await axios(config)
            console.log("Response action item", response.data)
            dispatch({
                type: "GET_ITEMS",
                payload: response.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}