//Directly extends Math
(function extendMathMethods() {
    Math.rotate = function(centerX, centerY, x, y, angle) {
        var angleInRadians = (Math.PI / 180) * angle;

        var cos = Math.cos(angleInRadians);
        var sin = Math.sin(angleInRadians);

        var newX = (cos * (x - centerX)) +
            (sin * (y - centerY)) +
            centerX;
        var newY = (cos * (y - centerY)) -
            (sin * (x - centerX)) +
            centerY;

        return [newX, newY];
    }

    Math.constMove = function(ax, ay, bx, by, speed) {
        var deltaX = bx - ax;
        var deltaY = by - ay;

        var distance = Math.sqrt(deltaX * deltaX +
            deltaY * deltaY);
        if (distance < speed) {
            return [0, 0]
        }

        var newX = (deltaX * speed) / distance;
        var newY = (deltaY * speed) / distance;

        return [newX, newY];
    }
})();