module.exports = function(templateParams) {
    var _cssList = ['vendor'];
    var webAssetsHelp=require('./webAssetsHelp.js')(templateParams,_cssList);
    var _html="{% extends './layout.html' %}"+
    "{% block title %} {{title}} {% endblock %}"+
    "{% block styles %}"+
    webAssetsHelp.styles+
    "{% endblock %}"+
    "{% block content %}{% include '../widget/star.html' %}{% endblock %}"+
    "{% block script %}"+
    webAssetsHelp.scripts+
    // "<script>" +
    // "(function(){" +
    // "var scriptsshow = [" +
    // webAssetsHelp.scriptsshow +
    // "];" +
    // "for(let i=0; i<scriptsshow.length; i++){" +
    // "let a = scriptsshow[i];" +
    // "if(localStorage.getItem(a)){" +
    // '$("<s"+"cript>"+localStorage.getItem(a)+"</scri"+"pt>").attr({type:"text/javascript",id:i}).appendTo($("head").remove("#"+i));' +
    // "}" + // end if
    // "else {" +
    // "$.getScript({url:a,success: function(data) { localStorage.setItem(a, data);}});" +
    // // "$.getScript(a,function(data) { localStorage.setItem(a, data);});" +
    // "}" + // end else
    // "}" + // end for
    // "})()" + // 立即执行函数, end function
    // "</script>" +
    "{% endblock %}";

    return _html;
}