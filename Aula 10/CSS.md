# 📘 Aula 10 - CSS Avançado

---

## 🔵 Sombras 
As sombras são recursos visuais muito usados em interfaces modernas. Elas ajudam a dar **profundidade, destaque** e até mesmo a melhorar a **legibilidade** de elementos na página. No CSS, trabalhamos principalmente com dois tipos: sombras em **texto** e em **caixas**.

### 🔹`text-shadow`

A propriedade `text-shadow` aplica sombras ao texto, criando efeitos visuais como realce ou profundidade.

**Sintaxe:**
```css
text-shadow: offset-x offset-y blur-radius color;
```

- **offset-x** → deslocamento horizontal da sombra (positivo: direita, negativo: esquerda).

- **offset-y** → deslocamento vertical da sombra (positivo: abaixo, negativo: acima).

-**blur-radius** (opcional) → define o quanto a sombra é difusa (quanto maior, mais suave).

- **color** → cor da sombra (pode ser nome, HEX, RGB, RGBA etc).

**Exemplo:**
```css
h1 {
  text-shadow: 2px 2px 5px rgba(0,0,0,0.5);
}
```


Esse exemplo cria uma sombra **levemente desfocada** embaixo e à direita do texto.

Também é possível aplicar **múltiplas sombras** separando por vírgula:

```css
h1 {
  text-shadow: 2px 2px 5px black, -2px -2px 5px gray;
}
```

<div style="height: 10px"></div>

### 🔹`box-shadow`

A propriedade `box-shadow` aplica sombra a **caixas** (divs, botões, cards etc.), criando um efeito de elevação.

**Sintaxe:**
```css
box-shadow: offset-x offset-y blur-radius spread-radius color inset;
```

- **offset-x** → deslocamento horizontal.

- **offset-y** → deslocamento vertical.

- **blur-radius** (opcional) → quanto a sombra é difusa.

- **spread-radius** (opcional) → define o quanto a sombra cresce ou diminui em relação à caixa.

- **color** → cor da sombra.

- **inset** (opcional) → muda a sombra para dentro do elemento.

**Exemplo:**
```css
.card {
  box-shadow: 3px 3px 8px rgba(0,0,0,0.3);
}
```


Esse exemplo cria uma sombra externa discreta, dando efeito de elevação ao card.

Também é possível aplicar múltiplas sombras:

```css
.card {
  box-shadow: 0 0 10px rgba(0,0,0,0.3), 5px 5px 15px rgba(0,0,0,0.2);
}
```

Usando `inset`:

```css
.input {
  box-shadow: inset 0 0 5px rgba(0,0,0,0.5);
}
```

Cria uma sombra interna, como se o campo estivesse afundado.

<div style="height: 10px"></div>

**Dica:** sombras muito escuras podem deixar a interface pesada. Prefira usar **sombras suaves com transparência** (via `rgba`) para um design mais moderno.

---

## 🔵 Transformações 

A propriedade `transform` permite aplicar **transformações visuais em elementos**, como mover, girar, redimensionar ou inclinar.
Ela não altera o fluxo do documento (o espaço ocupado pelo elemento continua o mesmo), mas modifica a forma como ele é exibido.

### 🔹Principais funções de `transform`

**1. Mover (translate)**

Desloca o elemento no eixo X e/ou Y.

```css
transform: translate(50px, 20px); /* move 50px à direita e 20px para baixo */
```

Pode ser usado com valores negativos:

```css
transform: translate(-50px, -20px); /* move 50px à esquerda e 20px para cima */
```

<div style="height: 10px"></div>

**2. Redimensionar (scale)**

Aumenta ou diminui o tamanho do elemento.

```css
transform: scale(1.5); /* aumenta em 150% */
transform: scale(0.5); /* reduz para 50% */
```

Também pode ser aplicado separadamente:
- `scaleX(2)` → dobra apenas a largura.
- `scaleY(0.5)` → reduz apenas a altura.

<div style="height: 10px"></div>

**3. Rotacionar (rotate)**

Gira o elemento em torno de um ponto (por padrão, o centro).

```css
transform: rotate(45deg); /* gira 45 graus no sentido horário */
transform: rotate(-90deg); /* gira 90 graus no sentido anti-horário */
```

<div style="height: 10px"></div>

**4. Inclinar (skew)**

Inclina o elemento nos eixos X e/ou Y, distorcendo sua forma.

