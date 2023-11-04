var vhhtuwoc = GetInputConstructorValue("vhhtuwoc", loader);
                 if(vhhtuwoc["original"].length == 0)
                 {
                   Invalid("country" + " is empty");
                   return;
                 }
var yfxccyou = GetInputConstructorValue("yfxccyou", loader);
                 if(yfxccyou["original"].length == 0)
                 {
                   Invalid("gender" + " is empty");
                   return;
                 }
var gzwlyuim = GetInputConstructorValue("gzwlyuim", loader);
                 if(gzwlyuim["original"].length == 0)
                 {
                   Invalid("passwordLength" + " is empty");
                   return;
                 }
var jwdgnzbf = GetInputConstructorValue("jwdgnzbf", loader);
                 if(jwdgnzbf["original"].length == 0)
                 {
                   Invalid("passwordUseDigits" + " is empty");
                   return;
                 }
var yumlndjd = GetInputConstructorValue("yumlndjd", loader);
                 if(yumlndjd["original"].length == 0)
                 {
                   Invalid("passwordUseSpecialChars" + " is empty");
                   return;
                 }
var olaestrk = GetInputConstructorValue("olaestrk", loader);
                 if(olaestrk["original"].length == 0)
                 {
                   Invalid("usernameLength" + " is empty");
                   return;
                 }
var yzieqqoz = GetInputConstructorValue("yzieqqoz", loader);
                 if(yzieqqoz["original"].length == 0)
                 {
                   Invalid("usernameType" + " is empty");
                   return;
                 }
var Save = this.$el.find("#Save").val().toUpperCase();
try{
          var code = loader.GetAdditionalData() + _.template($("#AccountProfileMaker_buildFullUserRecord_code").html())({"vhhtuwoc": vhhtuwoc["updated"],"yfxccyou": yfxccyou["updated"],"gzwlyuim": gzwlyuim["updated"],"jwdgnzbf": jwdgnzbf["updated"],"yumlndjd": yumlndjd["updated"],"olaestrk": olaestrk["updated"],"yzieqqoz": yzieqqoz["updated"],"variable": "VAR_" + Save});
          code = Normalize(code,0);
          BrowserAutomationStudio_Append("", BrowserAutomationStudio_SaveControls() + code, action, DisableIfAdd);
        }catch(e)
        {}
