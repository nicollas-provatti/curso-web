# 📘 Aula 10 - Formulários

---

## 🔵 Introdução

### 🔹 O que são formulários ?
Um formulário em HTML é um conjunto de campos (inputs, botões, seletores, áreas de texto etc.) que permitem ao usuário **inserir dados** em uma página da web.
Eles são definidos pela tag `<form>` e podem conter diferentes tipos de elementos para coleta de informações.

**Exemplo básico:**
```html
<form>
  <label for="nome">Nome:</label>
  <input type="text" id="nome" name="nome">

  <label for="email">E-mail:</label>
  <input type="email" id="email" name="email">

  <button type="submit">Enviar</button>
</form>
```

### 🔹 Importância dos formulários na Web
Os formulários são fundamentais porque permitem a **interação real entre o usuário e o site**.
Sem formulários, páginas seriam apenas estáticas, sem receber informações do visitante.

Eles são usados em diversos contextos, como:

- 🔑 **Autenticação**: login e cadastro de usuários.

- 📩 **Comunicação**: envio de mensagens via formulário de contato.

- 🛒 **Comércio** eletrônico: carrinho de compras e finalização de pedidos.

- 📊 **Coleta de dados**: pesquisas, questionários e inscrições.

- ⚙️ **Configurações**: escolha de preferências em sistemas e aplicativos.

**Em resumo:** **os formulários tornam a web interativa e dinâmica**, permitindo que os dados fornecidos pelos usuários sejam processados e armazenados por servidores ou APIs.

---

## 🔵 A tag `<form>`

A tag `<form>` é um dos elementos mais importantes do HTML, pois ela **cria um formulário interativo na página**. É dentro dela que colocamos os campos e controles que o usuário pode preencher ou selecionar, como:

- caixas de texto,
- botões,
- caixas de seleção,
- opções de escolha,
- áreas de envio de arquivos, etc.

Ou seja, o `<form>` funciona como um **container** que agrupa todos esses elementos relacionados a uma mesma tarefa, como **fazer login, realizar um cadastro, enviar uma mensagem de contato, realizar uma compra** e muito mais.

**Exemplo básico:**
```html
<form>
  <label>Nome:</label>
  <input type="text">
  
  <label>Email:</label>
  <input type="email">
  
  <button>Enviar</button>
</form>
```

Nesse exemplo:

- O `<form>` envolve todos os campos.
- Os elementos internos (`<input>`, `<button>`, etc.) são os **componentes do formulário**.
- O formulário em si ainda não faz nada, mas já está pronto para **organizar e estruturar os dados** que o usuário preencherá.

### 🔹 Atributos

**1. `action`**

- Define para onde **os dados do formulário serão enviados**.
- Geralmente, é a URL de um arquivo no servidor (como PHP, Node.js, etc.) ou uma API.
- Se não for definido, os dados são enviados para a **mesma página**.

```html
<form action="processa.php">
```

**2. `method`**

- Define **como os dados serão enviados**.
- Os dois valores mais usados são:
  - **GET** → dados enviados pela URL (visíveis). Bom para pesquisas.
  - **POST** → dados enviados no corpo da requisição (não aparecem na URL). Bom para cadastros, senhas, etc.

```html
<form action="cadastro.php" method="post">
```

**3. `name`**

- Dá um **nome interno ao formulário**, útil para identificá-lo via JavaScript.

```html
<form name="formLogin">
```

**4. `id`**

- Identifica o formulário de forma única no documento, geralmente usado com **CSS** ou **JavaScript**.

```html
<form id="formContato">
```

**5. `autocomplete`**

- Controla se o navegador deve **sugerir preenchimento automático** (com base em dados já digitados pelo usuário).

- Valores:
  - `"on"` → ativado (padrão).
  - `"off"` → desativado.

```html
<form autocomplete="off">
```

**6. `target`**

- Define **onde o resultado do envio do formulário será exibido**.
- Valores comuns:
  - `_self` → abre na mesma aba (padrão).
  - `_blank` → abre em uma nova aba.

