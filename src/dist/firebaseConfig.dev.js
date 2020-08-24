"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.firestore = exports.auth = void 0;

var _app = _interopRequireDefault(require("firebase/app"));

require("firebase/auth");

require("firebase/firestore");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var firebaseConfig = {
  apiKey: 'AIzaSyDbPtjvzDOLapiPAI1KDr3VpIrO6rz3XXE',
  authDomain: 'desmechado-api.firebaseapp.com',
  databaseURL: 'https://desmechado-api.firebaseio.com',
  projectId: 'desmechado-api',
  storageBucket: 'desmechado-api.appspot.com',
  messagingSenderId: '630510241298',
  appId: '1:630510241298:web:6dbe35f8c912c79577facb'
}; // Initialize Firebase

_app["default"].initializeApp(firebaseConfig);

var auth = _app["default"].auth();

exports.auth = auth;

var firestore = _app["default"].firestore();

exports.firestore = firestore;