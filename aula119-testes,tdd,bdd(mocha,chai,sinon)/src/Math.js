class Math {
  sum(a, b) {
    return a + b;
  }

  sumAsync(a, b, callback) {
    return setTimeout(() => {
      callback(a + b);
    }, 2000);
  }

  print(req, res, a, b) {
    res.load("index", a + b);
  }
}

module.exports = Math;
