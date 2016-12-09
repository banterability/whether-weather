module.exports = (apiClient) => {
  const getForecastForCity = ({name, lat, lng}) => {
    return new Promise((resolve, reject) => {
      apiClient.forecast({lat, lng}, (err, body) => {
        if (err) reject(err);
        resolve(Object.assign({}, {name}, body));
      });
    });
  }

  return cities => Promise.all(
    cities.map(getForecastForCity)
  );
}
