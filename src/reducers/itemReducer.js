const INITIAL_STATE = {
    item: []
}

export const itemReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "GET_ITEMS":
            console.log("Item data", action.payload)
            return { ...state.item, item: action.payload }
        default:
            return state
    }
}