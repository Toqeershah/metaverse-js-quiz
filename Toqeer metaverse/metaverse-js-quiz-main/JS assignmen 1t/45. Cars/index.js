function best_cars(manufacturer, model, color, speed) {
    const car = {
        manufacturer,
        model,
    }

    if (color) {
        car["color"] = color;
    }

    if (speed) {
        car["speed"] = speed;
    }

    return car;
}


console.log(best_cars("honda", "City", "Black", 800))