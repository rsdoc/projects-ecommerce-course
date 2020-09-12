// assume
// add product [{id: 1, }]

function fetchData() {
  // over time period
  // http call
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('hello there');
    }, 2000);
  });
}

test('async data', () => {
  return expect(fetchData()).resolves.toBe('hello there');
  // reject
});
