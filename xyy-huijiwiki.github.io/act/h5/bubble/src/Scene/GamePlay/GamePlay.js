var GamePlayScene = cc.Scene.extend({
  backgroundLayer: null, // 背景层
  mainLayer: null, // 玩法层
  UILayer: null, // UI层
  ctor: function () {
    this._super();
  },
  onEnter: function () {
    this._super();
    this.registerEvent();
    this.loadBackgroundLayer();
    this.loadUILayer();
    this.loadMainLayer();
    v_main.scene = 'GamePlayScene';
  },
  onExit: function () {
    this._super();
    v_main.scene = '';
  },
  registerEvent: function () {

  },
  loadBackgroundLayer: function () {
    this.backgroundLayer = null;
    var node = new GPBackgroundLayer();
    this.addChild(node, 0);
    this.backgroundLayer = node;
  },
  loadUILayer: function () {
    this.UILayer = null;
    this.UILayer = new GPUILayer();
    this.addChild(this.UILayer, 50);
  },
  loadMainLayer: function () {
    this.mainLayer = null;
    this.mainLayer = new GPMainLayer();
    this.addChild(this.mainLayer, 10);
  }
});