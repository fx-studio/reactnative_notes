export function searchMovies (keyword) {
    console.log('action: ' + keyword);
    return {
        type: "FETCHING",
        payload: { keyword }
    }
}

/**
 * Đây là Action chính,
 *  - Nó sẽ triệu hồi Saga để thực thi xử lý logic trước
 */