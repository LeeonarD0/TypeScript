//Design Patteerns = Singleton - GoF // Factory Method = GoF

export class DataBase {
  private static database: DataBase;
  private constructor(
    private host: string,
    private user: string,
    private password: string,
  ) {}

  connected(): void {
    console.log(`Conectado: ${this.host}, ${this.user}, ${this.password}`);
  }

  static getDatabase(host: string, user: string, password: string): DataBase {
    if (DataBase.database) return DataBase.database;
    DataBase.database = new DataBase(host, user, password);
    return DataBase.database;
  }
}

const database = DataBase.getDatabase('LocalHost', 'Leonardo', '******');

database.connected();
