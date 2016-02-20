# ProfessionalJavaScript
JAvaScript高级程序设计第三版笔记及源码

### 第一章：JavaScript简介
    1.1  JavaScript简史  诞生于1995年，目的是将应该由服务器端的验证移到客户端验证。
    1.2  JavaScript实现  完整JavaScript应由核心ECMAScript，浏览器对象模型BOM，文档对象模型DOM构成。ECMAScript提供语言核心功能，BOM提供与浏览器交互的方法和接口，DOM提供访问和操作网页的方法和接口。
    1.3  JavaScript版本
    1.4  小结

### 第二章：在HTML中使用JavaScript
    2.1 使用<script>元素 
        <script>元素的使用是为了向HTML页面中插入JavaScript。他有如下6个属性：async,charset,defer,language,src,type.
        使用<script> 直接在页面中嵌入JavaScript，只需<script type="text/javascript"><script>
                     外部包含JavaScript，必须加src属性。<script type="#" src="#"><script>
        注意：1. 现代web一般将全部JavaScript引用放在<body>元素中页面内容的后面；
              2. defer 延迟脚本，async 异步脚本
    2.2 嵌入脚本与外部脚本
        最好使用外部脚本：优点 可维护性，可缓存，适应未来。
    2.3 文档模式对JavaScript的影响
    2.4 考虑禁用JavaScript

### 第三章：基本概念
    ECMA-262第三版中定义的ECMAScript是各浏览器实现最多的一个版本，ECMA-262第五版是浏览器接下来要实现的版本。我们主要讲第三版，并就第五版的变化做出说明。
    3.1  语法
          1. 区分大小写；
          2. 标识符；
          3.注释： //单行注释 
                   /*
                    *这是一个多行（块级）注释
                    */;
          4. 严格模式："use strict"；语句：以分号结尾；
    3.2  关键字和保留字
    3.3  变量
         松散数据类型，忽略  var可是变量成为全局变量。
    3.4  数据类型
         ECMAScript中有五种基本数据类型：Undefine、Null、Boolean、Number和String。还有一种复杂类型Object。
          3.4.1  typedof操作符：检测给定变量的数据类型
                 1. "undefined"——如果这个值未定义
                 2. "boolean"——如果这个值是布尔值
                 3. "string"——如果这个值是字符串
                 4. "number"——如果这个值是数值
                 5. "object"——如果这个值是对象
                 6. "function"——如果这个值是函数
                    注意：特殊值被认为是一个空对象的引用。
          3.4.2 Undefind类型
                - Undefind类型只有一个值，即特殊的undefine。
                - 使用var申明变量但未初始化，这个变量的值就是undefined；
                - 直接alert未申明的值会产生错误，但是typedof 未声明的值也为undefined。
          3.4.3 Null类型
                Null类型只有一个值的数据类型，这个数据类型是null。从逻辑上看，null表示空对象指针，而这也正是使用typedof操作符检测null值时会返回"object"的原因。如果定义的变量准备在将来用于保存对象，那么最好将该变量初始化为null。
                尽管null 和undefined有这样的关系，但它们的用途完全不同。如前所述，无论在什么情况下都没有必要把一个变量的值显式地设置为undefined，可是同样的规则对null 却不适用。换句话说，只要意在保存对象的变量还没有真正保存对象，就应该明确地让该变量保存null 值。这样做不仅可以体现null 作为空对象指针的惯例，而且也有助于进一步区分null 和undefined。
          3.4.4 Boolean类型
                Boolean对象只有两个字面值：true和false，true不一定等于1，false也不一定等于0。
                Boolean()函数可以将任何类型转换成Boolean类型，规则如下
               _____________________________________
                 数据类型   转换成为true的值     转换成为false的值
               _____________________________________
                  Boolean        true                           false
                    String        任何非空字符               ""（空字符） 
                  Number   任何非零数字（包括无穷大）  0或NAN
                  Object         任何对象                          null
                Undefined      n/a                             undefined 
                 ____________________________________
                 
          3.4.5 Number类型
                Number()、parseInt()和parseFloat()。第一个函数，即转型函数Number()可以用于任何数据类型，而另两个函数则专门用于把字符串转换成数值。
                var num1 = parseInt("1234blue"); // 1234
                var num2 = parseInt(""); // NaN
                var num3 = parseInt("0xA"); // 10（十六进制数）
                var num4 = parseInt(22.5); // 22
                var num5 = parseInt("070"); // 56（八进制数）
                var num6 = parseInt("70"); // 70（十进制数）
                var num7 = parseInt("0xf"); // 15（十六进制数）
          3.4.6 String类型
                String类型用于表示由零或多个16位Unicode字符组成的字符序列。字符串还可以由双引号或单引号表示。
                1、字符串面量；2、字符串的特点：ECMAScript中的字符串是不可变的，也就是说，一旦创建，他们的值就不能改变。var lang = "Java";lang = lang + "Script";以上示例中的变量lang 开始时包含字符串"Java"。而第二行代码把lang 的值重新定义为"Java"与"Script"的组合，即"JavaScript"。实现这个操作的过程如下：首先创建一个能容纳10 个字符的新字符串，然后在这个字符串中填充"Java"和"Script"，最后一步是销毁原来的字符串"Java"和字符串"Script"；3 、转换成字符串toString()和String().
          3.4.7 Object类型
                ECMAScript中的对象其实就是一组数据和功能的集合。对象可以通过执行new操作符后跟要创建的对象类型的名称来创建。
                仅仅创建Object的实例并没有什么用处，但关键是要理解一个重要的思想：即在ECMAScript中，Object类型是所有他的实例的基础。换句话说，Object类型所具有的任何属性和方法也同样存在于更具体的对象中。Object的每个实例都具有下列属性和方法：

    3.5  操作符
         ECMA-262描述了一组用于操作数据值的操作符，包括算术操作符、位操作符。关系操作符和相等操纵符。ECMAScript操作符的与众不同之处在于，他们能够适用于很多值，例如字符串、数字值、布尔值甚至对象。不过，在应用对象时，相应的操作符通常都会调用对象的valueOf()和toString()方法，以便取得可以操作的值。
        1：一元操作符
        2：一元加和减操作符
        3：位操作符  位操作符用于在最基本的层次上，即按内存中表示数值的位来操作数值。ECMAScript中所有的数值都以IEEE-754 64位格式存储，但操作符并不直接操作64位的值。而是先将64位的值转换成32位的整数，然后执行操作，最后再将结果转换回64位。对于开发人员来说，可以忽略。
        1：Construct：保存着用于创建当前对象的函数。对于前面的例子而言，构造函数(construct)就是Object。
        2：hasOwnProperty(propertyName)：用于检查给定的属性在当前的对象实例中是否存在。其中，作为参数的属性名(propertyName)必须以字符串形式指定。
        3：isPrototypeof(object)：用于检查传入的对象是否是另一对象的原形
        4：propertyIsEnumerable(propertyName)：用于检查给定的属性是否能够使用枚举
        5：toLocaleStrig()：返回对象的字符串表示，该字符串与执行环境的地区对应。
        6：toString：返回对象的字符串表示
        7： valueOf()：返回对象的字符串、数值或布尔值表示。
    3.6  语句
          3.6.1  if语句
          3.6.2  do-while语句
          3.6.3  while语句
          3.6.4  for语句
          3.6.5  for-in语句
          3.6.6  label语句
          3.6.7  break和continue语句
          3.6.8  with语句
          3.6.9  switch语句
    3.7  函数
         3.7.1  理解参数
         3.7.2  没有参数
    3.8  小结

