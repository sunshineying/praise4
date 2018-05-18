// module.exports = function(templateParams) {
//   var _cssList = ["vendor"];
//   var webAssetsHelp = require("./webAssetsHelp.js")(templateParams, _cssList);
//   var _html =
//     "{% extends './layout.html' %}" +
//     "{% block title %} {{title}} {% endblock %}" +
//     "{% block styles %}" +
//     webAssetsHelp.styles +
//     "{% endblock %}" +
//     "{% block content %}{% include '../widget/index.html' %}{% endblock %}" +
//     "{% block script %}" +
//     webAssetsHelp.scripts+
//     "{% endblock %}";

//   return _html;
// };


module.exports = function(templateParams) {
  var _cssList = ["vendor"];
  var webAssetsHelp = require("./webAssetsHelp.js")(templateParams, _cssList);
  var _html =
    "{% extends './layout.html' %}" +
    "{% block title %} {{title}} {% endblock %}" +
    "{% block styles %}" +
    webAssetsHelp.styles +
    "{% endblock %}" +
    "{% block content %}{% include '../widget/index.html' %}{% endblock %}" +
    "{% block script %}" +
    "<script>" +
    "(function(){" +
    "var scriptsshow = [" +
    webAssetsHelp.scriptsshow +
    "];" +
    "for(let i=0; i<scriptsshow.length; i++){" +
    "let a = scriptsshow[i];" +
    "if(localStorage.getItem(a)){" +
    // 注意拼接
    // <script>必须分开至少两次拼接,怎么拼接无所谓
    '$("<s"+"cript>"+localStorage.getItem(a)+"</scri"+"pt>").attr({type:"text/javascript",id:i}).appendTo($("head").remove("#"+i));' +
    "}" + // end if
    "else {" +
    // "$.getScript({url:a,success: function(data) { localStorage.setItem(a, data);}});" + // 两种写法都可以
    "$.getScript(a,function(data) { localStorage.setItem(a, data);});" +
    "}" + // end else
    "}" + // end for
    "})()" + // 立即执行函数, end function
    "</script>" +
    "{% endblock %}";

  return _html;
};


// module.exports = function(templateParams) {
//   var _cssList = ["vendor"];
//   var webAssetsHelp = require("./webAssetsHelp.js")(templateParams, _cssList);
//   var _html =
//     "{% extends './layout.html' %}" +
//     "{% block title %} {{title}} {% endblock %}" +
//     "{% block styles %}" +
//     webAssetsHelp.styles +
//     "{% endblock %}" +
//     "{% block content %}{% include '../widget/index.html' %}{% endblock %}" +
//     "{% block script %}" +
//     "<script>" +
//     // "(function(){ var flag=false;" +
//     // "var scriptsshow = [" +
//     // webAssetsHelp.scriptsshow +
//     // "];" +
//     // "for(var i=0; i<scriptsshow.length; i++){" +
//     // "var a = scriptsshow[i];" +
//     // "console.log(a);" +
//     // "if(localStorage.getItem(a)){" +
//     // 注意拼接
//     // <script>必须分开至少两次拼接,怎么拼接无所谓
//     // '$("<s"+"cript>"+localStorage.getItem(a)+"</scri"+"pt>").attr({type:"text/javascript",id:i}).appendTo($("head").remove("#"+i));' +
//     // "}" + // end if
//     // "else {" +
//     // "$.getScript({url:a,success: function(data) { localStorage.setItem(a, data);}});" + // 两种写法都可以
//     // "$.getScript(a,function(data) { localStorage.setItem(a, data);});" +
//     // "localStorage.clear(); flag = true;" +
//     // "for(var k=0; k<scriptsshow.length; k++){" +
//     // "var b = scriptsshow[k];" +
//     // "axios.get(b)." +
//     // "then(function(data) {localStorage.setItem(b,data.data);})" +
//     // "}；break;" + // end for
//     // "}" + // end else
//     // "}" + // end for
//     // "if(flag){" +
//     // "LazyLoad.js(scriptsshow, function() {});" +
//     // "}" // end if
//     // "})()" + // 立即执行函数, end function
//     "</script>" +
//     "{% endblock %}";

//   return _html;
// };
