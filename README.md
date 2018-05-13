# ProfessionalJavaScript
JavaScript高级程序设计第三版笔记及源码

### 第一章：JavaScript简介
          诞生于1995年，目的是将应该由服务器端的验证移到客户端验证。
    1.1  JavaScript简史
          > * 1995年2月，Netscape Navigator 2 开发一种名为 LiveScript 的脚本语言——该语言将同时在浏览器中和服务端使用。由 布兰登 艾奇开发（Brendan Eich）
          > * 1997年， JavaScript 1.1 为蓝本交给欧洲计算机制造商协会（ECAM, European Computer Manufactures Association），该协会制定39号技术委员会（TC 39，Technical Committee #39）负责“标准化一种通用、跨平台、供应商中立的脚本语言的语意和语法”
          > * 1998年，ISO/IEC(International Organization for Standardization and International Electrotechnical Commission, 国际标准化组合和国际电工委员会)也采用ECAMScript作为标准（ISO/IEC-16262）
    1.2  JavaScript实现  完整JavaScript应由核心ECMAScript，浏览器对象模型BOM，文档对象模型DOM构成。ECMAScript提供语言核心功能，BOM提供与浏览器交互的方法和接口，DOM提供访问和操作网页的方法和接口。
    1.2.1 ECMAScript
          1. ECMAScript的版本
              第一版：ECMA-262的第一版本质上与NetScape的JavaScript 1.1相同——只不过删除了所有针对浏览器的代码并做了一些较小的改动
              第二版：主要是编辑加工的结果
              第三版：是对该标准第一次真正的修改。修改内容包括字符串处理、错误定义和数值输出。这一版还包括对正则表达式、控制语句、try-catch 异常处理的支持，并围绕标准的国际化做出了一些微小的改动
              第四版：针对这门语言进行了一次全面的检核修订。由于JavaScript在web上日益流行，开发人员纷纷建议修订ECMAScript，以使其能够满足不断增长的 Web 开发需求。第四版不仅包含了强类型变量、新语句和新数据结构、真正的类和经典继承，还定义了与数据交互的新的方式
              第五版：TC 39下属的一个小组也提出一个名为ECMAScript3.1的替代性建议，该建议只对这门语言进行了较少的改进。这个小组认为第四版对这门语言的跨越太大。因此成为第五版
          2. 文档对象模型（DOM）
              1. 为什么要使用DOM
              2. DOM级别
          3. 浏览器对象模型（BOM）
    1.3  JavaScript版本
    1.4  小结

