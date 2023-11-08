# SECTION Development
FROM node:18 AS development

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

COPY package*.json ./

RUN pnpm install

COPY . .
# it functions as a type of documentation, does not affect the build process
EXPOSE 3000

CMD ["pnpm", "run", "dev"]

# SECTION Production
FROM node:18 AS production

ARG NODE_ENV=production

ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./

# install only production dependencies
RUN pnpm install --only=production

COPY . .
# get build files from development
COPY --from=development /app/.next ./.next

CMD [ "pnpm", "run", "start"]