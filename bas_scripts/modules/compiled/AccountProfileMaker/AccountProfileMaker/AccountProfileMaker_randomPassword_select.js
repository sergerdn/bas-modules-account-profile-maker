var hpnstooy = GetInputConstructorValue("hpnstooy", loader);
                 if(hpnstooy["original"].length == 0)
                 {
                   Invalid("length" + " is empty");
                   return;
                 }
var ojisrpcq = GetInputConstructorValue("ojisrpcq", loader);
                 if(ojisrpcq["original"].length == 0)
                 {
                   Invalid("useDigits" + " is empty");
                   return;
                 }
var mtfsksbj = GetInputConstructorValue("mtfsksbj", loader);
                 if(mtfsksbj["original"].length == 0)
                 {
                   Invalid("useSpecialChars" + " is empty");
                   return;
                 }
var Save = this.$el.find("#Save").val().toUpperCase();
try{
          var code = loader.GetAdditionalData() + _.template($("#AccountProfileMaker_randomPassword_code").html())({"hpnstooy": hpnstooy["updated"],"ojisrpcq": ojisrpcq["updated"],"mtfsksbj": mtfsksbj["updated"],"variable": "VAR_" + Save});
          code = Normalize(code,0);
          BrowserAutomationStudio_Append("", BrowserAutomationStudio_SaveControls() + code, action, DisableIfAdd);
        }catch(e)
        {}
