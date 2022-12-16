module.exports = {
  moduleFileExtensions: [
    "js",
    "json",
    // tell Jest to handle `*.vue` files
    "vue"
  ],
  transform: {
    // process `*.vue` files with `vue2-jest`
    ".*\\.(vue)$": "@vue/vue2-jest",
    // process `*.js` files with `babel-jest`
    ".*\\.(js)$": "babel-jest"
  },
  // Jest uses a "node" environment by default. We need to switch to "jsdom" instead, otherwise usages of DOM APIs such
  // as "window" would cause errors
  testEnvironment: "jsdom",
  moduleNameMapper: {
    // Tell Jest how to resolve imports that use '@' as an alias for the src directory
    // This is also configured in vite.config.js and webpack.config.js
    "^@/(.*)$": "<rootDir>/src/$1",

    // Stub out any imported SASS modules https://stackoverflow.com/a/47541818/2648
    "\\.sass$": "<rootDir>/tests/unit/style-mock.js"
  },
  testMatch: ["<rootDir>/tests/unit/**/*.spec.js"],
  collectCoverageFrom: [
    'src/**/*.{js,vue}',
    '!src/layouts/*.*',
    '!src/vuetify/*.*',
    '!src/app.vue',
    '!src/main.js',
    '!src/services/*.*',
    '!src/router/*.*'
  ],
  coverageThreshold: {
    global: {
      branches: 5,
      functions: 5,
      lines: 5,
      statements: 5
    }
  },
  globalSetup: './jest.global.setup.js',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],

  resetMocks: true
}
