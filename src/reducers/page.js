export default function reducer(state = {
    title: null
}, action) {
    switch (action.type) {
        case "CHANGE_PAGE_TITLE": {
            return {
                ...state,
                title: action.payload
            }
        }
        default:
            return state;
    }
}