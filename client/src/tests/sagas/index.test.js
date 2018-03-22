import index from '../../sagas/index';

describe('index test', () => {
  it('should return a generator object', () => {
    const i = index();
    const nextValue = i.next().value;
    expect(nextValue).toBeTruthy();
  });
});
