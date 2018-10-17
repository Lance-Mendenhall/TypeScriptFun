function SquarePerimeterAndArea(side:number) {
    let per: number = side*4;
    let area: number = side*side;
    return [per,area];

}
console.log(SquarePerimeterAndArea(17));