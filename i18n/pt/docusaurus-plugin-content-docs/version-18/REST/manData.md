---
id: manData
title: Manipulação de dados
---

Todas as [classes, atributos](configuration.md#exposing-tables-and-fields) e métodos expostos do datastore podem ser acessados por REST. Dataclass, attribute, and method names are case-sensitive; however, the data for queries is not.

## Pesquisas de dados

Para pesquisar diretamente aos dados, pode fazer isso usando a função [`$filter`]($filter.md). Por exemplo, para encontrar a pessoa chamada "smith" poderia escrever:

`http://127.0.0.1:8081/rest/Person/?$filter="lastName=Smith"`

## Adicionar, modificar e apagar entidades

Com o REST API, pode realizar todas as manipulações de dados que quiser em 4D.

Para adicionar e modificar entidades, pode chamar [`$method=update`]($method.md#methodupdate). Se quiser apagar uma ou mais entidades, pode usar [`$method=delete`]($method.md#methoddelete).

Besides retrieving a single entity in a dataclass using [\{dataClass\}({key})](%7BdataClass%7D_%7Bkey%7D.html), you can also write a method in your DataClass class and call it to return an entity selection (or a collection) by using [\{dataClass\}/\{method\}](%7BdataClass%7D.html#dataclassmethod).

Antes de devolver a coleção, também pode ordená-la utilizando [`$orderby`]($orderby.md) um ou vários atributos (mesmo os atributos de relação).

## Navegando dados

Adicione [`$skip`]($skip.md) (para definir qual entidade a iniciar) e [`$top/$limit`]($top_$limit.md) (para definir quantas entidades retornar) petições REST para suas pesquisas ou seleções de entidade para navegar a coleção de entidades.

## Criar e gerenciar conjuntos de entidades

Um conjunto de entidades (ou então *seleções de entidades*) é uma coleção de entidades obtidas através de petições REST que é armazenada no cache de 4D Server. Usar um conjunto de entidades previne que pesquise continuamente sua aplicação pelos mesmos resultados. Acessar um conjunto de entidades é mais rápido e pode melhorar a velocidade de sua aplicação.

Para criar um conjunto de entidades, chame [`$method=entityset`]($method.md#methodentityset) em sua petição REST. Como uma medida de segurança, também pode usar [`$savedfilter`]($savedfilter.md) ou [`$savedorderby`]($savedorderby.md) quando chamar [`$filter`]($filter.md) ou [`$orderby`]($orderby.md) assim se o conjunto de entidade alguma ver for removido ou der time out no servidor, pode ser facilmente recuperado com a mesma ID que antes.

To access the entity set, you must use `$entityset/\{entitySetID\}`, for example:

`/rest/People/$entityset/0AF4679A5C394746BFEB68D2162A19FF`

Como padrão, um conjunto de entidades é armazenado por duas horas; entretanto pode mudar o timeout ao passar um novo valor a [`$timeout`]($timeout.md). O timeout é continuamente resetado ao valor definido (seja o valor padrão ou um definido por você) a cada vez que for usado.

Se quiser remover um conjunto de entidades da cache 4D Server, pode usar [`$method=release`]($method.md#methodrelease).

Se modificar qualquer dos atributos de entidade no conjunto de entidades, o valor será atualizado. Entretanto, se modificar um valor que era uma parte da pesquisa executada para criar o conjunto de entidades, não será removido do conjunto de entidades mesmo se não se enquadrar mais nos critérios de pesquisa. Qualquer entidade que apagar não será mais parte do conjunto de entidades.

Se o conjunto de entidades não existir mais no cache 4D Server, será recriada com um novo timeout padrão de 10 minutos. O conjunto de entidades será renovado (certas entidades podem ser incluidas e outras podem ser removidas) já que desde a última vez que foi criada, não existe mais antes da recriação).

Using [`$entityset/\{entitySetID\}?$logicOperator... &$otherCollection`]($entityset.md#entitysetentitysetidoperatorothercollection), you can combine two entity sets that you previously created. Pode então combinar os resultados em ambos, retornar só o que é comum entre os dois, ou retornar o que não é comum entre os dois.

Uma nova seleção de entidades é retornada, entretanto também pode criar um novo conjunto de entidades chamando [`$method=entityset`]($method.md#methodentityset) no fim da petição REST.

## Calcular dados

Usando [`$compute`]($compute.md), pode computar **average**, **count**, **min**, **max**, ou **sum** para um atributo específico em uma classe de dados. Pode também computar todos os valores com a palavra chave $all.

Por exemplo, para obter o maior salário:

`/rest/Employee/salary/?$compute=sum`

Para computar todos os valores e retornar um objeto JSON:

`/rest/Employee/salary/?$compute=$all`

## Obter dados de métodos

You can call 4D project methods that are [exposed as REST Service](%7BdataClass%7D.html#4d-configuration). Um método 4D pode retornar em $0:

- um objeto
- uma colecção

The following example is a dataclass method that reveives parameters and returns an object:

```4d
// 4D findPerson method
C_TEXT($1;$firstname;$2;$lastname)
$firstname:=$1
$lastname:=$2

$0:=ds.Employee.query("firstname = :1 and lastname = :2";$firstname;$lastname).first().toObject()
```

The method properties are configured accordingly on the 4D project side:

![alt-text](../assets/en/REST/methodProp_ex.png)

Em seguida, você pode enviar a solicitação REST POST seguinte, por exemplo, usando o comando 4D `HTTP Request`:

```4d
C_TEXT($content)
C_OBJECT($response)

$content:="[\"Toni\",\"Dickey\"]" 

$statusCode:=HTTP Request(HTTP POST method;"127.0.0.1:8044/rest/Employee/findPerson";$content;$response)
```

Method calls are detailed in the [\{dataClass\}](%7BdataClass%7D.html#dataclassmethod-and-dataclasskeymethod) section.

## Selecionar atributos a obter

Sempre pode definir que atributos a retornar na resposta REST depois de uma petição inicial ao passar sua rota na petição (*e.g.*, `Company(1)/name,revenues/`)

Pode aplicar essa técnica a:

| Object                | Sintaxe                                                     | Exemplo                                                       |
| --------------------- | ----------------------------------------------------------- | ------------------------------------------------------------- |
| Dataclass             | \{dataClass\}/{att1,att2...}                              | /People/firstName,lastName                                    |
| Coleção de entidades  | \{dataClass\}/{att1,att2...}/?$filter="{filter}"          | /People/firstName,lastName/?$filter="lastName='a@'"           |
| Entidade especificada | \{dataClass\}({ID})/{att1,att2...}                        | /People(1)/firstName,lastName                                 |
|                       | \{dataClass\}:\{attribute\}(value)/{att1,att2...}/      | /People:firstName(Larry)/firstName,lastName/                  |
| Seleção de entidades  | \{dataClass\}/{att1,att2...}/$entityset/\{entitySetID\} | /People/firstName/$entityset/528BF90F10894915A4290158B4281E61 |

Os atributos devem ser delimitados por uma vírgula, *ou seja*, `/Employee/firstName,lastName,salary`. Os atributos de armazenamento ou relação podem ser passados.

### Exemplos

Aqui alguns exemplos, mostrando como especificar que atributos vai retornar dependendo da técnica usada para recuperar entidades.

Pode aplicar esse filtro das maneiras a seguir:

- Classes de dados (todas ou uma coleção de entidades em uma classe de dados)
- Entidades especificas
- Conjuntos de entidades

#### Exemplo com uma dataclass

As petições abaixo retornar apenas o primeiro nome e o último nome da classe de dados People (seja a classe de dados inteira ou a seleção de entidades baseada na pesquisa definida em`$filter`).

 `GET  /rest/People/firstName,lastName/`

**Resultadoi**:

````
{
    __entityModel: "People",
    __COUNT: 4,
    __SENT: 4,
    __FIRST: 0,
    __ENTITIES: [
        {
            __KEY: "1",
            __STAMP: 1,
            firstName: "John",
            lastName: "Smith"
        },
        {
            __KEY: "2",
            __STAMP: 2,
            firstName: "Susan",
            lastName: "O'Leary"
        },
        {
            __KEY: "3",
            __STAMP: 2,
            firstName: "Pete",
            lastName: "Marley"
        },
        {
            __KEY: "4",
            __STAMP: 1,
            firstName: "Beth",
            lastName: "Adams"
        }
    ]
}
````

`GET  /rest/People/firstName,lastName/?$filter="lastName='A@'"/`

**Resultadoi**:

````
{
    __entityModel: "People",
    __COUNT: 1,
    __SENT: 1,
    __FIRST: 0,
    __ENTITIES: [
        {
            __KEY: "4",
            __STAMP: 4,
            firstName: "Beth",
            lastName: "Adams"
        }
    ]
}
````

#### Exemplo entidade

As petições abaixo retornar apenas os atributos primeiro nome e último sobrenome de uma entidade especifica na dataclasse People:

 `GET  /rest/People(3)/firstName,lastName/`

**Resultadoi**:

````
{
    __entityModel: "People",
    __KEY: "3",
    __STAMP: 2,
    firstName: "Pete",
    lastName: "Marley"
}
````

 `GET  /rest/People(3)/`

**Resultadoi**:

````
{
    __entityModel: "People",
    __KEY: "3",
    __STAMP: 2,
    ID: 3,
    firstName: "Pete",
    lastName: "Marley",
    salary: 30000,
    employer: {
        __deferred: {
            uri: "http://127.0.0.1:8081/rest/Company(3)",
            __KEY: "3"
        }
    },
    fullName: "Pete Marley",
    employerName: "microsoft"

}
````

#### Exemplo de conjunto de Entidades

Quanto tiver [criado um conjunto de entidade](#creating-and-managing-entity-set), pode filtrar a informação nele definindo quais atributos a retornar:

 `GET  /rest/People/firstName,employer.name/$entityset/BDCD8AABE13144118A4CF8641D5883F5?$expand=employer

## Vendo um atributo de imagem

Se quiser ver um atributo de imagem integralmente, escreva o abaixo:

 `GET  /rest/Employee(1)/photo?$imageformat=best&$version=1&$expand=photo`

Para saber mais sobre formatos de imagem, veja [`$imageformat`]($imageformat.md). Para saber mais sobre parâmetros de versão, veja [`$version`]($version.md).

## Salvar um atributo BLOB ao disco

Se quiser salvar um BLOB armazenado na dataclass, pode escrever:

  `GET  /rest/Company(11)/blobAtt?$binary=true&$expand=blobAtt`

## Recuperar apenas uma entidade

You can use the [`\{dataClass\}:\{attribute\}(value)`](%7BdataClass%7D.html#dataclassattributevalue) syntax when you want to retrieve only one entity. É particularmente útil quando quiser fazer uma pesquisa relacionada que não seja criada com a mesma chave primária que a dataclass. Por exemplo, pode escrever:

 `GET  /rest/Company:companyCode("Acme001")`
