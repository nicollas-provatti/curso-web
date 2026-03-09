# 📘 Aula 5 - CSS: Cores, Fontes, Background, Visibility, Display e Overflow

---

## 🔵 Cores em CSS
As cores em CSS são utilizadas para estilizar elementos com propriedades como `color` (texto), `background-color` (fundo), `border-color` (bordas), entre outras. 

### 🔹 Principais Formas de Definir Cores

| Tipo       | Exemplo                       | Descrição                                                                 |
|------------|-------------------------------|---------------------------------------------------------------------------|
| Nome       | `color: red;`                 | Usa nomes pré-definidos pelo CSS (ex: red, blue, green, etc.)            |
| Hexadecimal| `color: #ff0000;`             | Usa 3 ou 6 dígitos hexadecimais (`#RGB` ou `#RRGGBB`)                     |
| RGB        | `color: rgb(255, 0, 0);`      | Define as cores com valores de 0 a 255 para vermelho, verde e azul       |
| RGBA       | `color: rgba(255, 0, 0, 0.5);`| Igual ao RGB, mas com transparência (alpha de 0 a 1)                     |
| HSL        | `color: hsl(0, 100%, 50%);`   | Define a cor por matiz (hue), saturação e luminosidade                   |
| HSLA       | `color: hsla(0, 100%, 50%, 0.5);` | Igual ao HSL, com transparência                                       |


---

## 🔵 Fontes
As fontes são fundamentais para a legibilidade e o estilo visual de um site. Com CSS, você pode configurar tipo, tamanho, espaçamento e outras propriedades tipográficas.

### 🔹 Famílias de Fontes em CSS
A propriedade `font-family` define a tipografia usada no texto. Ela pode receber uma lista de fontes específicas e, por fim, uma família genérica como fallback.

**Exemplo:**
```css
font-family: "Roboto", Arial, sans-serif;
```

Se a primeira fonte não estiver disponível, o navegador usará a próxima da lista.

<br>

#### Principais Famílias Genéricas
| Família      | Características                                      | Quando usar                                                  |
|-------------|------------------------------------------------------|-------------------------------------------------------------|
| serif       | Possui “serifas” (pequenos traços nas extremidades)    | Textos longos em impressão ou sites formais (jornais, livros) |
| sans-serif  | Sem serifas, design limpo e moderno                     | Sites modernos, telas digitais, textos curtos                |
| monospace   | Todas as letras têm a mesma largura                      | Códigos, tabelas, interfaces de programação                  |
| cursive     | Estilo manuscrito                                        | Convites, títulos decorativos                                |
| fantasy     | Fontes criativas, ornamentadas                            | Logotipos, títulos artísticos     |

<br>

### 🔹 Principais Propriedades
| Propriedade        | Exemplo                              | Descrição                                      |
|--------------------|--------------------------------------|-----------------------------------------------|
| font-family        | `font-family: Arial, sans-serif;`     | Define o tipo de fonte                        |
| font-size          | `font-size: 16px;`                   | Define o tamanho da fonte                     |
| font-weight        | `font-weight: bold;`                 | Define a espessura (normal, bold, 100–900)   |
| font-style         | `font-style: italic;`                | Define estilo como itálico ou normal          |
| text-transform     | `text-transform: uppercase;`         | Controla letras maiúsculas/minúsculas          |
| text-decoration    | `text-decoration: underline;`        | Sublinhado, risco ou nenhum                   |
| line-height        | `line-height: 1.5;`                  | Altura da linha                               |
| letter-spacing     | `letter-spacing: 1px;`               | Espaço entre letras                           |
| word-spacing       | `word-spacing: 5px;`                 | Espaço entre palavras                         |
| text-align         | `text-align: center;`                | Alinhamento do texto                          |

---

## 🔵 Background
A propriedade `background` é usada para definir o plano de fundo de um elemento. Pode ser uma cor sólida, imagem, gradiente ou até múltiplos backgrounds. As principais propriedades de background são:

| Propriedade              | Descrição                                              | Exemplo                                                      |
|--------------------------|--------------------------------------------------------|-------------------------------------------------------------|
| `background-color`         | Define a cor do fundo                                 | `background-color: #f0f0f0;`                                |
| `background-image`         | Define uma imagem de fundo                            | `background-image: url('img/bg.jpg');`                     |
| `background-repeat`        | Define como a imagem se repete                        | `repeat`, `repeat-x`, `repeat-y`, `no-repeat`              |
| `background-position`      | Define a posição da imagem                            | `center`, `top left`, `50% 50%`                             |
| `background-size`          | Define o tamanho da imagem                            | `cover`, `contain`, `100px 200px`                          |
| `background-attachment`    | Define se a imagem rola com a página ou fica fixa     | `scroll`, `fixed`                                           |
| `background` (shorthand)   | Atalho para todas as propriedades acima               | `background: url('img/bg.jpg') no-repeat center/cover;`     |

