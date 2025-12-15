export default function fibonacci(range: number){
    let f = 0;
    let l = 1;
    console.log(f);
    console.log(l);
    while(l < range){
        let a = f;
        f = l;
        l = a+f
        console.log(l)
    }
}