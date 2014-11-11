# whenscrolled

Simple directive which allows to execute callback when user scrolls towards end
of the scrollable height. This is very useful if you want to implement infinite
scrolling.

# usage

In your html

``` html
<ul when-scrolled="loadMore()">
  <li ng-repeat="i in items"></li>
</ul>
```

In your javascript controller:

``` js
require('whenscrolled');

function Controller($scope) {
  $scope.loadMore = function () {
    // will be called when user scrolled towards the bottom of availble height
  }
}
```

# see also

https://github.com/anvaka/an - describes idea behind CommonJS friendly angular
packages

# install

With [npm](https://npmjs.org) do:

```
npm install whenscrolled
```

# license

MIT
