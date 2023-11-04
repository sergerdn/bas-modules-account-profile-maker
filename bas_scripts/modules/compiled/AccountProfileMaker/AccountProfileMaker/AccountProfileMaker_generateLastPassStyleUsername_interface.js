<div class="container-fluid">
<%= _.template($('#input_constructor').html())({id:"dvdwtiih", description:"length", default_selector: "int", disable_expression:true, disable_string:true, value_number: 15, min_number:-999999, max_number:999999, help: {description: "The desired length of the username. The minimum length is 10. If you provide fewer characters, it will be set to 10."} }) %>
<%= _.template($('#variable_constructor').html())({id:"Save", description:"Result", default_variable: "APM_USERNAME_RESULT", help: {description: "A pronounceable username of the specified length."}}) %>
</div>
<div class="tooltipinternal">
<div class="tr tooltip-paragraph-first-fold">Generates a LastPass-like pronounceable username, ensuring it meets a specified minimum length by utilizing weighted transitions between letter pairs for natural phonetic flow.</div>
</div>
<%= _.template($('#back').html())({action:"executeandadd", visible:true}) %>