```html
<form action="resultado.html" target="_blank">
```

**7. `novalidate`**

- Desativa a **validação automática do HTML5** (como email obrigatório ter formato de email).
- Útil quando a validação será feita manualmente por JavaScript.

```html
<form novalidate>
```

| Atributo      | Função                                                                 |
|---------------|------------------------------------------------------------------------|
| `action`      | Define o **destino** para onde os dados do formulário serão enviados.  |
| `method`      | Define **como enviar** os dados: `get` (URL) ou `post` (corpo da req.).|
| `name` / `id` | Servem para **identificar** o formulário no código (JS, CSS, etc.).    |
| `autocomplete`| **Ativa ou desativa** o preenchimento automático de campos.            |
| `target`      | Define **onde abrir** o resultado (`_self`, `_blank`, etc.).           |
| `novalidate`  | **Desliga a validação automática** do navegador.                       |

---

## 🔵 Elementos de Formulários 

**1. `<input>`**

É o elemento mais usado em formulários, serve para receber diferentes tipos de entrada do usuário (texto, senha, email, número, checkbox, radio, etc.). O comportamento do campo muda de acordo com o atributo `type`.

```html
<form>
  <input type="text" name="nome" placeholder="Digite seu nome">
  <input type="email" name="email" placeholder="Digite seu email">
</form>
```

**2. `<label>`**

É o rótulo de um campo do formulário. Ajuda na acessibilidade e usabilidade. Vincula-se ao campo pelo atributo `for`, que deve ter o mesmo valor do `id` do campo.

```html
<form>
  <label for="nome">Nome:</label>
  <input type="text" id="nome" name="nome">
</form>
```

**3. `<select>`**

Cria um menu suspenso (dropdown) para escolha de opções. Contém elementos `<option>` dentro dele representado as opções.

```html
<form>
  <label for="curso">Escolha um curso:</label>
  <select id="curso" name="curso">
    <option value="html">HTML</option>
    <option value="css">CSS</option>
    <option value="js">JavaScript</option>
  </select>
</form>
```

**4. `<textarea>`**

É aÁrea de texto multilinha, usada para mensagens ou descrições longas. Diferente do `<input>`, aqui o conteúdo vai entre as tags de abertura e fechamento.

```html
<form>
  <label for="mensagem">Mensagem:</label>
  <textarea id="mensagem" name="mensagem" rows="4" cols="30"></textarea>
</form>
```

**5. `<button>`**

Botão que pode enviar o formulário ou executar ações com JavaScript. O atributo `type` define o comportamento (submit, reset ou button).

```html
<form>
  <button type="submit">Enviar</button>
  <button type="reset">Limpar</button>
</form>
```

**6. `<fieldset>`**

Agrupa elementos relacionados de um formulário. Cria uma caixa ao redor dos campos agrupados, ou seja, que possuem relação entre si.

```html
<form>
  <fieldset>
    <legend>Informações pessoais</legend>
    <label for="nome">Nome:</label>
    <input type="text" id="nome">
    <label for="idade">Idade:</label>
    <input type="number" id="idade">
  </fieldset>
</form>
```

**7. `<legend>`**

Define o título ou descrição de um `<fieldset>`. Sempre colocado dentro de um `<fieldset>` (já incluso acima).

**8. `<datalist>`**

Lista de sugestões para um campo `<input>`. Diferente do `<select>`, o usuário pode digitar livremente além de escolher uma opção. O `<input>` deve ter o atributo `list` com o `id` do `<datalist>`.

```html
<form>
  <label for="browser">Escolha um navegador:</label>
  <input list="browsers" id="browser" name="browser">
  <datalist id="browsers">
    <option value="Chrome">
    <option value="Firefox">
    <option value="Safari">
    <option value="Edge">
  </datalist>
</form>
```

**9. `<output>`**

Exibe o resultado de um cálculo ou interação. Pode ser atualizado com JavaScript ou até com operações dentro do formulário.

