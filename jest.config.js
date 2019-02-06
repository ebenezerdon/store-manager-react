module.exports = {
    setupFiles: ['<rootDir>/src/tests/setup.js'],
    transform: { '^.+\\.js$': 'babel-jest' },
    collectCoverageFrom: ['src/**/*.{js,jsx}'],
    snapshotSerializers: ['enzyme-to-json/serializer'],
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/__mocks__/fileMock.js',
        '\\.(css|scss)$': '<rootDir>/__mocks__/styleMock.js',
    },
}
