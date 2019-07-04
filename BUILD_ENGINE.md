
Для работы с проектом нужен билд сервер.
Ниже описан вариант билд машины на компе разработчика

docker run -d --name jenkins -p 9090:8080 -p 50000:50000 -v /mnt/02F05FC47BBBBC1C/var/jenkins:/var/jenkins_home jenkins/jenkins:lts


1. Пароль получаем из логов докера
2. Предлагается установить самое полезное

Проверь наичие плагина Blue Ocean. 
Билд создаем прямо в нем. В из dev проекта с линками на подмодули. 
В каждом проекте должен быть прописан ключ дженкинса

На Jenkins должен стоять npm

1.Войти под рутом в докер docker exec -it --user root jenkins bash

curl -sL https://deb.nodesource.com/setup_10.x | bash -

apt-get install -y nodejs

apt-get install -y npm

npm install -g n

n 8.9.4
