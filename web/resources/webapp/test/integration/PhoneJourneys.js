jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"dummy/test/integration/NavigationJourneyPhone",
		"dummy/test/integration/NotFoundJourneyPhone",
		"dummy/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});