var nqsseffm = GetInputConstructorValue("nqsseffm", loader);
                 if(nqsseffm["original"].length == 0)
                 {
                   Invalid("length" + " is empty");
                   return;
                 }
var Save = this.$el.find("#Save").val().toUpperCase();
try{
          var code = loader.GetAdditionalData() + _.template($("#AccountProfileMaker_generatePronounceableUsername_code").html())({"nqsseffm": nqsseffm["updated"],"variable": "VAR_" + Save});
          code = Normalize(code,0);
          BrowserAutomationStudio_Append("", BrowserAutomationStudio_SaveControls() + code, action, DisableIfAdd);
        }catch(e)
        {}
