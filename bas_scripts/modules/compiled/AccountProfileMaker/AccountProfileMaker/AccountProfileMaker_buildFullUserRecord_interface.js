<div class="container-fluid">
<%= _.template($('#input_constructor').html())({id:"tvicgyxx", description:"country", default_selector: "string", disable_int:true, value_string: "US", help: {description: "The ISO code of the country for name generation."} }) %>
<%= _.template($('#input_constructor').html())({id:"ixvkvghl", description:"gender", default_selector: "string", disable_int:true, value_string: "male", help: {description: "The gender ('male' or 'female') for name generation."} }) %>
<%= _.template($('#input_constructor').html())({id:"qsfhvoru", description:"passwordLength", default_selector: "int", disable_string:true, value_number: 15, min_number:-999999, max_number:999999, help: {description: "The length of the generated password."} }) %>
<%= _.template($('#input_constructor').html())({id:"llvrkusb", description:"passwordUseDigits", default_selector: "string", variants: ["true","false"], disable_int:true, value_string: "true", help: {description: "Whether to include digits in the password."} }) %>
<%= _.template($('#input_constructor').html())({id:"daypazls", description:"passwordUseSpecialChars", default_selector: "string", variants: ["true","false"], disable_int:true, value_string: "true", help: {description: "Whether to include special characters in the password."} }) %>
<%= _.template($('#input_constructor').html())({id:"rxdwcxrb", description:"usernameLength", default_selector: "int", disable_string:true, value_number: 10, min_number:-999999, max_number:999999, help: {description: "The desired length of the username."} }) %>
<%= _.template($('#input_constructor').html())({id:"tyqyxzww", description:"usernameType", default_selector: "string", disable_int:true, value_string: "pronounceable", help: {description: "The type of username to generate ('pronounceable' or 'lastpass')."} }) %>
<%= _.template($('#variable_constructor').html())({id:"Save", description:"Result", default_variable: "APM_USER_RECORD_RESULT", help: {description: "- For a user from the United States:</br>\n{\n  \"country\": \"US\",\n  \"gender\": \"male\",\n  \"first_name\": \"Len\",\n  \"last_name\": \"Nitta\",\n  \"username\": \"nomurkrami\",\n  \"password\": \"P<5g5Me?SdMDP3W\"\n}</br>\n- For a user from Russia:</br>\n{\n  \"country\": \"RU\",\n  \"gender\": \"male\",\n  \"first_name\": \"Александр\",\n  \"last_name\": \"Савельев\",\n  \"username\": \"ysperynces\",\n  \"password\": \"lbWA<y_$Ub%z0a)\"\n}\n\n\n"}}) %>
</div>
<div class="tooltipinternal">
<div class="tr tooltip-paragraph-first-fold">Generates a complete user profile for a given country and gender. The resulting data includes a first and last name, username, and secure password.</div>
</div>
<%= _.template($('#back').html())({action:"executeandadd", visible:true}) %>
