/*

  Create a function `parseQueryString` that accepts a query string parameter as an argument, and
  converts it into an object, using the following rules:

    * An equals sign (`=`) separates a *key* on the left from a *value* on the right.
    * An ampersand (`&`) separates key-value pairs from each other.
    * All keys and values should be parsed as Strings.
    * The query string will not contain spaces.

  Here are some example inputs and outputs (mind the edge cases!):

  ```javascript
  parseQueryString("");
  //=> {}

  parseQueryString("a=1");
  //=> {
  //    "a": "1",
  //   }

  parseQueryString("first=alpha&last=omega");
  //=> {
  //    "first": "alpha",
  //    "last": "omega"
  //   }

  parseQueryString("a=apple&b=beet&b=blueberry&c=&d=10");
  //=> {
  //    "a": "apple",
  //    "b": "blueberry",   // "blueberry" overwrites "beet"!
  //    "c": "",            // empty string (missing value)
  //    "d": "10"           // "10" is a String!
  //   }
  ```

  Mega Bonus
  - Can you create the reverse function? Given an object, output a Query Parameter String:

    ``` javascript
    var o = {first: "alpha", last: "omega"};
    convertToQueryParameter(o); // "first=alpha&last=omega";
    ```

*/

var parseQueryString = function(input){
  var pairs = input.split("&");
  var output = {};
  for(var i = 0; i < pairs.length; i++){
    var currentPair = pairs[i].split("=");
    output[currentPair[0]] = currentPair[1];
  }
  return output;
}

var getQueryString = function(input){
  var output = "";
  for(var key in input){
    output =output + key + "=" + input[key] + "&";
  }
  output = output.slice(0, output.length-1);
  return output;
}

console.log(parseQueryString("a=apple&b=beet&b=blueberry&c=&d=10"));
console.log(getQueryString({a:"yes", b: true, c: "10"}));
