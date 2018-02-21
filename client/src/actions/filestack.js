import { UPLOAD_IMAGE, UPLOAD_IMAGE_SUCCESS,
  UPLOAD_IMAGE_FAILURE } from '../constants/filestack';

/**
 *
 *
 * @returns {void}
 */
function uploadImage() {
  return {
    type: UPLOAD_IMAGE
  };
}

/**
 *
 *
 * @param {any} url
 * @returns {void}
 */
function uploadImageSuccess(url) {
  return {
    type: UPLOAD_IMAGE_SUCCESS,
    url
  };
}

/**
 *
 *
 * @returns {void}
 */
function uploadImageFailure() {
  return {
    type: UPLOAD_IMAGE_FAILURE
  };
}

export {
  uploadImage,
  uploadImageSuccess,
  uploadImageFailure
};
