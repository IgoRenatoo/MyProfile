> // CONFIGURAÇÕES NODEJS
<details>
<summary><strong>Clique aqui para ver configuração inicial Projeto NodeJs!</strong></summary> <br>

### Inicializando o projeto Node.js com TypeScript e Express
<pre>
npm init -y && \
npm install express typescript dotenv && \
npm install -D @types/express @types/node tsx && \

#Inicializando o tsconfig.json
npx tsc --init && \

#Configurando o arquivo tsconfig.json com opções adequadas
echo '{
  "compilerOptions": {
    "target": "ES6",                 // Versão do ECMAScript a ser usada
    "module": "CommonJS",             // Sistema de módulos para compatibilidade
    "outDir": "./dist",               // Diretório de saída dos arquivos compilados
    "rootDir": "./src",               // Diretório de entrada dos arquivos de origem
    "strict": true,                   // Habilita verificações rigorosas
    "esModuleInterop": true           // Suporte à interoperabilidade de módulos
  },
  "include": ["src/**/*.ts"],         // Inclui arquivos TypeScript na pasta src
  "exclude": ["node_modules"]         // Exclui a pasta node_modules da compilação
}' > tsconfig.json && \

#Criando estrutura de diretórios
mkdir -p src && \

#Criando o arquivo principal da aplicação
echo 'import express from "express";
import "dotenv/config";

// Inicializa o servidor Express
const server = express();

// Define a rota principal
server.get("/", (req, res) => {
  res.send("Página carregada!");
});

// O servidor escuta na porta definida no arquivo .env
server.listen(process.env.PORT, () => console.log("Servidor conectado!"));' > src/index.ts && \

#Criando .gitignore e .env
echo 'node_modules/
.env/' > .gitignore && \
touch .env && \

#Criando estrutura de diretórios adicionais
mkdir -p src/controllers src/database src/models src/routers src/views && \

#Atualizando o package.json com scripts e dependências
echo '{
  "name": "02-nodejs",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "dev": "tsx --watch src/index.ts"
  },
  "dependencies": {
    "express": "^4.21.1",
    "typescript": "^5.6.3"
  },
  "devDependencies": {
    "@types/express": "^5.0.0",
    "@types/node": "^22.7.5",
    "tsx": "^4.19.1"
  }
}' > package.json
</pre>

</details>

--------------------------------------------------------------------- <br><br>

> // CONFIGURAÇÕES VSCODE

<details>
<summary><strong>Clique aqui para ver configuração VSCode!</strong></summary>

### EXTENSÕES

<pre>
code --install-extension attilabuti.mustache-syntax-vscode \
&& code --install-extension dbaeumer.vscode-eslint \
&& code --install-extension editorconfig.editorconfig \
&& code --install-extension esbenp.prettier-vscode \
&& code --install-extension formulahendry.auto-close-tag \
&& code --install-extension formulahendry.auto-complete-tag \
&& code --install-extension formulahendry.auto-rename-tag \
&& code --install-extension miguelsolorio.min-theme \
&& code --install-extension miguelsolorio.symbols \
&& code --install-extension ms-python.debugpy \
&& code --install-extension ms-python.python \
&& code --install-extension ms-python.vscode-pylance \
&& code --install-extension ms-vscode.live-server \
&& code --install-extension mtxr.sqltools \
&& code --install-extension naumovs.color-highlight \
&& code --install-extension qwtel.sqlite-viewer \
&& code --install-extension ritwickdey.liveserver \
&& code --install-extension softwaredotcom.swdc-vscode \
&& code --install-extension steoates.autoimport \
&& code --install-extension visualstudioexptteam.vscodeintellicode \
&& code --install-extension vscjava.vscode-java-debug
</pre>

### GIT BASH

<pre>
# Edição do arquivo .bash em c:/users/user/.bashrc
function set_current_dir() {
    CURRENT_DIR=$(pwd | sed 's|.*/Projects/||')  # Remove tudo até o diretório 'Projects'

    if [ -d .git ]; then
        GIT_BRANCH=$(git rev-parse --abbrev-ref HEAD 2>/dev/null)
	fi
}

PROMPT_COMMAND=set_current_dir

PS1='\[\e[32m\]\h \[\e[38;5;63m\]$CURRENT_DIR\[\e[33m\]($GIT_BRANCH)\n\[\e[0m\]\$ '
</pre>

### WORKBENCH

