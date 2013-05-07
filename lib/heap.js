// Generated by CoffeeScript 1.6.2
(function() {
  var Heap;

  Heap = (function() {
    function Heap(locToF) {
      this.locToF = locToF;
      this.nodes = [];
    }

    Heap.prototype.isNotEmpty = function() {
      return this.nodes.length > 0;
    };

    Heap.prototype._siftdown = function(startPos, pos) {
      var newNode, parentNode, parentpos;

      console.log("[heap::_siftdown] startPos:" + startPos + ", pos:" + pos);
      newNode = this.nodes[pos];
      while (pos > startPos) {
        parentpos = (pos - 1) >>> 1;
        parentNode = this.nodes[parentpos];
        if (this.locToF[newNode] < this.locToF[parentNode]) {
          this.nodes[pos] = parentNode;
          pos = parentpos;
          continue;
        }
        break;
      }
      this.nodes[pos] = newNode;
    };

    Heap.prototype._siftup = function(pos) {
      var childPos, endPos, newNode, rightPos, startPos;

      console.log("[heap::_siftup] pos:" + pos);
      endPos = this.nodes.length;
      startPos = pos;
      newNode = this.nodes[pos];
      childPos = (pos << 1) + 1;
      while (childPos < endPos) {
        rightPos = childPos + 1;
        if (rightPos < endPos && (this.locToF[this.nodes[childPos]] > this.locToF[this.nodes[rightPos]])) {
          childPos = rightPos;
        }
        this.nodes[pos] = this.nodes[childPos];
        pos = childPos;
        childPos = (pos << 1) + 1;
      }
      this.nodes[pos] = newNode;
      this._siftdown(startPos, pos);
    };

    Heap.prototype.updateItem = function(node) {
      var pos;

      console.log("[heap::updateItem] node:" + node);
      pos = this.nodes.indexOf(node);
      if (pos < 0) {
        return;
      }
      this._siftdown(0, pos);
      this._siftup(pos);
    };

    Heap.prototype.push = function(node) {
      console.log("[heap::push] node:" + node);
      this.nodes.push(node);
      return this._siftdown(0, this.nodes.length - 1);
    };

    Heap.prototype.pop = function() {
      var lastelt, returnitem;

      console.log("[heap::pop]");
      lastelt = this.nodes.pop();
      if (this.nodes.length) {
        returnitem = this.nodes[0];
        this.nodes[0] = lastelt;
        this._siftup(0);
      } else {
        return lastelt;
      }
      return returnitem;
    };

    Heap.prototype.reset = function(locToF) {
      console.log("[heap::reset] locToF:" + locToF);
      this.nodes.length = 0;
      this.locToF = locToF;
    };

    return Heap;

  })();

  module.exports = Heap;

}).call(this);