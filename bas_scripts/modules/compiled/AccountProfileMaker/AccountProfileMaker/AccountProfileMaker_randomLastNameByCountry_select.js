var icpoqeww = GetInputConstructorValue("icpoqeww", loader);
                 if(icpoqeww["original"].length == 0)
                 {
                   Invalid("country" + " is empty");
                   return;
                 }
var wtfyeyro = GetInputConstructorValue("wtfyeyro", loader);
                 if(wtfyeyro["original"].length == 0)
                 {
                   Invalid("gender" + " is empty");
                   return;
                 }
var Save = this.$el.find("#Save").val().toUpperCase();
try{
          var code = loader.GetAdditionalData() + _.template($("#AccountProfileMaker_randomLastNameByCountry_code").html())({"icpoqeww": icpoqeww["updated"],"wtfyeyro": wtfyeyro["updated"],"variable": "VAR_" + Save});
          code = Normalize(code,0);
          BrowserAutomationStudio_Append("", BrowserAutomationStudio_SaveControls() + code, action, DisableIfAdd);
        }catch(e)
        {}