<div style="height: 3px; width: 1px;"></div>

**Valores comuns para background-size**
- `cover` → A imagem cobre todo o elemento, cortando partes se necessário.
- `contain` → A imagem é ajustada para caber no elemento sem cortar

<div style="height: 5px; width: 1px;"></div>

**Ordem das propriedades no shorthand background**
```css
background: [color] [image] [position] / [size] [repeat] [attachment];
```

<div style="height: 3px; width: 1px;"></div>

### 🔹 Gradientes
CSS também permite fundos com gradientes. O `linear-gradient()` cria um degradê linear entre duas ou mais cores. Ele é usado normalmente na propriedade background:

```css
background: linear-gradient(direction, color-stop1, color-stop2, ...);
```

**Sintaxe Geral:**
```css
linear-gradient(<direção ou ângulo>, <cor1> <posição opcional>, <cor2> <posição opcional>, ...);
```

- **Direção ou Ângulo** → Define para onde vai o degradê.
- **Cores** (color stops) → Definem as cores que compõem o gradiente.
- **Posição** (opcional) → Percentual ou unidade indicando onde a cor começa a transição.

<div style="height: 3px; width: 1px;"></div>

#### ▸ Parâmetro 1: Direção
Você pode usar:

**1. Palavras-chave (to X)**
- `to top` → De baixo para cima
- `to bottom` → De cima para baixo (padrão)
- `to left` → Da direita para a esquerda
- `to right` → Da esquerda para a direita
- **Combinações:** `to top right`, `to bottom left`, etc.

**2. Ângulo (em graus)**
- `0deg` → Para cima
- `90deg` → Para a direita
- `180deg` → Para baixo
- `270deg` → Para a esquerda

<div style="height: 3px; width: 1px;"></div>

#### ▸ Parâmetros seguintes
Depois da direção, vem as cores e você pode usar 2 ou mais cores.
```css
linear-gradient(to right, red, yellow, green);
```

**Posição das cores (opcional)**
Cada cor pode ter uma posição (em % ou unidades):
```css
linear-gradient(to right, red 0%, yellow 50%, green 100%);
```

- **red 0%** → Começa no início
- **yellow 50%** → Meio do gradiente
- **green 100%** → Final

Isso permite controlar onde cada cor aparece.

---

## 🔵 Visibility
A propriedade `visibility` controla se um elemento **está visível ou não**, mas **mantendo ou não o espaço ocupado no layout**. Os valores principais são:

| Valor      | Descrição                                                        |
|-----------|-------------------------------------------------------------------|
| ``visible``| O elemento aparece normalmente (padrão).                          |
| ``hidden`` | O elemento **fica invisível**, mas **mantém o espaço no layout**.         |

**Exemplo:**
```css
.elemento {
  visibility: hidden; /* O elemento some, mas o espaço continua */
}
```

---

## 🔵 Display
A propriedade `display` define como um elemento é exibido na página, ou seja, **o tipo de caixa que ele gera no layout**. É uma das propriedades mais importantes para controle de layout. Os valores mais comuns são:

| Valor           | Descrição                                                                                       |
|-----------------|------------------------------------------------------------------------------------------------|
| ``block``       | O elemento ocupa **toda a largura disponível** e começa **em uma nova linha**                         |
| ``inline``      | O elemento ocupa **apenas o espaço do conteúdo** e **não quebra linha**                               |
| ``inline-block``| Combina características de `inline` e `block`: fica na mesma linha, mas permite definir largura e altura |
| ``none``        | O elemento **não é exibido na tela** e não ocupa espaço                                           |
| ``flex``        | Define um **container flexível** para layout moderno (Flexbox)                                    |
| ``grid``        | Define um **container com grid** (Grid Layout)                                                    |

Os elementos HTML possuem valores de `display` padrão, por exemplo:

- **Block**: `div`, `section`, `header` → ocupam a largura inteira.
- **Inline**: `span`, `a`, `strong` → apenas o tamanho do conteúdo.

