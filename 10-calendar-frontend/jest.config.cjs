module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFiles: ['./jest.setup.js'],
  transformIgnorePatterns: [],
  
  // ModuleNameMapper sólo si ocupamos importar CSS en nuestros componentes para el testing
  moduleNameMapper: {
      '\\.(css|less)$': '<rootDir>/__test__/__mocks__/styleMock.js',
  },
}