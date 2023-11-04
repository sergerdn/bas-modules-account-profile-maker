var qozbjqcn = GetInputConstructorValue("qozbjqcn", loader);
                 if(qozbjqcn["original"].length == 0)
                 {
                   Invalid("country" + " is empty");
                   return;
                 }
var vbksofxp = GetInputConstructorValue("vbksofxp", loader);
                 if(vbksofxp["original"].length == 0)
                 {
                   Invalid("gender" + " is empty");
                   return;
                 }
var Save = this.$el.find("#Save").val().toUpperCase();
try{
          var code = loader.GetAdditionalData() + _.template($("#AccountProfileMaker_randomFirstNameByCountry_code").html())({"qozbjqcn": qozbjqcn["updated"],"vbksofxp": vbksofxp["updated"],"variable": "VAR_" + Save});
          code = Normalize(code,0);
          BrowserAutomationStudio_Append("", BrowserAutomationStudio_SaveControls() + code, action, DisableIfAdd);
        }catch(e)
        {}
