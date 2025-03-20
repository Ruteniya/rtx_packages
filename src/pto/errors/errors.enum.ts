export enum Messages {
  INVALID_UUID = 'ID має бути у форматі UUID',
  REQUIRED_FIELD = 'Це поле є обов’язковим',
  INVALID_EMAIL = 'Некоректний формат email',
  ACCESS_FORBIDDEN = 'Ви не маєте доступу до цього ресурсу',
  NO_GROUP_FORBIDDEN = 'Доступ відхилено. Оберіть групу',

  CATEGORY_NOT_FOUND = 'Категорію не знайдено',
  GAME_NOT_FOUND = 'Гру не знайдено',
  GROUP_NOT_FOUND = 'Команду не знайдено',
  USER_NOT_FOUND = 'Користувача не знайдено',
  NODE_NOT_FOUND = 'Точку не знайдено',
  ANSWER_NOT_FOUND = 'Відповідь не знайдено',
  NODE_CANNOT_BE_UPDATED = 'Цю точку не можна оновити',

  ANSWER_ALREADY_EXISTS = 'Відповідь вже існує та зарахована',
  GAME_ALREADY_EXISTS = 'Гра вже існує. Видаліть її та спробуйте знову',
  NODE_ALREADY_EXISTS = 'Точка з такою назвою вже існує',

  YOU_CANNOT_UPATE_YOUR_OWN_ROLE = 'Неможливо оновити власну роль'
}
