import Realm from 'realm';

let realm = null;

const UserSchema = {
  name: 'User',
  properties: {
    _id: 'string',
    name: 'string',
    email: 'string',
    picture: 'string',
    telephone: {type: 'string', optional: true},
    premium: 'bool'
  }
};


function setConnection() {
  realm = new Realm({
    schema: [UserSchema]
  });
}

function getManager() {
  if (realm === null) {
    setConnection();
  }
  return realm;
}

export { getManager };
