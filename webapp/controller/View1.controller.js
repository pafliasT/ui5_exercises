sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("project1.controller.View1", {
            onInit: function () {
                //test
            },
            onCallApiPress: function () {
                var oModel = new JSONModel();
                var sUrl = "https://jsonplaceholder.typicode.com/posts"; // API URL

                oModel.loadData(sUrl);
                oModel.attachRequestCompleted(function() {
                    var data = oModel.getData();
                    console.log(data); // Log the data
                });
            }
        });
    });
