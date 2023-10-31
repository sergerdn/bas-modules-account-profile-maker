var lzsgwrjq = GetInputConstructorValue("lzsgwrjq", loader);
                 if(lzsgwrjq["original"].length == 0)
                 {
                   Invalid("length" + " is empty");
                   return;
                 }
var uxensiqu = GetInputConstructorValue("uxensiqu", loader);
                 if(uxensiqu["original"].length == 0)
                 {
                   Invalid("useDigits" + " is empty");
                   return;
                 }
var dczxrbbb = GetInputConstructorValue("dczxrbbb", loader);
                 if(dczxrbbb["original"].length == 0)
                 {
                   Invalid("useSpecialChars" + " is empty");
                   return;
                 }
var Save = this.$el.find("#Save").val().toUpperCase();
try{
          var code = loader.GetAdditionalData() + _.template($("#AccountProfileMaker_randomPassword_code").html())({"lzsgwrjq": lzsgwrjq["updated"],"uxensiqu": uxensiqu["updated"],"dczxrbbb": dczxrbbb["updated"],"variable": "VAR_" + Save});
          code = Normalize(code,0);
          BrowserAutomationStudio_Append("", BrowserAutomationStudio_SaveControls() + code, action, DisableIfAdd);
        }catch(e)
        {}
