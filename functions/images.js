"use strict";
exports.__esModule = true;
exports.kangarooImage = exports.koalaImage = exports.raccoonImage = exports.foxImage = exports.redpandaImage = exports.pandaImage = exports.catImage = exports.dogImage = void 0;
var axios_1 = require("axios");
function dogImage() {
    var url = "https://some-random-api.ml/animal/dog";
    axios_1["default"]
        .get(url)
        .then(function (res) {
        console.log(res.data.image);
    })["catch"](function (err) {
        return new TypeError(err);
    });
}
exports.dogImage = dogImage;
function catImage() {
    var url = "https://some-random-api.ml/animal/cat";
    axios_1["default"]
        .get(url)
        .then(function (res) {
        console.log(res.data.image);
    })["catch"](function (err) {
        return new TypeError(err);
    });
}
exports.catImage = catImage;
function pandaImage() {
    var url = "https://some-random-api.ml/animal/dog";
    axios_1["default"]
        .get(url)
        .then(function (res) {
        console.log(res.data.image);
    })["catch"](function (err) {
        return new TypeError(err);
    });
}
exports.pandaImage = pandaImage;
function redpandaImage() {
    var url = "https://some-random-api.ml/animal/red_panda";
    axios_1["default"]
        .get(url)
        .then(function (res) {
        console.log(res.data.image);
    })["catch"](function (err) {
        return new TypeError(err);
    });
}
exports.redpandaImage = redpandaImage;
function foxImage() {
    var url = "https://some-random-api.ml/animal/fox";
    axios_1["default"]
        .get(url)
        .then(function (res) {
        console.log(res.data.image);
    })["catch"](function (err) {
        return new TypeError(err);
    });
}
exports.foxImage = foxImage;
function raccoonImage() {
    var url = "https://some-random-api.ml/animal/raccoon";
    axios_1["default"]
        .get(url)
        .then(function (res) {
        console.log(res.data.image);
    })["catch"](function (err) {
        return new TypeError(err);
    });
}
exports.raccoonImage = raccoonImage;
function koalaImage() {
    var url = "https://some-random-api.ml/animal/koala";
    axios_1["default"]
        .get(url)
        .then(function (res) {
        console.log(res.data.image);
    })["catch"](function (err) {
        return new TypeError(err);
    });
}
exports.koalaImage = koalaImage;
function kangarooImage() {
    var url = "https://some-random-api.ml/animal/kangaroo";
    axios_1["default"]
        .get(url)
        .then(function (res) {
        console.log(res.data.image);
    })["catch"](function (err) {
        return new TypeError(err);
    });
}
exports.kangarooImage = kangarooImage;
