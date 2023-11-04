var ecoezlmo = GetInputConstructorValue("ecoezlmo", loader);
                 if(ecoezlmo["original"].length == 0)
                 {
                   Invalid("country" + " is empty");
                   return;
                 }
var lbggowju = GetInputConstructorValue("lbggowju", loader);
                 if(lbggowju["original"].length == 0)
                 {
                   Invalid("gender" + " is empty");
                   return;
                 }
var Save = this.$el.find("#Save").val().toUpperCase();
try{
          var code = loader.GetAdditionalData() + _.template($("#AccountProfileMaker_randomFirstNameByCountry_code").html())({"ecoezlmo": ecoezlmo["updated"],"lbggowju": lbggowju["updated"],"variable": "VAR_" + Save});
          code = Normalize(code,0);
          BrowserAutomationStudio_Append("", BrowserAutomationStudio_SaveControls() + code, action, DisableIfAdd);
        }catch(e)
        {}
