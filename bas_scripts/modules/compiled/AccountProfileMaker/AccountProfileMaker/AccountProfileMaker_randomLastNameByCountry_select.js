var AccountProfileMaker_randomLastNameByCountry_country = GetInputConstructorValue("AccountProfileMaker_randomLastNameByCountry_country", loader);
                 if(AccountProfileMaker_randomLastNameByCountry_country["original"].length == 0)
                 {
                   Invalid("country" + " is empty");
                   return;
                 }
var AccountProfileMaker_randomLastNameByCountry_gender = GetInputConstructorValue("AccountProfileMaker_randomLastNameByCountry_gender", loader);
                 if(AccountProfileMaker_randomLastNameByCountry_gender["original"].length == 0)
                 {
                   Invalid("gender" + " is empty");
                   return;
                 }
var Save = this.$el.find("#Save").val().toUpperCase();
try{
          var code = loader.GetAdditionalData() + _.template($("#AccountProfileMaker_randomLastNameByCountry_code").html())({"AccountProfileMaker_randomLastNameByCountry_country": AccountProfileMaker_randomLastNameByCountry_country["updated"],"AccountProfileMaker_randomLastNameByCountry_gender": AccountProfileMaker_randomLastNameByCountry_gender["updated"],"variable": "VAR_" + Save});
          code = Normalize(code,0);
          BrowserAutomationStudio_Append("", BrowserAutomationStudio_SaveControls() + code, action, DisableIfAdd);
        }catch(e)
        {}
