var tvicgyxx = GetInputConstructorValue("tvicgyxx", loader);
                 if(tvicgyxx["original"].length == 0)
                 {
                   Invalid("country" + " is empty");
                   return;
                 }
var ixvkvghl = GetInputConstructorValue("ixvkvghl", loader);
                 if(ixvkvghl["original"].length == 0)
                 {
                   Invalid("gender" + " is empty");
                   return;
                 }
var qsfhvoru = GetInputConstructorValue("qsfhvoru", loader);
                 if(qsfhvoru["original"].length == 0)
                 {
                   Invalid("passwordLength" + " is empty");
                   return;
                 }
var llvrkusb = GetInputConstructorValue("llvrkusb", loader);
                 if(llvrkusb["original"].length == 0)
                 {
                   Invalid("passwordUseDigits" + " is empty");
                   return;
                 }
var daypazls = GetInputConstructorValue("daypazls", loader);
                 if(daypazls["original"].length == 0)
                 {
                   Invalid("passwordUseSpecialChars" + " is empty");
                   return;
                 }
var rxdwcxrb = GetInputConstructorValue("rxdwcxrb", loader);
                 if(rxdwcxrb["original"].length == 0)
                 {
                   Invalid("usernameLength" + " is empty");
                   return;
                 }
var tyqyxzww = GetInputConstructorValue("tyqyxzww", loader);
                 if(tyqyxzww["original"].length == 0)
                 {
                   Invalid("usernameType" + " is empty");
                   return;
                 }
var Save = this.$el.find("#Save").val().toUpperCase();
try{
          var code = loader.GetAdditionalData() + _.template($("#AccountProfileMaker_buildFullUserRecord_code").html())({"tvicgyxx": tvicgyxx["updated"],"ixvkvghl": ixvkvghl["updated"],"qsfhvoru": qsfhvoru["updated"],"llvrkusb": llvrkusb["updated"],"daypazls": daypazls["updated"],"rxdwcxrb": rxdwcxrb["updated"],"tyqyxzww": tyqyxzww["updated"],"variable": "VAR_" + Save});
          code = Normalize(code,0);
          BrowserAutomationStudio_Append("", BrowserAutomationStudio_SaveControls() + code, action, DisableIfAdd);
        }catch(e)
        {}
