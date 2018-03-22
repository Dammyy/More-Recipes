import * as actions from '../../actions/filestack';
import * as constants from '../../constants/filestack';

describe('Filestack Actions', () => {
  describe('uploadImage', () => {
    it('creates an action to upload an image', () => {
      const expectedAction = {
        type: constants.UPLOAD_IMAGE
      };
      expect(actions.uploadImage()).toEqual(expectedAction);
    });
  });
  describe('uploadImageSuccess', () => {
    it('creates an action if image uploaded successfully', () => {
      const mockUrl = '';
      const expectedAction = {
        type: constants.UPLOAD_IMAGE_SUCCESS,
        url: mockUrl
      };
      expect(actions.uploadImageSuccess(mockUrl)).toEqual(expectedAction);
    });
  });
  describe('uploadImageFailure', () => {
    it('creates an action if image upload was unsuccessful', () => {
      const expectedAction = {
        type: constants.UPLOAD_IMAGE_FAILURE
      };
      expect(actions.uploadImageFailure()).toEqual(expectedAction);
    });
  });
});
