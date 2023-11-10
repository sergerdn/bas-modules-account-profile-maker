var AccountProfileMaker_randomPassword_length = GetInputConstructorValue("AccountProfileMaker_randomPassword_length", loader);
                 if(AccountProfileMaker_randomPassword_length["original"].length == 0)
                 {
                   Invalid("length" + " is empty");
                   return;
                 }
var AccountProfileMaker_randomPassword_useDigits = GetInputConstructorValue("AccountProfileMaker_randomPassword_useDigits", loader);
                 if(AccountProfileMaker_randomPassword_useDigits["original"].length == 0)
                 {
                   Invalid("useDigits" + " is empty");
                   return;
                 }
var AccountProfileMaker_randomPassword_useSpecialChars = GetInputConstructorValue("AccountProfileMaker_randomPassword_useSpecialChars", loader);
                 if(AccountProfileMaker_randomPassword_useSpecialChars["original"].length == 0)
                 {
                   Invalid("useSpecialChars" + " is empty");
                   return;
                 }
var Save = this.$el.find("#Save").val().toUpperCase();
try{
          var code = loader.GetAdditionalData() + _.template($("#AccountProfileMaker_randomPassword_code").html())({"AccountProfileMaker_randomPassword_length": AccountProfileMaker_randomPassword_length["updated"],"AccountProfileMaker_randomPassword_useDigits": AccountProfileMaker_randomPassword_useDigits["updated"],"AccountProfileMaker_randomPassword_useSpecialChars": AccountProfileMaker_randomPassword_useSpecialChars["updated"],"variable": "VAR_" + Save});
          code = Normalize(code,0);
          BrowserAutomationStudio_Append("", BrowserAutomationStudio_SaveControls() + code, action, DisableIfAdd);
        }catch(e)
        {}
