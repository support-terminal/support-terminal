Это основной проект.

Он состоит из бека - support-terminal (гредловый проект)
и ui (Angular 2). 

Когда происходит окончательный билд, скомпилированный ui помещается в ресурсы спринг-бутового support-terminal
чтобы потом это все можно было запустить как JAR.

### Разработка
В момент разработки поднимаеv Back и UI отдельно 
 
Чтобы поднять back нужно активировать профиль спринга:
-Dspring.profiles.active=dev
Это решает некоторые проблемы для локальной разработки: логи, и авторизация ui с левого хоста.

Создаем две конфигурации в IDEA и запускаем их 

Backend:

clean bootRun -Dspring.profiles.active=dev


Ui (должен стоять NPM):

~/projects/nixvision/support-terminal/ui/package.json

npm run start