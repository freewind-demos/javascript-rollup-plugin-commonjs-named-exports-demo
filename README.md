JavaScript Rollup "rollup-plugin-commonjs" "namedExports" Demo
==============================================================

rollup-plugin-commonjs在寻找一个module的exports的时候，只能使用比较简单的方式，
比如 `module.exports = { someExport }`，对于情况复杂一些的，它就找不到。
这时就需要我们手动的声明相应的`namedExports`

```
npm install
npm run demo
```
