function sampleProvinceData() {
  return {
    name: 'Asia',
    producers: [
      {name: 'a', cost: 10, production: 9},
      {name: 'b', cost: 12, production: 10},
      {name: 'c', cost: 10, production: 6},
    ],
    demand: 30,
    price: 20, // 600
  }
}

class Province {
  constructor(doc) {
    this._name = doc.name;
    this._producers = [];
    this._totalProduction = 0;
    this._demand = doc.demand;
    this._price = doc.price;
    doc.producers.forEach(d => this.addProducer(new Producer(this, d)));
  }

  addProducer(arg) {
    this._producers.push(arg);
    this._totalProduction += arg.production;
  }

  get name() {
    return this._name;
  }
  get producers() {
    return this._producers.slice();
  }
  get totalProduction() {
    return this._totalProduction;
  }
  set totalProduction(arg) {
    this._totalProduction = arg;
  }
  get demand() {
    return this._demand;
  }
  set demand(arg) {
    this._demand = parseInt(arg);
  }
  get price() {
    return this._price;
  }
  set price(arg) {
    this._price = parseInt(arg);
  }
  get shortfall() {
    return this._demand  - this.totalProduction;
  }
  get profit() {
    return this.demandValue - this.demandCost;
  }
  get demandValue() {
    return this.satisfiedDemand * this.price;
  }
  get satisfiedDemand() {
    return Math.min(this._demand, this.totalProduction); // 总生产量不能大于需求量
  }
  get demandCost() {
    let remainingDemand = this.demand;
    let result = 0;
    this.producers
        .sort((a, b) => a.cost - b.cost)
        .forEach(p => {
          const contribution = Math.min(remainingDemand, p.production); // 避免剩余量 > 生产量，造成多余消耗
          remainingDemand -= contribution;
          result += contribution * p.cost;
        });
    return result;
  }
}

class Producer {
  constructor(aProvince, data) {
    this._province = aProvince;
    this._cost = data.cost;
    this._name = data.name;
    this._production = data.production || 0;
  }

  get name() {return this._name;}
  get cost() {return this._cost;}
  set cost(arg) {this._cost = parseInt(arg);}
  get production() {return this._production;}
  set production(amountStr) {
    const amount = parseInt(amountStr);
    const newProduction = Number.isNaN(amount) ? 0 : amount;
    this._province.totalProduction += newProduction - this._production;
    this._production = newProduction;
  }
}

module.exports = {
  sampleProvinceData,
  Province,
  Producer,
};