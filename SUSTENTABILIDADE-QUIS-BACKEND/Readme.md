### Tutorial iniciar a aplicação ###

### Primeiro Passo ###
Primeiro baixar e installar uma jdk 1.8 ou acima  e configurar a variáveis de ambiente do java.

### Segundo passo ###
Utilizar IDE para gerar o arquivo JAR para iniciar a aplicação. Basta importar a aplicação na IDE dar um clean install  para o artefato jar se gerado.
Para verificar se seu arquivo foi gerado procure na pastar target por um arquivo chamado "TCC-0.0.1-SNAPSHOT.jar".
Pode utulizar uma IDE de sua preferência eclipse ou intelijji.

### Terceiro Passo ###
A duas formar  de por a aplicação no AR a primeira via IDE e a segunda via terminal vou descrever as duas.

1- Com a IDE bastar clicar em start na IDE para subir  aplicação.
2- Para subir a aplicação via terminal basta, acessar a pasta target do projeto via terminal e digitar o seguinte comando abaixo: 
java -jar TCC-0.0.1-SNAPSHOT.jar

### Não é preciso subir nenhum banco de dados pois estamos usando um banco de dados em memória chamado H2  ###