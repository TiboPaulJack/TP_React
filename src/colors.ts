




export function multiColorsOnHover() {
    const colors = [
        "CF6153",
        "C37BF3",
        "91A8ED",
        "24A094"
    ];

    let color = colors[Math.floor(Math.random() * colors.length)];
    color = `#${color}`;
    return color;
}
