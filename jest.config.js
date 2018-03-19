module.exports = {
  rootDir: 'client/src',
  setupFiles: ['jest-localstorage-mock', '<rootDir>/tests/testSetup.js'],
  collectCoverage: true,
  coverageDirectory: '<rootDir>/../../coverage/client',
  collectCoverageFrom: ['**/*.{js,jsx}'],
  coveragePathIgnorePatterns: ['<rootDir>/tests'],
  moduleNameMapper: {
    '^.+\\.(css|less)$': '<rootDir>/tests/CSSStub.js'
  }
};
