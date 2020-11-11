
define(["require", "exports", "./productCategory"], function (require, exports, categories) {
    "use strict";
    var Initial = (function () {
        function Initial() {
            this.name = "please select a product";
            this.price = 0;
        }
        return Initial;
    }());
    exports.Initial = Initial;
    var CocaCola = (function () {
        function CocaCola() {
            this.name = "Coca-Cola";
            this.price = 12.50;
            this.category = new categories.SodaCategory();
        }
        return CocaCola;
    }());
    exports.CocaCola = CocaCola;
    var Fanta = (function () {
        function Fanta() {
            this.name = "Fanta";
            this.price = 12.50;
            this.category = new categories.SodaCategory();
        }
        return Fanta;
    }());
    exports.Fanta = Fanta;
    var Sprite = (function () {
        function Sprite() {
            this.name = "Sprite";
            this.price = 12.50;
            this.category = new categories.SodaCategory();
        }
        return Sprite;
    }());
    exports.Sprite = Sprite;
    var Peanuts = (function () {
        function Peanuts() {
            this.name = "Peanuts";
            this.price = 9.00;
            this.category = new categories.NutsCategory();
        }
        return Peanuts;
    }());
    exports.Peanuts = Peanuts;
    var Cashews = (function () {
        function Cashews() {
            this.name = "Nuts";
            this.price = 9.00;
            this.category = new categories.NutsCategory();
        }
        return Cashews;
    }());
    exports.Cashews = Cashews;
    var Plain = (function () {
        function Plain() {
            this.name = "Plain Chips";
            this.price = 10.00;
            this.category = new categories.PotatoChipsCategory();
        }
        return Plain;
    }());
    exports.Plain = Plain;
    var Cheddar = (function () {
        function Cheddar() {
            this.name = "Cheddar Chips";
            this.price = 10.00;
            this.category = new categories.PotatoChipsCategory();
        }
        return Cheddar;
    }());
    exports.Cheddar = Cheddar;
    var Mints = (function () {
        function Mints() {
            this.name = "Mints";
            this.price = 7.00;
            this.category = new categories.CandyCategory();
        }
        return Mints;
    }());
    exports.Mints = Mints;
    var Gummies = (function () {
        function Gummies() {
            this.name = "Gummies";
            this.price = 2.50;
            this.category = new categories.CandyCategory();
        }
        return Gummies;
    }());
    exports.Gummies = Gummies;
    var Hershey = (function () {
        function Hershey() {
            this.name = "Chocolate";
            this.price = 15.50;
            this.category = new categories.CandyBarCategory();
        }
        return Hershey;
    }());
    exports.Hershey = Hershey;
    var MilkyWay = (function () {
        function MilkyWay() {
            this.name = "Milky Way";
            this.price = 12.00;
            this.category = new categories.CandyBarCategory();
        }
        return MilkyWay;
    }());
    exports.MilkyWay = MilkyWay;
});