<pre>
{
    "workbench.iconTheme": "symbols",
    "workbench.startupEditor": "newUntitledFile",
    "workbench.editor.labelFormat": "short",
    "workbench.statusBar.visible": false,
    "workbench.tree.enableStickyScroll": false,
    "workbench.colorTheme": "Min Dark",
    "workbench.activityBar.location": "top",
    "workbench.editor.empty.hint": "hidden",
    "workbench.tree.renderIndentGuides": "always",
    "workbench.tips.enabled": false,
    
    "workbench.colorCustomizations": {
        "terminal.background": "#000000",
        "terminal.foreground": "#ffffff",
        "terminalCursor.foreground": "#00FF00",
        "terminalStickyScroll.border": "#FF0000",
        "scrollbarSlider.background": "#00FF00",
        "scrollbarSlider.hoverBackground": "#00ff0083",
        "scrollbarSlider.activeBackground": "#00ff002e",
        "scrollbarSlider.horizontal.background": "#00FF00",
        "scrollbarSlider.horizontal.hoverBackground": "#00FF00",
        "scrollbarSlider.horizontal.activeBackground": "#8A8A8A",
        "sideBar.background": "#000000",
        "sideBar.foreground": "#6446aa",
        "sideBarSectionHeader.border": "#231739",
        "sideBarSectionHeader.foreground": "#00FF00",
        "sideBarSectionHeader.background": "#231739",
        "button.background": "#231739",
        "button.foreground": "#00FF00",
        "button.hoverBackground": "#6446aa",
        "activityBarBadge.background": "#FF0000",
        "activityBarBadge.foreground": "#FFFFFF",
        "activityBarTop.foreground": "#00FF00",
        "sideBarTitle.foreground": "#00FF00",
        "sideBar.border": "#231739",
        "list.errorForeground": "#FF0000",
        "list.activeSelectionBackground": "#231739",
        "list.inactiveSelectionBackground": "#231739",
        "list.focusBackground": "#231739",
        "list.hoverBackground": "#231739",
        "list.activeSelectionBorder": "#231739",
        "list.inactiveSelectionForeground": "#00FF00",
        "list.focusBorder": "#231739",
        "list.foreground": "#FFFFFF",
        "tree.indentGuidesStroke": "#6446aa",
        "gitDecoration.modifiedResourceForeground": "#9f9fff",
        "gitDecoration.untrackedResourceForeground": "#9f9fff",
        "gitDecoration.ignoredResourceForeground":  "#ffffff40",
        "titleBar.activeBackground": "#000000",
        "titleBar.activeForeground": "#000000",
        "titleBar.inactiveBackground": "#000000",
        "titleBar.inactiveForeground": "#000000",
        "tab.activeBackground": "#6446aa",
        "tab.activeForeground": "#FFFFFF",
        "tab.inactiveBackground": "#231739",
        "tab.inactiveForeground": "#FFFFFF",
        "scrollbar.shadow": "#6446aa",
        "editor.background": "#000000",
        "editor.lineHighlightBorder": "#6446aa",
        "editorLineNumber.foreground": "#00FF00",
        "editorLineNumber.activeForeground": "#6446aa",
        "editorCursor.foreground": "#00FF00",
        "editor.foreground": "#ffffff",
        "editorIndentGuide.background1": "#231739",
        "editorIndentGuide.activeBackground1": "#6446aa",
        "editorRuler.foreground": "#231739",
    },
    "editor.scrollbar.horizontal": "hidden",
    "editor.cursorBlinking": "blink",
    "editor.hover.sticky": false,
    "editor.stickyScroll.enabled": false,
    "editor.fontFamily": "JetBrains Mono",
    "editor.fontSize": 14,
    "editor.lineHeight": 1.8,
    "editor.letterSpacing": 0.1,
    "editor.wordWrap": "on",
    "editor.wordWrapColumn": 110,
    "editor.rulers": [100, 120],
    "editor.renderLineHighlight": "gutter",
    "editor.semanticHighlighting.enabled": false,
    "editor.minimap.enabled": false,
    "editor.tabSize": 2,
    "editor.fontLigatures": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.suggestSelection": "first",
    "javascript.suggest.autoImports": true,
    "javascript.updateImportsOnFileMove.enabled": "always",
    "typescript.suggest.autoImports": true,
    "typescript.updateImportsOnFileMove.enabled": "always",
    "editor.tokenColorCustomizations": {
        "textMateRules": [
            {
                "scope": "entity.name.tag",
                "settings": {
                    "foreground": "#8d8df7"
                }
            } 
        ]
    },
    "terminal.integrated.defaultProfile.windows": "Git Bash",
    "terminal.integrated.fontSize": 16,
    "terminal.integrated.fontFamily": "JetBrains Mono",
    "terminal.integrated.letterSpacing": 1,
    "terminal.integrated.lineHeight": 1.5,
    "terminal.integrated.gpuAcceleration": "on",
    "prettier.enable": true,
    "prettier.singleQuote": false,
    "prettier.tabWidth": 2,
    "prettier.semi": true,
    "breadcrumbs.enabled": false,
    "chat.editor.wordWrap": "on",
    "explorer.confirmDelete": false,
    "explorer.compactFolders": false,
    "explorer.confirmDragAndDrop": false,
    "explorer.fileNesting.patterns": {
        "*.ts": "${capture}.js",
        "*.js": "${capture}.js.map, ${capture}.min.js, ${capture}.d.ts",
        "*.jsx": "${capture}.js",
        "*.tsx": "${capture}.ts",
        "tsconfig.json": "tsconfig.*.json",
        "package.json": "package-lock*, tsconfi*, yarn.lock, pnpm-lock.yaml, bun.lockb",
        "*.sqlite": "${capture}.${extname}-*",
        "*.db": "${capture}.${extname}-*",
        "*.sqlite3": "${capture}.${extname}-*",
        "*.db3": "${capture}.${extname}-*",
        "*.sdb": "${capture}.${extname}-*",
        "*.s3db": "${capture}.${extname}-*"
    },
    "files.autoSave": "afterDelay",
    "files.autoSaveDelay": 0,
    "files.insertFinalNewline": true,
    "diffEditor.wordWrap": "on",
    "symbols.folders.associations": {
        "views": "folder-assets",
        "controllers": "exe" 
    },
    "window.titleBarStyle": "native",
    "window.zoomLevel": -0.5,
    "window.commandCenter": false,
    "window.customTitleBarVisibility": "never",
    "explorer.sortOrder": "type"
}
</pre>

