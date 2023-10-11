FROM node:18 AS development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

RUN npm run build

FROM node:18 AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./
# install only production dependencies
RUN npm install --only=production

COPY . .
# get build files from development
COPY --from=development /usr/src/app/.next ./.next

CMD [ "npm", "run", "start"]