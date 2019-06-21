
let document_body:any;
let document_documentElement:any;

/* 
  滚动条在Y轴上的滚动距离
  利用惰性模式进行兼容性处理
*/ 
export let getScrollTop =function ():any{
  let scrollTop:any,
    bodyScrollTop = 0,
    documentScrollTop = 0;

  function getBodyScrollTop():number {
    return document_body.scrollTop;
  }
    
  function getDocumentScrollTop():number {
    return document_documentElement.scrollTop;
  }

  if (document.body) {
    document_body = document.body; // 对dom进行缓存
    bodyScrollTop = document_body.scrollTop;
  }
  if (document.documentElement) {
    document_documentElement = document.documentElement;
    documentScrollTop = document_documentElement.scrollTop;
  }
  scrollTop = bodyScrollTop - documentScrollTop > 0 ? getBodyScrollTop: getDocumentScrollTop;
  return scrollTop;
}()

/* 
  文档的总高度
  利用惰性模式进行兼容性处理
*/
export let getScrollHeight = function():any {
  var scrollHeight:any,
    bodyScrollHeight = 0,
    documentScrollHeight = 0;

  function getBodyScrollHeight () {
    return document_body.scrollHeight
  }

  function getDocumentScrollHeight () {
    return document_documentElement.scrollHeight;
  }
  
  if (document.body) {
    bodyScrollHeight = document_body.scrollHeight;
  }
  if (document.documentElement) {
    documentScrollHeight = document_documentElement.scrollHeight;
  }

  scrollHeight = bodyScrollHeight - documentScrollHeight > 0 ? getBodyScrollHeight:getDocumentScrollHeight;
  return scrollHeight;
}()

/* 
  浏览器视口的高度
  利用惰性模式进行兼容性处理
*/
export let getWindowHeight = function() {
  if (document.compatMode === "CSS1Compat") {
    return function () {
      return document_documentElement.clientHeight
    }
  } else {
    return function () {
      return document_body.clientHeight
    }
  }
}()

export let EventUtil = {
  addHandler: function(element:any, type:string, handler:()=>void) {
    if (element.addEventListener) {
      element.addEventListener(type, handler, false);
    } else if (element.attachEvent) {
      element.attachEvent("on" + type, handler);
    } else {
      element["on" + type] = handler;
    }
  },
  removeHandler: function(element:any, type:string, handler:()=>void) {
    if (element.removeEventListener) {
      element.removeEventListener(type, handler, false);
    } else if (element.detachEvent) {
      element.detachEvent("on" + type, handler);
    } else {
      element["on" + type] = null;
    }
  },
  getEvent: function(event:Event) {
    return event ? event : window.event;
  },
  getTarget: function(event:Event) {
    return event.target || event.srcElement;
  },
  preventDefault: function(event:Event) {
    if (event.preventDefault) {
      event.preventDefault();
    } else {
      event.returnValue = false;
    }
  },
  stopPropagation: function(event:Event) {
    if (event.stopPropagation) {
      event.stopPropagation();
    } else {
      event.cancelBubble = true;
    }
  },
  getRelatedTarget: function(event:any) {
    if (event.relatedTarget) {
      return event.relatedTarget;
    } else if (event.toElement) {
      return event.toElement;
    } else if (event.fromElement) {
      return event.fromElement;
    } else {
      return null;
    }
  },
  // 当触发 mousedown 或者 mouseup 的时候，返回对应的键
  // 0左键 1滚轮键 2右键
  getButton: function(event:any) {
    if (document.implementation.hasFeature("MouseEvents", "2.0")) {
      return event.button;
    } else {
      switch (event.button) {
        case 0:
        case 1:
        case 3:
        case 5:
        case 7:
          return 0;
        case 2:
        case 6:
          return 2;
        case 4:
          return 1;
      }
    }
  },
};