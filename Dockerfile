FROM mcr.microsoft.com/playwright:v1.46.0-focal

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npx playwright install

CMD ["npm", "test"]