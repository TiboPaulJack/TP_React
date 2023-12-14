// Function to generate a random color from a predefined array on each call
export function multiColorsOnHover() {
    const colors = [
        "CF6153",
        "C37BF3",
        "91A8ED",
        "24A094"
    ];

    // Selecting a random color from the array
    let color = colors[Math.floor(Math.random() * colors.length)];

    // Formatting the color string
    color = `#${color}`;

    // Returning the formatted color
    return color;
}
