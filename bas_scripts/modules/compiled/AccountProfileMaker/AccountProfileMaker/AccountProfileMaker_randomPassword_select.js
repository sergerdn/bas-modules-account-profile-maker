var ebyrgzme = GetInputConstructorValue("ebyrgzme", loader);
                 if(ebyrgzme["original"].length == 0)
                 {
                   Invalid("length" + " is empty");
                   return;
                 }
var bshyrnml = GetInputConstructorValue("bshyrnml", loader);
                 if(bshyrnml["original"].length == 0)
                 {
                   Invalid("useDigits" + " is empty");
                   return;
                 }
var rmeofwrr = GetInputConstructorValue("rmeofwrr", loader);
                 if(rmeofwrr["original"].length == 0)
                 {
                   Invalid("useSpecialChars" + " is empty");
                   return;
                 }
var Save = this.$el.find("#Save").val().toUpperCase();
try{
          var code = loader.GetAdditionalData() + _.template($("#AccountProfileMaker_randomPassword_code").html())({"ebyrgzme": ebyrgzme["updated"],"bshyrnml": bshyrnml["updated"],"rmeofwrr": rmeofwrr["updated"],"variable": "VAR_" + Save});
          code = Normalize(code,0);
          BrowserAutomationStudio_Append("", BrowserAutomationStudio_SaveControls() + code, action, DisableIfAdd);
        }catch(e)
        {}
