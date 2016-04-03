
// 第二十五章  新兴的API


// 25.1  requestAnimationFrame() 
    //     很长时间依赖，计时器和循环问题一直都是Javascript动画的最核心技术。虽然CSS变换以动画
    // 为Web开发人员提供了实现动画的简单手段，但Javascript动画开发领域的状况这些年并没有
    // 很大的变化。

//     25.1.1  早期动画循环
                // (function(){
                //     function updateAnimation(){
                //         doAnimation1();
                //         doAnimation2();
                //         //其他动画
                //     }

                //     setInterval(updateAnimation,100);
                // })();

                // function doAnimation1(){
                //     console.log("1");
                // }
                // function doAnimation2(){
                //     console.log("2");
                // }

            //     编写这种动画循环的关键是要知道延迟多长时间合适。一方面，循环时间间隔必须足够短，
            // 这样才能让不同动画效果显示更平滑流畅；另一方面，循环时间间隔还必须足够长，这样
            // 才能确保浏览器有能力渲染产生的变化。综上，最平滑动画的最佳时间间隔是1000ms/60，
            // 约等于17ms。

            //     虽然与使用多组 setTimeout()的循环相比，使用 setInterval()的动画循环效率更高，但后者
            // 也不是没有问题。无论是 setInterval()还是 setTimeout()都不是十分精确。为他们传入的
            // 第二个参数，实际上只是指定了把动画代码添加到浏览器UI县城队列中以等待执行的时间。
            // 如果队列前面已经接入了其他任务，那么动画代码就要等待前面的任务完成后再执行。

//     25.1.2  循环间隔问题

//     25.1.3  mozRequestAnimationFrame
            // Mozilla的Rlbert认识到这个问题，提出来了一个非常独特的方案。创造了一个新方法 mozRequestAnimationFrame(),
            // 通过他告诉浏览器某些Javascript代码将要执行动画。这样浏览器就可以在运行某些代码后进行适当的优化。

            // mozRequestAnimationFrame()方法接受一个参数，即在重绘屏幕前调用的一个函数。这个函数负责改变下一次重绘时DOM样式。

            // function updateProgress(){
            //     var div = document.getElementById("status");
            //     div.style.width = (parseInt(div.style.width,10)+5)+"%";

            //     if(div.style.left != "100%"){
            //         mozRequestAnimationFrame(updateAnimation);
            //     }
            // }
            // mozRequestAnimationFrame(updateProgress);

            // function draw(timeatamp){
            //     //计算两次重绘的时间间隔
            //     var diff = timeatamp - startTime;

            //     //使用diff确认下一步的绘制时间

            //     //把startTime重写为这一次的绘制时间
            //     startTime = timeatamp;

            //     //重绘UI
            //     mozRequestAnimationFrame(draw);
            // }

            // var startTime = mozAnimationStartTime;
            // mozRequestAnimationFrame(draw);
//     25.1.4  webkitRequestAnima-tionFrame与msRequest-AnimationFrame
// 25.2  Page Visibility API
            // 不知道用户是不是正在与页面交互，这是困扰广大Web开发人员的一个主要问题。如果下面醉话了或者隐藏在其他
        // 标签后面，那么有些功能是可以停下来的，比如轮询服务器或者某些动画效果。而 page Visibility API(页面可见性API)
        // 就是为了让开发人员知道页面是否对用户可见面而推出的。

            // 这个API本身非常简单，有以下三部分组成。
            // document.hidden：表示页面是否隐藏的布尔值。页面隐藏包括页面在后台标签中或者浏览器最小化。
            // document.visibilityState：表示下列4个可能状态的值。
                // 页面在后台标签页中或浏览器最小化。
                // 页面在前台标签中。
                // 实际的页面已经隐藏，但用户可以看到页面的预览
                // 页面在屏幕外执行渲染处理。
            // visibilitychange：当文档从可见变为不可见或者从不可见变为可见时，触发该事件。
            // 在编写本书时，只有IE10和Chrome支持Page Visibility API。IE版本在每个属性或事件前面加ms前缀，
            // 而Chrome则是加上 webkit前缀。

            // 检查浏览器是否支持这个API的最佳方式如下：
            // function isHiddenSupported(){
            //     return typeof (document.hidden || document.msHidden || document.webkitHidden) != "undefined";
            // }
            // function isHiddenSupported(){
            //     alert(document.hidden || document.msHidden || document.webkitHidden)
            // }
            // setInterval(isHiddenSupported,1000)

            // 类似的，使用同样的模式可以检测页面是否隐藏：
            // if(document.hidden || document.msHidden || document.webkitHidden){
            //     //页面隐藏了
            // }else{
            //     //页面未隐藏
            // }

            // console.log(document.hidden);
            // console.log(document.msHidden);
            // console.log(document.webkitHidden);


            //为了在页面从可见变为不可见或从不可见变为可见时收到通知，可以侦听 visibilitychange事件。
            // function handleVisibilityChange(){
            //     var output = document.getElementById("output"),
            //         msg;
            //     if (document.hidden || document.msHidden || document.webkitHidden) {
            //         msg = "Page is now hidden."+(new Date()) + "<br>";
            //     }else{
            //         msg = "page is now visible."+(new Date()) + "<br>";
            //     }

            //     output.innerHTML += msg;
            // }

            // //要为两个事件都指定事件处理程序
            // EventUtil.addHandler(document,"msvisibilitychange",handleVisibilityChange);
            // EventUtil.addHandler(document,"webkitvisibilitychange",handleVisibilityChange);


