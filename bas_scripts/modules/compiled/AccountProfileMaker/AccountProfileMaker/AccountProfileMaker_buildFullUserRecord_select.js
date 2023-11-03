var dbxfklsu = GetInputConstructorValue("dbxfklsu", loader);
                 if(dbxfklsu["original"].length == 0)
                 {
                   Invalid("country" + " is empty");
                   return;
                 }
var dfbyxhtx = GetInputConstructorValue("dfbyxhtx", loader);
                 if(dfbyxhtx["original"].length == 0)
                 {
                   Invalid("gender" + " is empty");
                   return;
                 }
var ncmldove = GetInputConstructorValue("ncmldove", loader);
                 if(ncmldove["original"].length == 0)
                 {
                   Invalid("passwordLength" + " is empty");
                   return;
                 }
var yumrjcvu = GetInputConstructorValue("yumrjcvu", loader);
                 if(yumrjcvu["original"].length == 0)
                 {
                   Invalid("passwordUseDigits" + " is empty");
                   return;
                 }
var ntuzxsek = GetInputConstructorValue("ntuzxsek", loader);
                 if(ntuzxsek["original"].length == 0)
                 {
                   Invalid("passwordUseSpecialChars" + " is empty");
                   return;
                 }
var yrjnurhi = GetInputConstructorValue("yrjnurhi", loader);
                 if(yrjnurhi["original"].length == 0)
                 {
                   Invalid("usernameLength" + " is empty");
                   return;
                 }
var ermydvxd = GetInputConstructorValue("ermydvxd", loader);
                 if(ermydvxd["original"].length == 0)
                 {
                   Invalid("usernameType" + " is empty");
                   return;
                 }
var Save = this.$el.find("#Save").val().toUpperCase();
try{
          var code = loader.GetAdditionalData() + _.template($("#AccountProfileMaker_buildFullUserRecord_code").html())({"dbxfklsu": dbxfklsu["updated"],"dfbyxhtx": dfbyxhtx["updated"],"ncmldove": ncmldove["updated"],"yumrjcvu": yumrjcvu["updated"],"ntuzxsek": ntuzxsek["updated"],"yrjnurhi": yrjnurhi["updated"],"ermydvxd": ermydvxd["updated"],"variable": "VAR_" + Save});
          code = Normalize(code,0);
          BrowserAutomationStudio_Append("", BrowserAutomationStudio_SaveControls() + code, action, DisableIfAdd);
        }catch(e)
        {}
