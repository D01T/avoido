class Vector {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  static arrayTo([x, y]) {
    return new Vector(x, y);
  }

  clone() {
    return new Vector(this.x, this.y);
  }

  distance(vector) {
    return Math.sqrt(((this.x - vector.x) ** 2) + ((this.y - vector.y) ** 2));
  }

  negative() {
    this.x = -this.x;
    this.y = -this.y;
    return this;
  }

  add(vector) {
    if (vector instanceof Vector) {
      this.x += vector.x;
      this.y += vector.y;
    }
    return this;
  }

  subtract(vector) {
    if (vector instanceof Vector) {
      this.x -= vector.x;
      this.y -= vector.y;
    }
    return this;
  }

  multiply(vector) {
    if (vector instanceof Vector) {
      this.x *= vector.x;
      this.y *= vector.y;
    }
    return this;
  }

  divide(vector) {
    if (vector instanceof Vector) {
      if (vector.x !== 0) {
        this.x /= vector.x;
      }
      if (vector.y !== 0) {
        this.y /= vector.y;
      }
    }
    return this;
  }

  equals(vector) {
    return this.x === vector.x && this.y === vector.y;
  }

  dot(vector) {
    return (this.x * vector.x) + (this.y * vector.y);
  }

  cross(vector) {
    return (this.x * vector.y) - (this.y * vector.x);
  }

  set(x, y) {
    this.x = x; this.y = y;
    return this;
  }

  toArray() {
    return [this.x, this.y];
  }
}

module.exports = Vector;
