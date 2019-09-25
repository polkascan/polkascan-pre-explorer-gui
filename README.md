# Polkascan PRE Explorer GUI
Polkascan PRE Explorer GUI Angular Application

## Description
The purpose of the Polkascan PRE Explorer GUI Application is to make the data which is produced by the Polkascan PRE Harvester Application and disseminated by the Polkascan PRE Explorer API Application accessible to day-to-day end-user. The Polkascan PRE Explorer GUI Application provides a user interface to the Polkascan PRE Explorer API Application and intends to showcase what developers should be able to build on top of the Polkascan PRE Explorer API Application for a wide audience of day-to-day users.

## License
https://github.com/polkascan/polkascan-pre-explorer-gui/blob/master/LICENSE

# i18n for Polkascan
Polkascan PRE Explorer GUI Angular Application

## Description
I18n of Polkascan PRE Explorer GUI
The Polkascan PR Explorer GUI (https://github.com/polkascan/polkascan-pre-explorer-gui) is an Angular application. This feature is extending the Angular application with an internationalization and localization architecture. This, in turn, will make Polkascan PRE available and user-friendly to a worldwide audience in multiple languages and with multiple localization settings. WEB3SCAN (the organization behind Polkascan) will use this work to extend polkascan.io with internationalization and localization features.

## License
https://github.com/polkascan/polkascan-pre-explorer-gui/blob/master/LICENSE

## Table of Contents
* [Usage](#usage)
* [Plugins](#plugins)
* [Editors](#editors)
* [Additional Framework Support](#additional-framework-support)

## Usage

### How to translate Polkascan application

#### The JSON translation file
Each language is stored in a separate .json file. For example, the JSON file for the English translation: assets/i18n/en.json.

There`s can read 2 JSON formats:
```json
{
"demo.title": "Translation demo",
"demo.text": "This is a simple demonstration app for ngx-translate"
}
```

or

```json
{
"demo": {
"title": "Translation demo",
"text": "This is a simple demonstration app for ngx-translate"
}
}
```
This is just a matter of personal taste. The second one (so called namespaced-json format) is more structured and gives a better overview over the translations.


#### Using translations
`title` and `text` are identifiers ngx-translate uses to find the translation strings. 

You have two choices when it comes to adding translations:

- translation pipe — `{{'id' | translate}}`
- translation directive — `<element [translate]="'id'"></element>`

Both options lead to the same result — it's just a matter of personal tast which one you want to use.

```html
<div>
<!-- translation: translation pipe -->
<h1>{{ 'demo.title' | translate }}</h1>

<!-- translation: directive (key as attribute)-->
<p [translate]="'demo.text'"></p>

<!-- translation: directive (key as content of element) -->
<p translate>demo.text</p>
</div>
```

#### Translations with parameters

The i18n feature also supports parameters in translations. They are passed as an object, the keys can be used in the translation strings.

```html
<!-- translation: translation pipe -->
<p>{{ 'demo.greeting' | translate:{'name':'Andreas'} }}</p>

<!-- translation: directive (key as attribute) -->
<p [translate]="'demo.greeting'" [translateParams]="{name: 'Andreas'}"></p>

<!-- translation: directive (key as content of element)-->
<p translate [translateParams]="{name: 'Andreas'}">demo.greeting</p>
```

And the extended translations file:

```json
{
"demo": {
…
"greeting": "Hello {{name}}!"
}
}
```

### Update JSON files with ngx-translate-extract
Keeping the JSON files and our Polkascan in sync: there's a tool called `extract-translations` script. It scans our Angular app for the use of translations and adds new translations to your JSON files. 

A simple command now updates your JSON files:

```ts
npm run extract-translations
```

### Using translatable strings in your TypeScript files

Sometimes you have to add translatable strings to your TypeScript code. ngx-translate-extract needs a way to distinguish between these strings and all the other strings in your application.

This is where the marker function comes into play. The function itself does nothing — it only passes the string as a result.

```ts
import {_} from '@biesbjerg/ngx-translate-extract/dist/utils/utils';

{
…
var messageBoxContent = _('messagebox.warning.text');
…
}
```

### How to work with pluralization in Angular 7 and ngx-translate

Sometimes it's not enough to simply add a value to your translations. There are cases where parts or event the whole sentence has to change.

Think about the following situation: You want to display the number of images a user has uploaded.

- No image uploaded yet.
- One image uploaded.
- 123 images uploaded.

Or you want to display a dynamic value:

- My favorite color is green.
- My favorite color is red.
- My favorite color is blue.

The `translate-messageformat-compiler` is what you need now! It parses messages using the ICU syntax.

Update ***.component.html to render the new demo messages:

```html
<ul>
<li translate [translateParams]="{ count: 0 }">pluralization.things</li>
<li translate [translateParams]="{ count: 1 }">pluralization.things</li>
<li>{{'pluralization.things' | translate:"{ count: 2 }"}}</li>
</ul>
<ul>
<li translate [translateParams]="{ gender: 'female', name: 'Sarah' }">pluralization.people</li>
<li translate [translateParams]="{ gender: 'male', name: 'Peter' }">pluralization.people</li>
<li>{{'pluralization.people' | translate:"{ name: 'Sarah + Peter' }"}}</li>
</ul>
```
Finally update the .json files with the new ICU syntax:

```json
{
"pluralization": {
"things": "There {count, plural, =0{is} one{is} other{are}} {count, plural, =0{} one{a} other{several}} {count, plural, =0{nothing} one{thing} other{things}}",
"people": "{gender, select, male{His name is} female{Her name is} other{Their names are }} {name}"
}
}
```

## Plugins
- [Localize Router](https://github.com/Greentube/localize-router) by @meeroslav: An implementation of routes localization for Angular. If you need localized urls (for example /fr/page and /en/page).
- [.po files Loader](https://github.com/biesbjerg/ngx-translate-po-http-loader) by @biesbjerg: Use .po translation files with ngx-translate
- [ngx-translate-extract](https://github.com/biesbjerg/ngx-translate-extract) by @biesbjerg: Extract translatable strings from your projects
- [MessageFormat Compiler](https://github.com/lephyrus/ngx-translate-messageformat-compiler) by @lephyrus: Compiler for ngx-translate that uses messageformat.js to compile translations using ICU syntax for handling pluralization, gender, and more
- [ngx-translate-zombies](https://marketplace.visualstudio.com/items?itemName=seveseves.ngx-translate-zombies) by @seveves: A vscode extension that finds unused translation keys and shows them in a diff view (so called zombies).
- [ngx-translate-multi-http-loader](https://github.com/denniske/ngx-translate-multi-http-loader) by @denniske: Fetch multiple translation files with ngx-translate.
- [ngx-translate-cache](https://github.com/jgpacheco/ngx-translate-cache) by @jgpacheco: Simplified version of localize-router. If you are already using localize-router you don't need this extension. This extension is aimed only to facilitate language caching.
- [ngx-translate-module-loader](https://github.com/larscom/ngx-translate-module-loader) by @larscom: Fetch multiple translation files (http) with ngx-translate. Each translation file gets it's own namespace out of the box and the configuration is very flexible.
- [ngx-translate-all](https://github.com/irustm/ngx-translate-all) by @irustm: Automate translations for Angular projects.
- [ngx-translate-migrate](https://github.com/irustm/ngx-translate-migrate) by @irustm: Automate migrations from ngx-translate to Angular i18n.

## Editors
- [BabelEdit](https://www.codeandweb.com/babeledit) — translation editor for JSON files
- [Translation Manager](https://translation-manager-86c3d.firebaseapp.com/) — Progressive web-app, translation editor for JSON files

### Extensions

#### VScode
- [Generate Translation](https://marketplace.visualstudio.com/items?itemName=thiagocordeirooo.generate-translation) by [@thiagocordeirooo](https://github.com/thiagocordeirooo): A visual studio code extension for you to generate the translations without leaving the current file.


## Additional Framework Support

* [Use with NativeScript](https://github.com/NathanWalker/nativescript-ng2-translate/issues/5#issuecomment-257606661)
>>>>>>> master
