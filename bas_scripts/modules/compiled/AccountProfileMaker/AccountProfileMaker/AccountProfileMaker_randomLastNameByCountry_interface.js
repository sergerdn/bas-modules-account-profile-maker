<div class="container-fluid">
    <%= _.template($('#input_constructor')
            .html())({
        id: "xulvsved",
        description: "country",
        default_selector: "string",
        disable_expression: true,
        disable_int: true,
        variants: ["US", "RU"],
        value_string: "US",
        help: { description: "The ISO code of the country (e.g., 'US' for the United States)." }
    }) %>
    <%= _.template($('#input_constructor')
            .html())({
        id: "erfwsqao",
        description: "gender",
        default_selector: "string",
        disable_expression: true,
        disable_int: true,
        variants: ["male", "female"],
        value_string: "male",
        help: { description: "The gender ('male' or 'female') for which to generate a name." }
    }) %>
    <%= _.template($('#variable_constructor')
            .html())({
        id: "Save",
        description: "Result",
        default_variable: "APM_LAST_NAME_RESULT",
        help: { description: "A random last name based on the provided country and gender." }
    }) %>
</div>
<div class="tooltipinternal">
    <div class="tr tooltip-paragraph-first-fold">Generates a random name based on the specified country and gender.
    </div>
</div>
<%= _.template($('#back')
        .html())({
    action: "executeandadd",
    visible: true
}) %>
