define(
   ["sap/watt/platform/plugin/platform/service/ui/AbstractPart"],
   function(AbstractPart) {
      "use strict";

      var oRightPanePart = AbstractPart.extend("xmllivepreview.LivePreview", {
         _oView: null,
         getContent: function() {
            var that = this;
            return AbstractPart.prototype.getContent.apply(this, arguments).then(function() {
               if (!that._oView) {
                  that._oView = sap.ui.view({
                     viewName: "xmllivepreview.view.LivePreview",
                     type: sap.ui.core.mvc.ViewType.XML,
                     viewData: {
                        context: that.context
                     }
                  });
               }
               return that._oView;
            });

         }
      });
      return oRightPanePart;
   });