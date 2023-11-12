<div class="container-fluid">
    <%= _.template($('#input_constructor')
            .html())({
        id: "minAge",
        description: "minAge",
        default_selector: "int",
        disable_string: true,
        value_number: 18,
        min_number: 18,
        max_number: 50,
        help: { description: "The minimum age of the person." }
    }) %>

    <%= _.template($('#input_constructor')
            .html())({
        id: "maxAge",
        description: "maxAge",
        default_selector: "int",
        disable_string: true,
        value_number: 30,
        min_number: 18,
        max_number: 50,
        help: { description: "The maximum age of the person." }
    }) %>

    <%= _.template($('#variable_constructor')
            .html())({
        id: "Save",
        description: "Result",
        default_variable: "APM_BIRTHDAY_RESULT",
        help: { description: "The generated random birthday." }
    }) %>
</div>
<div class="tooltipinternal">
    <div class="tr tooltip-paragraph-first-fold">Generates a random birthday for a person who is at least a specified
        age.
    </div>
</div>
<%= _.template($('#back')
        .html())({
    action: "executeandadd",
    visible: true
}) %>
