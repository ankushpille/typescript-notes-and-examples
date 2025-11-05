type status = 'pending' | 'approved' | 'rejected'

let Orderstatus: status = 'pending'
console.log(Orderstatus);

//union type allowing a variable to hold more than one type
function printIdentifier(id:string | number){
    if(id === 'string'){
         console.log(id.toUpperCase())
    }else{
        console.log(`ID ${id}`)
    }
}

printIdentifier(12)

//5. typing function defining parameter and return types

function calculateTotal(price:number , quantity:number) : number{
    return price * quantity;
}

console.log(calculateTotal(3,4));

function greet(name: string, greeting : string = 'how are you') : void{
    console.log(`Heloo ${name} ${greeting}`)
}

greet('ankush')