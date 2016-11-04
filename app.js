//Object creator
function createMyObject() {
  var myObject = {
    foo: 'bar',
    answerToUniverse: 42,
    'olly olly': 'oxen free',
    sayHello: function() {
      return 'hello';
    }
  };
  return myObject;
}

//Object updater
function updateObject(obj) {
  obj.foo = 'foo';
  obj.bar = 'bar';
  obj.bizz = 'bizz';
  obj.bang = 'bang';
  return obj;
}

//Self reference
function personMaker() {
  var person = {
    firstName: 'Paul',
    lastName: 'Jones',
    fullName: function() {
      return this.firstName +' '+ this.lastName;
    }
  };
  return person;
}

//Deleting keys
function keyDeleter(obj) {
  delete obj.foo;
  delete obj.bar;
  return obj;
}