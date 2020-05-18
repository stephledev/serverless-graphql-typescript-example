module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  silent: true,
  collectCoverage: true,
  coverageReporters: ['lcov'],
}
