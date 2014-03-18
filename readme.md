A plugin for allowing disabling of options for with selectize.

TODO: make these instructions more user friendly

To install:

1. Add selectize-disable to your bower configuration
1. include src/selectize-disable.css and src/selectize-disable.js on your page or in your build process
1. add the selectize-disable to your selectize options for the element you want to use
    $("#demo").selectize({
      plugins: {
        'option-disable': {fieldName: 'matchesRule', inverse: false}
      }
    })
1. ...
1. Profit!

When creating options in selectize add an entry 'disabled: true' (default) or specify your own field name to disable an individual option:

    {
        text: 'Example Display Value',
        value: 'exampleValue',
        disabled: true
    }

To get the example running:

1. clone the repo
1. npm install
1. grunt install
1. open up example/index.html
