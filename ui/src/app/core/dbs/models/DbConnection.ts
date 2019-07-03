export default class DbConnection {
  id: string;
  name: string;
  type: string;
  host: string;
  port: string;
  dbName?: string;
  sid?: string;
  user: string;
  password:string;
}
