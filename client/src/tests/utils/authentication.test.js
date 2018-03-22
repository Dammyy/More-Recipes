import authChecker from '../../utils/authentication';

describe('authChecker', () => {
  it('returns the expected object if token is not set', () => {
    const result = authChecker();
    expect(result).toEqual({
      Authenticated: false,
      token: null,
      firstName: null
    });
  });

  it('returns the expected object if token is set', () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjcsImZpcnN0TmFtZSI6IkRhbWlsYXJlIiwibGFzdE5hbWUiOiJPbGF0dWJvc3VuIiwiZW1haWwiOiJkYW1pbGFyZW9sYXR1Ym9zdW5AeWFob28uY29tIiwiaWF0IjoxNTIxMTk3MjMyfQ.cObh6ON38vzNxiQctOdMVlMwfcNApRY52oQ1tLLn8j0';// eslint-disable-line
    localStorage.setItem('token', token);
    const result = authChecker();
    expect(result).toEqual({
      Authenticated: true,
      firstName: 'Damilare',
      token,
      userId: 27
    });
  });
});
