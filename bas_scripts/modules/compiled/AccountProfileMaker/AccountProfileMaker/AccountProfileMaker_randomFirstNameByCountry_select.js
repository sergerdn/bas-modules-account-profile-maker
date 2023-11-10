var AccountProfileMaker_randomFirstNameByCountry_country = GetInputConstructorValue("AccountProfileMaker_randomFirstNameByCountry_country", loader);
                 if(AccountProfileMaker_randomFirstNameByCountry_country["original"].length == 0)
                 {
                   Invalid("country" + " is empty");
                   return;
                 }
var AccountProfileMaker_randomFirstNameByCountry_gender = GetInputConstructorValue("AccountProfileMaker_randomFirstNameByCountry_gender", loader);
                 if(AccountProfileMaker_randomFirstNameByCountry_gender["original"].length == 0)
                 {
                   Invalid("gender" + " is empty");
                   return;
                 }
var Save = this.$el.find("#Save").val().toUpperCase();
try{
          var code = loader.GetAdditionalData() + _.template($("#AccountProfileMaker_randomFirstNameByCountry_code").html())({"AccountProfileMaker_randomFirstNameByCountry_country": AccountProfileMaker_randomFirstNameByCountry_country["updated"],"AccountProfileMaker_randomFirstNameByCountry_gender": AccountProfileMaker_randomFirstNameByCountry_gender["updated"],"variable": "VAR_" + Save});
          code = Normalize(code,0);
          BrowserAutomationStudio_Append("", BrowserAutomationStudio_SaveControls() + code, action, DisableIfAdd);
        }catch(e)
        {}
