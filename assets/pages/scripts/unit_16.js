
        //第十六章  HTML脚本编程

//16.1  跨文档消息传递

//    跨文档消息传送(cross-document messaging)，有时候也简称为XDM，指的是在来自不同域的页面间传递消息。
//例如，www.wrox.com域中的页面与位于一个内嵌框架中的p2p.wrox域中页面通信。
//    XDM的核心是postMessage()方法。功能：向另一地方传递数据。对于XDM而言，另一个地方是指包含在当期页面中的<iframe>元素。
//    postMessage()方法接受两个参数：一个消息和一个表示消息接收方来自哪个域的字符串。第二个参数对保障安全通信非常重要，
//可以防止浏览器把消息发送到不安全的地方。
        //注意：所有支持XDM的浏览器也支持iframe的contentWindow属性
        //var iframeWindow = document.getElementById("myframe").contentWindow;
        //iframeWindow.postMessage('A secret','http://www.wrox.com');

//    接收到XDM消息时，会触发window对象message事件。这个事件是以异步形式触发的，因此从发送消息到接受消息(触发接收窗口的message时间)
//可能要进过一段时间的延迟。触发message事件后，传递给onmessage处理程序的事件对象包含一下三个方面的重要信息。
//    data：作为postMessage()第一个参数传入的字符串。
//    origin：发送消息的文档所在的域。例如 "http://www.wrox.com"。
//    source：发送消息的文档的window对象的代理。这个代理对象主要用于在发送一条信息的窗口中调用postMessage()方法。
//如发送消息的窗口来自同一个域，那么这个对象就是window。
        //16.2  原生拖放
        //    16.2.1  拖放事件
        //    16.2.2  自定义放置目标
        //    16.2.3  dataTransfer对象
        //    16.2.4  dropEffect与effectAllowed
        //    16.2.5  可拖动
        //    16.2.6  其他成员


        //16.3  媒体元素
        //属性          值               描述
        //autoplay    autoplay        如果出现该属性，则视频就绪后马上播放
        //controls    controls        如果出现该属性，则想用户显示控件，比如播放按钮
        //height      pixels          设置视频播放器的高度
        //loop        loop            如果出现该属性，则当媒介文件完成播放后再次开始播放
        //muted       muted           规定视频的音频输出应该被静音
        //poster      URL             规定如果出现该属性，则视频在页面加载时进行加载，并预备播放。
        //src         src             要播放的视频的URL
        //width       pixels          设置视频播放器的高度

            //<!--嵌入视频-->
            //<video id="myVideo" width="320" height="240" controls="controls">
            //    <source src="../assets/pages/media/video/fb.3gp" type="video/3gpp;codecs='vp8,vorbis'">
            //    <source src="../assets/pages/media/video/fb.mp4" type="audio/mp4">
            //    <source src="../assets/pages/media/video/fb.mpg">
            //    Video player not available.
            //</video>

        //属性          值           描述
        //autoplay        autoplay    如果出现该属性，则音频在就绪后马上播放
        //controls        controls    如果出现该属性，则向用户显示控件，比如播放按钮
        //loop            loop        如果出现该属性，则每当音频结束是重新开始播放。
        //muted           muted       规定音频输出时应该被禁音
        //preload         preload     如果出现该属性，则音频在页面加载时进行加载，并预备播放。如果使用autoplay，则忽略该属性
        //src             URl         该音频的URL
        //    <!--嵌入音频-->
        //    <audio id="myAudio" controls>
        //        <source src="../assets/pages/media/audio/If You - BigBang.mp3" type="audio/mp3">
        //        <source src="../assets/pages/media/audio/If You - BigBang.wav" type="audio/vnd.wave">
        //        <source src="../assets/pages/media/audio/If You - BigBang.ape">
        //        Video player not available.
        //    </audio>
        
        //    16.3.1  属性
        //    16.3.2  事件

                    //事件                          触发时机
                    //abort                       下载中断
                    //canplay                     可以播放时；readyState值为2
                    //canplaythrough              播放可继续，而且应该不会中断；readyState值为3
                    //canshowcurrentframe         当前帧已经下载完成；readyState值为0
                    //dataunaveilable             duration属性的值改变
                    //emptid                      网络连接关闭
                    //empty                       发生错误组织了媒体下载
                    //ended                       媒体以播放到末尾，播放停止
                    //errror                      下载期间发生了网络错误
                    //load                        所有媒体已加载完成呢个。这个时间可能被废弃，建议使用canplaythrough

        //    16.3.3  自定义媒体播放器

                    //使用<audio>和<video>元素的play()和pause()方法，可以手工控制媒体文件的播放，组合使用属性、事件和这两个方法，很容易创建一个自定义
                    //媒体播放器，如下面的例子。

                    //取得元素的引用
                    var player = document.getElementById('player'),
                        btn = document.getElementById('video-btn'),
                        curtime = document.getElementById('curtime'),
                        duration = document.getElementById('duration');

                    //更新播放时间
                    duration.innerHTML = player.duration;

                    //为按钮添加时间处理程序
                    EventUtil.addHandler(btn, 'click', function (event) {
                        if (player.paused) {
                            player.play();
                            btn.value = "pause";
                        } else {
                            player.pause();
                            btn.value = "play";
                        }
                    });

                    //定时更新当前时间
                    setInterval(function () {
                        curtime.innerHTML = player.currentTime;
                    },250);
        //    16.3.4  检测编码器的支持情况
        //    16.3.5  Audio类型
        //16.4  历史状态管理
        //16.5  小结