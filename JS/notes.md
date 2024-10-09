><summary>CONFIGURAÇÃO DO TYPESCRIPT - NPX TSC -INIT</summary>
<details>
<pre>{
  "compilerOptions": {
    "target": "ES2023", // Qual padrão/boas práticas será seguido ao executar a transpilação.
    "module": "CommonJS", // Facilitar a compatibilidade da aplicações com navegadores mais antigos.
    "outDir": "./dist", // Especifica aonda ficará os arquivos após serem compilados.
    "strict": true, // Verifica todas as variáveis e seus tipos.
    "esModuleInterop": true, // Suporta importação em type module para compilar em CommonJS.
  }
}</pre>
</details>

------------------------------------------------------------

>// EXTENSÕES
<details>
<pre>{
attilabuti.mustache-syntax-vscode
dbaeumer.vscode-eslint
editorconfig.editorconfig
esbenp.prettier-vscode
formulahendry.auto-close-tag
formulahendry.auto-complete-tag
formulahendry.auto-rename-tag
miguelsolorio.min-theme
miguelsolorio.symbols
ms-python.debugpy
ms-python.python
ms-python.vscode-pylance
ms-vscode.live-server
mtxr.sqltools
naumovs.color-highlight
ritwickdey.liveserver
softwaredotcom.swdc-vscode
steoates.autoimport
visualstudioexptteam.vscodeintellicode
vscjava.vscode-java-debug
}</pre>
</details>

------------------------------------------------------------

>// WORKBENCH
<details>
   <pre>
   # Edição do arquivo .bash em c:/users/user/.bashrc
function set_current_dir() {
    # Obtém o diretório atual e remove o caminho até o diretório desejado
    CURRENT_DIR=$(pwd | sed 's|.*/Projects/||')  # Remove tudo até o diretório 'Projects'
}

   #Atualiza CURRENT_DIR sempre que um novo comando é executado
PROMPT_COMMAND=set_current_dir

   #Configuração do prompt
