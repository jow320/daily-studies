const fs = require("fs");
const path = require("path");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const dir = "notes";

function showMenu() {
  rl.question(
    `----- APP ARQUIVOS ----\n
1. Criar anotação\n
2. Listar anotações\n
3. Ler uma anotação\n
4. Excluir uma anotação\n
5. Sair\n
--------------------\n`,
    (answer) => {
      switch (answer) {
        case "1":
          rl.question(
            "Qual o nome do arquivo? Exemplo: anotação.txt\n",
            (archiveName) => {
              rl.question(
                "Qual o conteúdo do arquivo? Exemplo: 12345\n",
                (archiveContent) => {
                  // Criação da anotação
                  fs.writeFileSync(
                    path.join(dir, archiveName),
                    archiveContent,
                    "utf-8"
                  );
                  console.log(`Arquivo ${archiveName} criado com sucesso!`);
                  showMenu();
                }
              );
            }
          );
          break;
        case "2":
          fs.readdir(dir, (err, files) => {
            if (err) {
              console.log("Erro ao listar os arquivos", err);
            } else if (files.length === 0) {
              console.log("Não há arquivos na pasta notes!");
            } else {
              console.log("-------- LISTA DE ARQUIVOS ---------");
              files.forEach((file) => {
                console.log(file);
              });
            }
            showMenu();
          });
          break;
        case "3":
          rl.question(
            "Qual o nome do arquivo que deseja ler? Exemplo: anotação.txt\n",
            (archiveRead) => {
              try {
                const data = fs.readFileSync(
                  path.join(dir, archiveRead),
                  "utf-8"
                );
                console.log(`Conteúdo do arquivo ${archiveRead}:\n${data}`);
              } catch (err) {
                console.log(
                  `Erro ao ler o arquivo ${archiveRead}:`,
                  err.message
                );
              }
              showMenu();
            }
          );
          break;
        case "4":
          rl.question(
            "Qual o nome do arquivo que deseja excluir? Exemplo: anotação.txt\n",
            (archiveDelete) => {
              fs.unlink(path.join(dir, archiveDelete), (error) => {
                if (error) {
                  console.log("Erro ao excluir o arquivo: ", error.message);
                } else {
                  console.log(`Arquivo ${archiveDelete} apagado com sucesso!`);
                }
                showMenu();
              });
            }
          );
          break;
        case "5":
          console.log("Encerrando...");
          rl.close();
          break;
        default:
          console.log("Opção inválida!");

          break;
      }
    }
  );
}

showMenu();
