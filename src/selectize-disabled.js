Selectize.define('option-disable', function(options) {
  console.log(options);
  var inverseValue = false,
    fieldName = 'disabled';

  if (options && typeof options.inverse !== 'undefined') {
    inverseValue = !!options.inverse
  }

  if (options && typeof options.fieldName !== 'undefined') {
    fieldName = options.fieldName
  }

  // override render to show which elements are disabled
  var originalRender = this.render;
  this.render = function(templateName, data) {
    console.log('render', data.name, data[fieldName], options.inverse, data[fieldName] ^ options.inverse);
    var html = originalRender.apply(this, arguments);
    if (data[fieldName] ^ options.inverse) {
      console.log('disabled', data);
      // first instance of option surrounded by quotes or spaces should be the class
      html = html.replace(/(['" ])option(?=['" ])/, '$1option selectize-disabled');
    }
    return html;
  }

  // override addItem to not add items that are disabled
  var originalAddItem = this.addItem;
  this.addItem = function(value) {
    if (this.options.hasOwnProperty(value) && this.options[value].disabled)
      return;
    else
      originalAddItem.apply(this, arguments);
  }
});