var kjugdidf = GetInputConstructorValue("kjugdidf", loader);
                 if(kjugdidf["original"].length == 0)
                 {
                   Invalid("country" + " is empty");
                   return;
                 }
var ythihgtk = GetInputConstructorValue("ythihgtk", loader);
                 if(ythihgtk["original"].length == 0)
                 {
                   Invalid("gender" + " is empty");
                   return;
                 }
var hhzgolou = GetInputConstructorValue("hhzgolou", loader);
                 if(hhzgolou["original"].length == 0)
                 {
                   Invalid("passwordLength" + " is empty");
                   return;
                 }
var mukbhbeu = GetInputConstructorValue("mukbhbeu", loader);
                 if(mukbhbeu["original"].length == 0)
                 {
                   Invalid("passwordUseDigits" + " is empty");
                   return;
                 }
var tggbxiix = GetInputConstructorValue("tggbxiix", loader);
                 if(tggbxiix["original"].length == 0)
                 {
                   Invalid("passwordUseSpecialChars" + " is empty");
                   return;
                 }
var woytdswi = GetInputConstructorValue("woytdswi", loader);
                 if(woytdswi["original"].length == 0)
                 {
                   Invalid("usernameLength" + " is empty");
                   return;
                 }
var vlgnqldd = GetInputConstructorValue("vlgnqldd", loader);
                 if(vlgnqldd["original"].length == 0)
                 {
                   Invalid("usernameType" + " is empty");
                   return;
                 }
var Save = this.$el.find("#Save").val().toUpperCase();
try{
          var code = loader.GetAdditionalData() + _.template($("#AccountProfileMaker_buildFullUserRecord_code").html())({"kjugdidf": kjugdidf["updated"],"ythihgtk": ythihgtk["updated"],"hhzgolou": hhzgolou["updated"],"mukbhbeu": mukbhbeu["updated"],"tggbxiix": tggbxiix["updated"],"woytdswi": woytdswi["updated"],"vlgnqldd": vlgnqldd["updated"],"variable": "VAR_" + Save});
          code = Normalize(code,0);
          BrowserAutomationStudio_Append("", BrowserAutomationStudio_SaveControls() + code, action, DisableIfAdd);
        }catch(e)
        {}
