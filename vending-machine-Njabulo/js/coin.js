
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports"], function (require, exports) {
    "use strict";
    var Coin = (function () {
        function Coin(value) {
            this.value = value;
        }
        return Coin;
    }());
    exports.Coin = Coin;
    var r1 = (function (_super) {
        __extends(r1, _super);
        function r1() {
            _super.call(this, 1.00);
        }
        r1.prototype.getImageUrl = function () {
            return "img/r1.png";
        };
        return r1;
    }(Coin));
    exports.r1 = r1;

    var r2 = (function (_super) {
        __extends(r2, _super);
        function r2() {
            _super.call(this, 2.00);
        }
        r2.prototype.getImageUrl = function () {
            return "img/r2.png";
        };
        return r2;
    }(Coin));
    exports.r2 = r2;
    var r5 = (function (_super) {
        __extends(r5, _super);
        function r5() {
            _super.call(this, 5.00);
        }
        r5.prototype.getImageUrl = function () {
            return "img/r5.png";
        };
        return r5;
    }(Coin));
    exports.r5 = r5;
    var c50 = (function (_super) {
        __extends(c50, _super);
        function c50() {
            _super.call(this, 0.50);
        }
        c50.prototype.getImageUrl = function () {
            return "img/c50.png";
        };
        return c50;
    }(Coin));
    exports.c50 = c50;
});
