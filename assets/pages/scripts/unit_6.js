// 6.1  理解对象

// 上一章讲过，创建自定义对象的最简单方式就是创建一个Object的实例，然后再为他添加属性和方法。

// var person = new Object();
// person.name = "juju";
// person.age = 29;
// person.job = "Software Engineer";
// person.sayName = function(){
// 	alert(this.name);
// };

// 字面量创建方式
// var person = {
// 	name:"juju",
// 	age:20,
// 	job:"Software Engineer",

// 	sayName:function(){
// 		return 'name:'+this.name+'<br>age:'+this.age+this.job;
// 	}
// };

// alert(person.sayName());

// 6.1.1  属性类型

// ECMA-262 第五版在定义只有内部采用的特性(attribute)时，描述了属性(perperty)的各种特征。ECMA-262定义了这些特征是为了实现Javascript引擎用的，
// 因此在Javascript中不能直接访问他们。为了表示内部值，该规范把他们放在俩对儿方括号中[[Configurable]]。

// ECMAScript中有两种属性：数据属性和访问属性。

// 1.数据属性
// 	数据属性包含一个数据值的位置。在这个位置可以读取和写入值。数据属性有4个描述其行为的特性。

// 	[[Configurable]]：表示能否通过delete删除属性从而重新定义属性
// 	[[Enumerable]]：表示能否通过for-in循环返回属性
// 	[[Writable]]：能否修改属性的值
// 	[[Value]]：包含这个属性的数据值

// 对于前面李子中那样直接在对象上定义的属性，他们的[[Configurable]]，[[Enumerable]]，[[Writable]]，[[Value]]
// 的特性都被设置为true。

// 要修改属性默认的特性，必须使用ECMAScript 5中的Object.defineProperty(Object, prop, descriptor)方法。
// 这个方法接受三个参数：属性所在的对象、属性所在的名字、和一个描述符对象。其中描述符对象必须是
// Configurable、Enumerable、Writable、Value中的一个或多个。例如：

// var person = {};
// Object.defineProperty(person, "name", {
// 	writable:false,
// 	value:"chengqiang"
// });
// alert(person.name);
// person.name = "juju";
// alert(person.name);

// 在调用 Object.defineProperty(Object, prop, descriptor)方法时，如果不指定，Configurable、Enumerable、Writable特性默认值都是false。多数情况下，没有必要
// 利用 Object.defineProperty(Object, prop, descriptor)方法提供的这些高级功能。不过，理解这些概念对理解Javascript对象却非常有用。

// 2.访问属性
// 	访问器属性不包含数据值；他们包含一对儿getter和setter函数。在读取访问其属性是，会调用getter函数，这个函数会负责返回有效的值

// 	[[Configurable]]：表示能否通过delete删除属性从而重新定义属性
// 	[[Enumerable]]：表示能否通过for-in循环返回属性
// 	[[Writable]]：能否修改属性的值
// 	[[Value]]：包含这个属性的数据值