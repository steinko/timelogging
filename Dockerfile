FROM node:9-slim
FROM cypress/browsers:chrome67-ff57
MAINTAINER Stein Korsveien <steinkor@gmail.com>
USER root
RUN mkdir app
COPY . ./app
WORKDIR ./app
RUN npm install
CMD ["npm", "start"]
 