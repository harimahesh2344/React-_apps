FROM node
WORKDIR /usr/app
COPY package.json .
RUN npm install -g npm@10.4.0
COPY . .
EXPOSE 3000
CMD ["node","index.js"]