</details>

--------------------------------------------------------------------- <br><br> 

> // TABELA DE EMOJIS
<details>
<summary>Clique aqui para ver a tabela de emojis!</summary> <br> 

| Emoji              | Commit e Feature                                                  | Emoji              | Commit e Feature                                                  |
|--------------------|------------------------------------------------------------------|--------------------|------------------------------------------------------------------|
| 😎 :sunglasses :     | "Adiciona estilo de usuário para um visual moderno" <br> Modo noturno ou tema de interface elegante.          | ❤️ :heart :          | "Implementa sistema de feedback positivo" <br> Opção para os usuários "curtirem" ou "favoritarem" itens. |
| 👊 :punch :          | "Adiciona animação de interação de usuários" <br> Reações de combate ou interações de luta em um jogo. | 💥 :boom :           | "Implementa efeitos visuais para ações explosivas" <br> Animações de explosões em jogos ou eventos. |
| 💫 :dizzy :          | "Adiciona efeitos de movimento para transições" <br> Animações que fazem a interface parecer mais dinâmica. | ❓ :question :        | "Adiciona ajuda contextual ao usuário" <br> Dicas e perguntas frequentes.                        |
| ❗ :exclamation :     | "Implementa alertas de eventos importantes" <br> Notificações de erro ou avisos urgentes.             | 💩 :poop :           | "Adiciona emojis de humor para feedback" <br> Feedback divertido em respostas de formulário.       |
| 💀 :skull :          | "Adiciona elementos de terror ao design" <br> Temas de Halloween ou conteúdo assustador em jogos.  | 👻 :ghost :          | "Implementa personagens ou elementos sobrenaturais" <br> Criaturas fantasmagóricas em jogos de aventura.      |
| ⭐ :star :           | "Adiciona sistema de avaliação para usuários" <br> Classificação de produtos ou serviços.                | ✨ :sparkles :       | "Implementa animações especiais para conquistas" <br> Efeitos visuais ao desbloquear conquistas.           |
| 🎉 :tada :           | "Adiciona celebração para eventos de sucesso" <br> Animações de festa ao completar tarefas.             | 🎁 :gift :           | "Adiciona sistema de recompensas ao usuário" <br> Presentes virtuais ou bônus.                          |
| 🎓 :mortar_board :   | "Implementa sistema de aprendizado" <br> Cursos ou tutoriais dentro da aplicação.             | 💿 :cd :             | "Adiciona funcionalidade para armazenamento de mídia" <br> Upload e gerenciamento de arquivos.                  |
| 💻 :computer :       | "Adiciona suporte a múltiplas plataformas" <br> Compatibilidade com dispositivos móveis e desktop.   | 🔒 :lock :           | "Implementa segurança em dados do usuário" <br> Criptografia de informações sensíveis.               |
| 💡 :bulb :           | "Adiciona sugestões de melhorias" <br> Ideias de otimização para o usuário.                 | 🔋 :battery :        | "Adiciona indicadores de desempenho" <br> Monitoramento do uso de bateria em dispositivos.      |
| 🔧 :wrench :         | "Adiciona funcionalidade de configuração" <br> Opções de personalização para o usuário.             | 💣 :bomb :           | "Implementa alertas para ações de alto risco" <br> Confirmação em ações destrutivas.                    |
| 📜 :scroll :         | "Adiciona documentação dentro do aplicativo" <br> Guias e manuais.                                    | 📋 :clipboard :      | "Adiciona funcionalidades de checklist" <br> Listas de tarefas e acompanhamento.                        |
| 📆 :calendar :       | "Implementa sistema de agendamento" <br> Calendário para marcar eventos.                               | 📚 :books :          | "Adiciona biblioteca de recursos" <br> Acesso a materiais de estudo ou leitura.                        |
| 📷 :camera :         | "Adiciona suporte para uploads de imagem" <br> Captura e upload de fotos.                             | 📹 :video_camera :   | "Implementa funcionalidade de gravação de vídeo" <br> Compartilhamento de vídeos.                      |
| ☎️ :phone :          | "Adiciona funcionalidades de chamada" <br> Chamadas de voz ou videochamadas.                          | 📱 :iphone :         | "Otimizando aplicativo para dispositivos móveis" <br> Design responsivo.                             |
| 💾 :floppy_disk :    | "Implementa funcionalidade de salvar" <br> Opção de salvar configurações do usuário.                   | 🔑 :key :            | "Adiciona gerenciamento de permissões" <br> Controle de acesso ao conteúdo.                          |
| ⚡ :zap :            | "Adiciona funcionalidades rápidas" <br> Acesso instantâneo a recursos.                                 | 🎮 :video_game :     | "Implementa jogos no aplicativo" <br> Integração de jogos com a aplicação.                           |
| ☕ :coffee :         | "Adiciona seção de recomendações de cafés" <br> Sugestões de locais para café.                        | 🍎 :apple :          | "Adiciona informações nutricionais" <br> Tabela de calorias e nutrientes.                            |
| 🎨 :art :            | "Adiciona funcionalidades de design" <br> Ferramentas para criação artística.                         | 📝 :memo :           | "Adiciona funcionalidades de anotações" <br> Área para o usuário escrever notas.                     |
| 🚀 :rocket :         | "Implementa melhorias de desempenho" <br> Otimizações para acelerar o aplicativo.                     | 🏠 :house :          | "Adiciona funcionalidades de página inicial" <br> Layout inicial do aplicativo.                       |
| ⚠️ :warning :        | "Adiciona alertas de segurança" <br> Notificações de riscos.                                         | 🚧 :construction :   | "Implementa aviso de manutenção" <br> Mensagens de manutenção do sistema.                             |
| 📍 :round_pushpin : | "Adiciona localização no mapa" <br> Marcação de locais no aplicativo.                                | 📌 :pushpin :        | "Implementa funcionalidades de fixar itens" <br> Fixar itens importantes na interface.               |
| 🆘 :sos :            | "Adiciona botão de emergência" <br> Atalhos para situações urgentes.                                  | 🆔 :id :             | "Implementa gerenciamento de identidade" <br> Sistema de autenticação.                               |
| ♻️ :recycle :        | "Adiciona funcionalidades sustentáveis" <br> Informações sobre reciclagem e sustentabilidade.       | ✔️ :heavy_check_mark : | "Implementa funcionalidades de confirmação" <br> Verificação de ações realizadas.                  |
| ❌ :x :              | "Adiciona sistema de cancelamento" <br> Opção de desfazer ações.                                   | 🔗 :link :           | "Implementa compartilhamento de links" <br> Conexões entre diferentes seções do aplicativo.         |
| ✅ :white_check_mark : | "Implementa confirmação de ações" <br> Mensagens de sucesso ao completar ações.                     | ❎ :negative_squared_cross_mark : | "Adiciona feedback negativo" <br> Avisos de falha em ações.                               |
| ↩️ :leftwards_arrow_with_hook : | "Implementa funcionalidades de voltar" <br> Botão para retornar à página anterior.        | ↪️ :arrow_right_hook : | "Adiciona redirecionamento de páginas" <br> Navegação entre seções.                                 |
| 🔄 :arrows_counterclockwise : | "Implementa funcionalidade de atualização" <br> Atualização de dados na interface.           | 🔁 :repeat :         | "Adiciona funcionalidades de repetição" <br> Repetir ações ou eventos.                              |
| ⬆️ :arrow_up :       | "Implementa scroll para cima" <br> Botão de rolagem para o topo da página.                         | 👀 :eyes :           | "Adiciona opções de visualização" <br> Pré-visualização de conteúdo.                                |
| ☁️ :cloud :          | "Implementa armazenamento em nuvem" <br> Backup de dados na nuvem.                                   | 💄 :lipstick :       | "Adiciona estilo para produtos de beleza" <br> Vitrine de produtos de maquiagem.                     |
| 🍷 :wine_glass :     | "Adiciona recomendações de vinhos" <br> Sugestões de combinações de vinhos.                         | 🗿 :moyai :          | "Implementa elementos de cultura" <br> Informações sobre arte e cultura.                             |
| 🚹 :mens :           | "Adiciona seção para produtos masculinos" <br> Catálogo de produtos voltados para homens.             | 🚺 :womens :         | "Adiciona seção para produtos femininos" <br> Catálogo de produtos voltados para mulheres.           |

