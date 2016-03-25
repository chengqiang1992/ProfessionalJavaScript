//第十四章  表单脚本

//14.1  表单的基础知识
//        在HTML中，表单是由<form>元素来表示的，而在JavaScript中，表单对应的则是HTMLForm-Element。HTMLFormElement继承了HTMLElement
//因而与其他HTML元素具有相同的默认值。不过HTMLFormElement也具有他自己下列独有的属性和方法。
//        accepptCharset：服务器能够处理的字符串；等价于HTML中的accept-charset特性。
//        action：请求接受的URL；等价于HTML中的accept-charset特性。
//        elements：表单中所有空间的集合（HTMLAllCollection）.
//        enctype：请求的编码类型；等价于HTML中的 enctype。
//        length：表单中控件的数量。
//        method：要发送的HTTP请求类型，通常是get或post。
//        name：表单的名称，等价于HTML的name属性。
//        reset()：将所有表单域重置为默认值。
//        submit()：提交表单。
//        target：用于发送请求和接受相应的窗口的名称；等价于HTML的target属性。

//14.1.1  提交表单
        //传统HTML提交表单
        //通用提交按钮
        //<input type="submit" value="Submint Form">

        //自定义提交按钮
        //<button type="submit">Submint Form</button>

        //图像提交按钮
        //<input type="image" src="xxx.gif">
//        以这种方式提交表单时，浏览器会在请求发送给服务器之前触发submit事件。这样，我们就有机会验证表单数据，并据以决定是否
//允许表单提交。阻止这个事件的默认行为就可以取消表单提交。例如，下列代码会阻止表单提交。

//        var form = document.getElementById("myForm");
//        EventUtil.addHandler(form,"submit",function(event){
//            //取得事件对象
//            event = EventUtil.getEvent(event);
//            //阻止默认事件
//            EventUtil.preventDefault(event);
//        });
//调用preventDefault()方法组织了表单提交。一般来说，在表单数据无效而不能发送给服务器时，可以使用这一技术。

//        在JavaScript中，以编程方式调用submit()方法也可以提交表单。而且，这种方式无需表单包含提交按钮，任何时候都可以正常提交表单。
//来看一个例子。
//        var form = document.getElementById("myForm");

//        //提交表单
//        form.submit();        //记住，在调用此方法之前要验证表单数据

//提交表单最大问题是  重复提交表单。解决办法，在第一次提交以后就禁用提交按钮，或者利用onsubmit事件处理程序取消后续的表单提交操作。

//14.1.2  重置表单
            //传统HTML重置表单

            //通用重置按钮
            //<input type="reset" value="Reset From">

            //自定义重置按钮
            //<button type="reset">Reset From</button>
//14.1.3  表单字段
//14.2  文本框脚本
//14.2.1  选择文本
//14.2.2  过滤输入
//14.2.3  自动切换
//14.2.4  HTML约束验证API
//14.3  选择框脚本
//14.3.1  选择选项
//14.3.2  添加选项
//14.3.3  移除选项
//14.3.4
//14.4  表单序列化
//14.5  富文本编辑
//14.5.1  使用contenteditable属性
//14.5.2  操作富文本
//14.5.3  富文本选区
//14.5.4  表单与富文本