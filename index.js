AFRAME.registerComponent('gh--jafetmorales--zinga_rotate_y', {
    schema: {
    speed: {type: 'number', default: .005}
  },
  init: function () {
    console.log('Component attached!');
  },
    tick: function () {
this.el.object3D.rotation.y=this.el.object3D.rotation.y+this.data.speed;   }
});
