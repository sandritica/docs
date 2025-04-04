---
id: qr-get-drop-column
title: QR Get drop column
slug: /commands/qr-get-drop-column
displayed_sidebar: docs
---

<!--REF #_command_.QR Get drop column.Syntax-->**QR Get drop column** ( *area* ) : Integer<!-- END REF-->
<!--REF #_command_.QR Get drop column.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Reference of the area |
| Function result | Integer | &#8592; | Drop value |

<!-- END REF-->

## Description 

<!--REF #_command_.QR Get drop column.Summary-->The QR Get drop column command returns a value depending on where the drop was performed<!-- END REF-->:

* if the value is negative, it indicates a column number (i.e., -3 if the the drop was performed on column number 3)
* if the value is positive, it indicates that the drop was performed on a separator preceding the column (i.e., 3 if the drop was performed after column 2). Keep in mind that the drop does not have to take place before an existing column.

If you pass an invalid *area* number, the error -9850 will be generated.

## See also 

[QR DELETE COLUMN](qr-delete-column.md)  

## Properties

|  |  |
| --- | --- |
| Command number | 747 |
| Thread safe | &cross; |
| Modifies variables | error |


