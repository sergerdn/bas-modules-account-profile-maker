<div class="container-fluid">
<%= _.template($('#input_constructor').html())({id:"qbeqolgy", description:"cyrillicText", default_selector: "string", disable_expression:true, disable_int:true, value_string: "", help: {description: "The Cyrillic text to transliterate."} }) %>
<%= _.template($('#variable_constructor').html())({id:"Save", description:"Result", default_variable: "APM_LATIN_RESULT", help: {description: "Transliterated Cyrillic text to English."}}) %>
</div>
<div class="tooltipinternal">
<div class="tr tooltip-paragraph-first-fold">Mapping of Cyrillic characters to their English equivalents.</div>
</div>
<%= _.template($('#back').html())({action:"executeandadd", visible:true}) %>
