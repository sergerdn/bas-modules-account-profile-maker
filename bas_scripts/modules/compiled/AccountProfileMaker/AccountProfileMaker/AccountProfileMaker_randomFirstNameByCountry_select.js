var AccountProfileMaker_randomFirstNameByCountry_country = GetInputConstructorValue("AccountProfileMaker_randomFirstNameByCountry_country", loader);
                 if(AccountProfileMaker_randomFirstNameByCountry_country["original"].length == 0)
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
          var code = loader.GetAdditionalData() + _.template($("#AccountProfileMaker_randomFirstNameByCountry_code").html())({"AccountProfileMaker_randomFirstNameByCountry_country": AccountProfileMaker_randomFirstNameByCountry_country["updated"],"lbggowju": lbggowju["updated"],"variable": "VAR_" + Save});
          code = Normalize(code,0);
          BrowserAutomationStudio_Append("", BrowserAutomationStudio_SaveControls() + code, action, DisableIfAdd);
        }catch(e)
        {}
