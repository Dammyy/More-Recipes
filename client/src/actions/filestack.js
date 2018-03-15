import { UPLOAD_IMAGE, UPLOAD_IMAGE_SUCCESS,
  UPLOAD_IMAGE_FAILURE } from '../constants/filestack';

/**
 *
 *
 * @returns {object} any
 */
function uploadImage() {
  return {
    type: UPLOAD_IMAGE
  };
}

/**
 *
 *
 * @param {string} url
 * @returns {object} any
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
 * @returns {object} any
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