</details>

--------------------------------------------------------------------- <br><br>

> // FORMATAÇÃO
<details>
><summary>Clique aqui para ver a tabela de emojis!</summary>
	
### FORMATAÇÃO PASSO A PASSO - CÓDIGOS NO CMD: 

> SCRIPT
<pre>

Como usar o script:
Abra o Bloco de Notas e cole o código acima.
Salve o arquivo como manutencao_windows.bat (use Salvar como e selecione "Todos os arquivos" para adicionar a extensão .bat).
Clique com o botão direito no arquivo e escolha Executar como Administrador.
	
@echo off
title Manutenção do Windows
echo Iniciando a otimização do desempenho do Windows...

:: Limpando arquivos temporários
echo Limpando arquivos temporários...
rd /s /q "%temp%"
rd /s /q "%windir%\temp"
rd /s /q "%windir%\prefetch"
echo Arquivos temporários limpos.

:: Limpando arquivos antigos do Windows Update
echo Limpando arquivos antigos do Windows Update...
rd /s /q "C:\Windows\SoftwareDistribution\Download"
echo Arquivos do Windows Update limpos.

:: Executando verificação e reparação de arquivos do sistema
echo Executando verificação do sistema...
sfc /scannow
echo Verificação do sistema concluída.

echo Executando DISM para manutenção da imagem...
dism /online /cleanup-image /restorehealth
echo Manutenção da imagem concluída.

