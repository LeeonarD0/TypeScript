function noReturns(...args: string[]): void {
  console.log(args.join(''));
}

const pessoa = {
  name: 'Leo',
  surname: 'Basso',

  showName(): void {
    console.log(this.name + ' ' + this.surname);
  },
};

noReturns('Leo ', ' Baso');
pessoa.showName();

export { pessoa };
