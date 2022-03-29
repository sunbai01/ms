# css

# 1、在什么情况下，用translate()而不用绝对定位？反之呢？请说明理由

translate设置百分比值时，百分比是相对元素自身元素尺寸的值
绝对定位的top, left等的百分比值则是相对最近的position为relative\abolute\fixed祖先元素尺寸的值
所以
需要基于元素自身尺寸进行定位时，使用 translate，
需要基于某个祖先元素的尺寸进行定位时，使用 position:abolute

# 2、以前我们都提倡把css通过外部引入，但现在使用webpack时往往会和html打包在一起？这是为什么呢？



# html

# 周级汇总题目
