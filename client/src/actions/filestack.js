import { UPLOAD_IMAGE, UPLOAD_IMAGE_SUCCESS,
  UPLOAD_IMAGE_FAILURE } from '../constants/filestack';

/**
   * Returns an object containing action type
   *
   * @returns  {object} action type
   */
function uploadImage() {
  return {
    type: UPLOAD_IMAGE
  };
}
/**
   * Returns an object containing action type and payload
   * @param    {string} url the url of the uploaded img
   *
   * @returns  {object} action type and payload
   */
function uploadImageSuccess(url) {
  return {
    type: UPLOAD_IMAGE_SUCCESS,
    url
  };
}

/**
   * Returns an object containing action type
   *
   * @returns  {object} action type
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