### 第二章：在HTML中使用JavaScript
    2.1 使用<script>元素 
        <script>元素的使用是为了向HTML页面中插入JavaScript。他有如下6个属性：async,charset,defer,language,src,type.
        使用<script> 直接在页面中嵌入JavaScript，只需<script type="text/javascript"><script>
                     外部包含JavaScript，必须加src属性。<script type="#" src="#"><script>
        注意：1. 现代web一般将全部JavaScript引用放在<body>元素中页面内容的后面；
              2. defer 延迟脚本，async 异步脚本（立即下载但是延迟执行、立即下载异步执行）
    2.2 嵌入脚本与外部脚本
        最好使用外部脚本：优点 可维护性，可缓存，适应未来。
    2.3 文档模式对JavaScript的影响
    2.4 <noscript> 元素
        <noscript>
            本页面需要浏览器支持（启用）JavaScript
        </noscript>
        

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
                 5. "object"——如果这个值是对象或null
                 6. "function"——如果这个值是函数
                    注意：特殊值被认为是一个空对象的引用。
                    注意：Safari 5及之前的版本、Chrome 7及之前版本在对正则表达式调用typeof操作符时会返回"function"，而其他浏览器会返回"object"。
          3.4.2 Undefind类型
                - Undefind类型只有一个值，即特殊的undefine。
                - 使用var申明变量但未初始化，这个变量的值就是undefined；
                - 直接alert未申明的值会产生错误，但是typedof 未声明的值也为undefined。

                包含 undefined 值的变量与尚未定义的变量还是不一样。看看下面例子
                var message;    // 这个变量声明之后默认取得了 undefined 的值
                // var age;     // 这个变量没有声明
                alert(message); // undefined
                alert(age);     // Uncaught ReferenceError: age is not defined

                然后，令人困惑的是：对未初始化的变量执行 typeof 操作会返回 undefined 值，而对未声明的变量执行
                typeof 操作符同样也会返回undefined值。来看下面的例子。
                var message;    // 这个变量声明之后默认取得了 undefined 的值
                // var age;     // 这个变量没有声明
                alert(typeof message); // "undefined"
                alert(typeof age);     // "undefined"


          3.4.3 Null类型
                Null类型只有一个值的数据类型，这个数据类型是null。从逻辑上看，null表示空对象指针，而这也正是使用typedof操作符检测null值时会返回"object"的原因。如果定义的变量准备在将来用于保存对象，那么最好将该变量初始化为null。

                console.log(null == undefined) // true


                尽管null 和undefined有这样的关系，但它们的用途完全不同。如前所述，无论在什么情况下都没有必要把一个变量的值显式地设置为undefined，可是同样的规则对null 却不适用。换句话说，只要意在保存对象的变量还没有真正保存对象，就应该明确地让该变量保存null 值。这样做不仅可以体现null 作为空对象指针的惯例，而且也有助于进一步区分null 和undefined。
          3.4.4 Boolean类型
                Boolean对象只有两个字面值：true和false，true不一定等于1，false也不一定等于0。
                Boolean()函数可以将任何类型转换成Boolean类型，规则如下
                ---
                  数据类型   转换成为true的值           转换成为false的值
                ---
                  Boolean        true                           false
                  String      任何非空字符                   ""（空字符） 
                  Number      任何非零数字（包括无穷大）         0或NAN
                  Object      任何对象                          null
                  Undefined      n/a                          undefined 
                ---
                 
          3.4.5 Number类型

                最基本的数值字面亮格式是十进制整数，十进制整数可以想下面这样直接在代码中输入：
                    var item = 55;          // 整数
                除十进制表示外，整数还可以通过八进制（以8为基数）或十六进制（以16为基数）的字面量来表示
                    var octalNum1 = 070;    // 八进制的56
                    var octalNum2 = 079;    // 无效的八进制数值-解析为79
                    var octalNum3 = 08;     // 无效的八进制数值-解析为8

                    var hexNum1 = 0xA;      // 十六进制的10
                    var hexNum2 = 0x1f;     // 十六进制的31
                
                1. 浮点数值
                    所谓浮点数值，就是该数值中必须包含一个小数点，并且小数点后面必须至少有一位数字。

                    由于保存浮点数值需要的内存空间是保存整数值的两倍，因此ECMAScript会不失时机地将浮点数值转换为整数值。

                    对于那些极大值或者极小的数值，可以用e表示法（即科学计数法）来表示的浮点数值表示。

                2. 数值范围
                    由于内存的限制，ECMAScript并不能存储世界上所有的数值。ECMAScript能够表示的最小数值保存在 Number.MIN_VALUE (5e-324)；能够表示的最大值保存在 Number.MAX_VALUE (1.7976931348623157e+308)
                    Number.MIN_SAFE_INTEGER: -9007199254740991     Number.MAX_SAFE_INTEGER: 9007199254740991
                    超过JavaScript数值范围的值自动转化成特殊的 Infinity; Number.MAX_VALUE + Number.MAX_VALUE == Infinity    Number.MAX_SAFE_INTEGER + Number.MAX_SAFE_INTEGER == 18014398509481982

                3. NaN
                    NaN, 即非数值（Not a Number）是一个特殊的数值。这个数值用于表示一个本来要返回数值的操作数未返回数值的情况（这样就不会抛出错误了）。例如，在其他编程语言中，任何数值除以0都会导致错误，从而停止代码执行。
                    但在ECMAScript中，任何数值除以0都会返回NaN，因此不会影响其他代码的执行。

                    NaN本身有两个非同寻常的特点：
                    > * 任何涉及NaN的操作（例如NaN/10）都会返回NaN
                    > * 其次NaN与任何值都不想等，包括本身

                    针对NaN的这个特点，ECMAScript 定义了 isNaN()函数。这个函数接受一个参数，该参数可以是任何类型，而函数会帮我们确定这个值是否“不是数值”。

                    console.log(isNaN(NaN))     true
                    console.log(isNaN(10))      false  （10是一个数值）
                    console.log(isNaN("10"))    false   （可以被转换成数值）
                    console.log(isNaN("blue"))  true    （不能转换成数值）
                    console.log(isNaN(true))    false   （可以被转换成数值1）

                Number()、parseInt()和parseFloat()。第一个函数，即转型函数Number()可以用于任何数据类型，而另两个函数则专门用于把字符串转换成数值。
                var num1 = parseInt("1234blue"); // 1234
                var num2 = parseInt(""); // NaN
                var num3 = parseInt("0xA"); // 10（十六进制数）
                var num4 = parseInt(22.5); // 22
                var num5 = parseInt("070"); // 56（八进制数）。八进制字面值的第一位必须是零（0），然后是八进制数字序列（0~7）。
                var num6 = parseInt("70"); // 70（十进制数）
                var num7 = parseInt("0xf"); // 15（十六进制数）八进制字面值的前两位必须是0x，后跟任何十六进制数字（0~9及A~F）
          3.4.6 String类型
                String类型用于表示由零或多个16位Unicode字符组成的字符序列。字符串还可以由双引号或单引号表示。
                1、字符串面量；
                    \n  换行；\t    制表；\b    空格；\r    回车；
                    \f  进纸；\\    斜杠；\'    单引号；\"  双引号
                    \xnn    以十六进制代码nn表示一个字符（其中n为0~F）。例如：\x41 表示"A";
                    \unnnn  以十六进制代码nnnn表示的一个Unicode字符（其中n为0~F）。例如，\u03a3表示希腊字符∑。
                2、字符串的特点：ECMAScript中的字符串是不可变的，也就是说，一旦创建，他们的值就不能改变。也就是说，要改变某个变量保存的字符串，首先要销毁原来的字符串，然后再用另一个包含新值得字符串去填充该变量
                var lang = "Java";lang = lang + "Script";
                以上示例中的变量lang开始时包含字符串"Java"。而第二行代码把lang的值重新定义为"Java"与"Script"的组合，即"JavaScript"。实现这个操作的过程如下：首先创建一个能容纳10个字符的新字符串，然后在这个字符串中填充"Java"和"Script"，最后一步是销毁原来的字符串"Java"和字符串"Script"；
                3 、转换成字符串toString()和String().
                    toString()方法：数值、布尔值、对象和字符串值都有一个toString()方法。但是null和undefined没有这个方法。
                                    多数情况下，该方法不需要传入参数，但是在其实是可以传入一个：*输出数值的基数*。如下：
                                    var num = 10;
                                    alert(num.toString());      //"10"
                                    alert(num.toString(2));     //"1010"
                                    alert(num.toString(8));     //"12"
                                    alert(num.toString(10));    //"10"
                                    alert(num.toString(16));    //"a"
                    String()方法：在不知道要转换的值是不是null或者undefined的情况下，还可以使用转型函数String。
                                  遵循规则如下
                                  - 如果有toString方法，就调用这个方法。
                                  - 如果值是null，则返回"null"
                                  - 如果值是undefined，则返回undefined
          3.4.7 Object类型
                ECMAScript中的对象其实就是一组数据和功能的集合。对象可以通过执行new操作符后跟要创建的对象类型的名称来创建。
                仅仅创建Object的实例并没有什么用处，但关键是要理解一个重要的思想：即在ECMAScript中，Object类型是所有他的实例的基础。换句话说，Object类型所具有的任何属性和方法也同样存在于更具体的对象中。
                *Object的每个实例都具有下列属性和方法：*
                1. Constructor：保存着用于创建当前对象的函数。对于前面的例子而言，构造函数（constructor）就是Object()；
                2. hasOwnproperty(propertyName)：用于检查给定的属性在当前对象实例中（而不是在实例的原型中）是否存在。其中，作为参数的属性名(propertyName)必须以字符串形式指定(例如：o.hasOwnProperty("name"))；
                3. isPrototypeOf(object)：用于检查传入的对象是否是另一个对象的原型；
                4. propertyIsEnumerable(propertyName)：用于检查给定的属性是否能够使用for-in语句(本章后面会讨论)来枚举。与hasOwnproperty()方法一样，作为参数的属性名必须以字符串形式指定；
                5. toLocaleString()：返回对象的字符串表示，该字符串与执行环境的地区对应；
                6. toString():返回对象的字符串表示；
                7. valueOf():返回对象的字符串、数值或布尔值表示。通常与toString()方法返回值相同。

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
                例1：
                    if(condition){
                        statement1
                    }else{
                        statement2 
                    }
                例2：
                    if(condition){
                        statement1
                    }else if{
                        statement2
                    }else{
                        statement3
                    }
          3.6.2  do-while语句
                    do{
                        statement
                    }while(expression);
          3.6.3  while语句
                    while(expression){
                        statement
                    }
          3.6.4  for语句
                    for(initialization;expression;post-loop-expression){
                        statement;
                    }
          3.6.5  for-in语句
                    for-in语句是一种精准的迭代语句，可以用来枚举对象的属性。以下是for-in语句的用法：
                        for(property in expression){
                            statement;
                        }
                    例子：
                        for(var proName in window){
                            document.write(proName);
                        }
                    该例子使用for-in循环来显示BOM中的window对象的所有属性。每次执行循环是，都会将window对象中存在的一个属性名复制给变量proName。这个过程会一直持续到对象中的所有属性都被枚举一遍为止。与for语句类似，这里控制语句中的var操作符也不是必需的，但是为了保证局部变量，我们推荐使用这种方法。
                    ECMAScript对象的属性没有顺序。因此，通过for-in循环输出的属性名的顺序是不可预测的。
                    如果要迭代的对象的变量值为null或undefined，for-in语句就会抛出错误。ECMAScript5更正了这一行为，对这种情况不再抛出错误，而只是不执行这一行为；为了保证最大程度的兼容性，建议在使用for-in循环之前，先检测确认该对象的值不是null或undefined。
          3.6.6  label语句
                使用label语句可以在代码中添加标签，以便将来使用。
                    label:statement
                下面是一个示例：
                    start:for(){}
          3.6.7  break和continue语句
          3.6.8  with语句
          3.6.9  switch语句
                    switch(expression){
                        case value:
                            statement;
                            break;
                        case vaule:
                            statement;
                            break;
                        default:statement
                    }
    3.7  函数
        ECMAScript中的函数使用function关键字来声明，后跟一组参数以及函数体。
            function functionName(arg0,arg1,----,agrN){
                statement
            }
         3.7.1  理解参数
                ECMAScript函数的参数与大多数其他语言中函数的参数有所不同。ECMAScript函数不介意传递进来多少个参数，也不在乎传进来的参数是什么数据类型。也就是说，即便你定义的函数只接受两个参数，在调用这个函数时也未必一定要传递两个参数。可以传递一个、三个甚至不传递参数。之所以会这样是因为：ECMAScript中的参数在内部是一个数组表示的。函数接收到的始终都是这个数组，而不关心数组中包含哪些参数。实际上，在函数体内可以通过arguments对象来访问这个参数数组，从而获取传递给函数的每一个参数。
                1. 使用length属性来确定传递进来多少个参数。
                2. 参数名只提供便利，而不是必须。
                    function howManyArgs(){
                        alert(argument.length);
                    }
                    howManyArgs("string",45);   //2
                    howManyArgs();              //0
                    howManyArgs(12);            //1
                3. arguments对象可以与命名参数一起使用，如下：
                    function doAdd(num1,num2){
                        if(arguments.length == 1){
                            alert(num1 + 10);
                        }else{
                            alert(arguments[0] + num2);
                        }
                    }
                4. 关于arguments行为，还有一点比较有意思。就是它的值永远与对应命名参数的值保持同步。
                5. 关于参数还有一点需要记住的是，没有传递值得命名参数都将自动被赋予undefined值。
         3.7.2  没有参数
                ECMAScript函数不能像传统意义上那样实现重载。而在其他语言中，可以为一个函数编写两个定义，只要这两个定义的签名（接受的参数的类型和数量）不同即可。如前所述，ECMAScript函数没有签名，因为其参数是由包含零或多个值得数组来表示的。而没有函数签名，真正的重载是不可能做到的。
    3.8  小结

