Для DEV не забудь активировать профиль спринга:
-Dspring.profiles.active=dev
Позволит авторизацию через wath вебпака



Когда в проекте e2e запускаем тестирование, поднимается тестконтейнерс с jar 
Докер описан в ресурсах тестов



Backend:

clean bootRun -Dspring.profiles.active=dev

Ui:

~/projects/nixvision/support-terminal/ui/package.json

npm run start