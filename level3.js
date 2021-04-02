//第一种：拷贝
function Animal(){
  　　　　this.species = "动物";
  　　}
  function Cat(name,color){
  　　　　this.name = name;
  　　　　this.color = color;
  　　}
  var Cat=Animal;
  //new一个猫的对象cat1也拥有了“动物”的species属性
  var cat1 = new Cat("大毛","黄色");
  document.write(cat1.species); // 动物
//第二种Prototype改变
function Animal(){
  　　　　this.species = "动物";
  　　}
  function Cat(name,color){
  　　　　this.name = name;
  　　　　this.color = color;
  　　}
  Animal.prototype.species="动物";
  Cat.prototype=Animal.prototype;
  Cat.prototype.constructor=Cat;
  //new一个猫的对象cat1也拥有了“动物”的species属性
  var cat1 = new Cat("大毛","黄色");
  document.write(cat1.species); // 动物
//第三种构造函数绑定
function Animal(){
  　　　　this.species = "动物";
  　　}
  function Cat(name,color){
         Animal.apply(this,arguments);
  　　　　this.name = name;
  　　　　this.color = color;
  　　}
  //new一个猫的对象cat1也拥有了“动物”的species属性
  var cat1 = new Cat("大毛","黄色");
  document.write(cat1.species); // 动物
//第四种深拷贝
function Animal(){
  　　　　this.species = "动物";
  　　}
  function Cat(name,color){
         Animal.apply(this,arguments);
  　　　　this.name = name;
  　　　　this.color = color;
  　　}
  function deepCopy(p,c){
      var c=c || {};
      for(var i in p){
          if(typeof p[i]==='object'){
              c[i]=(p[i].constructor===Array)? []:{};
          }else{
              c[i]=p[i];
          }
      }
      return c;
  }
  //new一个猫的对象cat1也拥有了“动物”的species属性
  var cat1 = new Cat("大毛","黄色");
  deepCopy(Animal,cat1);
  document.write(cat1.species); // 动物
