setTimeout( function(){
  try{
    document.getElementById('search-text').focus();
  } catch(e){}
}, 200);

$("input:text").bind("input propertychange",function(){
  input = document.getElementById('search-text');
  form = document.getElementById('super-search-fm');

  switch(input.value){
    case 'gg ':
      form.action = "https://www.google.com/search";
      input.name = "q";
      input.value = ""
      input.placeholder = "Search Google";
      break;
    case 'bd ':
      form.action = "https://www.baidu.com/baidu";
      input.name = "wd";
      input.value = "";
      input.placeholder = "Search 百度";
      break;
    case 'ddg ':
      form.action = "https://duckduckgo.com/";
      input.name = "q";
      input.value = "";
      input.placeholder = "Search DuckDuckGo";
      break;
    case 'gh ':
      form.action = "https://github.com/search";
      input.name = "q";
      input.value = "";
      input.placeholder = "Search Github";
      break;
    case 'db ':
      form.action = "https://movie.douban.com/subject_search";
      input.name = "search_text";
      input.value = "";
      input.placeholder = "Search 豆瓣";
      break;
    case 'tb ':
      form.action = "https://s.taobao.com/search";
      input.name = "q";
      input.value = "";
      input.placeholder = "Search 淘宝";
      break;
    case 'wx ':
      form.action = "https://weixin.sogou.com/weixin";
      input.name = "p";
      input.value = "";
      input.placeholder = "Search 微信";
      break;
    case 'zh ':
      form.action = "https://zhihu.sogou.com/zhihu";
      input.name = "query";
      input.value = "";
      input.placeholder = "Search 知乎";
      break;
  }
  console.log(input.value);

  // console.log($(this).val().length);

});
