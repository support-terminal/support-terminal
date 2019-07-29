export default class Action {
  type: string;
  select?: string = '-- Введите Ваш селект --';
  dataBaseId?: string;
  resultTemplate?: string;
}
