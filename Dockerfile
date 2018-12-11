FROM node:9-slim
MAINTAINER Stein Korsveien <steinkor@gmail.com>
USER root
RUN mkdir app
COPY . ./app
WORKDIR ./app
RUN npm install 
CMD [ "npm", "start" ]
 