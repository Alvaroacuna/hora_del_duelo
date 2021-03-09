class Card {
    constructor(name, cost){
      this.name = name;
      this.cost = cost;
    }
  }
  
  class Unit extends Card{
    constructor(name, cost, power, res){
      super(name, cost);
      this.power = power;
      this.res = res;
    }
    attact(target){
      return target.res - this.power;
    }
  }
  
  class Effect extends Card{
    constructor(name, cost, text, stat, size){
      super(name, cost);
      this.text = text;
      this.stat = stat;
      this.size = size;
    }
    stats(target){
      if(target == Effect){
        alert('Los efectos no funcionan contra otros efectos')
      }
      if(target.res <= 0){
        alert('Te masacraron socio')
      }
      if(this.stat == 'Power'){
        return target.power += this.size;
      } else {
        return target.res += this.size;
      }
    }
  }
  
  const card1 = new Unit ('Ninja Cinturón Rojo', 3, 3, 4)
  const card2 = new Unit ('Ninja Cinturón Negro', 4, 5, 4)
  const card3 = new Unit ('Mushu', 18, 50, 40)
  const card4 = new Unit ('Shen Long', 13, 40, 160)
  const card5 = new Unit ('Naruto', 1, -1, 2)
  const effect_Card1 = new Effect ('Algoritmo Difícil', 2, 'aumentar la resistencia del objetivo en 3', 'res', 3)
  const effect_Card2 = new Effect ('Rechazo de promesa no manejado', 1, 'reducir la resistencia del objetivo en 2', 'res', -2)
  const effect_Card3 = new Effect ('Programación en pareja', 3, 'aumentar la resistencia del objetivo en 2', 'res', 2)
  const effect_Card4 = new Effect ('A combo limpio', 3, 'Aumenta el poder de ataque', 'Power', 5)