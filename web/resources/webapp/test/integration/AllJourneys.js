jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 POHeader in the list
// * All 3 POHeader have at least one POItem

sap.ui.require([
	"sap/ui/test/Opa5",
	"dummy/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"dummy/test/integration/pages/App",
	"dummy/test/integration/pages/Browser",
	"dummy/test/integration/pages/Master",
	"dummy/test/integration/pages/Detail",
	"dummy/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "dummy.view."
	});

	sap.ui.require([
		"dummy/test/integration/MasterJourney",
		"dummy/test/integration/NavigationJourney",
		"dummy/test/integration/NotFoundJourney",
		"dummy/test/integration/BusyJourney",
		"dummy/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});