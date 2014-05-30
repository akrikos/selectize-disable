# A plugin for allowing disabling of options for with selectize.

To install:

1. Add selectize-disable to your bower configuration
1. include src/selectize-disable.css and src/selectize-disable.js on your page or in your build process
1. add the selectize-disable to your selectize options for the element you want to use

    ````
    $("#demo").selectize({
      plugins: {
        'option-disable': {
          fieldName: 'matchesRule', //default is 'disabled'
          inverse: false            //default is false
        }
      }
    });
    ````

1. ...
1. Profit!

When creating options in selectize add an entry 'disabled: true' (or specify a different field name in the options) to disable an individual option:

Default:

    ```
    {
        text: 'Example Display Value',
        value: 'exampleValue',
        disabled: true
    }
    ```
    
When fieldName has been set to 'matchesRule'

    ```
    {
        text: 'Example Display Value',
        value: 'exampleValue',
        matchesRule: true
    }
    ```

## To get the example running:

1. clone the repo
1. npm install
1. grunt install
1. open up example/index.html
