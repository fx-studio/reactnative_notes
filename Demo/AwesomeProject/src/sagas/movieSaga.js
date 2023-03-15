import callApi from "../axios";
import { takeLatest , put } from 'redux-saga/effects';

export function* fetchMovies({payload}) {
    const {keyword} = payload;
    console.log("OK: " + keyword);

    // show loading
    yield put({type: 'SHOW_LOADING'});

    const ENDPOINT = "https://omdbapi.com";
    console.log("ENDPOIN: " + ENDPOINT);
    const res = yield callApi(ENDPOINT, "GET", {s: keyword, apikey: "5008fdeb"});

    yield put({type: 'MOVIE_FETCHING', payload: res?.data?.Search || []});

    // hide loading
    yield put({type: 'HIDE_LOADING'});
}

export const MovieSagas = [
    takeLatest("FETCHING", fetchMovies)
];