module.exports = {
    testEnvironment: 'jsdom',
    testPathIgnorePatterns: [`node_modules`],
    transformIgnorePatterns: [`node_modules/(?!(gatsby|@lendoab)/)`],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    moduleNameMapper: {
        '\\.(css|less)$': 'identity-obj-proxy',
    }
}