```css
transform: skew(20deg, 10deg); /* inclina 20° no eixo X e 10° no Y */
```

<div style="height: 10px"></div>

**5. Combinar transformações**

É possível aplicar várias transformações ao mesmo tempo:

```css
transform: translate(50px, 20px) rotate(30deg) scale(1.2);
```

**A ordem importa:** primeiro o navegador aplica a translação, depois a rotação, depois a escala.

<div style="height: 1px"></div>

### 🔹Ponto de origem

Por padrão, as transformações acontecem a partir do **centro do elemento**.
Com `transform-origin`, você pode mudar esse ponto:

```css
transform-origin: top left;   /* aplica a transformação a partir do canto superior esquerdo */
transform-origin: 50% 100%;   /* aplica a partir do meio da base */
```

Quando usamos **porcentagens**, estamos dizendo a posição dentro do próprio elemento:

- O primeiro valor (50%) se refere ao eixo X (horizontal).

    - `0%` → lado esquerdo
    - `50%` → centro
    - `100%` → lado direito
* O segundo valor (100%) se refere ao eixo Y (vertical).

    - `0%` → topo
    - `50%` → meio
    - `100%` → base

<div style="height: 10px"></div>

**Dica:** A propriedade transform é muito poderosa quando usada junto com transition e animation, criando efeitos de interação e movimento.

---

## 🔵 Transições

A propriedade `transition` permite **animar mudanças de estado** em elementos CSS de forma suave.
Ou seja, em vez de uma mudança ser instantânea, ela acontece **gradualmente** ao longo de um tempo definido.

**Exemplo:**
```css
button {
  background-color: blue;
  transition: background-color 0.3s ease; /* Suaviza a mudança */
}

button:hover {
  background-color: red; /* Vai mudar suavemente em 0.3s */
}
```

### 🔹 Principais Propriedades de Transition

O `transition` pode ser usado em duas formas: **individual** (usando suas propriedades) ou em **shorthand**.

**1.** `transition-property`

Define **quais propriedades CSS** serão animadas.

- Pode ser uma ou mais, separadas por vírgula.
- Valor especial: `all` → aplica a todas as propriedades que podem ser animadas.

```css
div {
  transition-property: background-color, transform;
}
```

<div style="height: 10px"></div>

**2.** `transition-duration`

Define o **tempo que a transição leva** para acontecer.

- Pode usar segundos (`s`) ou milissegundos (`ms`).

```css
div {
  transition-duration: 0.5s;
}
```

<div style="height: 10px"></div>

**3.** `transition-timing-function`

Define a `curva de aceleração` (como o efeito ocorre ao longo do tempo).
Valores comuns:

- `ease` → começa devagar, acelera e termina devagar (padrão).
- `linear` → velocidade constante.
- `ease-in` → começa devagar e acelera.
- `ease-out` → começa rápido e desacelera.
- `ease-in-out` → devagar no início e no fim, rápido no meio.
- `cubic-bezier(n,n,n,n)` → curva personalizada.

```css
div {
  transition-timing-function: ease-in-out;
}
```

<div style="height: 10px"></div>

**4.** `transition-delay`

Define um **tempo de espera** antes da transição começar.

```css
div {
  transition-delay: 0.2s;
}
```

### 🔹 Shorthand 

Todas essas propriedades podem ser combinadas em **uma só linha**:

```css
div {
  transition: background-color 0.5s ease-in-out 0.2s;
}
/* Propriedade | Duração | Timing | Atraso */
```

**Exemplo:**
```css
.box {
  width: 100px;
  height: 100px;
  background: blue;
  transition: transform 0.5s ease, background-color 0.3s linear;
}

.box:hover {
  transform: rotate(45deg);
  background: red;
}
```

Ao passar o mouse, a caixa **gira suavemente em 0.5s** e a cor muda para vermelho em **0.3s**.

---

## 🔵 Animação

Enquanto o `transition` anima mudanças de estado (ex: hover, focus), o `animation` permite criar **animações contínuas e complexas**, que podem:

- rodar automaticamente sem interação do usuário;
- repetir infinitamente;
- ter várias etapas (não só início e fim);
- combinar transformações, cores, tamanhos etc.

### 🔹 Estrutura básica de uma animação

As animações são feitas em duas partes:

**1.** Definição com `@keyframes`

Aqui criamos os **quadros (frames)** da animação, que definem como o elemento muda ao longo do tempo.

```css
@keyframes mover {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(200px);
  }
}
```

