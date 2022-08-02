export abstract class Character {
  protected abstract emoji: string;
  constructor(
    protected name: string,
    protected attack: number,
    protected hp: number,
  ) {}

  attackChar(character: Character): void {
    this.voiceAttack();
    character.loseHp(this.attack);
    console.log(`${this.name} is attacking ${character.name}`);
  }

  loseHp(strongAttack: number): void {
    this.hp -= strongAttack;
    console.log(`${this.name} lose HP and now have ${this.hp}`);
  }

  abstract voiceAttack(): void;
}

export class Warrior extends Character {
  protected emoji = '\u{1F9DD}';
  voiceAttack(): void {
    console.log(`${this.emoji} WARRIOOOORRR ATTAACK!!!`);
    console.log('');
  }
}

export class Monster extends Character {
  protected emoji = '\u{1F9DF}';
  voiceAttack(): void {
    console.log(`${this.emoji} Monsteeerrr ATTAACK!!!`);
    console.log('');
  }
}

const warrior = new Warrior('Warrior', 52, 100);
const monster = new Monster('Monster', 50, 100);

warrior.attackChar(monster);
monster.attackChar(warrior);