:: Resetando Winsock
echo Resetando Winsock...
netsh winsock reset
echo Winsock resetado.

:: Verificando e corrigindo erros no disco
echo Verificando e corrigindo erros no disco...
chkdsk c: /f /r
echo Verificação do disco concluída.

:: Ativando o esquema de energia de desempenho máximo
echo Ativando plano de energia de desempenho máximo...
powercfg -duplicatescheme e9a42b02-d5df-448d-aa00-03f14749eb61
echo Esquema de energia ativado.

:: Desativando a hibernação
echo Desativando hibernação...
powercfg /hibernate off
echo Hibernação desativada.

:: Abrindo ferramentas úteis
echo Abrindo pastas e ferramentas úteis para otimizar o desempenho do Windows...
start "" "%temp%"
echo Abra a pasta de arquivos temporários e exclua os arquivos desnecessários.

start "" "%windir%\temp"
echo Abra a pasta de arquivos temporários do sistema e exclua os arquivos desnecessários.

start "" "%windir%\prefetch"
echo Abra a pasta de prefetch e exclua os arquivos desnecessários.

start cleanmgr
echo Executando a Limpeza de Disco.

start dfrgui
echo Abrindo Desfragmentar e Otimizar Unidades.

start msconfig
echo Abrindo Configuração do Sistema para gerenciar programas de inicialização.

start cmd /k "chkdsk"
echo Abra o Prompt de Comando para verificar e corrigir erros no disco.

start perfmon
echo Abrindo o Monitor de Desempenho.

start powercfg.cpl
echo Abrindo opções de energia para ajustes de desempenho.

start devmgmt.msc
echo Abrindo Gerenciador de Dispositivos para gerenciar drivers.

echo Todos os comandos foram executados com sucesso.
pause

</pre>

### COMO GERENCIAR UM HD DESATIVADO NO WINDOWS

<pre>
1. Abrir o Gerenciamento do Computador
    Acesso ao Gerenciamento do Computador:
    Pressione Win + X ou clique com o botão direito no menu Iniciar.
    Selecione Gerenciamento do Computador.

