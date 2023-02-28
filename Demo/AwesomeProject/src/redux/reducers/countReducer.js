const initialState = {
    count: 0,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'INCRESE':
            return {
                ...state,
                count: state.count + 1,
            };
        case 'DECRESE':
            return {
                ...state,
                count: state.count - 1.
            };
        default:
            return state;
    }
};

/**
 * Dấu ... là Spread operator sử dụng với kiểu dữ liệu là Object.
 * Ý nghĩa cho code trên:
 *  - ...state : lấy đối tượng state để sử dụng
 *  - count : gán giá trị mới cho `count`
 */