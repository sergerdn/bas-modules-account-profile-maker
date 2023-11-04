var tuvofxfx = GetInputConstructorValue("tuvofxfx", loader);
                 if(tuvofxfx["original"].length == 0)
                 {
                   Invalid("length" + " is empty");
                   return;
                 }
var cjodqvxi = GetInputConstructorValue("cjodqvxi", loader);
                 if(cjodqvxi["original"].length == 0)
                 {
                   Invalid("useDigits" + " is empty");
                   return;
                 }
var vndzrrvl = GetInputConstructorValue("vndzrrvl", loader);
                 if(vndzrrvl["original"].length == 0)
                 {
                   Invalid("useSpecialChars" + " is empty");
                   return;
                 }
var Save = this.$el.find("#Save").val().toUpperCase();
try{
          var code = loader.GetAdditionalData() + _.template($("#AccountProfileMaker_randomPassword_code").html())({"tuvofxfx": tuvofxfx["updated"],"cjodqvxi": cjodqvxi["updated"],"vndzrrvl": vndzrrvl["updated"],"variable": "VAR_" + Save});
          code = Normalize(code,0);
          BrowserAutomationStudio_Append("", BrowserAutomationStudio_SaveControls() + code, action, DisableIfAdd);
        }catch(e)
        {}
