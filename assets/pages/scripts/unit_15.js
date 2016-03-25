
//使用Canvas绘图

//不用说，HTML5添加的最受欢迎的功能就是<canvas>元素。这个元素负责在页面中设定一个区域，然后既可以通过JavaScript动态地在这个区域中绘制图形。


//         第十五章  使用Canvas绘图 

//         15.1  基本用法 
                
            //var drawing = document.getElementById("drawing");

            ////确定浏览器支持<canvas>元素
            //if (drawing.getContext) {

            //    var context = drawing.getContext("2d");
            //    //跟多代码

            //    //取得图像的数据URL
            //    var imgURL = drawing.toDataURL("image/png");

            //    //显示图像
            //    var image = document.createElement("img");
            //    image.src = imgURL;
            //    document.getElementsByTagName('h3')[0].appendChild(image);
            //} else {
            //    console.log('2');
            //}


//         15.2  2D上下文 
//         15.2.1  填充和描边 
            //        2D上下文的两种基本绘图操作是填充和描边。填充，就是用指定的样式（颜色、渐变或图像）填充图形；描边，就是只在图形的边缘化纤
            //这两个属性的值可以是字符串、渐变或模式对象        
            //var drawing = document.getElementById("drawing");
            //if (drawing.getContext) {
            //    console.log('1');
            //    var context = drawing.getContext("2d");
            //    //跟多代码
            //    context.strokeStyle = "red";
            //    context.fillStyle = "#0000FF";

            //} else {
            //    console.log('2');
            //}
//         15.2.2  绘制矩形 
                //矩形是唯一一种可以直接在2D上下文中绘制的形状。与矩形有关的方法包括fillRect()、strokeRect()和clearRect()。
//这三个方法都能接受四个参数：矩形的x坐标、矩形的y坐标、矩形宽度和矩形高度。这些参数都是像素。
                //fileRect()方法在画布上绘制的矩形会填充指定的颜色。填充的颜色通过fillStyle属性指定。
                //strokeRect()方法在画布上绘制的矩形会使用指定的颜色描边。描边颜色通过strokeStyle属性指定。
                //描边线条宽度由lineWidth属性控制，该属性的值可以是任意整数。
                //lineCap属性可以控制线条末端的形状是平头、源头还是方头("butt"、"round"或"square")
                //lineJoin属性可以控制线条相交的方式是圆交、斜交还是斜接("round"、"bevel"或"miter")
                //最后，cleaeRect()方法用于清除画布上的矩形区域。本质上，这个方法把控制上下文的某一块矩形区域变透明。透过绘制形状然后再清除指定区域，就可以
                //声称有意思的效果。

            //var drawing = document.getElementById("drawing");
            //if (drawing.getContext) {
            //    console.log('1');
            //    var context = drawing.getContext("2d");

            //    //绘制红色矩形
            //    context.fillStyle = "#ff0000";       
            //    context.fillRect(10, 10, 50, 50);  

            //    //绘制半透明蓝色矩形
            //    context.fillStyle = "rgba(0,0,255,0.5)";
            //    context.fillRect(30, 30, 50, 50);

            //    //绘制红色描边矩形
            //    context.strokeStyle = "#ff0000";
            //    context.strokeRect(10, 10, 50, 50);

            //    //绘制半透明蓝色描边矩形
            //    context.strokeStyle = "rgba(0,0,255,0.5)";
            //    context.strokeRect(30, 30, 50, 50);
            //    在两个矩形重叠的地方清除一个小矩形
            //    context.clearRect(40,40,10,10);

            //}

//         15.2.3  绘制路径 
                //2D绘制上下文支持很多在画布上绘制路径的方法。通过路径可以创造出复杂的形状和线条。要绘制路径，首先必须调用beginPath()方法，表示要开始绘制
                //新路径。然后再调用下面的方法来实际地绘制路径。

                //arc(x,y,radius,startAngle,endAngle,counterclockwise)：以(x,y)为圆心绘制一条弧线，弧线半径为radius，起始和结束角度（用弧度表示）分别
                //为startAngle和endAngle。最后一个参数表示startAngle和endAngle是否按逆时针方向计算，值为false表示按顺时针方向计算。
                //arcTo(x1,y1,x2,y2,radius)：从上一点开始绘制一条弧线，到(x2,y2)为止，并且以给定的半径radius穿过(x1,y1)。
                //bezierCurveTo(c1x,c1y,c2x,c2y,x,y)：从上一点开始绘制一条二次曲线，到(x,y)为止，并且以(c1x,c1y)和(c2x,c2y)为控制点。
                //lineTo(x,y)：从上一点开始绘制一条直线，到(x,y)为止。
                //moveTo(x,y)：将绘图游标移动到(x,y)，不画线。

                //var drawing = document.getElementById("drawing");
                //if (drawing.getContext) {
                //    console.log('1');
                //    var context = drawing.getContext("2d");

                //    //开始路径
                //    context.beginPath();

                //    //绘制外圆
                //    context.arc(100, 100, 99, 0, 2 * Math.PI, false);

                //    //绘制内圆
                //    context.moveTo(194, 100);
                //    context.arc(100, 100, 94, 0, 2 * Math.PI, false);

                //    //绘制分针
                //    context.moveTo(100, 100);
                //    context.lineTo(100,15);

                //    //绘制时针
                //    context.moveTo(100, 100);
                //    context.lineTo(35, 100);

                //    //描边路径
                //    context.stroke();
                //}
//         15.2.4  绘制文本 
//         15.2.5  变换 
//         15.2.6  绘制图像 
//         15.2.7  阴影 
//         15.2.8  渐变 
//         15.2.9  模式 
//         15.2.10  使用图像数据 
//         15.2.11  合成 
//         15.3  WebGL 
//         15.3.1  类型化数组 
//         15.3.2  WebGL上下文 
//         15.3.3  支持 