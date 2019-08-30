//Use this script to generate your character
export default function Person(race,item){
    this.race = race;
    this.item = item;
    this.currenthealth = 100;
    this.maxHealth = 100;

    this.min = 3;
    this.maxDamage = 20;
    this.maxHealing = 30;

    this.heal = function(){
      return Math.floor((Math.random() * this.maxHealing) + this.min);
    };
    // this.totalHealing = this.heal();

    // this.attack = function(otherPlayer) {
    //   this.totalDamage;
    //   otherPlayer.currenthealth -= this.totalDamage;
    // };

    this.reflect = function() { return 0; }; // Elfs can reflect
    this.dodge = function() { return 0; }; // Boots can dodge
    this.doubleAttack = function() { return 0; }; // Bows can 2xAttack

    this.damage = function(){
      return Math.floor((Math.random() * this.maxDamage) + this.min);
    };

    this.totalDamage = 0;

    // function to initialize the player, run only once
    this.initPlayer = function(otherPlayer) {
      switch (this.race.toLowerCase()) {
        case 'human':
        // 	20% less damage taken
        otherPlayer.totalDamage -= Math.floor((otherPlayer.totalDamage/100)*20);
        break;

        case 'orc':
        // 40% more max health
        this.maxHealth *= 1.4;
        break;

        case 'elf':
          // 30% chance to reflect the attack back to the opponent. They take damage equal to 50% of the original hit.
          this.reflect = function(){
            return Math.floor((Math.random() * 3) + 1);
        }
        break;

        case 'vampire':
        // 10% lifesteal from opponents current health at start of the vampire's turn.
        otherPlayer.currenthealth -= Math.floor((otherPlayer.currenthealth / 100) * 10);
        this.currenthealth += Math.floor((this.currenthealth / 100) * 10);
        break;

        default:
        console.log('I don\'t know what I am...');

      };
    }; // End of initPlayer

    // function to initialize the items, run every turn
    this.initItems = function(otherPlayer) {
      switch (this.item.toLowerCase()) {
        case 'boots':
        //30% change to dodge attack
        this.dodge = function() {
          return Math.floor((Math.random() * 3) + 1);
        };
        break;

        case 'staff':
        // 20% increase in healing
        this.totalHealing += Math.floor((this.totalHealing / 100) * 20);
        break;

        case 'sword':
        // 30% more damage
        this.totalDamage = this.damage();
        this.totalDamage += Math.floor((this.totalDamage / 100) * 30);
        break;

        case 'bow':
        //30% chance to attact twice
        this.doubleAttack = function() {
          return Math.floor((Math.random() * 3) + 1);
        };
        break;

        default:
        console.log('Whooohooo! A new kind of item! But what does it do...');


      }
    }; // End of initItems
}