```html
<form oninput="resultado.value=parseInt(a.value)+parseInt(b.value)">
  <input type="number" id="a" value="10"> +
  <input type="number" id="b" value="5"> =
  <output name="resultado"></output>
</form>
```

**10. `<option>`**

Representa uma opção dentro de um `<select>` ou `<datalist>`. O atributo `value` define o valor enviado ao formulário (já visto no `<select>`).

**11. `<optgroup>`**

Agrupa várias opções dentro de um `<select>`, criando categorias. Deve conter `<option>` dentro dele.

```html
<form>
  <label for="linguagem">Escolha uma linguagem:</label>
  <select id="linguagem" name="linguagem">
    <optgroup label="Front-end">
      <option value="html">HTML</option>
      <option value="css">CSS</option>
    </optgroup>
    <optgroup label="Back-end">
      <option value="node">Node.js</option>
      <option value="python">Python</option>
    </optgroup>
  </select>
</form>
```

| Elemento     | Descrição                                                                            | Para que serve                                                           |
| ------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `<input>`    | Campo de entrada genérico que pode assumir vários tipos (texto, senha, email, etc.). | Capturar diferentes tipos de dados do usuário.                           |
| `<label>`    | Rótulo associado a um campo de formulário.                                           | Facilita a usabilidade e acessibilidade, vinculando texto a um campo.    |
| `<select>`   | Caixa de seleção com opções pré-definidas.                                           | Permite ao usuário escolher um valor de uma lista suspensa.              |
| `<textarea>` | Campo de entrada para múltiplas linhas de texto.                                     | Usado para comentários, descrições ou textos longos.                     |
| `<button>`   | Cria um botão que pode enviar formulários ou executar ações.                         | Usado para enviar, resetar ou disparar scripts.                          |
| `<fieldset>` | Agrupa campos relacionados em um formulário.                                         | Melhora a organização e a semântica do formulário.                       |
| `<legend>`   | Título ou legenda de um `<fieldset>`.                                                | Dá contexto ao grupo de campos agrupados.                                |
| `<datalist>` | Lista de opções sugeridas vinculada a um `<input>`.                                  | Oferece sugestões de preenchimento, mas não limita a escolha do usuário. |
| `<output>`   | Exibe o resultado de cálculos ou ações realizadas pelo formulário.                   | Mostrar valores calculados dinamicamente.                                |
| `<option>`   | Define uma opção dentro de `<select>` ou `<datalist>`.                               | Representa cada escolha disponível em uma lista.                         |
| `<optgroup>` | Agrupa opções relacionadas dentro de um `<select>`.                                  | Organiza opções em categorias para melhor usabilidade.                   |

---

## 🔵 Tipos de `<input>`

**1. `<input type="button">`**

Cria um botão genérico que não envia formulário, mas pode executar ações com JavaScript.

```html
<input type="button" value="Clique aqui" onclick="alert('Olá!')">
```

**2. `<input type="checkbox">`**

Cria uma caixa de seleção que pode ser marcada ou desmarcada. Usado quando múltiplas opções podem ser escolhidas.

```html
<input type="checkbox" id="aceito">
<label for="aceito">Aceito os termos</label>
```


**3. `<input type="color">`**

Permite ao usuário escolher uma cor usando um seletor de cores.

```html
<input type="color" name="favcolor" value="#ff0000">
```

**4. `<input type="date">`**

Exibe um seletor de data (dia, mês e ano).

```html
<input type="date" name="nascimento">
```

**5. `<input type="datetime-local">`**

Permite escolher data e hora local (sem fuso horário).

```html
<input type="datetime-local" name="agendamento">
```

**6. `<input type="email">`**

Campo para inserir e validar e-mails.

```html
<input type="email" name="email" placeholder="Digite seu e-mail">
```

**7. `<input type="file">`**

Permite ao usuário enviar arquivos.

```html
<input type="file" name="documento">
```

