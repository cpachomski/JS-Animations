(function(){

  var results;

  this.assert = function assert( value, desc ){
    var li = document.createElement( 'li' );
    li.className = value ? 'pass' : 'fail';
    li.appendChild(document.createTextNode( desc ));
    document.getElementById( 'results' ).appendChild( li );
    if(!value){
      li.parentNode.parentNode.className='fail';
    }
    return li;
  };

  this.test = function test( name, fn ){
    results = document.getElementById( 'results' );
    results = assert(true, name).appendChild(document.createElement( "ul" ));
    fn();
  };
})();

window.onload = function() {
  test( 'Test One', function() {
    assert(true, "First assertion complete");
    assert(true, "Second assertion complete");
  });
  test( "Test Two", function(){
    assert(true, "First test completed");
    assert(false, "Second test failed");
  });
  test ( "Test Three", function(){
    assert(null, "fail");
    assert(5, "pass");
  });
};

