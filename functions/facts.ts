import axios from "axios";

function dogFact() {
  const url = "https://some-random-api.ml/animal/dog";

  axios
    .get(url)
    .then((res) => {
      console.log(res.data.fact);
    })
    .catch((err) => {
      return new TypeError(err);
    });
}

function catFact() {
  const url = "https://some-random-api.ml/animal/cat";

  axios
    .get(url)
    .then((res) => {
      console.log(res.data.fact);
    })
    .catch((err) => {
      return new TypeError(err);
    });
}

function pandaFact() {
  const url = "https://some-random-api.ml/animal/panda";

  axios
    .get(url)
    .then((res) => {
      console.log(res.data.fact);
    })
    .catch((err) => {
      return new TypeError(err);
    });
}

function redpandaFact() {
  const url = "https://some-random-api.ml/animal/red_panda";

  axios
    .get(url)
    .then((res) => {
      console.log(res.data.fact);
    })
    .catch((err) => {
      return new TypeError(err);
    });
}

function foxFact() {
  const url = "https://some-random-api.ml/animal/fox";

  axios
    .get(url)
    .then((res) => {
      console.log(res.data.fact);
    })
    .catch((err) => {
      return new TypeError(err);
    });
}

function raccoonFact() {
  const url = "https://some-random-api.ml/animal/raccoon";

  axios
    .get(url)
    .then((res) => {
      console.log(res.data.fact);
    })
    .catch((err) => {
      return new TypeError(err);
    });
}

function koalaFact() {
  const url = "https://some-random-api.ml/animal/koala";

  axios
    .get(url)
    .then((res) => {
      console.log(res.data.fact);
    })
    .catch((err) => {
      return new TypeError(err);
    });
}

function kangarooFact() {
  const url = "https://some-random-api.ml/animal/kangaroo";

  axios
    .get(url)
    .then((res) => {
      console.log(res.data.fact);
    })
    .catch((err) => {
      return new TypeError(err);
    });
}

export {
  dogFact,
  catFact,
  pandaFact,
  redpandaFact,
  foxFact,
  raccoonFact,
  koalaFact,
  kangarooFact,
};
