function createTowar(name, price, count){
    return {
        name: name,
        price: price,
        count: count,
        info: function(){
            alert(`${this.count} ${this.name} коштують ${this.price * this.count}грн`)
        }
    }
}

let person1 = createTowar("Навушники", 500, 4);
let person2 = createTowar("Флешка", 222, 10);

person1.info();
person2.info();