2. Navegar até o Gerenciamento de Disco
    Localizar o Gerenciamento de Disco:
    No painel à esquerda, clique em Gerenciamento de Disco sob a seção Armazenamento.

3. Identificar o HD Desativado
    Localizar o HD:
    Na seção de Gerenciamento de Disco, você verá uma lista de discos conectados ao computador.
    Um HD desativado geralmente aparecerá como "Não alocado" ou "Desativado" (com uma barra preta).
</pre>

### SCRIPT PARA DELETAR PASTAS NÃO DELETÁVEIS

> Abra o Bloco de Notas, Cole o seguinte conteúdo no arquivo, Salva e nomeie o arquivo como remover_imagens.reg e escolha o tipo como Todos os Arquivos.

<pre>
Windows Registry Editor Version 5.00

[-HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\MyComputer\NameSpace\{1CF1260C-4DD0-4ebb-811F-33C572699FDE}]
[-HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\MyComputer\NameSpace\{088e3905-0323-4b02-9826-5d99428e115f}]
[-HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\MyComputer\NameSpace\{24ad3ad4-a569-4530-98e1-ab02f9417aa8}]
[-HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\MyComputer\NameSpace\{3ADD1653-EB32-4cb0-BBD7-DFA0ABB5ACCA}]
[-HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\MyComputer\NameSpace\{A0953C92-50DC-43bf-BE83-3742FED03C9C}]
</pre>
</details>

--------------------------------------------------------------------- <br><br>

> // README PROJETOS
<details>
><summary>Clique aqui para ver README de projetos!</summary>

<pre>
   ESCREVA UM README DESENVOLVENDO TODA ESTRUTURA EM MARKDOWN ESCREVA ELE NESSE PADRÃO => 
# < título para aplicação >

## 💻 Descrição do projeto

[DESENVOLVA AQUI UMA DESCRIÇÃO DO PROJETO COM OBJETIVOS PROPOSTOS.]

> **Colaboração:** Not found  
> **Status:** <'span> Concluído  ✔️ ❌

IF(PRÉVIA)
	<'div align="center">
  		<'p> 👀 Prévia 
  		<'img src="./assets/imagens/previa-project.png" alt="Prévia do projeto">
	

## 📜 Índice

