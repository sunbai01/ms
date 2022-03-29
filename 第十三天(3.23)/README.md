# js

# css

# 51、怎样在@keyframes中使用CSS变量

正常变量使用：


:root {
    --my-cool-background: #73a4f4;
}
 
/* CSS文件的其他部分 */
#foo {
    background-color: var(--my-cool-background);
}

在@keyframes中使用：

.bubble {
  --direction-y: 30px;
  --transparency: 0;
  animation: bubbling 3s forwards infinite;
}
 
@keyframes bubbling {
  0% {
    transform: translatey(var(--direction-y));
    opacity: var(--transparency);
  }
  40% {
    opacity: calc(var(--transparency) + 0.2);
  }
  70% {
    opacity: calc(var(--transparency) + 0.1);
  }
  100% {
    opacity: var(--transparency);
  }
}


https://www.cnblogs.com/powertoolsteam/p/css-variables.html

# 52、怎样在SVG中使用css变量？
<!-- 全局变化 -->
:root {
    --icon-color: black;
}

<!-- 局部变化 -->
.success {
    --icon-color: green;
}

stroke="var(--icon-color)"


# 53、css变量有哪些浏览器支持？

除了IE11（它不支持CSS变量），所有主流浏览器都对CSS变量有全面地支持。

对于不支持CSS变量的浏览器，一个变通的方案是使用具有虚拟查询条件(dummy conditional query)的@supports代码块:

 <!-- 不支持 -->
section {
    color: gray;
}
 
 <!-- 支持 -->
@supports(--css: variables) {
    section {
        --my-color: blue;
        color: var(--my-color, 'blue');
    }
}

此方法的一个缺点是，如果你大量使用CSS变量，而那些不支持CSS变量的浏览器在你的项目中有很高的适配优先级，那么相应的代码会变得很复杂，对于维护来说，甚至是噩梦。

第三方插件

# 54、你是如何检查css语法是否正确的？有哪些方法？

直接在Chrome浏览器的控制台上修改对应元素的css属性，直接看出变化

# 55、css3的属性transfrom的值 preserve-3d 和 perspective 有什么区别？

transform -- css3属性，可以对元素进行变换(2d/3d)，包括平移translate,旋转rotate,缩放scale,等等（完整取值参考 W3C）。

perspective -- css3属性，当元素涉及3d变换时，perspective可以定义我们眼睛看到的3d立体效果，即空间感。通俗地解释就比如你去电影院看电影，你距离大荧幕的距离就相当于perspective的值啦，离得越远则perspective值越大，看到空间效果也就会不一样！

# 56、 你最喜欢Sass的原因是什么？

样式复用，可以对css预处理，代码结构清晰（选择器嵌套）

# 57、你喜欢Sass还是Less？为什么？




# html

# 周级汇总题目
