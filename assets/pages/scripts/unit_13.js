
//第十三章  事件
//    JavaScript与HTML之间的交互是通过事件实现的。事件，就是文档或浏览器窗口中发生的一些特定交互瞬间。可以使用侦听器（或处理程序）
//来预定事件，以便事件发生时执行相应的代码。这种在传统软件工程中被称为观察员模式的模型，支持页面的行为(JavaScript代码)与页面
//的外观(HTML与CSS)之间的松散耦合。

//13.1 事件流

        //事件流描述的是从页面中接受事件的顺序。
        //IE的事件流是事件冒泡流
        //Netscape communicator的事件流是事件捕获流

//    13.1.1  事件冒泡
        //IE的事件流叫做事件冒泡(event bubbling)，即时间开始时由最具体的元素接受，然后逐级向上传播到较为不具体的节点。

//    13.1.2  事件捕获
        //Netscape communicator团队提出的是事件捕获(event capturing)。事件捕获的思想是不太具体的节点应该更早接收到事件，而最具体的
    //节点应该最后接收到事件。

//    13.1.3  DOM事件流
        //"DOM2级事件"规定的事件流包括了三个阶段：事件捕获阶段、处于目标阶段和事件冒泡阶段。
    //首先发生的是事件捕获，为截获事件提供了机会。然后是实际的目标接收到事件。最后一个阶段是冒泡阶段，可以在这个阶段对事件做出相应。

        //在DOM事件流中，实际的目标(<div>元素)在捕获阶段不会接收到事件。这意味着在捕获阶段，事件从document到<html>再到<body>后就停止了。
    //下一个阶段是“处于目标”阶段，于是事件在<div>上发生，并在事件处理中被看成是冒泡阶段的一部分。然后，冒泡阶段发生，事件又传播或文档。

        //多数支持DOM事件流的浏览器都实现了一种特定的行为；即时“DOM2级事件”规范明确要求捕获阶段不会涉及事件目标，但是IE9、Safri、Chrome
    //Firefox和Opera9.5及跟高级版本都会在捕获阶段触发事件对象上的事件。结果就是有两个机会在目标对象上面操作事件。

//13.2 事件处理程序
        //事件就是用户或浏览器自身执行的某种行为。诸如click、load和mouseover，都是事件的名字。而响应某个事件的函数就叫做事件处理程序

//    13.2.1  HTML事件处理程序
              //<!--HTML事件处理程序-->
              //<input type="button" value="Click me" onclick="alert('Clicked')"> 

              //<!--HTML事件处理程序  其他地方定义-->
              //<input type="button" value="Click me" onclick="showMessage()" /> 
                //function showMessage() {
                //    alert("Hello World!");
                //}
        

//    13.2.2  DOM0级事件处理程序
                //<!--通过JavaScript指定事件处理程序的传统方式，就是将一个函数赋值给一个事件处理程序属性。这种为事件处理程序赋值的方法是在第四代web浏览器中出现的。-->
                //<input type="button" id="myBtn" value="Click Me">
                //var btn = document.getElementById('myBtn');
                //btn.onclick = function () {
                //    alert("Clicked");
                //}
                //使用DOM0级方法指定的事件处理程序被认为是元素的方法。因此，这时候的事件处理程序是在元素的作用域中运行；换句话说，程序中的this
                //引用当前元素。来看一个例子。
                //var btn = document.getElementById('myBtn');
                //btn.onclick = function () {
                //    alert(this.id);
                //}
                //以这种方式添加的事件处理程序会在事件流的冒泡阶段被处理。

                //也可以通过DOM0级方法指定的事件处理程序，只要想下面这样将事件处理程序属性的值设置为null。
                //btn.onclick = null;

//    13.2.3  DOM2级事件处理程序
            //"DOM2级事件"定义了两个方法，用于处理指定和删除事件处理程序的操作；addEventListener()和removeEventListener()。所有DOM
            //节点都包含这两个方法，并且他们接受三个参数：要处理的时间名、作为事件处理程序的函数和一个布尔值。最后这个布尔值如果是true
            //，表示在捕获阶段调用事件处理程序；如果是false，表示在冒泡阶段调用事件处理程序。

            //要在按钮上为click事件添加事件处理程序，可以使用下列代码：
            var btn = document.getElementById('myBtn2');
            btn.addEventListener('click', function () {
                alert(this.id);
            }, false);

            //使用DOM2级方法添加事件处理程序的主要好处是可以添加多个事件处理程序。
            btn.addEventListener("click",function(){
                alert("hello World");
            }, false);

            //通过addEventListener()添加的事件处理程序只能使用removeEventListener()来移除；移除时传入的参数与添加处理程序时
            //传入的参数相同即可，这意味着通过addEventListener()添加的匿名函数无法移除。

            //最后，我们强烈建议在事件流的冒泡阶段添加处理程序，实现最大化的兼容。
            //IE9、Safri、Chrome、Firefox和Opera都支持DOM2级事件处理程序。

//    13.2.4  IE事件处理程序

//            IE实现了与DOM类似的两个方法：attachEvent()和detachEvent()。这两个方法都接受相同的两个参数：事件处理程序名称与事件处理程序函数。
//由于IE8 及更早版本只支持事件冒泡，所以通过attachEvent()添加的事件处理程序都会被添加到冒泡阶段。

//    13.2.5  跨浏览器的事件处理程序
            var btn = document.getElementById('myBtn4');
            var handler = function () {
                alert("Clicked");
            }
            EventUtil.addHandler(btn, "click", handler);
            EventUtil.removeHandler(btn, "click", handler);

//13.3 事件对象
//    13.3.1  DOM中的事件对象
//    13.3.2  IE中的事件对象
//    13.3.3  跨浏览器的事件对象
//13.4 事件类型
//    13.4.1  UI事件
//    13.4.2  焦点事件
//    13.4.3  鼠标与滚轮事件
//    13.4.4  键盘与文本事件
//    13.4.5  复合事件
//    13.4.6  变动事件
//    13.4.7  HTML5事件
//    13.4.8  设备事件
//    13.4.9  触摸与手势事件
//13.5 内存和性能
//    13.5.1  事件委托
//    13.5.2  移除事件处理程序
//13.6 模拟事件
//    13.6.1  DOM中的事件模拟
//    13.6.2  IE中的事件模拟
//13.7 小结