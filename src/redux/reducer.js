import {getData} from "../api/api";


const SET_DATA = 'SET-DATA'


const initialState = {
    data: []
}

let reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA: {
            let copyState = {
                ...state,
                data: action.data
            }
            return copyState
        }
        default:
            return state

    }
}
export const setData = (data) => {
    return {
        type: SET_DATA,
        data
    }
}

export const setDataThunkCreator = () => {
    return async (dispatch) => {
        let data = await getData()
        dispatch(setData(data))
    }
}

export default reducer