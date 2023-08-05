Grid = require "./grid"
worker = require "worker_threads"

module.exports.findPath = (startX, startY, endX, endY, theGrid, allowDiagonal=false, crossCorners=0) ->
    new Grid(theGrid.width, theGrid.height, Buffer.from(theGrid.bytes)).findPathSync(startX, startY, endX, endY, allowDiagonal, crossCorners);