**8. `<input type="hidden">`**

Campo invisível usado para enviar dados adicionais no formulário.

```html
<input type="hidden" name="idUsuario" value="123">
```

**9. `<input type="image">`**

Funciona como botão de envio, mas usa uma imagem no lugar.

```html
<input type="image" src="enviar.png" alt="Enviar">
```

**10. `<input type="month">`**

Permite escolher um mês e ano.

```html
<input type="month" name="mes">
```

**11. `<input type="number">`**

Campo para números, com setinhas de incremento/decremento.

```html
<input type="number" name="quantidade" min="1" max="10">
```

**12. `<input type="password">`**

Campo de texto que oculta os caracteres digitados.

```html
<input type="password" name="senha">
```

**13. `<input type="radio"`>**

Botão de seleção única entre várias opções.

```html
<input type="radio" name="sexo" value="M"> Masculino
<input type="radio" name="sexo" value="F"> Feminino
```

**14. `<input type="range">`**

Controle deslizante para valores dentro de um intervalo.

```html
<input type="range" name="volume" min="0" max="100">
```

**15. `<input type="reset">`**

Botão que limpa todos os campos do formulário.

```html
<input type="reset" value="Limpar">
```

**16. `<input type="search">`**

Campo otimizado para buscas (funciona como text, mas alguns navegadores oferecem recursos extras).

```html
<input type="search" name="busca" placeholder="Pesquisar...">
```

**17. `<input type="submit">`**

Botão que envia o formulário.

```html
<input type="submit" value="Enviar">
```

**18. `<input type="tel">`**

Campo para telefone, com teclado numérico em dispositivos móveis.

```html
<input type="tel" name="telefone" placeholder="(99) 99999-9999">
```

**19. `<input type="text">`**

O campo de texto padrão, usado para entradas simples.

```html
<input type="text" name="nome" placeholder="Digite seu nome">
```

**20. `<input type="time">`**

Permite escolher uma hora (horas e minutos).

```html
<input type="time" name="hora">
```

**21. `<input type="url">`**

Campo para endereços de sites (URLs). Valida o formato de link.

```html
<input type="url" name="site" placeholder="https://...">
```

**22. `<input type="week">`**

Permite escolher uma semana do ano.

```html
<input type="week" name="semana">
```

| Tipo             | Descrição                                                                    |
| ---------------- | ---------------------------------------------------------------------------- |
| `button`         | Cria um botão clicável que pode ser manipulado via JavaScript.               |
| `checkbox`       | Cria uma caixa de seleção, permitindo marcar múltiplas opções.               |
| `color`          | Abre um seletor de cores para o usuário escolher uma cor.                    |
| `date`           | Permite selecionar uma data (ano, mês, dia).                                 |
| `datetime-local` | Permite selecionar data e hora local (sem fuso horário).                     |
| `email`          | Campo para digitar e validar endereços de e-mail.                            |
| `file`           | Permite enviar arquivos do computador do usuário.                            |
| `hidden`         | Campo oculto, usado para armazenar dados que não aparecem para o usuário.    |
| `image`          | Um botão de envio representado por uma imagem.                               |
| `month`          | Permite selecionar mês e ano.                                                |
| `number`         | Campo para inserir apenas números, com setas para aumentar/diminuir valores. |
| `password`       | Campo para digitar senhas (caracteres ficam ocultos).                        |
| `radio`          | Botão de opção, permite escolher apenas uma entre várias opções.             |
| `range`          | Cria um controle deslizante para escolher valores dentro de um intervalo.    |
| `reset`          | Botão que reseta todos os campos do formulário para os valores iniciais.     |
| `search`         | Campo de pesquisa otimizado para buscas.                                     |
| `submit`         | Botão que envia os dados do formulário.                                      |
| `tel`            | Campo para inserir números de telefone (sem validação automática).           |
| `text`           | Campo padrão para inserir texto.                                             |
| `time`           | Permite selecionar apenas hora e minutos.                                    |
| `url`            | Campo para digitar e validar endereços de sites (URLs).                      |
| `week`           | Permite selecionar uma semana específica de um ano.                          |

