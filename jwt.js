var sha256 = require('js-sha256');
 
const API_KEY= 'da812b07-12bf-4bed-8a54-7ec692fe9114';
const API_SECRET= 'ec3c1eb4-e22c-4e86-af87-feac42a78113';

const iat = Date.now();
const exp = Date.now() + 300000;

const jti = sha256(`${API_SECRET}:${iat}`);


var jwt = require('jsonwebtoken');
const payload = {
    public_key: API_KEY,
    iat,
    exp,
    jti
}
var token = jwt.sign(payload, API_SECRET, { algorithm: 'HS256' });

console.log(token)