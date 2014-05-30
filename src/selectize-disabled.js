/**
 * Selectize plugin for allowing disabling of options
 * @param  {Object} options - modify attributes of selectize-disable
 *   fieldName: sets the name of the field to use to determine if an option should be disabled
 *     (default is 'disabled')
 *
 *   inverse: if true, a option[fieldName] == false will disable the option (by default option[fieldName] == true disables the option)
 *     (default is false)
 */
Selectize.define('option-disable', function(options) {
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
    var html = originalRender.apply(this, arguments);
    if (data[fieldName] ^ options.inverse) {
      // first instance of option surrounded by quotes or spaces should be the class
      html = html.replace(/(['" ])option(?=['" ])/, '$1option selectize-disabled');
    }
    return html;
  }

  // override addItem to not add items that are disabled
  var originalAddItem = this.addItem;
  this.addItem = function(value) {
    if (this.options.hasOwnProperty(value) && (this.options[value][fieldName] ^ options.inverse))
      return;
    else
      originalAddItem.apply(this, arguments);
  }
});