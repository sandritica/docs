---
id: formObjectsOverview
title: Sobre objetos formulário 4D
---

O usuário constrói e personaliza os seus formulários de aplicação manipulando os objetos neles contidos. You can add objects, reposition objects, set object properties, enforce business rules by specifying data entry constraints, or write object methods that run automatically when the object is used.

## Active and static objects

4D forms support a large number of built-in **active** and **static** objects:

- **active objects** perform a database task or an interface function. Os campos são objetos ativos. Other active objects — enterable objects (variables), combo boxes, drop-down lists, picture buttons, and so on — store data temporarily in memory or perform some action such as opening a dialog box, printing a report, or starting a background process.
- **static objects** are generally used for setting the appearance of the form and its labels as well as for the graphic interface. Os objetos estáticos não têm variáveis associadas como os objetos ativos. No entanto, é possível inserir objetos dinâmicos em objetos estáticos.


## Manipulação de objectos de formulário

Pode adicionar ou modificar objetos de formulários 4D das seguintes formas:

*   **[Form Editor](FormEditor/formEditor.md):** Drag an object from the Form Editor toolbar onto the form. Then use the Property List to specify the object's properties.   
  See the [Building Forms](https://doc.4d.com/4Dv17R6/4D/17-R6/Building-forms.200-4354618.en.html) chapter for more information.

* **4D language**: Commands from the [Objects (Forms)](https://doc.4d.com/4Dv17R5/4D/17-R5/Objects-Forms.201-4127128.en.html) theme such as `OBJECT DUPLICATE` or `OBJECT SET FONT STYLE` allow to create and define form objects.

*   **Editor de formulários:** arraste um objeto da barra de ferramentas do editor de formulários ao formulário. Then use the Property List to specify the object's properties.   
  See the [Dynamic Forms](https://doc.4d.com/4Dv17R5/4D/17-R5/Dynamic-Forms.300-4163740.en.html#3692292) page for information.
