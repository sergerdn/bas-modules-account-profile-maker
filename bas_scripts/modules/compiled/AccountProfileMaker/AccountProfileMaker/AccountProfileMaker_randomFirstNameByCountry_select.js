var zxctqqxg = GetInputConstructorValue("zxctqqxg", loader);
                 if(zxctqqxg["original"].length == 0)
                 {
                   Invalid("country" + " is empty");
                   return;
                 }
var igtamvxf = GetInputConstructorValue("igtamvxf", loader);
                 if(igtamvxf["original"].length == 0)
                 {
                   Invalid("gender" + " is empty");
                   return;
                 }
var Save = this.$el.find("#Save").val().toUpperCase();
try{
          var code = loader.GetAdditionalData() + _.template($("#AccountProfileMaker_randomFirstNameByCountry_code").html())({"zxctqqxg": zxctqqxg["updated"],"igtamvxf": igtamvxf["updated"],"variable": "VAR_" + Save});
          code = Normalize(code,0);
          BrowserAutomationStudio_Append("", BrowserAutomationStudio_SaveControls() + code, action, DisableIfAdd);
        }catch(e)
        {}