PS1='\[\e[32m\]\h \[\e[38;5;63m\]$CURRENT_DIR$\n\[\e[0m\]\$ '</pre>


  {// Workbench
      "workbench.iconTheme": "symbols",  // Define o tema de ícones como "symbols".
      "workbench.startupEditor": "newUntitledFile",  // Abre um arquivo em branco ao iniciar o VSCode.
      "workbench.editor.labelFormat": "short",  // Mostra o nome curto dos arquivos abertos nas abas.
      "workbench.statusBar.visible": false, // Oculta a barra de status.
      "workbench.tree.enableStickyScroll": false, // Desativa a rolagem fixa em árvores (explorer).
      "workbench.colorTheme": "Min Dark", // Define o tema de cores como "Min Dark".
      "workbench.activityBar.location": "top", // Define a localização da barra de atividades no topo.
      "workbench.editor.empty.hint": "hidden", // Oculta dicas quando o editor está vazio.
      "workbench.tree.renderIndentGuides": "always", // Sempre exibe guias de indentação.
      "workbench.tips.enabled": false, // Desativa dicas na inicialização.      
      "workbench.colorCustomizations": {
        // Terminal
        "terminal.background": "#000000", // Cor de fundo do terminal.
        "terminal.foreground": "#ffffff", // Cor do texto no terminal.
        "terminalCursor.foreground": "#00FF00", // Cor do cursor no terminal.
        "terminalStickyScroll.border": "#FF0000",  // Cor vermelha para a borda superior do terminal.
        "scrollbarSlider.background": "#00FF00" , // Cor do scrollbar
        "scrollbarSlider.hoverBackground": "#00ff0083", // Cor do scrollbar ao passar o mouse
        "scrollbarSlider.activeBackground": "#00ff002e", // Cor do scrollbar quando ativo
        "scrollbarSlider.horizontal.background": "#00FF00", // Cor do scrollbar horizontal
        "scrollbarSlider.horizontal.hoverBackground": "#00FF00", // Cor do scrollbar horizontal ao passar o mouse
        "scrollbarSlider.horizontal.activeBackground": "#8A8A8A", // Cor do scrollbar horizontal quando ativo        
        // Sidebar - Barra lateral
        "sideBar.background": "#000000", // Cor de fundo da barra lateral.
        "sideBar.foreground": "#6446aa", // Cor do texto da barra lateral dos itens
        "sideBarSectionHeader.border": "#231739",
        "sideBarSectionHeader.foreground": "#00FF00",
        "sideBarSectionHeader.background": "#231739",
        "button.background": "#231739",  // Fundo dos botões no estado normal.
        "button.foreground": "#00FF00",  // Cor do texto/ícone dos botões.
        "button.hoverBackground": "#6446aa" ,  // Fundo dos botões ao passar o mouse (hover).
        "activityBarBadge.background": "#FF0000",  // Cor de fundo do badge de notificações.
        "activityBarBadge.foreground": "#FFFFFF",  // Cor do texto do badge.
        "activityBarTop.foreground": "#00FF00",  // Cor dos ícones da barra lateral.
        "sideBarTitle.foreground": "#00FF00", // Cor do texto da barra lateral dos títulos
        "sideBar.border": "#231739", // Cor da borda da barra lateral.
        "list.activeSelectionBackground": "#231739", // Cor de fundo da seleção ativa em listas.
        "list.inactiveSelectionBackground": "#231739", // Cor de fundo da seleção inativa em listas.
        "list.focusBackground": "#231739", // Cor de fundo do foco em listas.
        "list.hoverBackground": "#231739", // Cor de fundo ao passar o mouse em listas.
        "list.activeSelectionBorder": "#231739",  // Borda da seleção ativa na barra lateral (Explorer).
        "list.inactiveSelectionForeground": "#00FF00", // Altera a cor do texto da seleção inativa
        "list.focusBorder": "#231739",  // Borda ao focar no item selecionado.
        "list.foreground": "#FFFFFF", // Altera a cor do texto dos arquivos ao selecionar
        "tree.indentGuidesStroke": "#6446aa", // Cor das guias de indentação na árvore lateral.
        "gitDecoration.modifiedResourceForeground": "#9f9fff", // Cor para arquivos modificados no Git.
        "gitDecoration.untrackedResourceForeground": "#9f9fff", // Cor para arquivos não rastreados no Git.
        "gitDecoration.ignoredResourceForeground":  "#ffffff40", // Cor para arquivos ignorados no Git.
        // Title bar - Canto superior direito
        "titleBar.activeBackground": "#000000", // Cor de fundo da barra de título quando ativa.
        "titleBar.activeForeground": "#000000", // Cor do texto da barra de título quando ativa.
        "titleBar.inactiveBackground": "#000000", // Cor de fundo da barra de título quando inativa.
        "titleBar.inactiveForeground": "#000000", // Cor do texto da barra de título quando inativa.
        // Abas de navegação
        "tab.activeBackground": "#6446aa", // Cor de fundo da aba ativa (vermelho).
        "tab.activeForeground": "#FFFFFF", // Cor do texto da aba ativa (branco).
        "tab.inactiveBackground": "#231739", // Cor de fundo das abas inativas.
        "tab.inactiveForeground": "#FFFFFF", // Cor do texto das abas inativas.
        // Ambiente desenvolvimento
        "scrollbar.shadow": "#6446aa", // Cor da linha no topo do desenvolvimento
        "editor.background": "#000000", // Cor de fundo do editor.
        "editorLineNumber.foreground": "#00FF00", // Cor do número da linha.
        "editor.foreground": "#ffffff", // Cor do texto no editor (branco).
        "editorIndentGuide.background1": "#231739", // Cor da linha de indentação.
        "editorIndentGuide.activeBackground1": "#00FF00", // Cor da linha de indentação ativa.
        "editorRuler.foreground": "#231739",  // Cor vermelha para as réguas nas colunas 100 e 120.
        "DeditorCursor.foreground": "#00FF00", // Cor do cursor no editor.        
      },
      // Editor
      "editor.scrollbar.horizontal": "hidden", // Esconde a barra de rolagem horizontal
      "editor.cursorBlinking": "solid", // Define o cursor para piscar em um padrão sólido.
      "editor.hover.sticky": false, // Desativa o comportamento "sticky" do hover.
      "editor.stickyScroll.enabled": false, // Desativa a rolagem fixa.
      "editor.fontFamily": "JetBrains Mono", // Define a fonte usada no editor.
      "editor.fontSize": 14, // Define o tamanho da fonte no editor.
      "editor.lineHeight": 1.8, // Define a altura das linhas no editor.
      "editor.letterSpacing": 0.1, // Define o espaçamento entre letras no editor.
      "editor.wordWrap": "on", // Habilita a quebra automática de linhas.
      "editor.wordWrapColumn": 110, // Define o limite da quebra de linha na coluna 110.
      "editor.rulers": [100, 120], // Adiciona réguas visuais nas colunas 100 e 120.
      "editor.renderLineHighlight": "gutter", // Destaca a linha atual na "gutter" (margem esquerda).
      "editor.semanticHighlighting.enabled": false, // Desativa realce semântico no código.
      "editor.minimap.enabled": false, // Oculta o minimapa no editor.
      "editor.tabSize": 2, // Define o tamanho da tabulação como 2 espaços.
      "editor.fontLigatures": true, // Habilita ligaduras de fonte.
      "editor.defaultFormatter": "esbenp.prettier-vscode", // Define Prettier como formatador padrão.
      "editor.suggestSelection": "first", // Seleciona a primeira sugestão ao abrir o menu de sugestões.
      "javascript.suggest.autoImports": true, // Habilita auto-importações para JavaScript.
      "javascript.updateImportsOnFileMove.enabled": "always", // Atualiza importações ao mover arquivos JS.
      "typescript.suggest.autoImports": true, // Habilita auto-importações para TypeScript.
      "typescript.updateImportsOnFileMove.enabled": "always", // Atualiza importações ao mover arquivos TypeScript.
      "editor.tokenColorCustomizations": { // Personalização de cores dos tokens.
          "textMateRules": [
              {
                  "scope": "entity.name.tag", // Cor das tags HTML.
                  "settings": {
                      "foreground": "#8d8df7" // Define a cor das tags como roxo claro.
                  }
              } 
          ]
      },
      // Terminal
      "terminal.integrated.defaultProfile.windows": "Git Bash", // Define o Git Bash como terminal padrão no Windows.
      "terminal.integrated.fontSize": 16, // Define o tamanho da fonte no terminal.
      "terminal.integrated.fontFamily": "JetBrains Mono", // Define a fonte do terminal.
      "terminal.integrated.letterSpacing": 1, // Define o espaçamento entre letras no terminal.
      "terminal.integrated.lineHeight": 1.5, // Define a altura da linha no terminal.
      "terminal.integrated.gpuAcceleration": "on", // Habilita aceleração de GPU no terminal integrado.
      // Prettier
      "prettier.enable": true, // Ativa o Prettier para formatação de código.
      "prettier.singleQuote": false, // Usa aspas duplas em vez de simples.
      "prettier.tabWidth": 2, // Define a largura da tabulação como 2 espaços no Prettier.
      "prettier.semi": true, // Adiciona ponto e vírgula ao final das linhas no Prettier.
      // Variados
      "breadcrumbs.enabled": false, // Desativa breadcrumbs de navegação no editor.
      "chat.editor.wordWrap": "on", // Habilita quebra de linha no chat do editor.
      "explorer.confirmDelete": false, // Desativa confirmação ao excluir arquivos no explorador.
      "explorer.compactFolders": false, // Desativa a exibição compacta de pastas.
      "explorer.confirmDragAndDrop": false, // Desativa confirmação ao arrastar e soltar arquivos.
      "explorer.fileNesting.patterns": { // Agrupa arquivos relacionados ao "package.json".
          "package.json": "package-lock*, tsconfi*, yarn.lock, pnpm-lock.yaml, bun.lockb"
      },
      "files.autoSave": "afterDelay", // Salva automaticamente após um pequeno atraso.
      "files.autoSaveDelay": 0, // Define o atraso para salvamento automático como 0 ms.
      "files.insertFinalNewline": true, // Insere nova linha ao final dos arquivos.
      "diffEditor.wordWrap": "on", // Habilita quebra de linha no editor de comparação de diferenças.
      "symbols.folders.associations": { // Associa pastas a ícones específicos.
          "pages": "folder-assets" // Associa a pasta "pages" ao ícone de "folder-assets".
      },
      "window.titleBarStyle": "native", // Define o estilo da barra de título como nativo.
      "window.zoomLevel": -0.5, // Define o nível de zoom da janela.
      "window.commandCenter": false, // Desativa o centro de comandos na janela.
      "window.customTitleBarVisibility": "never", // Define a visibilidade da barra de título como nunca.
      "explorer.sortOrder": "type" // Define a ordem de exibição como padrão</pre>
  }
