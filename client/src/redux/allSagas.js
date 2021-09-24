import {all} from 'redux-saga/effects'
import {
    watchAddOneCollection,
    watchDeleteCollection,
    watchDownloadCollections, watchUpdateCollection,
    watchUploadCollections
} from "./collectionSaga";
import {watchDeleteBook, watchDownloadBooks, watchUploadBooks} from "./bookSaga";



export function* allWatchers() {
    yield all([
        watchDownloadCollections(),
        watchUploadCollections(),
        watchDeleteCollection(),
        watchAddOneCollection(),
        watchUpdateCollection(),
        watchDownloadBooks(),
        watchUploadBooks(),
        watchDeleteBook()

        ]

    )
}








