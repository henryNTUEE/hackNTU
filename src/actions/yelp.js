import oauthSignature from 'oauth-signature';  

import  qs from 'querystring';  
import _ from 'lodash';
import axios from 'axios';
var n = require('nonce')();  

/* Function for yelp call
 * ------------------------
 * set_parameters: object with params to search
 * callback: callback(error, response, body)
 */

 export const FETCH_YELP = 'FETCH_YELP';

 export function request_yelp(set_parameters){
//var request_yelp = function(set_parameters, callback) {

  /* The type of request */
  var httpMethod = 'GET';

  /* The url we are using for the request */
  var url = 'http://api.yelp.com/v2/search';

  /* We can setup default parameters here */
  var default_parameters = {
    category_filter: 'food',
    ll: '25.0330623,121.5609975',
    radius_filter: '100',
    sort: '2'
  };

  /* We set the require parameters here */
  var required_parameters = {
    oauth_consumer_key : 'IqAtTrW0bdX-yl4mIJtObg',
    oauth_token : '2hYQ6dkRW_kL0OuOUWwoW4hGD-GmEA_f',
    oauth_nonce : n(),
    oauth_timestamp : n().toString().substr(0,10),
    oauth_signature_method : 'HMAC-SHA1',
    oauth_version : '1.0'
  };

  /* We combine all the parameters in order of importance */ 
  var parameters = _.assign(default_parameters, set_parameters, required_parameters);

  /* We set our secrets here */
  var consumerSecret = 'Urllqh1xM1rUjMlZQm3cgMZ_1SI';
  var tokenSecret = 'MF1x-z7DKOywmY2DglNh6lDTnRU';

  /* Then we call Yelp's Oauth 1.0a server, and it returns a signature */
  /* Note: This signature is only good for 300 seconds after the oauth_timestamp */
  var signature = oauthSignature.generate(httpMethod, url, parameters, consumerSecret, tokenSecret, { encodeSignature: false});

  /* We add the signature to the list of paramters */
  parameters.oauth_signature = signature;

  /* Then we turn the paramters object, to a query string */
  var paramURL = qs.stringify(parameters);

  /* Add the query string to the url */
  var apiURL = url+'?'+paramURL;

  console.log(apiURL);

  /* Then we use request to send make the API Request */
  // request(apiURL, function(error, response, body){
  //   return callback(error, response, body);
  // });	
 
  console.log(apiURL);
  const request = axios.get(apiURL);

  //console.log(request);

  return {
    type: FETCH_YELP,
    payload: request
  };

};