</details>

------------------------------------------------------------

>// ?
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

><summary>EMOJIS</summary>
<details>
<pre>People
😄 :smile:                😍 :heart_eyes:	         😘 :kissing_heart:
😆 :satisfied:	          😉 :wink:                😴 :sleeping:
😕 :confused:             😑 :expressionless:      😭 :sob:
😅 :sweat_smile:  	      😢 :cry:                 😎 :sunglasses:
😂 :joy:        		      😡 :rage:	               😐 :neutral_face:
👿 :imp:                  😈 :smiling_imp:         👽 :alien:
💤 :zzz:                  ❤️ :heart:	             ✨ :sparkles:
⭐ :star:                 💫 :dizzy:               💥 :boom:
❗  :exclamation:           ❓ :question:            💨 :dash:
👏 :clap:                 👍 :+1:                  👎 :-1:
👊 :punch:                🙏 :pray:                🔥 :fire:
💀 :skull:                💩 :poop:                👀 :eyes:
Nature
☀️ :sunny:		            ☁️ :cloud:              ❄️ :snowflake:
⚡  :zap:                  🐛 :bug:		            🌐 :globe_with_meridians:
Objects
🎓 :mortar_board:         🎏 :flags:              🎆 :fireworks:
🎇 :sparkler:             👻 :ghost:              🎁 :gift:
🎉 :tada:                 💿 :cd:	                📀 :dvd:
💾 :floppy_disk:          📷 :camera:	            📹 :video_camera:
💻 :computer:             📺 :tv:                 📱 :iphone:
☎️ :phone:                📟 :pager:		          🔉 :sound:
🔈 :speaker:               ⌚ :watch:	            📻 :radio:
🔒 :lock:                 🔑 :key:                 💡 :bulb:
🔆 :high_brightness:      🔋 :battery:             📧 :email:
🔧 :wrench:               🔨 :hammer:             💺 :seat:
💰 :moneybag:             💵 :dollar:             💳 :credit_card:
💸 :money_with_wings:     ✉️ :envelope:           🚪 :door:
🚬 :smoking:              💣 :bomb:               🔫 :gun:
🔪 :hocho:                💊 :pill:               📄 :page_facing_up:
📊 :bar_chart:            📜 :scroll:             📋 :clipboard:
📆 :calendar:             📅 :date:               📁 :file_folder:
📌 :pushpin:              📒 :ledger:             📚 :books:
🔖 :bookmark:             🏆 :trophy:             🎮 :video_game:
🎲 :game_die:             🎯 :dart:               🎬 :clapper:
📝 :memo:                 📖 :book:               🎨 :art:
🎤 :microphone:           🎧 :headphones:         💄 :lipstick:
☕ :coffee:               🍎 :apple:              🍆 :eggplant:
🍅 :tomato:               🌽 :corn:               🔮 :crystal_ball:
Places 
🏠 :house:                🏫 :school:             🏢 :office:
🌈 :rainbow:              🚀 :rocket:             ✈️ :airplane:
🚁 :helicopter:            ⚠️ :warning:            🚧 :construction:
🍷 :wine_glass:             🗿 :moyai:             🎭 :performing_arts: 📍 :round_pushpin:
Symbols
🚹 :mens:                 🚺 :womens:             🚼 :baby_symbol:
🆘 :sos:                  🆔 :id:                 ♻️ :recycle:
✔️ :heavy_check_mark:     ❌ :x:	                 🔗 :link:
✅ :white_check_mark:	   ❎ :negative_squared_cross_mark:
↩️ :leftwards_arrow_with_hook: ↪️ :arrow_right_hook:
🔄 :arrows_counterclockwise    🔁 :repeat:     ⬆️ :arrow_up:
🧠 
</pre>

