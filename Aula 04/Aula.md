# Aula 4 - Controle de Layout: Display, Position e Camadas

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

### 🔵 Position em CSS
A propriedade `position` define como um elemento é posicionado no layout e como interage com as coordenadas `top`, `right`, `bottom` e `left`. Os principais valores da propriedade `position` são:

| Valor        | Descrição                                                                                                  |
|-------------|-----------------------------------------------------------------------------------------------------------|
| ``static``  | **Padrão**. O elemento segue o fluxo normal da página. `top`, `left` não têm efeito.                           |
| ``relative``| Permite mover o elemento **em relação à posição original** sem tirá-lo do fluxo.                               |
| ``absolute``| O elemento é removido do fluxo e posicionado **em relação ao primeiro ancestral** com `position` diferente de `static`. |
| ``fixed``   | Fica **fixo na tela**, mesmo com rolagem. Posicionado em relação à janela do navegador.                        |
| ``sticky``  | Mistura `relative` e `fixed`: fica relativo até atingir um ponto, depois fixa na tela.                     |

<div style="height: 3px; width: 1px;"></div>

#### 🔹 Coordenadas
As propriedades `top`, `right`, `bottom` e `left` definem o deslocamento do elemento em relação ao seu ponto de referência, mas só funcionam quando o elemento tem um `position` **diferente** de `static` (ou seja: `relative`, `absolute`, `fixed` ou `sticky`).

<div style="height: 1px; width: 1px;"></div>

##### 🔍 Como funcionam?
- Elas movem o elemento **a partir do lado indicado**.
- O valor pode ser em `px`, `%`, `em`, `rem`, etc.
- O **ponto de referência** depende do tipo de `position`:

  <div style="height: 10px; width: 1px;"></div>

  - `relative` → Baseado na **posição original** do elemento.

  <div style="height: 10px; width: 1px;"></div>

  * `absolute` → Baseado no **primeiro ancestral** posicionado (ou `body` se não houver).

  <div style="height: 10px; width: 1px;"></div>

  - `fixed` → Baseado na **janela do navegador** (viewport).

  <div style="height: 10px; width: 1px;"></div>

  * `sticky` → Baseado no **container pai e comportamento de scroll**

<div style="height: 1px; width: 1px;"></div>

##### 🔍 O que significa cada uma ?
- `top` → Define a distância do **lado superior** do elemento até o **ponto de referência**.
* `bottom` → Define a distância do **lado inferior** do elemento até o **ponto de referência**.
- `left` → Define a distância do **lado esquerdo**.
* `right` → Define a distância do **lado direito**.

**Exemplo:**
```css
.box {
  position: absolute;
  top: 50px;
  left: 100px;
}
```
O elemento será deslocado **50px do topo e 100px da esquerda** em relação ao seu container posicionado.

<div style="height: 1px; width: 1px;"></div>

##### ▸ Valores negativos
Você pode usar valores negativos para **mover além da borda do container**:

```css
top: -10px; /* Sobe 10px além do topo */
```

<div style="height: 1px; width: 1px;"></div>

#### 🔹 Centralizando um elmento com `position`
Centralizar um elemento com CSS é uma necessidade frequente, mas quando usamos `position`, existem alguns conceitos importantes para entender. A técnica mais conhecida para centralização absoluta funciona da seguinte forma: primeiro, é necessário que o container onde o elemento será centralizado tenha a propriedade `position: relative`. Isso é essencial porque, por padrão, um elemento com `position: absolute` se posiciona em relação **ao primeiro ancestral com** `position` **diferente de** `static`, e queremos que esse ancestral seja nosso container.

Depois de definir o container como relativo, aplicamos `position: absolute` ao elemento que queremos centralizar. Agora, precisamos colocá-lo no centro do container. A forma mais simples de fazer isso é utilizar as coordenadas `top` e `left` com valor `50%`. Quando fazemos isso, o canto superior esquerdo do elemento ficará posicionado exatamente no centro do container. Porém, isso não é uma centralização perfeita, pois a posição é calculada a partir do canto do elemento, e não do seu centro. Ou seja, visualmente ele ficará deslocado.

Para corrigir isso, usamos a transformação `transform: translate(-50%, -50%)`. Essa propriedade move o elemento metade da sua própria largura para a esquerda e metade da sua altura para cima, fazendo com que o centro do elemento coincida exatamente com o centro do container. Essa técnica é muito popular porque funciona independentemente do tamanho do elemento, tornando-a ideal para layouts responsivos, onde as dimensões podem variar.

Em resumo, centralizar com `position` consiste em três passos: definir o container como `position: relative`, posicionar o elemento como `absolute` com `top` e `left` em 50%, e, por fim, usar `transform: translate(-50%, -50%)` para corrigir o deslocamento. Essa combinação garante uma centralização precisa tanto horizontal quanto verticalmente, sem a necessidade de cálculos manuais de largura ou altura.

**Exemplo:**
```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Centralização com Position</title>
<style>
  body {
    margin: 0;
    height: 100vh;
    background-color: #f4f4f4;
    position: relative; /* Container para centralização */
  }

  .card {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 300px;
    padding: 20px;
    background: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    text-align: center;
    font-family: Arial, sans-serif;
  }
</style>
</head>
<body>
  <div class="card">
    <h2>Centralizado!</h2>
    <p>Este card está no centro da tela usando <strong>position</strong>.</p>
  </div>
</body>
</html>
```

---

### 🔵 O que é `z-index` no CSS?


O `z-index` é uma propriedade do CSS usada para **controlar a ordem de empilhamento (stacking order)** dos elementos em uma página. Quando dois ou mais elementos ocupam a mesma área, o `z-index` determina qual ficará **por cima** e qual ficará **por baixo**.

**Por padrão**, os elementos em HTML são exibidos na ordem em que aparecem no código. O último elemento no DOM tende a ficar por cima, **a não ser que usemos** `z-index` **para mudar isso**.

Para que o `z-index` funcione o elemento precisa ter um contexto de empilhamento, ou seja, possuir um `position` diferente de `static` (`relative`, `absolute`, `fixed` ou `sticky`). Se você aplicar `z-index` em um elemento com `position: static`, ele não terá efeito.

A propriedade `z-index` aceita valores inteiros (positivo, negativo ou zero):

- **Maior número** → fica por cima.
- **Menor número** → fica atrás.
- **Padrão** é auto (igual a zero).

Os valores negativos fazem com que o elemento fica ainda mais atrás.

Quando um elemento com `position` e `z-index` é definido, ele cria um novo **contexto de empilhamento** para seus filhos. Isso significa que elementos dentro dele só se comparam entre si, e não com elementos de fora. Esse é um detalhe que costuma confundir iniciantes.

**Exemplo:**
```css
<style>
  .box {
    position: absolute;
    width: 150px;
    height: 150px;
    color: white;
    font-size: 18px;
    text-align: center;
    line-height: 150px;
  }

  .red {
    background: crimson;
    top: 50px;
    left: 50px;
    z-index: 1;
  }

  .blue {
    background: steelblue;
    top: 100px;
    left: 100px;
    z-index: 2; /* Este ficará por cima */
  }
</style>

<div class="box red">Red</div>
<div class="box blue">Blue</div>
```

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