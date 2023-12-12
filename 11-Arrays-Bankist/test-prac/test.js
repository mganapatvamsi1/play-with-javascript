// Classes
"use strict";

class Test1 {
    // constructor() {
    //   this.name = "ManiG";
    //   this.age = 30.5;
    // }
    name = "ManiG";
    age = 30.5;
    justPrint = () => console.log('hey this is just for testing.!');
  }
  
  class Test2 extends Test1 {
    // constructor() {
    //   super();
    //   this.name = "Manikanta";
    //   this.age = 31;
    //   this.place = "Vizag";
    // }
    name = "Manikanta";
    age = 31;
    place = "Vizag";
    justPrint = () => console.log('new copy for sandbox codebase.!');
  }

  class Test3 extends Test1 {
    place = "Rajole";
    justPrint = () => console.log('test3.!');
  }

  const test1Obj = new Test1();
  console.log(test1Obj);
  test1Obj.justPrint();
  const test2Obj = new Test2();
  console.log(test2Obj);
  test2Obj.justPrint();
  const test3Obj = new Test3();
  console.log(test3Obj);
  test3Obj.justPrint();

  // Classes or Functions are used by React to create components.