/*
  正则表达式

    一、什么是正则表达式
    二、创建正则表达式
      1、两种创建方式
  var box = new RegExp('Box');				//第一个参数字符串
  alert(box);

  var box = new RegExp('Box','ig');		//第二个参数可选模式修饰符 i：忽略大小写；g：全局匹配；m：多行匹配。
  alert(box);

  var box = /Box/;							//字面量正则表达式。可以 var box = /Box/ig。
  alert(box);									

  字面量在使用得更多


  2.测试正则表达式
  RegExp对象的方法
  方法		功能
  test()		在字符串中测试模式匹配，返回true或者false
  exec()		在字符串中执行匹配搜索，返回结果数组。

  所使用new运算符示例
  var pattern = new RegExp('box','i');
  var str = 'This is a Box!'
  alert(pattern.test(str));

  使用字面量方式
  var pattern = /box/i;
  var str = 'This is a Box!'
  alert(pattern.test(str));

  var pattern = /box/;
  var str = 'This is a Box!'
  alert(pattern.test(str));

  alert(/Box/i.test('box'));

  var pattern = /box/i;
  var str = 'This is a Box!';
  alert(typeof pattern.exec(str));
  alert(pattern.exec(str) instanceof Array);

  3.使用字符串的正则表达式方法
  除了正则表达式对象本身的test、exec两个方法，string对象也提供了4个使用正则表达式的方法。

  String对象中的正则表达式方法
  方法							含义
  match(pattern)					返回pattern中的子串或null
  replace(pattern,replacement)	用replacement替换pattern
  search(pattern)					返回字符串中pattern开始位置
  split(pattern)					返回字符串指定pattern拆分的数组

  var pattern = /box/ig;
  var str = 'This is a Box,That is a Box';
  alert(str.match(pattern));

  var pattern = /box/ig;
  var str = 'This is a Box,That is a Box';
  alert(str.search(pattern));

  var pattern = /box/ig;
  var str = 'This is a Box,That is a Box';
  alert(str.replace(pattern,'chengqiang'));

  RegExp对象的静态属性
  属性			短名	含义
  input 			$_ 		当前被匹配的字符串
  lastMatch		$& 		最后一个匹配字符串
  lastParen		$+ 		最后一对圆括号内的匹配子串
  leftContext		$ 		最后一次匹配的子串
  multiline		$ 		用于指定是否
  nightContext	$
*/

function displayInfo(args) {
    var output = "";

    if (typeof args.name == "string") {
        output += "Name: " + args.name + "\n";
    }

    if (typeof args.age == "number") {
        output += "Age: " + args.age + "\n";
    }
    alert(output)
}

displayInfo({
    name: "Nicholas",
    age: 29
})

displayInfo({
    name: "Greg"
})

let a = [1, 2, 3, 4, 5];
console.log(Array.isArray(a));

function compare(value1, value2) {
    if (value1 < value2) {
        return -1
    } else if (value1 > value2) {
        return 1
    } else {
        return 0
    }
}

function compare1(value1, value2) {
    return value2 - value1
}