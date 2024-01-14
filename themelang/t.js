var language_config = false

var GET_LANGUAGE = function(lang){
    if('zh-cn' == 'zh-cn'){
        return lang;
    }
    else{
        var r = language_config[lang];
        if(r){
            return r;
        }
        else{
            return lang;
        }
    }
}