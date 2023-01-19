# Choose the ghost version
FROM ghost:latest

WORKDIR /var/lib/ghost
RUN ghost config url http://localhost:3102
EXPOSE 2368
