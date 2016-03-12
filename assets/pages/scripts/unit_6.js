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

// 6.2  创建对象

// 	虽然Object构造函数或对象字面量都可以用来创建的单个对象，但这些方式有个明显的缺点：使用同一接口创建很多对象，会产生大量的重复代码。

// 	6.2.1  工厂模式

	// function createPerson(name,age,job){
	// 	var o = new Object();
	// 	o.name = name;
	// 	o.age = age;
	// 	o.job = job;
	// 	o.sayName = function(){
	// 		alert(this.name);
	// 	}
	// 	return o;
	// }

	// var person1 = createPerson('chengqiang',22,'software engineer');
	// var person2 = createPerson('pluto',22,'Front end');

	// person1.sayName();
	// person2.sayName();

	// 缺点：没有解决对象识别问题。

	// 6.2.2  构造函数模式

	// function Person(name,age,job){
	// 	this.name = name;
	// 	this.age = age;
	// 	this.job = job;
	// 	this.sayName = function(){
	// 		alert(this.name);
	// 	};
	// }

	// var person1 = new Person('chengqiang',22,'Software Engineer');
	// var person2 = new Person('pluto',22,'Front');

	// person1.sayName();
	// person2.sayName();

	// 注意：构造函数函数名第一个字母大写

	// 要创建Person的新实例，必须使用new操作符。以这种方式调用构造函数实际上会经历一下4个步骤：
	// （1）：创建一个新对象；
	// （2）：将构造函数的作用域赋给新对象（因此this就指向了这个对象）
	// （3）：执行构造函数中的代码（为这个新对象添加属性）
	// （4）：返回新对象

	// 前面的例子中，person1和person2分别保存着Person的一个不同的实例。这两个对象都有一个
	// constructor（构造函数）属性，该属性指向Person，提示如下

	// alert(person1.constructor == Person);	//true
	// alert(person2.constructor == Person);	//true

	// 对象的 constructor属性最初是用来表示对象类型的。但是提到检测对象类型，还是 instanceof 
	// 操作符更可靠一些。我们在这个例子中创建的所有对象既是 Object 的实例，同时也是 要创建Person的新实例

	// alert(person1 instanceof Object);		//true
	// alert(person1 instanceof Person);		//true
	// alert(person2 instanceof Object);		//true
	// alert(person2 instanceof Person);		//true

	// 1.将构造函数当函数使用  只需要不是new即可
	// 2.构造函数的问题

	// 	缺点：   
	// 		1：使用构造函数的主要问题，就是每个方法都要在每个实例上重新创建一个遍

	// 		alert(person1.sayName == person2.sayName)  //false

	// 	解决办法：

		// function Person(name,age,job){
		// 	this.name = name;
		// 	this.age = age;
		// 	this.job = job;
		// 	this.sayName = sayName;
		// }

		// function sayName(){
		// 	alert(this.name);
		// }

		// var person1 = new Person('chengqiang',22,'Software Engineer');
		// var person2 = new Person('pluto',22,'Front');

		// alert(person1.sayName == person2.sayName)  //false

		// 新的问题又来了：在全局作用域中定义的函数实际上只能被某个对象调用，这让全局作用域
		// 有点名不符其实。而更让人无法接受的是：如果对象需要定义很多方法，那么就要定义很多个全局函数，
		// 于是我们这个自定的引用类型就丝毫没有封装的意义了。

	// 6.2.3  原型模式

	// 我们创建的每个函数都有一个prototype（原型）属性，这个属性是一个指针，指向一个对象，而这个对象
	// 的用途是包含可以由特定类型的所有实例共享的属性和方法。如果按照字面意思来理解，那么
	// prototype就是通过调用构造函数而创建的那个对象实例的原型对象。使用原型对象的好处是可以让所有
	// 对象实例共享他所包含的属性方法。

	// function Person(){
	// }

	// Person.prototype.name = 'chengqiang';
	// Person.prototype.age = 22;
	// Person.prototype.job = 'Software Engineer';
	// Person.prototype.sayName = function(){
	// 	alert(this.name);
	// }

	// var person1 = new Person();
	// person1.sayName();

	// var person2 = new Person();
	// person2.sayName();

	// alert(person1.sayName == person2.sayName);

	// 1.理解原型对象
	// 	无论什么时候，只要创建了一个新函数，就会根据一组特定的规则为该函数创建一个 prototype 属性，
	// 	这个属性指向函数的原型对象。在默认情况下，所有原型对象都会自动获得一个 constructor(构造函数)
	// 	属性，这个属性包含一个指向 prototype属性所在函数的指针，这个属性包含一个指向 prototype属性所在函数的指针。
	// 	就拿前面的例子来说。 Person.prototype.constructor指向 Person。而通过这个构造函数，我们还可以继续为原型对象
	// 	添加其他属性和方法。

	// 	创建了自定义的构造函数之后，其原型对象默认只会取得 constructor属性；至于其他方法，则都是从 Object继承而来的。
	// 	当调用了构造函数创建了一个新示例，该实例的内部将包含一个指针(内部属性)，指向构造函数的
	// 	原型对象。ECMA-262第五版中管这个指针叫做[[Prototype]]。
	// 	虽然在所有实例中都无法访问到[[Prototype]],但是可以通过 isPrototypeOf(Object)方法来确定对象之间是否存在这种关系。

		// function Person(){
		// }

		// Person.prototype.name = 'chengqiang';
		// Person.prototype.age = 22;
		// Person.prototype.job = 'Software Engineer';
		// Person.prototype.sayName = function(){
		// 	alert(this.name);
		// }

		// var person1 = new Person();
		// person1.sayName();

		// var person2 = new Person();
		// person2.sayName();

		// alert(Person.prototype.isPrototypeOf(person1));
		// alert(Person.prototype.isPrototypeOf(person2));

		// 这里，我们用原型对象的 isPrototypeOf()方法测试了 person1和 person2。因为他们内部都有一个指向 Person.prototype的指针。

		// ECMAScript 5中增加了一个新方法，叫 Object.getPrototypeOf(Object),在所有支持的实现中，
		// 这个方法返回[[Prototype]]的值。

		// 通过使用 hasOwnProperty(property)方法，什么时候访问的是实力属性，什么时候访问的是原型属性。
		// function Person(){
		// }

		// Person.prototype.name = 'chengqiang';
		// Person.prototype.age = 22;
		// Person.prototype.job = 'Software Engineer';
		// Person.prototype.sayName = function(){
		// 	alert(this.name);
		// }

		// var person1 = new Person();
		// var person2 = new Person();

		// alert(person1.hasOwnProperty("name"));

		// person1.name = "Greg";
		// alert(person1.name);
		// alert(person1.hasOwnProperty("name"));

		// 2. 原型与in操作符

		// 有两种方式使用in操作符：单独使用和在for-in中使用。在单独使用时，in操作符会在通过对象能够访问给定属性是返回true，无论该属性是存在与原型还是实例。
		// function Person(){
		// }

		// Person.prototype.name = 'chengqiang';
		// Person.prototype.age = 22;
		// Person.prototype.job = 'Software Engineer';
		// Person.prototype.sayName = function(){
		// 	alert(this.name);
		// }

		// var person1 = new Person();
		// var person2 = new Person();

		// alert(person1.hasOwnProperty("name"));

		// person1.name = "Greg";
		// alert(person1.name);
		// alert(person1.hasOwnProperty("name"));
		// alert('name' in person1);

		3.  更简单的原型语法。

		function Person(){
		}

		Person.prototype = {
			name:'chengqiang',
			age:22,
			job:'Software Engineer',
			sayName:function(){
				alert(this.name);
			}
		};

		这种写法 constructor不再指向 Person函数。

		function Person(){
		}

		Person.prototype = {
			constructor:Person,
			name:'chengqiang',
			age:22,
			job:'Software Engineer',
			sayName:function(){
				alert(this.name);
			}
		};

		这中方式重设 constructor属性会导致他的 [[Enumerable]]特性被设置为true。默认情况下，原生的 constructor是不可枚举的。
		因此，如果您使用兼容模式 ECMAScript 5中的JavaScript引擎，可以试一试 Object.defineProperty(Object, prop, descriptor).
		function Person(){
		}

		Person.prototype = {
			name:'chengqiang',
			age:22,
			job:'Software Engineer',
			sayName:function(){
				alert(this.name);
			}
		};

		//重设构造函数，只是用于ECMAScript 5 兼容的JavaScript引擎
		Object.defineProperty(Person.prototype,'constructor',{
			enumerable:false,
			value:Person
		});

