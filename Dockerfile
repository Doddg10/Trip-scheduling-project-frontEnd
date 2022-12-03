FROM node:latest as build
WORKDIR /usr/local/app
COPY ./ /usr/local/app/
RUN npm install
RUN npm run build


RUN npm install -g @angular/cli@latest
RUN npm install -g envsub
# start app
EXPOSE 4200
CMD ng serve --host 0.0.0.0
#ENTRYPOINT ["/bin/sh",  "-c",  "envsub /usr/local/app/dist/trip-scheduling-frontend/assets/env.template.js /usr/local/app/dist/trip-scheduling-frontend/assets/env.js"]