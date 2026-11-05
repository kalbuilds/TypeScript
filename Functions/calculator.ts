function add(a:number, b:number): number{

    return a + b;

}

function substract(a:number, b:number): number{
    return a - b;

}

function multiply(a:number, b:number): number{
      return a * b;
}

function division(a:number, b:number  ): number | null {
    if(b===0){
        return null;
    }
      return a / b;
}

console.log(add(90,10));
console.log(substract(90,10));
console.log(multiply(90,10));
console.log(division(90,0));

function calculateDiscount(
    price: number,
    discount: number
): number | null{
    if(price < 0  || discount < 0 || discount > 100){
       return null;

    }
    let discountedPrice = price - (price*discount/100);
    return discountedPrice
}

console.log(calculateDiscount(1000, 20));
// Expected: 800

console.log(calculateDiscount(500, 10));
// Expected: 450