var pdqdfacu = GetInputConstructorValue("pdqdfacu", loader);
                 if(pdqdfacu["original"].length == 0)
                 {
                   Invalid("cyrillicText" + " is empty");
                   return;
                 }
var Save = this.$el.find("#Save").val().toUpperCase();
try{
          var code = loader.GetAdditionalData() + _.template($("#AccountProfileMaker_transliterateCyrillicToEnglish_code").html())({"pdqdfacu": pdqdfacu["updated"],"variable": "VAR_" + Save});
          code = Normalize(code,0);
          BrowserAutomationStudio_Append("", BrowserAutomationStudio_SaveControls() + code, action, DisableIfAdd);
        }catch(e)
        {}