// Polyfill fn.bind() for PhantomJS
/* eslint-disable no-extend-native */
Function.prototype.bind = require('function-bind')

// require all test files (files that ends with .spec.js)
const testsContext = require.context('./specs', true, /\.spec$/)

testsContext.keys().forEach(testsContext)

// files to require for coverage
const srcContext = require.context('../../src', true)

srcContext.keys().forEach(srcContext)
