# Etapa 1: Definir a imagem base
FROM node:18

# Etapa 2: Definir o diretório de trabalho no container
WORKDIR /app

# Etapa 3: Copiar o package.json e package-lock.json para o diretório de trabalho
COPY package.json package-lock.json ./

# Etapa 4: Instalar as dependências do projeto
RUN npm install

# Etapa 5: Copiar o código-fonte do seu projeto para o diretório de trabalho
COPY . .

# Etapa 6: Expor as portas do Expo (19000, 19001, 8081)
EXPOSE 19000 19001 8081

# Etapa 7: Rodar o Expo quando o container iniciar
CMD EXPO_DEV_SERVER_HOST=host.docker.internal npm start
