
//IE9、Safri、Chrome、Firefox和Opera都支持DOM2级事件处理程序。
//跨浏览器的事件处理程序
var EventUtil = {
    addHandler: function (element, type, handler) {
        if (element.addEventListener) {
            element.addEventListener(type, handler, false)
        } else if (element.attachEvent) {
            element.attachEvent("on" + type, handler);
        } else {
            element["on" + type] = handler;
        }
    },
    removeHandler: function (element, type, handler) {
        if (element.removeEventListeners) {
            element.removeEventListener(type, handler, false);
        } else if (element.detachEvent) {
            element.detachEvent("on" + type, handler);
        } else {
            element["on" + type] = null;
        }
    },

    getEvent:function (event) {
        return event?event:window.event;
    },

    getTarget:function(event){
        return event.target || event.srcElement;
    },

    preventDefault:function(event){
        if (event.preventDefault) {
            event.preventDefault();
        }else{
            event.returnValue = false;
        }
    },

    stopPropagation:function(event){
        if (event.stopPropagation) {
            event.stopPropagation();
        }else{
            event.canceBubble = true;
        }
    }
};