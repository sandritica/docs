---
id: onPrintingBreak
title: On Printing Break
---

| コード | 呼び出し元                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | 定義                           |
| --- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| 6   | [4D Write Pro area](FormObjects/writeProArea_overview.md) - [Button](FormObjects/button_overview.md) - [Button Grid](FormObjects/buttonGrid_overview.md) - [Check Box](FormObjects/checkbox_overview.md) - [Combo Box](FormObjects/comboBox_overview.md) - [Dropdown list](FormObjects/dropdownList_Overview.md) - Form - [Hierarchical List](FormObjects/list_overview.md) - [Input](FormObjects/input_overview.md) - [Picture Button](FormObjects/pictureButton_overview.md) - [Picture Pop up menu](FormObjects/picturePopupMenu_overview.md) - [Plug-in Area](FormObjects/pluginArea_overview.md) - [Progress Indicators](FormObjects/progressIndicator.md) - [Radio Button](FormObjects/radio_overview.md) - [Ruler](FormObjects/ruler.md) - [Spinner](FormObjects/spinner.md) - [Splitter](FormObjects/splitters.md) - [Stepper](FormObjects/stepper.md) - [Tab control](FormObjects/tabControl.md) | フォームのブレークエリアのひとつが印刷されようとしている |

## 説明

`On Printing Break` イベントは、**出力フォーム** のコンテキストでのみ使用できます。  このイベントは、出力フォームのブレークエリアが印刷されようとするたびに発生し、これによってブレーク値を評価できるようになります。

このイベントは通常、`Subtotal` コマンドの呼び出し後に発生します。

> このイベントは、プロジェクトフォームでは選択できず、**テーブルフォーム** でのみ利用できます。



