
# 一些前端的效果demo

## 滚动固定的子标题
fixed_subtitle

模仿手机联系人中的字母标题滚动固定的效果，感觉fixed方案的流畅程度还算可以。
- demo
[transform方案](https://peakfish.github.io/FE_demo/fixed_subtitle/index.html?tag=1)
[transform方案2](https://peakfish.github.io/FE_demo/fixed_subtitle/index.html?tag=2)
[fixed方案](https://peakfish.github.io/FE_demo/fixed_subtitle/index.html?tag=3)


## 路径动画
path_animation
路径动画 让一个元素按照一个轨迹运动，
SVG SMIL animation
chrome 说 SMIL 已经不被推荐使用了，新的 css 属性 motion-path，也可以做路径动画。但是兼容性还是 SMIL 好一点吧。

- demo [runway](https://peakfish.github.io/FE_demo/path_animation/runway/index.html)

- 相关链接
http://www.htmleaf.com/tags.php?/%E8%B7%AF%E5%BE%84%E5%8A%A8%E7%94%BB/
http://www.zhangxinxu.com/wordpress/2014/08/so-powerful-svg-smil-animation/


## 描边动画
stroke_animation

- demo [stroke_animation](https://peakfish.github.io/FE_demo/stroke_animation/index.html)

- 相关链接
https://css-tricks.com/svg-line-animation-works/


## 判断鼠标移入的方向
mouse_direction

- demo [判断鼠标移入的方向](https://peakfish.github.io/FE_demo/mouse_direction/me.html)

思路是，矩形的对角线把矩形分成了四个部分，鼠标移入、移出的时候判断鼠标的坐标是在矩形的那个部分上。
网友的demo是 mouse_direction 下面的 demo1.html 和 demo2.html，me.html 是我的实现。

- 相关链接
http://www.cnblogs.com/lyzg/p/5689761.html
http://www.w3cfuns.com/notes/13989/90cb3c048f6516f8a13a87b5e474a15e:storey-1
http://sentsin.com/web/112.html

## 鼠标滚轮事件
mousewheel

- demo [滚轮事件测试](https://peakfish.github.io/FE_demo/mousewheel/mousewheelevent.html)


- 相关链接
http://www.zhangxinxu.com/wordpress/2013/04/js-mousewheel-dommousescroll-event/
http://www.cnblogs.com/chaojidan/p/4179863.html
http://www.cnblogs.com/walkingp/archive/2010/02/03/1662872.html
http://stackoverflow.com/questions/8189840/get-mouse-wheel-events-in-jquery

[jQuery的滚轮兼容插件jquery-mousewheel](https://github.com/jquery/jquery-mousewheel)
[jQuery的全屏滚动插件jQuery Scrollify](https://github.com/lukehaas/Scrollify)

