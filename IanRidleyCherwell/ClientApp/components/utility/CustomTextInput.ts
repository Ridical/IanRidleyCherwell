export module CustomTextInput {

    export function validateInputs() : string[] {
        var inputs = [].slice.call(document.querySelectorAll("[data-custom-input='true']")) as [HTMLInputElement];

        var errors: string[] = [];

        inputs.forEach(i => {

            i.classList.remove("validation-error");

            var customValidator = false;
            var pattern = i.getAttribute("pattern");


            if (pattern == null) {
                customValidator = true;
            }
            else {
                var regex = new RegExp(pattern);
                customValidator = regex.test(i.value);
                
            }

            if (!customValidator || !i.checkValidity()) {

                var message = i.validationMessage;

                var customMessage = i.getAttribute("data-validation-message");

                if (customMessage != null) {
                    message = customMessage;
                }

                errors.push(message);
                i.classList.add("validation-error");
            }
        });

        return errors;
    }
}