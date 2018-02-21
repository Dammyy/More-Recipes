import { takeLatest } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import { UPLOAD_IMAGE } from '../constants/filestack';
import {
  uploadImageSuccess,
  uploadImageFailure
} from '../actions/filestack';

const pick = () => {
  return new Promise((resolve, reject) => {
    filepicker.pick(
      {
        mimetype: 'image/*',
        container: 'modal',
        services: ['COMPUTER',
          'FACEBOOK', 'INSTAGRAM', 'URL', 'IMGUR', 'PICASA'],
        openTo: 'COMPUTER'
      },
      (Blob) => {
        const handler = Blob.url;
        resolve(handler);
      },
      (FPError) => {
        reject(FPError.toString());
      }
    );
  });
};


/**
 * @returns {void}
 */
function* uploadImage() {
  try {
    const url = yield call(pick); // call the pick function
    yield put(uploadImageSuccess(url));
  } catch (error) {
    yield put(uploadImageFailure());
  }
}

/**
 *
 *
 * @returns {void}
 */
export function* watchUploadImage() {
  yield takeLatest(UPLOAD_IMAGE, uploadImage);
}
