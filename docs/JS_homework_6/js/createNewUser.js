'use strict';
function CreateNewUser() {
  let user = {};
  Object.defineProperties(user,{
    firstName : {
      value : prompt('Enter first name'),
      configurable : true,
    },
    lastName : {
      value :  prompt('Enter last name')
    },
    setFirstName : {
      set : function(name) {
        Object.defineProperty(user,'firstName',{
          value : name,
        })
      }
    },
    setLastName : {
      set : function(name) {
        Object.defineProperty(user,'lastName',{
          value : name,
        })
      }
    },
    getLogin : {
      get : function () {
        return ( this.firstName[0] + this.lastName).toLowerCase()
      }
    }
  });
  return user;
}

let user1 = new CreateNewUser();
console.log(user1);
console.log(user1.getLogin);
