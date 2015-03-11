(function() {
  'use strict';
  var XFlyingSushiMonsterProto = Object.create(HTMLDivElement.prototype);
  XFlyingSushiMonsterProto.createdCallback = function() {
    this.textContent = '\uD83C\uDF63';
    var style = this.style;

    style.position = 'absolute';
    style.fontSize = '100px';
    style.webkitAnimationName = 'moveHorizontal';
    style.webkitAnimationDuration = '1s';
    style.webkitAnimationIterationCount = 'infinite';
    style.webkitAnimationDirection = 'alternate-reverse';
    style.webkitAnimationFillMode = 'forwards';
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
