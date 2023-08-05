Grid = require("./lib/grid");
syncfinder_astar = require("./lib/syncfinder_astar.js");


module.exports = {

  bytesFrom2DArray : Grid.bytesFrom2DArray ,
  findPath : syncfinder_astar.findPath,
  findPathSync : syncfinder_astar.findPath,
  findPathByBrickLoc: syncfinder_astar.findPathByBrickLoc,
  startWorker: syncfinder_astar.startWorker,
  endWorker: syncfinder_astar.endWorker,
  findPathAsync: syncfinder_astar.findPathAsync,
  buildGrid : function(width, height, buf)
  {
    return new Grid(width, height, buf)
  }

}



