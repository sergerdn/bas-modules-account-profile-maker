var AccountProfileMaker_generateLastPassStyleUsername_length = GetInputConstructorValue("AccountProfileMaker_generateLastPassStyleUsername_length", loader);
                 if(AccountProfileMaker_generateLastPassStyleUsername_length["original"].length == 0)
                 {
                   Invalid("length" + " is empty");
                   return;
                 }
var Save = this.$el.find("#Save").val().toUpperCase();
try{
          var code = loader.GetAdditionalData() + _.template($("#AccountProfileMaker_generateLastPassStyleUsername_code").html())({"AccountProfileMaker_generateLastPassStyleUsername_length": AccountProfileMaker_generateLastPassStyleUsername_length["updated"],"variable": "VAR_" + Save});
          code = Normalize(code,0);
          BrowserAutomationStudio_Append("", BrowserAutomationStudio_SaveControls() + code, action, DisableIfAdd);
        }catch(e)
        {}
