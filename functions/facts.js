"use strict";
exports.__esModule = true;
exports.kangarooFact = exports.koalaFact = exports.raccoonFact = exports.foxFact = exports.redpandaFact = exports.pandaFact = exports.catFact = exports.dogFact = void 0;
var axios_1 = require("axios");
function dogFact() {
    var url = "https://some-random-api.ml/animal/dog";
    axios_1["default"]
        .get(url)
        .then(function (res) {
        console.log(res.data.fact);
    })["catch"](function (err) {
        return new TypeError(err);
    });
}
exports.dogFact = dogFact;
function catFact() {
    var url = "https://some-random-api.ml/animal/cat";
    axios_1["default"]
        .get(url)
        .then(function (res) {
        console.log(res.data.fact);
    })["catch"](function (err) {
        return new TypeError(err);
    });
}
exports.catFact = catFact;
function pandaFact() {
    var url = "https://some-random-api.ml/animal/panda";
    axios_1["default"]
        .get(url)
        .then(function (res) {
        console.log(res.data.fact);
    })["catch"](function (err) {
        return new TypeError(err);
    });
}
exports.pandaFact = pandaFact;
function redpandaFact() {
    var url = "https://some-random-api.ml/animal/red_panda";
    axios_1["default"]
        .get(url)
        .then(function (res) {
        console.log(res.data.fact);
    })["catch"](function (err) {
        return new TypeError(err);
    });
}
exports.redpandaFact = redpandaFact;
function foxFact() {
    var url = "https://some-random-api.ml/animal/fox";
    axios_1["default"]
        .get(url)
        .then(function (res) {
        console.log(res.data.fact);
    })["catch"](function (err) {
        return new TypeError(err);
    });
}
exports.foxFact = foxFact;
function raccoonFact() {
    var url = "https://some-random-api.ml/animal/raccoon";
    axios_1["default"]
        .get(url)
        .then(function (res) {
        console.log(res.data.fact);
    })["catch"](function (err) {
        return new TypeError(err);
    });
}
exports.raccoonFact = raccoonFact;
function koalaFact() {
    var url = "https://some-random-api.ml/animal/koala";
    axios_1["default"]
        .get(url)
        .then(function (res) {
        console.log(res.data.fact);
    })["catch"](function (err) {
        return new TypeError(err);
    });
}
exports.koalaFact = koalaFact;
function kangarooFact() {
    var url = "https://some-random-api.ml/animal/kangaroo";
    axios_1["default"]
        .get(url)
        .then(function (res) {
        console.log(res.data.fact);
    })["catch"](function (err) {
        return new TypeError(err);
    });
}
exports.kangarooFact = kangarooFact;
