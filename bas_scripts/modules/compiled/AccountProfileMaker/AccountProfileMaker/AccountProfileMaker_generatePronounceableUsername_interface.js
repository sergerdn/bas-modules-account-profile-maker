<div class="container-fluid">
    <%= _.template($('#input_constructor')
            .html())({
        id: "AccountProfileMaker_generatePronounceableUsername_length",
        description: "length",
        default_selector: "int",
        disable_string: true,
        value_number: 10,
        min_number: 10,
        max_number: 20,
        help: { description: "The desired length of the username. The minimum length is 10. If you provide fewer characters, it will be set to 10." }
    }) %>
    <%= _.template($('#variable_constructor')
            .html())({
        id: "Save",
        description: "Result",
        default_variable: "APM_USERNAME_RESULT",
        help: { description: "A pronounceable username of the specified length." }
    }) %>
</div>
<div class="tooltipinternal">
    <div class="tr tooltip-paragraph-first-fold">Generates a pronounceable username of the specified length.</div>
</div>
<%= _.template($('#back')
        .html())({
    action: "executeandadd",
    visible: true
}) %>
