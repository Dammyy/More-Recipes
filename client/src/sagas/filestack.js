import { takeLatest } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import { UPLOAD_IMAGE } from '../constants/filestack';
import {
  uploadImageSuccess,
  uploadImageFailure
} from '../actions/filestack';

export const pick = () => {
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
 * @returns {object} uploaded image url
 */
export function* uploadImage() {
  try {
    const url = yield call(pick);
    yield put(uploadImageSuccess(url));
  } catch (error) {
    yield put(uploadImageFailure());
  }
}

/**
 *
 *
 * @returns {any} dispatched action
 */
function* watchUploadImage() {
  yield call(takeLatest, UPLOAD_IMAGE, uploadImage);
}

export default watchUploadImage;
