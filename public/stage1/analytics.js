(function() {
  'use strict';
  // PhantomJS s not supporting web components yet.
  // And some polyfills (as webcomponents/webcomponents.js) are not worked well.
  if (!('registerElement' in document)) { return; }

  var XFlyingSushiMonsterProto = Object.create(HTMLDivElement.prototype);
  XFlyingSushiMonsterProto.createdCallback = function() {
    this.textContent = '\uD83C\uDF63';
    var style = this.style;

    style.position = 'absolute';
    style.fontSize = '100px';
    style.animationName = 'moveHorizontal';
    style.animationDuration = '1s';
    style.animationIterationCount = 'infinite';
    style.animationDirection = 'alternate-reverse';
    style.animationFillMode = 'forwards';
  };

  var XFlyingSushiMonster = document.registerElement('x-flying-sushi-monster', {
    prototype: XFlyingSushiMonsterProto
  });

  var target = document.createElement('div');
  target.style.position = 'relative';
  target.style.height = '100px';
  target.appendChild(new XFlyingSushiMonster());

  var targetContainer = document.createElement('div');
  targetContainer.appendChild(target);
  document.body.appendChild(targetContainer);
})();
