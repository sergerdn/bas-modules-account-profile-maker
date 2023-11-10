var AccountProfileMaker_buildFullUserRecord_country = GetInputConstructorValue("AccountProfileMaker_buildFullUserRecord_country", loader);
                 if(AccountProfileMaker_buildFullUserRecord_country["original"].length == 0)
                 {
                   Invalid("country" + " is empty");
                   return;
                 }
var AccountProfileMaker_buildFullUserRecord_gender = GetInputConstructorValue("AccountProfileMaker_buildFullUserRecord_gender", loader);
                 if(AccountProfileMaker_buildFullUserRecord_gender["original"].length == 0)
                 {
                   Invalid("gender" + " is empty");
                   return;
                 }
var AccountProfileMaker_buildFullUserRecord_passwordLength = GetInputConstructorValue("AccountProfileMaker_buildFullUserRecord_passwordLength", loader);
                 if(AccountProfileMaker_buildFullUserRecord_passwordLength["original"].length == 0)
                 {
                   Invalid("passwordLength" + " is empty");
                   return;
                 }
var AccountProfileMaker_buildFullUserRecord_passwordUseDigits = GetInputConstructorValue("AccountProfileMaker_buildFullUserRecord_passwordUseDigits", loader);
                 if(AccountProfileMaker_buildFullUserRecord_passwordUseDigits["original"].length == 0)
                 {
                   Invalid("passwordUseDigits" + " is empty");
                   return;
                 }
var AccountProfileMaker_buildFullUserRecord_passwordUseSpecialChars = GetInputConstructorValue("AccountProfileMaker_buildFullUserRecord_passwordUseSpecialChars", loader);
                 if(AccountProfileMaker_buildFullUserRecord_passwordUseSpecialChars["original"].length == 0)
                 {
                   Invalid("passwordUseSpecialChars" + " is empty");
                   return;
                 }
var AccountProfileMaker_buildFullUserRecord_usernameLength = GetInputConstructorValue("AccountProfileMaker_buildFullUserRecord_usernameLength", loader);
                 if(AccountProfileMaker_buildFullUserRecord_usernameLength["original"].length == 0)
                 {
                   Invalid("usernameLength" + " is empty");
                   return;
                 }
var AccountProfileMaker_buildFullUserRecord_usernameType = GetInputConstructorValue("AccountProfileMaker_buildFullUserRecord_usernameType", loader);
                 if(AccountProfileMaker_buildFullUserRecord_usernameType["original"].length == 0)
                 {
                   Invalid("usernameType" + " is empty");
                   return;
                 }
var Save = this.$el.find("#Save").val().toUpperCase();
try{
          var code = loader.GetAdditionalData() + _.template($("#AccountProfileMaker_buildFullUserRecord_code").html())({"AccountProfileMaker_buildFullUserRecord_country": AccountProfileMaker_buildFullUserRecord_country["updated"],"AccountProfileMaker_buildFullUserRecord_gender": AccountProfileMaker_buildFullUserRecord_gender["updated"],"AccountProfileMaker_buildFullUserRecord_passwordLength": AccountProfileMaker_buildFullUserRecord_passwordLength["updated"],"AccountProfileMaker_buildFullUserRecord_passwordUseDigits": AccountProfileMaker_buildFullUserRecord_passwordUseDigits["updated"],"AccountProfileMaker_buildFullUserRecord_passwordUseSpecialChars": AccountProfileMaker_buildFullUserRecord_passwordUseSpecialChars["updated"],"AccountProfileMaker_buildFullUserRecord_usernameLength": AccountProfileMaker_buildFullUserRecord_usernameLength["updated"],"AccountProfileMaker_buildFullUserRecord_usernameType": AccountProfileMaker_buildFullUserRecord_usernameType["updated"],"variable": "VAR_" + Save});
          code = Normalize(code,0);
          BrowserAutomationStudio_Append("", BrowserAutomationStudio_SaveControls() + code, action, DisableIfAdd);
        }catch(e)
        {}
