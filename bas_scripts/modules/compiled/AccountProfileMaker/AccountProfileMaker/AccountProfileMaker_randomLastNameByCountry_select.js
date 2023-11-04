var acgchudy = GetInputConstructorValue("acgchudy", loader);
                 if(acgchudy["original"].length == 0)
                 {
                   Invalid("country" + " is empty");
                   return;
                 }
var fcfhhhde = GetInputConstructorValue("fcfhhhde", loader);
                 if(fcfhhhde["original"].length == 0)
                 {
                   Invalid("gender" + " is empty");
                   return;
                 }
var Save = this.$el.find("#Save").val().toUpperCase();
try{
          var code = loader.GetAdditionalData() + _.template($("#AccountProfileMaker_randomLastNameByCountry_code").html())({"acgchudy": acgchudy["updated"],"fcfhhhde": fcfhhhde["updated"],"variable": "VAR_" + Save});
          code = Normalize(code,0);
          BrowserAutomationStudio_Append("", BrowserAutomationStudio_SaveControls() + code, action, DisableIfAdd);
        }catch(e)
        {}
