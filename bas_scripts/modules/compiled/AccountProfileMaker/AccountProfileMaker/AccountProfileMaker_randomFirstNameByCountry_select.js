var tohchoyn = GetInputConstructorValue("tohchoyn", loader);
                 if(tohchoyn["original"].length == 0)
                 {
                   Invalid("country" + " is empty");
                   return;
                 }
var garormvl = GetInputConstructorValue("garormvl", loader);
                 if(garormvl["original"].length == 0)
                 {
                   Invalid("gender" + " is empty");
                   return;
                 }
var Save = this.$el.find("#Save").val().toUpperCase();
try{
          var code = loader.GetAdditionalData() + _.template($("#AccountProfileMaker_randomFirstNameByCountry_code").html())({"tohchoyn": tohchoyn["updated"],"garormvl": garormvl["updated"],"variable": "VAR_" + Save});
          code = Normalize(code,0);
          BrowserAutomationStudio_Append("", BrowserAutomationStudio_SaveControls() + code, action, DisableIfAdd);
        }catch(e)
        {}
