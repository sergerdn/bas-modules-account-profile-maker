<div class="container-fluid">
    <%= _.template($('#input_constructor')
            .html())({
        id: "kjugdidf",
        description: "country",
        default_selector: "string",
        disable_int: true,
        variants: ["US", "RU"],
        value_string: "US",
        help: { description: "The ISO code of the country for name generation." }
    }) %>
    <%= _.template($('#input_constructor')
            .html())({
        id: "ythihgtk",
        description: "gender",
        default_selector: "string",
        disable_int: true,
        variants: ["male", "female"],
        value_string: "male",
        help: { description: "The gender ('male' or 'female') for name generation." }
    }) %>
    <%= _.template($('#input_constructor')
            .html())({
        id: "hhzgolou",
        description: "passwordLength",
        default_selector: "int",
        disable_string: true,
        value_number: 15,
        min_number: -999999,
        max_number: 999999,
        help: { description: "The length of the generated password." }
    }) %>
    <%= _.template($('#input_constructor')
            .html())({
        id: "mukbhbeu",
        description: "passwordUseDigits",
        default_selector: "string",
        variants: ["true", "false"],
        disable_int: true,
        value_string: "true",
        help: { description: "Whether to include digits in the password." }
    }) %>
    <%= _.template($('#input_constructor')
            .html())({
        id: "tggbxiix",
        description: "passwordUseSpecialChars",
        default_selector: "string",
        variants: ["true", "false"],
        disable_int: true,
        value_string: "true",
        help: { description: "Whether to include special characters in the password." }
    }) %>
    <%= _.template($('#input_constructor')
            .html())({
        id: "woytdswi",
        description: "usernameLength",
        default_selector: "int",
        disable_string: true,
        value_number: 10,
        min_number: -999999,
        max_number: 999999,
        help: { description: "The desired length of the username." }
    }) %>
    <%= _.template($('#input_constructor')
            .html())({
        id: "vlgnqldd",
        description: "usernameType",
        default_selector: "string",
        disable_int: true,
        variants: ["pronounceable", "lastpass"],
        value_string: "pronounceable",
        help: { description: "The type of username to generate ('pronounceable' or 'lastpass')." }
    }) %>
    <%= _.template($('#variable_constructor')
            .html())({
        id: "Save",
        description: "Result",
        default_variable: "APM_USER_RECORD_RESULT",
        help: { description: "- For a user from the United States:&#x3C;br&#x3E;\n{\n  &#x22;country&#x22;: &#x22;US&#x22;,\n  &#x22;gender&#x22;: &#x22;male&#x22;,\n  &#x22;first_name&#x22;: &#x22;Len&#x22;,\n  &#x22;last_name&#x22;: &#x22;Nitta&#x22;,\n  &#x22;username&#x22;: &#x22;nomurkrami&#x22;,\n  &#x22;password&#x22;: &#x22;P&#x3C;5g5Me?SdMDP3W&#x22;\n}&#x3C;br&#x3E;\n- For a user from Russia:&#x3C;br&#x3E;\n{\n  &#x22;country&#x22;: &#x22;RU&#x22;,\n  &#x22;gender&#x22;: &#x22;male&#x22;,\n  &#x22;first_name&#x22;: &#x22;&#x410;&#x43B;&#x435;&#x43A;&#x441;&#x430;&#x43D;&#x434;&#x440;&#x22;,\n  &#x22;last_name&#x22;: &#x22;&#x421;&#x430;&#x432;&#x435;&#x43B;&#x44C;&#x435;&#x432;&#x22;,\n  &#x22;username&#x22;: &#x22;ysperynces&#x22;,\n  &#x22;password&#x22;: &#x22;lbWA&#x3C;y_$Ub%z0a)&#x22;\n}" }
    }) %>
</div>
<div class="tooltipinternal">
    <div class="tr tooltip-paragraph-first-fold">Generates a complete user profile for a given country and gender. The
        resulting data includes a first and last name, username, and secure password.
    </div>
</div>
<%= _.template($('#back')
        .html())({
    action: "executeandadd",
    visible: true
}) %>