- [Descrição](#-descrição-do-projeto)
- [Conceitos Aprendidos](#-conceitos-aprendidos)
- [Tecnologias Utilizadas](#--tecnologias-utilizadas)
- [Instalação](#-instalação)
- [Uso](#-uso)
- [Funcionalidades](#-funcionalidades)
- [Pendências](#-pendências)
- [Contribuição](#-contribuição)
- [Informações Adicionais](#-informações-adicionais)
- [Licença](#-licença)
- [Conclusão](#-conclusão)


## ✅ Conceitos Aprendidos 

- LISTE AQUI CONCEITOS SOBRE O TEMA E INFORMAÇÕES DO PROJETO
- LISTE AQUI CONCEITOS SOBRE O TEMA E INFORMAÇÕES DO PROJETO
- LISTE AQUI CONCEITOS SOBRE O TEMA E INFORMAÇÕES DO PROJETO
- LISTE AQUI CONCEITOS SOBRE O TEMA E INFORMAÇÕES DO PROJETO
- LISTE AQUI CONCEITOS SOBRE O TEMA E INFORMAÇÕES DO PROJETO


## 🛠 Tecnologias Utilizadas

![image](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![image](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![image](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![image](https://img.shields.io/badge/Figma-666666?style=for-the-badge&logo=figma&logoColor=white)

## ⚙ Instalação

[NÃO UTILIZAR ESTRUTURA '''bash AQUI, GARANTIR SER USADO <*PRE>]

Para começar a usar este projeto, siga as etapas abaixo:

1. Faça um fork do repositório:
   <*pre>git fork https://github.com/IgoRenatoo/NOME_DO_PROJETO.git

2. Clone o seu fork para sua máquina:
   <*pre>git clone https://github.com/IgoRenatoo/NOME_DO_PROJETO.git

3. Acesse o diretório do projeto:
   <*pre>cd NOME_DO_PROJETO

4. Acesse a pasta do projeto:
   <*pre>cd NOME_DA_PASTA

5. Instale as dependências:
   <*pre>npm install

## 🚀 Uso 

DESENVOLVA COMO USAR O PROJETO EXEMPLO DE MODELO =
(1. Execute o comando `npm run dev no terminal de sua preferência.
 2. Utilize um cliente HTTP (como Postman ou Insomnia) para interagir com as rotas disponíveis:

    Para usar o projeto, você pode acessar os seguintes endpoints:
    > `GET /ENDPOINT` - DESCRIÇÃO DO RETORNO

    > `GET /ENDPOINT` - DESCRIÇÃO DO RETORNO

    > `GET /ENDPOINT` - DESCRIÇÃO DO RETORNO)


## 🧩 Funcionalidades

UTILIZE <*PRE> PARA GARANTIR QUE SEJA ESCRITO TODO CÓDIGO EM MARKDOWN
FAZER ESSA PARTE E O RESTANTE EM MARKDOWN, GARANTIR QUE SEJA ESCRITO EM MARKDOWN

AS FUNCIONALIDADES EU QUERO NESSE MODELO DE EXEMPLO COM BASE NAS INFORMAÇÕES DO PROJETO
1. **exemplo1()**
   - descrição da função

2. **exemplo2()**
   - descrição da função

3. **exemplo3()**
   - descrição da função

## ⏳ Pendências

SE OBSERVAÇÕES ESTIVER = NA, ESCREVA UM TEXTO DESCREVENDO QUE ATUALMENTE O CÓDIGO ESTÁ COMPLETO.
OBSERVAÇÃO = NA

## 🤝 Contribuição (UTILIZE ESSE MODELO DE CONTRIBUIÇÃO, DE LISTAS)

Contribuições são bem-vindas! Se você deseja contribuir com este projeto, siga as etapas abaixo:

1. Faça um fork deste repositório.
2. Clone o seu fork para sua maquína ( `git clone https://github.com/seu_usuário/nome_do_repositório` ).
3. Crie uma branch para sua feature ou correção de bug ( `git checkout -b ` ).
4. Commit suas alterações ( `git commit -m 'Mensagem desejada'` ).
5. Push para a branch ( `git push origin ` ).
6. Abra um Pull Request.
7. Aguarde à análise.


## 💡 Informações adicionais

- LISTE AQUI INFORMAÇÕES QUE NÃO CABE NOS CAMPOS ACIMA
- LISTE AQUI INFORMAÇÕES QUE NÃO CABE NOS CAMPOS ACIMA
- LISTE AQUI INFORMAÇÕES QUE NÃO CABE NOS CAMPOS ACIMA
- LISTE AQUI INFORMAÇÕES QUE NÃO CABE NOS CAMPOS ACIMA

## 🔓 Licença

Este projeto está licenciado sob a Licença MIT.

## 🏁 CONCLUSÃO

Desenvolva uma conclusão para o projeto dos conceitos aprendidos, o que foi utilizado e informações mais relevantes.


< Desenvolva uma frase engraçada aleatoria breve sobre programação apenas com um emoji na frente que tem a ver com a frase > 


Acervo para usar em tecnologias utilizadas (
https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black
https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white
https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E
https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white
https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white
https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white
https://img.shields.io/badge/Python-14354C?style=for-the-badge&logo=python&logoColor=white
https://img.shields.io/badge/Express.js-404D59?style=for-the-badge
https://img.shields.io/badge/Figma-666666?style=for-the-badge&logo=figma&logoColor=white
https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white
https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white
https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white
https://img.shields.io/badge/MariaDB-01529E?style=for-the-badge&logo=mariadb&logoColor=white
https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white
https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white
https://img.shields.io/badge/Git-E34F26?style=for-the-badge&logo=git&logoColor=white
https://img.shields.io/badge/Windows-017AD7?style=for-the-badge&logo=windows&logoColor=white
https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white
https://img.shields.io/badge/Dotenv-666666?style=for-the-badge&logo=Dotenv&logoColor=white
)

GARANTA QUE TODA ESTRUTURA SEJA DESENVOLVIDA NA ESTRUTURA MARKDOWN, ESSES SÃO OS PARÂMETROS PARA SER USADO COMO DADOS:


'</pre>
</details>

--------------------------------------------------------------------- <br><br>

> // README CURSOS
<details>
><summary>Clique aqui para ver README de projetos!</summary>

<pre>
ESCREVA UM README DESENVOLVENDO TODA ESTRUTURA EM MARKDOWN ESCREVA ELE NESSE PADRÃO => 

# 🎓 Certificado - Formação [Nome da Formação]

<'p align="center">
  <'img alt="Certificado do Curso" src="[URL da Imagem do Certificado]" width="400px" height="280px">
</'p>

## 💻 Descrição do curso

DESENVOLVA A DESCRIÇÃO DO CURSO COM BASE NAS INFORMAÇÕES IMPORTANTES INFORMADAS

> **Colaboração:** Not found  
> **Status:** <span> Concluído </span> ✔️

## 📜 Índice

- [Descrição](#-descrição-do-projeto)
- [Conceitos Aprendidos](#-conceitos-aprendidos)
- [Tecnologias Utilizadas](#--tecnologias-utilizadas)
- [Projetos Práticos](#-projetos-práticos)
- [Conteúdo do Curso](#-conteúdo-do-curso)
- [Conclusão](#-conclusão)
- [Informações Adicionais](#-informações-adicionais)
- [Licença](#-licença)

## ✅ Conceitos Aprendidos 

- [Lista de conceitos aprendidos durante o curso ou projeto.]

## 🛠 Tecnologias Utilizadas

![image](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![image](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![image](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![image](https://img.shields.io/badge/[Tecnologia]-[Cor]?style=for-the-badge&logo=[Logo]&logoColor=white)

## 🏗 Projetos Práticos

Durante o curso, foram realizados vários projetos práticos para aplicar o conhecimento adquirido:

- **[Nome do Projeto 1]**: [Descrição do projeto].
  - Link de acesso ~> <a target="_blank" href="[URL do Projeto 1]">🔗 Click aqui!</a>

- **[Nome do Projeto 2]**: [Descrição do projeto].
  - Link de acesso ~> <a target="_blank" href="[URL do Projeto 2]">🔗 Click aqui!</a>

- **[Nome do Projeto 3]**: [Descrição do projeto].
  - Link de acesso ~> <a target="_blank" href="[URL do Projeto 3]">🔗 Click aqui!</a>

## 👨‍💻 Conteúdo do Curso

DESENVOLVA AQUI UM CRONOGRAMA DO CURSO COM BASE NAS INFORMAÇÕES OBTIDAS

## 💡 Informações adicionais

- LISTE AQUI INFORMAÇÕES QUE NÃO CABE NOS CAMPOS ACIMA
- LISTE AQUI INFORMAÇÕES QUE NÃO CABE NOS CAMPOS ACIMA
- LISTE AQUI INFORMAÇÕES QUE NÃO CABE NOS CAMPOS ACIMA
- LISTE AQUI INFORMAÇÕES QUE NÃO CABE NOS CAMPOS ACIMA

## 🔓 Licença

Este projeto está licenciado sob a Licença [Nome da Licença].

## 🏁 CONCLUSÃO

[Resumo da experiência adquirida, conceitos aprendidos e a importância do curso/projeto.]

< Desenvolva uma frase engraçada aleatoria breve sobre programação apenas com um emoji na frente que tem a ver com a frase > 

Acervo para usar em tecnologias utilizadas (
https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black
https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white
https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E
https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white
https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white
https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white
https://img.shields.io/badge/Python-14354C?style=for-the-badge&logo=python&logoColor=white
https://img.shields.io/badge/Express.js-404D59?style=for-the-badge
https://img.shields.io/badge/Figma-666666?style=for-the-badge&logo=figma&logoColor=white
https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white
https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white
https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white
https://img.shields.io/badge/MariaDB-01529E?style=for-the-badge&logo=mariadb&logoColor=white
https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white
https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white
https://img.shields.io/badge/Git-E34F26?style=for-the-badge&logo=git&logoColor=white
https://img.shields.io/badge/Windows-017AD7?style=for-the-badge&logo=windows&logoColor=white
https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white
https://img.shields.io/badge/Dotenv-666666?style=for-the-badge&logo=Dotenv&logoColor=white
)

GARANTA QUE TODA ESTRUTURA SEJA DESENVOLVIDA NA ESTRUTURA MARKDOWN, ESSES SÃO OS PARÂMETROS PARA SER USADO COMO DADOS:


</pre>
</details>

--------------------------------------------------------------------- <br><br>

> // ?
><summary>Clique aqui para ver a tabela de emojis!</summary>
<details>
  <pre>gthb
    7ca10-748f5 a9308-8c6f8
    2a9a7-226eb 70662-0854c
    881e3-67e65 a1848-00a3c
    e0d6f-3ead5 17818-5eedc
    94e68-d4a1d c042f-86265
    838e0-13d15 883b2-c0499
    6d887-cc36b 518a8-f97b3
    344a4-b15cc d21b2-18a91      
    ----------------------------
    pstma
    c683 84d9 1daa
    e337 83aa f903
    bd95 34ff 1686
    278a dd3a 21f1
    847d af19 ba79
    e7b2 ad4f 5d52
    e679 9cf1 aa3b
    f187 69ea 75e1
    7807 8581 4289
    288c 8319 f766
  </pre>
</details>

------------------------------------------------------------
