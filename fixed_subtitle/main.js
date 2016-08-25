
var group = document.querySelectorAll('.group');
var subTitle = document.querySelectorAll('.group h6');
var len = group.length;

var headerHeight = document.querySelector('.title').offsetHeight;
var subTitleHeight = subTitle[0].offsetHeight;

var data = [];

//构建页面位置相关的数据
for(var i = 0; i < len; i ++){

  data.push({
    tmax: subTitle[i].parentElement.offsetHeight - subTitle[i].offsetHeight,
    offsetTop: getOffsetTop(subTitle[i]),
    groupHeight: group[i].offsetHeight
  });

}


function transformScroll(){

  for(var i = 0; i < len; i ++){

    var top = -(group[i].getBoundingClientRect().top - headerHeight);//getBoundingClientRect().top随着页面的滚动值会改变
    top = Math.max(0, Math.min(data[i].tmax, top));

    subTitle[i].style.webkitTransform = 'translateY('+top+'px)';
    subTitle[i].style.transform = 'translateY('+top+'px)';

  }

}



function transformScroll2(){

  var scrollTop = window.scrollY;

  for(var i = 0; i < len; i ++){

    var top = (scrollTop - data[i].offsetTop + headerHeight);
    top = Math.max(0, Math.min(data[i].tmax, top));

    subTitle[i].style.webkitTransform = 'translateY('+top+'px)';
    subTitle[i].style.transform = 'translateY('+top+'px)';

  }

}


function fixedScroll(){//fixed

  var scrollTop = window.scrollY;

  for(var i = 0; i < len; i ++){

    if(scrollTop > (data[i].offsetTop - headerHeight)){//这个元素的顶部在上面滚出了

      if(scrollTop < (data[i].offsetTop + data[i].groupHeight - headerHeight - subTitleHeight)){//这个元素的底部还没有滚出去，也就是这个元素正在可视区中，但不包括一个子标题的高度

        subTitle[i].style.position = 'fixed';
        subTitle[i].style.top = headerHeight+'px';
        subTitle[i].style.left = '0';
        subTitle[i].style.webkitTransform = 'translateY(0)';
        subTitle[i].style.transform = 'translateY(0)';
        subTitle[i].nextElementSibling.style.paddingTop = subTitleHeight+'px';

      }else{//底部已经滚出去的元素

        subTitle[i].style.position = 'static';
        subTitle[i].style.webkitTransform = 'translateY('+data[i].tmax+'px)';
        subTitle[i].style.transform = 'translateY('+data[i].tmax+'px)';
        subTitle[i].nextElementSibling.style.paddingTop = '0';

      }

    }else{//元素的默认状态

      subTitle[i].style.position = 'static';
      subTitle[i].style.webkitTransform = 'translateY(0)';
      subTitle[i].style.transform = 'translateY(0)';
      subTitle[i].nextElementSibling.style.paddingTop = '0';

    }

  }

}


var tag = +getArgs().tag;

switch(tag){

  case 1:
    window.addEventListener('scroll', transformScroll, false);
    break;

  case 2:
    window.addEventListener('scroll', transformScroll2, false);
    break;

  case 3:
  default:
    window.addEventListener('scroll', fixedScroll, false);
    break;

}




