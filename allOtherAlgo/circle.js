// Write a program to find area and circumference of circle

const circle = (r) => {
    const circumference = 2 * Math.PI * r
    const area = Math.PI * r ** 2
    return {area,circumference}
}

console.log(circle(15)); // { area: 706.8583470577034, circumference: 94.24777960769379 }