// 25.3  Geolocation API
            // 地理定位(geolocation)是最令人兴奋，而且得到了广泛的支持的一个新的API。通过这套API，Javascript代码能够访问到

            // Geolocation API在浏览器中的实现是 navigator.geolocation对象，这个对象包含三个方法。第一个方法是 getCurrentPosition(),
            // 调用这个方法就会触发请求用户共享地理定位信息的对话框。这个方法接受三个参数：成功回调函数、可选的失败回调函数和可选的选项对象。

            // 其中，成功回调函数会接收到一个 Position 对象参数，该对象有两个属性：coords和timestamp。
            // 而coords对象中将包含下列的与位置相关的信息。
                // latitude：以十进制度数表示的维度。
                // longitude：以十进制度数表示的经度。
                // accuracy：经纬度坐标的精度，以米为单位。
            // 有些浏览器还可能会在coords对象中提供如下的属性。
                // altitude：以米为单位的海拔高度，如果没有相关数据则值为null。
                // altitudeAccuracy：海拔高度的精度，以米为单位，数值越大越不精确。
                // heading：指南针的方向，0 表示正被，值为NaN表示没有检测到数据。
                // speed：速度，即每秒移动多少米，如果没有相关数据则为NaN。

            // navigator.geolocation.getCurrentPosition(function(position){
            //     drawMapCenteredAt(position.coords.latitude,position.coords.longitude);
            // },function(error){
            //     console.log("Error code：" + error.code);
            //     console.log("Error message：" + error.message);
            // },{
            //     enabledEighAccuracy:true,
            //     timeout:5000,
            //     maximumAge:2500
            // });

            // 如果您希望追踪用户的位置，那么可以使用另一个方法 watcgPosition()。这个方法接受的参数
            // 与getCurrentPosition()效果完全相同。实际上，watchPosition()方法后，会取得当前位置，执行成功回调或者错误回调。
            // 然后，watcgPosition()就地等待系统发出位置已改变的信号。

// 25.4  File API
        // 2000年以前，处理文件的唯一方式就是在表单中加入<input type="file"> 字段，仅此而已。

        // File API在表单中的文件输入字段的基础上，有添加了一些直接访问文件信息的接口。HTML5在DOM中为文件输入元素添加了一个files集合。
        // 在通过文件输入字段选择了一个或多个文件时，files集合中将包含一组File对象，每个File对象对应着一个文件。每个File对象都有下列只读属性。
            // nama：本地文件系统中的文件名。
            // size：文件的字节大小。
            // type：字符串，文件的MIME类型。
            // lastModifiedDate：字符串，文件上一次被修改的时间（只有Chrome实现了这个属性）。
        // var filesList = document.getElementById("files-list");
        // EventUtil.addHandler(filesList,"change",function (event) {
        //     var files = EventUtil.getTarget(event).files,
        //         i = 0,
        //         len = files.length;
        //     while(i < len){
        //         console.log(files[i].name+"("+files[i].type+","+files[i].size+"bytes)");
        //         i++;
        //     }
        // })

