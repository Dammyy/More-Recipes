import assert from 'assert';
import { takeLatest } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import { UPLOAD_IMAGE } from '../../constants/filestack';

import watchUploadImage, { uploadImage, pick } from '../../sagas/filestack';
import { uploadImageSuccess } from '../../actions/filestack';

describe('Testing image upload Watcher saga', () => {
  describe('watchUploadImage Saga Function', () => {
    it(
      'should call uploadImage if  UPLOAD_IMAGE action is dispatched',
      () => {
        const gen = watchUploadImage();
        assert.deepEqual(
          gen.next().value,
          call(takeLatest, UPLOAD_IMAGE, uploadImage)
        );
        assert.deepEqual(gen.next().done, true);
      }
    );
  });
});

describe('Testing filestack saga functions', () => {
  it('Should upload an image', () => {
    const url = '';
    const gen = uploadImage();
    assert.deepEqual(gen.next().value, call(pick));
    assert.deepEqual(
      gen.next(url).value,
      put(uploadImageSuccess(url))
    );
    assert.deepEqual(gen.next().done, true);
  });
});

describe('Pick', () => {
  it('returns a promise', () => {
    const result = pick();
    expect(result).toBeInstanceOf(Promise);
  });
});
