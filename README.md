# FoodDelivery 🍔🚴‍♂️

Um aplicativo de delivery desenvolvido com **React Native** e **Expo**. O FoodDelivery permite que os usuários explorem restaurantes, façam pedidos e acompanhem suas entregas de forma prática e intuitiva.

## 🛠️ Funcionalidades

- **Explorar restaurantes:** Navegue por uma lista de restaurantes e cardápios.
- **Pedidos personalizados:** Adicione itens ao carrinho e faça pedidos com facilidade.
- **Rastreamento de entregas:** Acompanhe o status do seu pedido em tempo real.
- **Integração com APIs externas:** Dados dinâmicos alimentados por um backend.

## 🚀 Tecnologias Utilizadas

- **React Native** com **Expo**
- **React Navigation** para navegação entre telas
- Integração com APIs externas para informações de restaurantes e pedidos

## 👥 Integrantes do Projeto

- [Gustavo Morais](https://github.com/Gsttv)  
- [Marianne Soares](https://github.com/MarianneSoares)
- [Yuri Maia](https://github.com/YuriMaiaRibeiro)  

## 🐳 Como Executar o Container

**Pré-requisitos:** Docker instalado.

1. Após clonar o repositório, execute os seguintes comandos:  
   ```bash
   docker build -t food-delivery-app .
   docker run -p 8081:8081 food-delivery-app

2. O serviço estará disponível na porta 8081.

### 🔍 Observações
O *Dockerfile* expõe as portas *8081, 19000 e 19001*, mas recomendamos acessar o serviço pela porta 8081 para maior simplicidade.
A aplicação utiliza Node.js 18 combinado, priorizando leveza e eficiência.
Todas as dependências do projeto são automaticamente instaladas no momento da construção do container.

### 📚 Contexto do Projeto
Este aplicativo foi desenvolvido como parte das disciplinas *Desenvolvimento de Aplicativos Móveis* e *DevOps.*

- No módulo de Desenvolvimento de Aplicativos Móveis, focamos na construção de soluções práticas utilizando React Native, aprendendo a integrar técnicas modernas de navegação, consumo de APIs e gerenciamento de estado.
- Já no módulo de DevOps, aplicamos práticas de containerização para facilitar o deploy e gerenciamento da aplicação.