//     25.4.1  FileReader类型
                // FileReader类型实现的是一种异步文件读取机制。可以把FileReader想象成XMLHttpRequest，区别只是他读取的是文件系统，而不是远程服务器。

                // readAsText(file,encoding)：以纯文本形式读取文件，将读取到的文本保存在result属性中。第二个参数用于指定编码。
                // readAsDataURL(file)：读取文件并将文件以数据URL的形式保存在result属性中。
                // readAsBinaryString(file)：读取文件并将一个字符串保存在result属性中，字符串中的每个字符表示一字节。
                // readAsArrayBuffer(file)读取文件并将一个包含文件内容的ArrayBuffer保存在result属性中。

                // 由于读取过程是异步的，因此FileReader也提供了几个事件。
                // progress：表示是否读取了新数据。每50ms左右，就会触发一次progress事件，通过事件对象可以获得progress事件相同的信息（属性）：、
                //             lengthComputable、loaded和total
                // error：是否发生了错误。该对象只有一个属性 code，即错误码。这个错误码
                //         1表示未找到文件，2表示安全性错误，3表示读取中断，4表示文件不可读，5表示编码错误。
                // load：是否已经读完了整个文件

                // var filesList = document.getElementById("files-list");
                // EventUtil.addHandler(filesList,"change",function (event) {
                //     var info = "",
                //         output = document.getElementById("output"),
                //         progress = document.getElementById("progress"),
                //         files = EventUtil.getTarget(event).files,
                //         type = "default",
                //         reader = new FileReader();

                //     if (/image/.test(files[0].type)) {
                //         reader.readAsDataURL(files[0]);
                //         type = "image";
                //     }else{
                //         reader.readAsText(files[0]);
                //         type = "text";
                //     }

                //     reader.onerror = function(){
                //         output.innerHTML = "Could not read file,error code is "+reader.error.code;
                //     };
                //     reader.onprogress = function(event){
                //         if (event.lengthComputable) {
                //             progress.innerHTML = event.loaded+"/"+event.total;
                //         }  
                //     };
                //     reader.onload = function(){
                //         var html = "";
                //         switch(type){
                //             case "image":
                //                 html = "<img src=\""+ reader.result+"\">";
                //                 break;
                //             case "text":
                //                 html = reader.result;
                //                 break;
                //         }
                //         output.innerHTML = html;
                //     };
                // });

                // 实现File API的所有浏览器都支持readAsText()和readAsDataURL()方法。

//     25.4.2  读取部分内容

                function blobSlice(blob,statyByte,length){
                    if (blob.slice) {
                        return blob.slice(statyByte, length);
                    }else if(blob.webkitSlice){
                        return blob.webkitSlice(statyByte, length);
                    }else if(blob.mozSlice){
                        return blob.mozSlice(statyByte, length);
                    }else{
                        return null;
                    }
                }

                var filesList = document.getElementById("files-list");
                EventUtil.addHandler(filesList,"change",function (event) {
                    var info = "",
                        output = document.getElementById("output"),
                        progress = document.getElementById("progress"),
                        files = EventUtil.getTarget(event).files,
                        reader = new FileReader();
                        blob = blobSlice(files[0],0,32);

                    if (blob) {
                        reader.readAsText(blob);

                        reader.onerror = function(){
                            output.innerHTML = "Could not read file,error code is "+reader.error.code;
                        };

                        reader.onload = function(){
                            output.innerHTML = reader.result;
                        };
                    }else{
                        alert("Your brower does't support slice().")
                    }
                });


                $("#uplaodBanner2").change(function () {
                    img_upload_preview1(this);
                });
                function img_upload_preview1(input) {
                    if (input.files && input.files[0]) {
                        var reader = new FileReader();
                        reader.onload = function (e) {
                            var image = new Image();
                            image.src = e.target.result;
                            image.onload = function () {
                                var height = this.height;
                                var width = this.width;
                                if (height == 100 || width == 640) {
                                    $("#banner640x100").attr("src", e.target.result);
                                    $("#mobile_pic_banner").attr("src", e.target.result);
                                } else {
                                    alert("图片尺寸不匹配，请上传640*100像素的图片");
                                }
                            }
                        }
                        reader.readAsDataURL(input.files[0]);
                    }
                }

//     25.4.1  对象URL
//     25.4.1  读取拖放文件
//     25.4.1  使用XHR文件
// 25.5  Web计时
// 25.6  Web Workers
//     25.6.1  使用Workers
//     25.6.2  Workers全局作用域
//     25.6.3  包含其他脚本
//     25.6.4  Web Workers的未来
// 25.7  小结