</details>


------------------------------------------------------------

><summary>FORMATAÇÃO</summary>
<details>
FORMATAÇÃO - PASSO A PASSO
CÓDIGOS NO CMD: 

sfc /scannow

dism /online /cleanup-image /restorehealth

netsh winsock reset

chkdsk c: /f /r

powercfg -duplicatescheme e9a42b02-d5df-448d-aa00-03f14749eb61

powercfg.exe /hibernate off

LUPA - PAINEL DE CONTROLE - EXIBIR ICONES GRANDES - CONTAS DE USUÁRIOS - ALTERAR CONFIG DE CONTROLE - DIMINUIR TUDO PARA NÃO APARECER NOTIFICAÇÃO DE AUTORIZAÇÃO

GERENCIAMENTO DO COMPUTADOR PARA ALOCAR HD DESATIVADO.

MEU COMPUTADOR - LIMPEZA DE DISCO - LIMPAR ARQUIVO DOS SISTEMAS - MAIS OPÇÕES - LIMPAR SOMBRA

CONFIGURAÇÕES - SOBRE - CONFIGURAÇÕES AVANÇADAS DO SISTEMA - PROTEÇÃO DO SISTEMA - DESATIVAR

C:\Windows\SoftwareDistribution\Download - DELETAR ARQUIVOS TEMPORARIOS

