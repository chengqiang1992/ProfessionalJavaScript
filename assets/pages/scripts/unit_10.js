
//(function () {

//    第十章  DOM

//    本章内容
//        1：理解包含不同层次节点的DOM
//        2：使用不用的节点类型
//        3：克服浏览器兼容性问题及各种缺陷

//        DOM（文档对象模型）

//        10.1  节点层次 
//                DOM可以将任何HTML或XML文档描述成一个由多层节点构成的结构。节点分为几种不同的类型，每种类型分别表示
//    文档中不同的信息及（或）标记。每个节点都拥有各自的特点、数据和方法，另外也与其他节点存在某种关系。

//        10.1.1  Node类型 
//                DOM1级定义了一个Node接口，该接口将由DOM中的所有节点类型实现。这个Node接口在JavaScript中是作为Node 类
//    型实现的；除了IE之外，在其他所有浏览器中都可以访问到这个类型。JavaScript中所有节点类型都继承自Node类型，因此
//    所有节点类型都共享着相同的基本属性和方法。

//                每个节点都有一个nodeType属性，用于表明节点的类型。节点类型由在Node类型中定义的下列12个数值常量来表示
//    ，任何节点类型必居其一：

//                Node.ELEMENT_NODE(1);
//                Node.ATTRIBUTE_NODE(2);
//                Node.TEXT_NODE(3);
//                Node.CDATA_SECTION_NODE(4);
//                Node.ENTITY_REFERENCE_NODE(5);
//                Node.ENTITY_NODE(6);
//                Node.PROCESSING_INSTRUCTION_NODE(7);
//                Node.COMMENT_NODE(8);
//                Node.DOCUMENT_NODE(9);
//                Node.DOCUMENT_TYPE_NODE(10);
//                Node.DOCUMENT_FRAGMENT_NODE(11);
//                Node.NOTATION_NODE(12);

//                通过比较上面这些常量，可以很容易地确定节点的类型，例如：
//                if(someNode.nodeType == Node.ELEMENT_NODE){     //在IE中无效
//                    alert("Node is an element.");
//                }   
//                。这个例子比较了someNode.nodeType与Node.ELEMENT_NODE常量。如果二者相等，则意味着someNode确实是一个元素
//       然而，由于IE没有公开Node类型，因此上面的代码在IE中会出错。为了确保跨浏览器兼容，最好还是将nodeType属性与数字值
//       进行比较，如下所示：
//                if(someNode.nodeType == 1){     //使用与所有浏览器
//                    alert("Node is an element.");
//                } 

//                1.nodeName和nodeValue属性
                
//                2.节点关系
//                文档中给所有的节点之间都存在这样或那样的关系。节点间的各种关系可以用传统的家族关系来描述，相当于把
//    文档数比喻成家谱。
//                childNodes属性，保存这一个 NodeList 对象。
//                虽然NodeList是一种类数组，用于保存一组有序的节点，可以通过位置来访问这些节点。虽然可以通过方括号语法来访问NodeList
//                ，而且这个对象也有length属性，但他不是Array的实例。
            
//                var firstChild = someNode.childNodes[0];
//                var secondChild = someNode.childNodes.item(1);
//                var count = someNode.childNodes.length;

//                对argument对象使用Array.prototype.slice()方法可以将其转换成数组。而采用同样的方式，可以将NodeList对象转换成数组。
//                var arrarOfNodes = Array.prototype.slice.call(someNode.childNodes,0);   //IE8及之前版本无效。

//                parentNode属性，该属性指向文档树中的父节点。
//                同胞节点 previousSibling属性 和 nextSibling属性，可以访问同一列表其他节点
//                父节点的 firstChild 和 lastChild 属性分别是 someNode.firstChild == someNode.childNodes[0]
//                someNode.lastChild = someNode.childNodes[someNode.childNodes.length - 1]

//                3.操作节点
//                appendChild(),用于向childNodes列表的末尾添加一个节点。
//                insertBefore()，把节点放在childNode列表中的某个特定位置，而不是末尾。接受两个参数：要插入的节点
//    和作为参照的节点。插入节点后，被插入的节点会变成参照节点的前一个同胞节点(perviousSibling)，同时被返回。
//                //插入后成为最后一个子节点
//                returnedNode = someNode.insertBefore(newNode,null);
//                alert(newNode == someNode.lastChild);       //true

//                //插入后成为第一个子节点
//                var returnedNode = someNode.insertBefore(newNode,someNode.firstChild);
//                alert(newNode == returnedNode);       //true

//                //插入到最后一个子节点前面
//                var returnedNode = someNode.insertBefore(newNode,someNode.lastChild);
//                alert(newNode == returnedNode);       //true

//                replaceChild(),插入一个节点时，该节点的所有关系指针都会从他被替换过的节点复制过过来。
//                removeChild()。
//                以上四个方法都是的都是某个节点的子节点。

//                4.其他方法。
//                cloneNode()  参数  true深复制  false浅复制


//          10.1.2  Document类型 
//          10.1.3  Element类型 
//          10.1.4  Text类型 
//          10.1.5  Comment类型 
//          10.1.6  CDATASection类型 
//          10.1.7  DocumentType类型 
//          10.1.8  DocumentFragment类型 
//          10.1.9  Attr类型 
//     10.2  DOM操作技术 
//          10.2.1  动态脚本 
//          10.2.2  动态样式 
//          10.2.3  操作表格 
//          10.2.4  使用NodeList 
//     10.3  小结 


//})();