function fib(x:number){
    let a:number=1;
    let b:number=0;
    let c:number=0;
    let counter:number=0;

    while(x>0) {
        c=a;
        a+=b;
        b=c;
        x--;
        counter++;
        console.log(`term ${counter} is ${b}`)
    }


    return;
}

fib(20);
