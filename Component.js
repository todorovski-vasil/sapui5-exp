sap.ui.define([
   "sap/ui/core/UIComponent",
   "sap/ui/model/json/JSONModel",
   "controller/helloDialog"
], function (UIComponent, JSONModel, helloDialog) {
	"use strict";

	return UIComponent.extend("sapui5-exploration.Component", {

		metadata : {
			manifest: "json"
		},

		init : function () {
			// call the init function of the parent
			UIComponent.prototype.init.apply(this, arguments);

			// set data model
			var oData = {
				recipient : {
					name : "World"
				}
			};
			var oModel = new JSONModel(oData);
			this.setModel(oModel);

			//init oConfig
// 			var oConfig = this.getMetadata().getConfig();

			// set invoice model - local
// 			var sNamespace = this.getMetadata().getManifestEntry("sap.app").id;
// 			var oInvoiceModel = new JSONModel(jQuery.sap.getModulePath(sNamespace, oConfig.invoiceLocal));
// 			this.setModel(oInvoiceModel, "invoice");

			// set invoice model - remote
// 			var oInvoiceModelRemote = new ODataModel(oConfig.invoiceRemote);
// 			this.setModel(oInvoiceModelRemote, "invoiceRemote");

			// set dialog
			this.helloDialog = new helloDialog();

			// // set i18n model
			// var i18nModel = new ResourceModel({
			// 	bundleName : "i18n.i18n"
			// });
			// this.setModel(i18nModel, "i18n");

			// create the views based on the url/hash
			this.getRouter().initialize();
		}
	});
});