---

## 🔵 Atributos do `<input>`

**1. `type`**
Define o tipo de campo (`text`, `number`, `checkbox`, `radio`, `submit`, etc.). É obrigatório para diferenciar o comportamento do `<input>`.

```html
<input type="email">
```

**2. `name`**
Nome do campo. Essencial para identificar os dados enviados no formulário. Cada `<input>` que será enviado deve ter um name único.

```html
<input type="text" name="usuario">
```

**3. `id`**
Identificador único do elemento. Usado principalmente para associar `<label>` e para manipulação via CSS ou JavaScript.

**4. `value`**
Define o valor inicial do campo ou do botão. No caso de botões, define o texto exibido; em campos de texto, define o conteúdo inicial.

```html
<input type="text" value="Exemplo">
```

**5. `placeholder`**
Texto de dica exibido dentro do campo enquanto o usuário não digita nada. Não é enviado junto com o formulário.

```html
<input type="text" placeholder="Digite seu nome">
```

**6. `required`**
Indica que o campo é obrigatório. O formulário não será enviado se esse campo estiver vazio.

**7. `readonly`**
Torna o campo somente leitura. O usuário não pode alterá-lo, mas ele será enviado no formulário.

**8. `disabled`**
Desativa o campo completamente. Não pode ser editado nem enviado com o formulário.

**9. `checked`**
Define se uma caixa de seleção (checkbox) ou botão de opção (radio) vem selecionado por padrão.

**10. `min` e `max`**
Definem valores mínimo e máximo para campos numéricos (number, range) ou datas (date, datetime-local, month, week, time).

**11. `step`**
Define o incremento permitido em campos numéricos ou de tempo. Ex.: step="0.5" permite 0.5, 1.0, 1.5…

**12. `maxlength`**
Define o número máximo de caracteres permitidos em campos de texto ou password.

**13. `size`**
Define a largura visível do campo em número de caracteres (não altera o tamanho real do valor enviado).

**14. `autocomplete`**
Indica se o navegador deve sugerir preenchimento automático com base em dados previamente digitados.

**15. `pattern`**
Expressão regular para validar o valor do campo antes de enviar. Ex.: validar um CEP, telefone ou código específico.

**16. `list`**
Vincula o `<input>` a um `<datalist>` para oferecer sugestões.

| Atributo       | Descrição                                                              |
| -------------- | ---------------------------------------------------------------------- |
| `type`         | Define o tipo do campo (texto, número, checkbox, radio, submit, etc.). |
| `name`         | Nome do campo, usado para identificar os dados enviados no formulário. |
| `id`           | Identificador único do elemento, útil para `<label>` e scripts.        |
| `value`        | Valor inicial do campo ou do botão.                                    |
| `placeholder`  | Texto de dica exibido dentro do campo quando está vazio.               |
| `required`     | Indica que o campo é obrigatório para envio do formulário.             |
| `readonly`     | Torna o campo apenas leitura, mas ainda enviado no formulário.         |
| `disabled`     | Desativa completamente o campo, não enviado no formulário.             |
| `checked`      | Define se uma checkbox ou radio vem marcada por padrão.                |
| `min`          | Valor mínimo permitido (para `number`, `range`, `date`, `time`, etc.). |
| `max`          | Valor máximo permitido (para `number`, `range`, `date`, `time`, etc.). |
| `step`         | Incremento permitido em campos numéricos ou de tempo.                  |
| `maxlength`    | Número máximo de caracteres permitidos em `text` ou `password`.        |
| `size`         | Largura visível do campo em número de caracteres.                      |
| `autocomplete` | Habilita ou desabilita sugestões automáticas do navegador.             |
| `pattern`      | Expressão regular para validação do valor antes do envio.              |
| `list`         | Vincula o campo a um `<datalist>` para oferecer sugestões.             |


---