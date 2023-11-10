var AccountProfileMaker_generatePronounceableUsername_length = GetInputConstructorValue("AccountProfileMaker_generatePronounceableUsername_length", loader);
                 if(AccountProfileMaker_generatePronounceableUsername_length["original"].length == 0)
                 {
                   Invalid("length" + " is empty");
                   return;
                 }
var Save = this.$el.find("#Save").val().toUpperCase();
try{
          var code = loader.GetAdditionalData() + _.template($("#AccountProfileMaker_generatePronounceableUsername_code").html())({"AccountProfileMaker_generatePronounceableUsername_length": AccountProfileMaker_generatePronounceableUsername_length["updated"],"variable": "VAR_" + Save});
          code = Normalize(code,0);
          BrowserAutomationStudio_Append("", BrowserAutomationStudio_SaveControls() + code, action, DisableIfAdd);
        }catch(e)
        {}