----------------------------------------------------

win r - regedit 
deletar images do meu computador - Computador\HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\MyComputer\NameSpace\{1CF1260C-4DD0-4ebb-811F-33C572699FDE}
deletar onedrive do meu computador - Computador\HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\MyComputer\NameSpace\{088e3905-0323-4b02-9826-5d99428e115f}
deletar grupo doméstico do meu computador - Computador\HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\MyComputer\NameSpace\{24ad3ad4-a569-4530-98e1-ab02f9417aa8}
deletar music do meu computador - Computador\HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\MyComputer\NameSpace\{3ADD1653-EB32-4cb0-BBD7-DFA0ABB5ACCA}
deletar videos do meu computador - Computador\HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\MyComputer\NameSpace\{A0953C92-50DC-43bf-BE83-3742FED03C9C}

CTRL+SHIFT+P = Open user SETTING JSON => 

Limpeza geral de máquina através de Win + R:

Usar o atalho Win + R é uma forma rápida de acessar diversas ferramentas e comandos no Windows que podem ajudar a melhorar o desempenho do seu computador. Aqui estão alguns comandos úteis:

1. Limpar arquivos temporários:
   - Comando: temp
   - Abre a pasta de arquivos temporários. Você pode deletar todos os arquivos dessa pasta.

2. Limpar arquivos temporários do sistema:
   - Comando: %temp%
   - Abre a pasta de arquivos temporários específicos do seu perfil de usuário. Você também pode deletar esses arquivos.

3. Limpar arquivos temporários do Windows:
   - Comando: prefetch
   - Abre a pasta onde o Windows armazena arquivos temporários usados para iniciar programas mais rapidamente. Você pode deletar esses arquivos, mas a pasta deve permanecer.

4. Executar a Limpeza de Disco:
   - Comando: cleanmgr
   - Abre a ferramenta de Limpeza de Disco, que permite deletar arquivos desnecessários e liberar espaço em disco.

5. Desfragmentar e Otimizar Unidades:
   - Comando: dfrgui
   - Abre a ferramenta de Desfragmentação e Otimização de Unidades, que pode melhorar a performance do disco rígido.

6. Gerenciar programas de inicialização:
   - Comando: msconfig
   - Abre a Configuração do Sistema. Na aba "Inicialização de Programas", você pode desativar programas que não são necessários ao iniciar o Windows.

7. Verificar e corrigir erros no disco:
   - Comando: chkdsk
   - Abre a ferramenta de verificação de disco. Pode ser necessário reiniciar o computador para a verificação completa.

8. Monitorar o desempenho e recursos do sistema:
   - Comando: perfmon
   - Abre o Monitor de Desempenho do Windows, que permite monitorar o uso de CPU, memória, disco e rede.

9. Gerenciar as políticas de energia:
   - Comando: powercfg.cpl
   - Abre as opções de energia, onde você pode ajustar as configurações para desempenho máximo.

10. Gerenciar drivers de dispositivo:
    - Comando: devmgmt.msc
    - Abre o Gerenciador de Dispositivos, onde você pode atualizar, desativar ou desinstalar drivers que podem estar causando lentidão.
</details>
