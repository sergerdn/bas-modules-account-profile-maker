var maxAge = GetInputConstructorValue('maxAge', loader)
if (maxAge['original'].length == 0) {
  Invalid('maxAge' + ' is empty')
  return
}
var minAge = GetInputConstructorValue('minAge', loader)
if (minAge['original'].length == 0) {
  Invalid('minAge' + ' is empty')
  return
}

var Save = this.$el.find('#Save').val().toUpperCase()
try {
  var code =
    loader.GetAdditionalData() +
    _.template($('#AccountProfileMaker_randomBirthdate_code').html())({
      maxAge: maxAge['updated'],
      minAge: minAge['updated'],
      variable: 'VAR_' + Save
    })
  code = Normalize(code, 0)
  BrowserAutomationStudio_Append('', BrowserAutomationStudio_SaveControls() + code, action, DisableIfAdd)
} catch (e) {
  console.log(e)
}
