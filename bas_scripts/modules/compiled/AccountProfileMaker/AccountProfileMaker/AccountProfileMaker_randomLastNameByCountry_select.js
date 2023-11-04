var xixxajpy = GetInputConstructorValue("xixxajpy", loader);
                 if(xixxajpy["original"].length == 0)
                 {
                   Invalid("country" + " is empty");
                   return;
                 }
var fanrnloy = GetInputConstructorValue("fanrnloy", loader);
                 if(fanrnloy["original"].length == 0)
                 {
                   Invalid("gender" + " is empty");
                   return;
                 }
var Save = this.$el.find("#Save").val().toUpperCase();
try{
          var code = loader.GetAdditionalData() + _.template($("#AccountProfileMaker_randomLastNameByCountry_code").html())({"xixxajpy": xixxajpy["updated"],"fanrnloy": fanrnloy["updated"],"variable": "VAR_" + Save});
          code = Normalize(code,0);
          BrowserAutomationStudio_Append("", BrowserAutomationStudio_SaveControls() + code, action, DisableIfAdd);
        }catch(e)
        {}
