<div class="container-fluid">
    <%= _.template($('#input_constructor')
            .html())({
        id: "AccountProfileMaker_randomPassword_length",
        description: "length",
        default_selector: "int",
        disable_expression: true,
        disable_string: true,
        value_number: 15,
        min_number: 15,
        max_number: 20,
        help: { description: "The length of the generated password. The minimum length is 10. If you provide fewer characters, it will be set to 10." }
    }) %>
    <%= _.template($('#input_constructor')
            .html())({
        id: "AccountProfileMaker_randomPassword_useDigits",
        description: "useDigits",
        default_selector: "string",
        variants: ["true", "false"],
        disable_int: true,
        value_string: "true",
        help: { description: "Whether to include digits (0-9) in the password." }
    }) %>
    <%= _.template($('#input_constructor')
            .html())({
        id: "AccountProfileMaker_randomPassword_useSpecialChars",
        description: "useSpecialChars",
        default_selector: "string",
        variants: ["true", "false"],
        disable_int: true,
        value_string: "true",
        help: { description: "Whether to include special characters in the password." }
    }) %>
    <%= _.template($('#variable_constructor')
            .html())({
        id: "Save",
        description: "Result",
        default_variable: "APM_PASSWORD_RESULT",
        help: { description: "The generated random password." }
    }) %>
</div>
<div class="tooltipinternal">
    <div class="tr tooltip-paragraph-first-fold">Generates a random password based on specified options.</div>
</div>
<%= _.template($('#back')
        .html())({
    action: "executeandadd",
    visible: true
}) %>
