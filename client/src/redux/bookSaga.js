import {call, put, takeEvery} from "redux-saga/effects";
import {
    changeBookCollectionApi, deleteBookApi,
    getBooksApi,
        uploadBookApi
} from "../api/api";
import {
    addStorageBook,
    DELETE_BOOK,
    DOWNLOAD_BOOKS,
    removeLocalBook,
        setStoreBooks,
    UPLOAD_BOOK
} from "./booksReducer";
import { editLocalData} from "./colectionsReducer";

export function* watchDownloadBooks() {
    yield takeEvery(DOWNLOAD_BOOKS,downloadBooks);
}
function* downloadBooks() {
    const data = yield call(getBooksApi)
    yield put(setStoreBooks(data.data))
}


export function* watchUploadBooks() {
    yield takeEvery(UPLOAD_BOOK,uploadBooks);
}
function* uploadBooks({payload}) {
    let newBook = yield call(uploadBookApi,payload)
    if(payload.sendBookId.length >1){
        payload.newBookID = newBook.data._id
        let newCollection = yield call(changeBookCollectionApi, payload)
        yield put (editLocalData(newCollection.data ))
    }else {
        yield put(addStorageBook(newBook.data))
    }
}


export function* watchDeleteBook() {
    yield takeEvery(DELETE_BOOK,deleteBookWorker);
}
function* deleteBookWorker(payload) {
    yield call(deleteBookApi,payload.payload)
    debugger
    yield put(removeLocalBook(payload.payload))
}










