# Flash Card

A simple flash card app for memorizing programming terminology and concepts. Built using AngularJS 1.5.

## Todo

* Add more terms

## For Developers

This site is built currently as a front-end only app. However, there is a build step that needs to happen each time a new term is added to the `terms` directory:

`node update-words.js`

This updates the `words.js` file which is used on the front-end, and will need to be subsequently checked in.

### Testing Locally

Use [serve](https://www.npmjs.com/package/serve) from npm, or use Python:

```
python -m SimpleHTTPServer
```

## Adding Flash Card Terms

Flash card terms are written as markdown files within subdirectories within the `terms` directory. Currently, `terms` has these subdirectories, each representing a broad category:

* `HTML`
* `CSS`
* `JavaScript`
* `jQuery`
* `AngularJS`

Within each of these subdirectories, each term is represented by the presence of a `.md` file. For example, the term `ng-click` is represented by the `AngularJS/ng-click.md` file. The term that is displayed on the app will be taken from the base name of the `.md` file, in this case "ng-click", and the actual content to be displayed when the term's definition is revealed is the contents of the `.md` file.

### To add a new term

1. Create a new `.md` file within the subdirectory corresponding to a board category, write descriptive content within the file.
2. Run `node update-words.js` in order for the front-end to pick up the changes.

### Links

Within the description written in Markdown format, there is the ability to link to other terms, which is a powerful way to relate terms together. For example, if I want to link to "ng-model" within the AngularJS category, I would use the following syntax to create a link.

```
[ng-model](#AngularJS/ng-model)
```

### Highlights

Another thing that's helpful for students is highlighting the thing in question (the term) within the context of a larger code example. To do that, you create a `span` element within a `pre` element with the `class` of `highlight`. For example:

```
<pre>
&lt;h1&gt;<span class="highlight">{{name}}</span>&lt;/h1&gt;
</pre>
```

## Publish

When you are ready to publish, assuming you have collaborator access to flash-cards.surge.sh. You can run:

```
./publish
```

And your changes will be live on <http://flash-cards.surge.sh>.
