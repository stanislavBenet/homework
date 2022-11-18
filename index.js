function Kettle(color, volume, power) {
  this.color = color;
  this.volume = volume;
  this.power = power;
  this.currentWater = 0;
}

function MethodForKettle() {
  (this.work = function (value) {
    if (this.currentWater + value>0) {
      return "work with water " + this.currentWater;
    }
    return "alert! add water";
  }),
    (this.addWater = function (value) {
      if (this.currentWater + value < this.volume) {
        this.currentWater += value;
      }
      return this.currentWater;
    }),
    (this.subWater = function (value) {
      if (this.currentWater - value >= 0) {
        this.currentWater -= value;
      }
      return this.currentWater;
    });
}
Kettle.prototype = new MethodForKettle();
const kettle = new Kettle("black", 0.5, 800);
console.log(kettle.work());
