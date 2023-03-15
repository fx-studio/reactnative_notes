/**
 * Giá trị ban đầu của State
 */
const initialState = {
    moviesSearch: [],
    isLoading: false
}

/**
 * Xử lý logic
 */
export default (state = initialState, action) => {
    switch (action.type) {
        case 'MOVIE_FETCHING':
            console.log("---------------");
            console.log(action.type);
            return {
                ...state,
                moviesSearch: action.payload
            };
        case 'SHOW_LOADING':
            return {
                ...state,
                isLoading: true
            };
        case 'HIDE_LOADING':
            return {
                ...state,
                isLoading: false
            };
        default:
            return state;
    }
}
/**
 * Chưa có gì đặc biệt ở đây hết.
 */