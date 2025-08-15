# 📘 Aula 5 - Layout e Media Queries

---

## 🔵 Float

A propriedade `float` no CSS foi originalmente criada para permitir que textos contornassem imagens, semelhante ao que acontece em publicações impressas. Ela posiciona um elemento à esquerda ou à direita dentro do seu container, fazendo com que outros elementos fluam ao seu redor. Isso significa que, ao aplicar `float: left` em um elemento, ele se alinhará à esquerda, e os elementos seguintes ocuparão o espaço disponível à sua direita. Da mesma forma, com `float: right`, o elemento se posiciona à direita e libera espaço à esquerda.

Por padrão, quando um elemento é flutuado, ele **sai do fluxo normal do documento**, ou seja, os elementos que vêm depois no HTML podem ocupar o espaço que seria dele. Isso pode causar problemas no layout, principalmente quando o container não reconhece a altura dos elementos flutuantes, parecendo “colapsar”. Para corrigir isso, geralmente utilizamos a propriedade `clear`, que impede que outros elementos subam ao lado de um elemento flutuante, forçando-os a se posicionarem abaixo.

Apesar de o `float` ter sido muito usado no passado para construir layouts inteiros, hoje ele é mais indicado para pequenos alinhamentos ou casos específicos, já que ferramentas modernas como Flexbox e Grid oferecem soluções mais eficientes e flexíveis para criação de layouts. No entanto, é importante conhecer o funcionamento do `float`, tanto para lidar com códigos antigos quanto para compreender como o CSS evoluiu.

---

## 🔵 Clear

A propriedade `clear` no CSS é usada para controlar o comportamento dos elementos que aparecem depois de um elemento flutuante. Quando aplicamos `float` em um elemento, ele sai do fluxo normal do documento e os elementos seguintes podem subir e ocupar o espaço ao lado dele. Em muitos casos, isso é desejado, mas, às vezes, precisamos que o próximo elemento comece abaixo do elemento flutuante, sem se sobrepor ou ficar ao lado. É exatamente para isso que serve o `clear`.

Quando usamos `clear`, indicamos de qual lado não queremos elementos flutuantes. Por exemplo, `clear: left` impede que o elemento fique ao lado de qualquer outro que tenha `float: left`, enquanto `clear: right` faz o mesmo para flutuantes à direita. Se quisermos impedir que o elemento fique ao lado de qualquer flutuante, independentemente do lado, usamos `clear: both`. Existe também o valor `none`, que é o padrão e significa que não há restrição.

O uso mais comum do `clear` é para “limpar” o efeito do `float` em containers. Quando elementos dentro de um container estão flutuando, o container pode perder a sua altura, porque não reconhece o espaço ocupado por eles. Para resolver isso, podemos colocar um elemento com `clear: both` depois dos itens flutuantes, fazendo com que o container volte a considerar a altura. Essa técnica é chamada de *clearfix* e, durante muitos anos, foi uma solução essencial em layouts baseados em float.

---

### 🔵 Resumo
| Propriedade | Valor  | Descrição                                                             |
|-------------|--------|------------------------------------------------------------------------|
| `float`     | `none`   | Padrão. Elemento segue o fluxo normal.                                 |
|             | `left`   | Faz o elemento “flutuar” para a esquerda, permitindo que outros fiquem à direita. |
|             | `right`  | Faz o elemento “flutuar” para a direita, permitindo que outros fiquem à esquerda. |
| `clear`     | `none`   | Padrão. Permite que o elemento fique ao lado de flutuantes.            |
|             | `left`   | Impede que o elemento fique ao lado de flutuantes à esquerda.          |
|             | `right`  | Impede que o elemento fique ao lado de flutuantes à direita.           |
|             | `both`   | Impede que o elemento fique ao lado de flutuantes em ambos os lados.   |

---

## 🔵 Pseudo-classes
As **pseudo-classes** são palavras-chave que adicionamos aos seletores para definir um **estado especial** de um elemento, sem a necessidade de criar ou alterar classes no HTML. Elas permitem aplicar estilos quando algo acontece, como quando o usuário passa o mouse sobre um botão, quando um link já foi visitado, ou quando um elemento é o primeiro filho de um container.

