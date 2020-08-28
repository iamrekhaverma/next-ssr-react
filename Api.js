export function fetchSpacex(params) {
  console.log("queryString", params);
  var url = new URL("https://api.spacexdata.com/v3/launches?limit=100");
  url.search = new URLSearchParams(params).toString();

  return fetch(url).then((res) => res.json());
}
