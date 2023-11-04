var xulvsved = GetInputConstructorValue("xulvsved", loader);
                 if(xulvsved["original"].length == 0)
                 {
                   Invalid("country" + " is empty");
                   return;
                 }
var erfwsqao = GetInputConstructorValue("erfwsqao", loader);
                 if(erfwsqao["original"].length == 0)
                 {
                   Invalid("gender" + " is empty");
                   return;
                 }
var Save = this.$el.find("#Save").val().toUpperCase();
try{
          var code = loader.GetAdditionalData() + _.template($("#AccountProfileMaker_randomLastNameByCountry_code").html())({"xulvsved": xulvsved["updated"],"erfwsqao": erfwsqao["updated"],"variable": "VAR_" + Save});
          code = Normalize(code,0);
          BrowserAutomationStudio_Append("", BrowserAutomationStudio_SaveControls() + code, action, DisableIfAdd);
        }catch(e)
        {}
