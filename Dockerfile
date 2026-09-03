FROM mcr.microsoft.com/playwright:v1.46.0-focal

WORKDIR /app

# Copy package files first for better caching
COPY package*.json ./

RUN npm ci

# Copy source code
COPY . .

# Install browsers (usually already in base image, but good practice)
RUN npx playwright install

CMD ["npm", "test"]