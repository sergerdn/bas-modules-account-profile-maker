<div class="container-fluid">
<%= _.template($('#input_constructor').html())({id:"dbxfklsu", description:"country", default_selector: "string", disable_expression:true, disable_int:true, variants: ["US","RU"], value_string: "US", help: {description: "The ISO code of the country for name generation."} }) %>
<%= _.template($('#input_constructor').html())({id:"dfbyxhtx", description:"gender", default_selector: "string", disable_expression:true, disable_int:true, variants: ["male","female"], value_string: "male", help: {description: "The gender ('male' or 'female') for name generation."} }) %>
<%= _.template($('#input_constructor').html())({id:"ncmldove", description:"passwordLength", default_selector: "int", disable_expression:true, disable_string:true, value_number: 15, min_number:-999999, max_number:999999, help: {description: "The length of the generated password."} }) %>
<%= _.template($('#input_constructor').html())({id:"yumrjcvu", description:"passwordUseDigits", default_selector: "string", variants: ["true","false"], disable_int:true, value_string: "true", help: {description: "Whether to include digits in the password."} }) %>
<%= _.template($('#input_constructor').html())({id:"ntuzxsek", description:"passwordUseSpecialChars", default_selector: "string", variants: ["true","false"], disable_int:true, value_string: "true", help: {description: "Whether to include special characters in the password."} }) %>
<%= _.template($('#input_constructor').html())({id:"yrjnurhi", description:"usernameLength", default_selector: "int", disable_expression:true, disable_string:true, value_number: 10, min_number:-999999, max_number:999999, help: {description: "The desired length of the username."} }) %>
<%= _.template($('#input_constructor').html())({id:"ermydvxd", description:"usernameType", default_selector: "string", disable_expression:true, disable_int:true, variants: ["pronounceable","lastpass"], value_string: "pronounceable", help: {description: "The type of username to generate ('pronounceable' or 'lastpass')."} }) %>
<%= _.template($('#variable_constructor').html())({id:"Save", description:"Result", default_variable: "APM_USER_RECORD_RESULT", help: {description: ""}}) %>
</div>
<div class="tooltipinternal">
</div>
<%= _.template($('#back').html())({action:"executeandadd", visible:true}) %>
