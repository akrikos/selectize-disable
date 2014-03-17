Selectize.define('option-disable', function() {
  // override render to show which elements are disabled
  var originalRender = this.render;
  this.render = function(templateName, data) {
    var html = originalRender.apply(this, arguments);
    if (data.disabled)
      // first instance of option surrounded by quotes or spaces should be the class
      html = html.replace(/(['" ])option(?=['" ])/, '$1option selectize-disabled');
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