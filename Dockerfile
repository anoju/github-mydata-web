FROM nginx:latest
WORKDIR /app

EXPOSE 8081

ADD ./conf/default.conf /etc/nginx/conf.d/default.conf
ADD ./dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
