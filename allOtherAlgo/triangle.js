// Write a program to classify the triangle as equilateral, isosceles and scalene to the given sides of triangle.(HINT: Solve using semi - perimeter and area)

const triangle  = (s1,s2,s3) => {
    if (s1 == s2 && s2 == s3 && s3 == s1) {
        return "The triangle is Equilateral Triangle"
        
    } else if (s1 == s2 || s2 == s3 || s3 == s1) {
        return "The triangle is Isoceles"
        
    } else {
        return " The triangle is Scalen triangle"
    } 
}

console.log(triangle(2, 2, 2)); // The triangle is Equilateral Triangle
console.log(triangle(2, 2, 8)); // The triangle is Isoceles
console.log(triangle(8, 9, 5)); // The triangle is Scalen triangle