Saber disso é muito importante ao estrutura o layout de uma página web. Confira a [lista](https://www-w3schools-com.translate.goog/html/html_blocks.asp?_x_tr_sl=en&_x_tr_tl=pt&_x_tr_hl=pt&_x_tr_pto=tc) de elementos que são `block` e `inline`.

### 🔹 `display: none`
É comumente usado com JavaScript para ocultar e mostrar elementos sem excluí-los e recriá-los.

**Exemplo:**
```css
.esconder {
    display: none;
}
```

Ao adicionar a classe `esconder` a um elemento HTML faz com que ele seja ocultado.

### 🔹 Diferença entre `visibility: hidden` e `display: none`

| Propriedade          | O que acontece no layout?                                     |
|----------------------|----------------------------------------------------------------|
| ``visibility: hidden`` | O elemento fica **invisível**, mas **o espaço continua reservado**      |
| ``display: none``      | O elemento **não aparece e não ocupa espaço** (é como se não existisse) |

**Exemplo:**
```html
<style>
  .hidden {
    visibility: hidden;
  }
  .none {
    display: none;
  }
  .caixa {
    width: 150px;
    height: 50px;
    background: lightblue;
    margin-bottom: 10px;
  }
</style>

<div class="caixa">Caixa visível</div>
<div class="caixa hidden">Caixa invisível (visibility)</div>
<div class="caixa none">Caixa removida (display)</div>
<div class="caixa">Outra caixa</div>
```

**Resultado:**

- A segunda caixa fica invisível **mas mantém o espaço**.
- A terceira caixa **desaparece completamente**, como se não estivesse no HTML.

### 🔍 Quando usar cada um?
- Use `display: none` quando quiser remover o elemento do fluxo do layout.

- Use `visibility: hidden` quando quiser esconder sem alterar a estrutura (útil para animações, tabelas ou placeholders).

---

### 🔵 Overflow
A propriedade `overflow` do CSS define o que deve acontecer quando **o conteúdo de um elemento é maior do que a área disponível para ele**. Imagine uma caixa com altura e largura definidas: se o texto ou outro conteúdo ultrapassar esse espaço, precisamos decidir como lidar com esse excesso, e é isso que o `overflow` controla.

Por padrão, o valor de `overflow` é `visible`, o que significa que o conteúdo simplesmente “escapa” da caixa e continua visível, mesmo que ultrapasse os limites do elemento. Em alguns casos isso pode prejudicar o design, por isso existem outras opções. Com `overflow: hidden`, todo conteúdo que ultrapassar a área visível do elemento é cortado e não aparece. Já `overflow: scroll` adiciona barras de rolagem horizontais e verticais, mesmo que não sejam necessárias, garantindo que todo conteúdo possa ser acessado. Por fim, `overflow: auto` é uma opção inteligente, pois adiciona as barras de rolagem apenas quando necessário, mantendo um visual mais limpo.

Além do controle global com `overflow`, podemos controlar os eixos separadamente usando `overflow-x` para a rolagem horizontal e `overflow-y` para a vertical. Essa propriedade é especialmente útil quando trabalhamos com caixas fixas, como cards, contêineres de layout ou áreas com muito texto, garantindo que o conteúdo fique organizado e o layout permaneça consistente. Em resumo, entender `overflow` é fundamental para criar interfaces que mantenham a estética e a usabilidade mesmo com conteúdos dinâmicos ou inesperadamente grandes.


**Tabela: Valores da Propriedade overflow**
| Valor      | Comportamento                                                       |
|-----------|---------------------------------------------------------------------|
| ``visible``| Padrão. O conteúdo extra fica visível fora da caixa.                |
| ``hidden`` | O conteúdo extra é cortado e não pode ser visto.                     |
| ``scroll`` | Mostra barras de rolagem sempre, mesmo sem necessidade.              |
| ``auto``   | Mostra barras de rolagem apenas quando necessário.                   |

**Exemplo:**
```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Exemplo Overflow</title>
<style>
  .container {
    width: 200px;
    height: 100px;
    border: 2px solid #333;
    margin: 10px;
    padding: 5px;
    background: #f9f9f9;
    display: inline-block;
    vertical-align: top;
  }

  .visible { overflow: visible; }
  .hidden { overflow: hidden; }
  .scroll { overflow: scroll; }
  .auto   { overflow: auto; }
</style>
</head>
<body>
  <div class="container visible">
    <strong>visible</strong><br>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum imperdiet.
  </div>

  <div class="container hidden">
    <strong>hidden</strong><br>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum imperdiet.
  </div>

  <div class="container scroll">
    <strong>scroll</strong><br>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum imperdiet.
  </div>

  <div class="container auto">
    <strong>auto</strong><br>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum imperdiet.
  </div>
</body>
</html>
```

---
