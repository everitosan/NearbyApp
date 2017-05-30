const URL = "http://localhost:3000/api";
const JSON_HEADERS = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
};

function loginUser(user) {
  return fetch (URL + "/authUser", {
      method: 'POST',
      headers: JSON_HEADERS,
      body: JSON.stringify({
        name: user.name,
        showId: user.id,
        picture: user.picture.data.url,
        active: user.verified,
        email: user.email
      })
    })
    .then( response => response.json())
    .catch( err => err);
}

function getMyInfo(id) {
  return fetch(URL+"/user/"+id)
    .then( response => response.json())
    .catch(err => err.json());
}
function getMyRequests(id) {
  return fetch(URL+"/user/"+id)
    .then( response => response.json())
    .then( user => user.requests )
    .catch(err => err.json());
}

function updateMyCoords(id,lat,lng) {
  return fetch(URL+"/user/"+id, {
    method: 'PUT',
    headers: JSON_HEADERS,
    body: JSON.stringify({
      coordinates: lat+","+lng
    })
  })
  .then( response => response.json())
  .catch( err => err.json() );
}

function postMyRequest(id, request) {
  return fetch(URL+"/user/"+id+"/createRequest", {
    method: 'POST',
    headers: JSON_HEADERS,
    body: JSON.stringify({
      article: request.article,
      description: request.description
    })
  });
}

function getItemOffers(id) {
  return fetch(URL+"/request/"+id)
    .then(request => request.json())
    .then(request => request.offers)
    .catch(err => err.json());
}

export {loginUser, getMyRequests, updateMyCoords, postMyRequest, getMyInfo, getItemOffers};
