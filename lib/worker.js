// Generated by CoffeeScript 2.7.0
(function() {
  var Grid, worker;

  Grid = require("./grid");

  worker = require("worker_threads");

  module.exports.findPath = function(startX, startY, endX, endY, theGrid, allowDiagonal = false, crossCorners = 0) {
    return new Grid(theGrid.width, theGrid.height, Buffer.from(theGrid.bytes)).findPathSync(startX, startY, endX, endY, allowDiagonal, crossCorners);
  };

}).call(this);