- `from` = estado inicial
- `to` = estado final

Também podemos usar **percentuais** para mais controle:

```css
@keyframes piscar {
  0%   { opacity: 1; }
  50%  { opacity: 0; }
  100% { opacity: 1; }
}
```

<div style="height: 10px"></div>

**2.** Aplicação com `animation`

Depois usamos a propriedade `animation` no elemento:

```css
.box {
  animation: mover 2s ease-in-out infinite alternate;
}
```

<div style="height: 10px"></div>

### 🔹 Propriedades da Animation

**1.** `animation-name`

Define o nome da animação que foi criada com `@keyframes`.

```css
@keyframes piscar {
  0%   { opacity: 1; }
  50%  { opacity: 0; }
  100% { opacity: 1; }
}

.box {
  animation-name: piscar;
  animation-duration: 2s;
}
```

Aqui, `.box` executa a animação `piscar`.

<div style="height: 10px"></div>

**2.** `animation-duration`

Define quanto tempo a animação leva para **completar um ciclo**.

```css
@keyframes mover {
  from { transform: translateX(0); }
  to   { transform: translateX(200px); }
}

.box {
  animation-name: mover;
  animation-duration: 3s; /* leva 3 segundos */
}
```
O quadrado leva **3 segundos** para percorrer o trajeto.

<div style="height: 10px"></div>

**3.** `animation-timing-function`

Define a **curva de aceleração** da animação.

```css
@keyframes mover {
  from { transform: translateX(0); }
  to   { transform: translateX(200px); }
}

.box {
  animation-name: mover;
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
}
```

Valores comuns:
- `linear` → velocidade constante
- `ease` → começa devagar, acelera, termina devagar (padrão)
- `ease-in` → começa devagar e acelera
- `ease-out` → começa rápido e desacelera
- `cubic-bezier(...)` → curva personalizada

<div style="height: 10px"></div>

**4.** `animation-delay`

Define quanto tempo esperar antes de **iniciar a animação**.

```css
@keyframes mover {
  from { transform: translateY(0); }
  to   { transform: translateY(100px); }
}

.box {
  animation-name: mover;
  animation-duration: 2s;
  animation-delay: 1s; /* espera 1 segundo */
}
```

A animação só começa **após 1 segundo**.

<div style="height: 10px"></div>

**5.** `animation-iteration-count`

Define **quantas vezes a animação será repetida**.

```css
@keyframes piscar {
  0%, 100% { opacity: 1; }
  50%      { opacity: 0; }
}

.box {
  animation-name: piscar;
  animation-duration: 1s;
  animation-iteration-count: infinite;
}
```

Valores:
- número (`1`, `3`, `5`...)
- `infinite` → repete para sempre

<div style="height: 10px"></div>

**6.** `animation-direction`

Define a **direção da animação**.

```css
@keyframes mover {
  from { transform: translateX(0); }
  to   { transform: translateX(200px); }
}

.box {
  animation-name: mover;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
```

Valores:

- `normal` (padrão) → do início ao fim
- `reverse` → do fim ao início
- `alternate` → vai e volta
- `alternate-reverse` → volta e vai

<div style="height: 10px"></div>

**7.** `animation-fill-mode`

Define o **estado do elemento antes e depois da animação**.

```css
@keyframes cor {
  from { background: blue; }
  to   { background: red; }
}

.box {
  animation-name: cor;
  animation-duration: 2s;
  animation-fill-mode: forwards;
}
```

Valores:
- `none` (padrão) → não mantém estilos da animação
- `forwards` → mantém o estado final
- `backwards` → aplica o estado inicial durante o delay
- `both` → aplica inicial + mantém final

<div style="height: 10px"></div>

**8.** `animation-play-state`

Controla se a animação está rodando ou **pausada**.

```css
@keyframes mover {
  from { transform: translateX(0); }
  to   { transform: translateX(200px); }
}

.box {
  animation-name: mover;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-play-state: paused; /* começa pausada */
}
```

Com JavaScript ou pseudo-classes (`:hover`), podemos alternar entre `running` e `paused`.

<div style="height: 10px"></div>

**9.** Shorthand: `animation`

Todas as propriedades podem ser resumidas em **uma única linha**:

```css
.box {
  animation: piscar 1s linear 0s infinite alternate both;
}
```

Ordem: `name` `duration` `timing-function` `delay` `iteration-count` `direction fill-mode` `play-state`

---