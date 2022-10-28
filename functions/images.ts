import axios from "axios";

function dogImage() {
  const url = "https://some-random-api.ml/animal/dog";

  axios
    .get(url)
    .then((res) => {
      console.log(res.data.image);
    })
    .catch((err) => {
      return new TypeError(err);
    });
}

function catImage() {
  const url = "https://some-random-api.ml/animal/cat";

  axios
    .get(url)
    .then((res) => {
      console.log(res.data.image);
    })
    .catch((err) => {
      return new TypeError(err);
    });
}

function pandaImage() {
  const url = "https://some-random-api.ml/animal/dog";

  axios
    .get(url)
    .then((res) => {
      console.log(res.data.image);
    })
    .catch((err) => {
      return new TypeError(err);
    });
}

function redpandaImage() {
  const url = "https://some-random-api.ml/animal/red_panda";

  axios
    .get(url)
    .then((res) => {
      console.log(res.data.image);
    })
    .catch((err) => {
      return new TypeError(err);
    });
}

function foxImage() {
  const url = "https://some-random-api.ml/animal/fox";

  axios
    .get(url)
    .then((res) => {
      console.log(res.data.image);
    })
    .catch((err) => {
      return new TypeError(err);
    });
}

function raccoonImage() {
  const url = "https://some-random-api.ml/animal/raccoon";

  axios
    .get(url)
    .then((res) => {
      console.log(res.data.image);
    })
    .catch((err) => {
      return new TypeError(err);
    });
}

function koalaImage() {
  const url = "https://some-random-api.ml/animal/koala";

  axios
    .get(url)
    .then((res) => {
      console.log(res.data.image);
    })
    .catch((err) => {
      return new TypeError(err);
    });
}

function kangarooImage() {
  const url = "https://some-random-api.ml/animal/kangaroo";

  axios
    .get(url)
    .then((res) => {
      console.log(res.data.image);
    })
    .catch((err) => {
      return new TypeError(err);
    });
}

export {
  dogImage,
  catImage,
  pandaImage,
  redpandaImage,
  foxImage,
  raccoonImage,
  koalaImage,
  kangarooImage,
};
