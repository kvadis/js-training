export function Flower() {
    function Flower(name, wateringInterval, lastWateringDate) {
        this.name = name;
        this.wateringInterval = wateringInterval;
        this.lastWateringTime = lastWateringDate;
    }

    Flower.prototype.water = function () {
        this.lastWateringTime = new Date();
        alert("Flower \"" + this.name + "\" has been watered");
    };
    return Flower;
}