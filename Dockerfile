FROM node:12 AS build

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
RUN npm install --production
COPY public ./public
COPY src ./src
COPY tsconfig.json ./tsconfig.json
RUN npm run build

FROM nginx:1.17
COPY --from=build /app/build /usr/share/nginx/html