A sintaxe básica é:
```css
seletor:pseudo-classe {
  propriedade: valor;
}
```

### 🔹 Principais pseudo-classes
| Pseudo-classe     | Descrição                                                                 |
|-------------------|---------------------------------------------------------------------------|
| `:hover`          | Aplica estilos quando o usuário passa o mouse sobre o elemento.           |
| `:active`         | Aplica estilos no momento em que o elemento é clicado.                    |
| `:focus`          | Aplica estilos quando o elemento está em foco (ex.: campo de formulário selecionado). |
| `:visited`        | Estiliza links que já foram visitados.                                    |
| `:first-child`    | Seleciona o primeiro filho de um elemento pai.                            |
| `:last-child`     | Seleciona o último filho de um elemento pai.                              |
| `:nth-child(n)`   | Seleciona filhos com base na posição, onde *n* pode ser um número ou fórmula. |

---

## 🔵 Pseudo-elementos
Os **pseudo-elementos** no CSS são recursos que permitem **criar e estilizar partes específicas** de um elemento que não estão diretamente presentes no HTML. Eles são muito úteis para adicionar detalhes visuais ou manipular partes específicas do conteúdo sem a necessidade de inserir novas tags no código, mantendo o HTML mais limpo e sem elementos extras apenas para fins estéticos. Ao contrário das pseudo-classes, que trabalham com estados ou condições de um elemento, os pseudo-elementos atuam diretamente em uma parte específica do elemento, como o primeiro caractere, a primeira linha ou até mesmo conteúdo inserido artificialmente.

A sintaxe básica é:
```css
seletor::pseudo-elemento {
  propriedade: valor;
}
```

### 🔹 Principais pseudo-elementos
| Pseudo-elemento  | Descrição |
|------------------|-----------|
| `::before`    | Insere conteúdo antes do conteúdo real de um elemento. Muito usado para ícones, elementos decorativos e indicadores visuais. |
| `::after`      | Insere conteúdo logo após o conteúdo real de um elemento, sendo também útil para decoração ou informações adicionais. |
| `::first-letter` | Permite estilizar apenas a primeira letra de um bloco de texto, comum em layouts editoriais e artigos. |
| `::first-line` | Aplica estilo apenas à primeira linha de texto de um elemento, podendo alterar tipografia e cores para criar destaque inicial. |
| `::marker`       | Seleciona os marcadores dos itens da lista. |
| `::selection`  | Estiliza a área de texto selecionada pelo usuário (quando ele arrasta o cursor para marcar o texto). |

Uma característica importante é que, para usar `::before` e `::after`, é necessário que o elemento tenha uma propriedade `content`, mesmo que seja vazia (`content: ""`), caso contrário o pseudo-elemento não será exibido. Além disso, eles se comportam como elementos inline por padrão, mas podem ser transformados em blocos ou posicionados de forma personalizada com CSS.

---

## 🔵 Media Queries
As **Media Queries** são regras do CSS que permitem aplicar estilos diferentes dependendo das **características do dispositivo ou da janela do navegador**. Elas são essenciais para criar layouts responsivos, garantindo que o site seja legível e agradável em telas de tamanhos variados, como celulares, tablets e computadores.

Uma media query verifica uma condição, como a largura da tela, e aplica o CSS apenas se essa condição for verdadeira. Isso permite que você altere fontes, tamanhos de elementos, cores, posições e até esconda ou mostre elementos dependendo do tamanho da tela ou outras características.

A sintaxe básica é:
```css
@media (condição) {
  /* CSS que será aplicado se a condição for verdadeira */
}
```

### 🔹 Condições comuns
| Condição        | Descrição                                                                 |
|-----------------|---------------------------------------------------------------------------|
| `max-width`     | Aplica o estilo se a largura da tela for menor ou igual ao valor especificado. |
| `min-width`     | Aplica o estilo se a largura da tela for maior ou igual ao valor especificado. |

---