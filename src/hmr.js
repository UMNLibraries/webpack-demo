export function addElement () {
  // create a new div element
  // and give it some content
  var newDiv = document.createElement("div");
  var newContent = document.createTextNode("Hi there and greetings!");
  newDiv.appendChild(newContent); //add the text node to the newly created div.

  // add the newly created element and its content into the DOM
  var currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
}

addElement();

if (module.hot) {
   module.hot.accept('./hmr.js', function() {
     console.log('Accepting the updated printMe module!');
     printMe();

     //stuff
     //blah
   })
 }