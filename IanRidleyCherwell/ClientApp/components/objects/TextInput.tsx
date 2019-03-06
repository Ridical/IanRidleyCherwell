import * as React from 'react';

export interface TextInputData {
    title: string;
    text: string;
    lineNumber?: number,
    pattern?: string,
    cssClass?: string,
    placeholder?: string,
    validationmessage?: string,
    type?: string
}

export interface TextInputValues {
    title: string;
    name: string;
    text: string;
    lineNumber: number,
    cssClass: string,
    pattern?: string,
    placeholder?: string,
    validationmessage?: string
    type: string

}




export class TextInput extends React.Component<TextInputData, TextInputValues>
{
    constructor(props: TextInputData) {
        super(props);

        if (props.lineNumber == null) {
            props.lineNumber = 1;
        }

        if (props.cssClass == null) {
            props.cssClass = "";
        }

        if (props.placeholder == null) {
            props.placeholder = "";
        }

        if (props.validationmessage == null) {
            props.validationmessage = "";
        }

        if (props.type == null) {
            props.type = "text";
        }

        this.state = {
            title: 'txt' + props.title,
            name: props.title,
            text: props.text,
            cssClass: props.cssClass,
            lineNumber: props.lineNumber,
            pattern: props.pattern,
            placeholder: props.placeholder,
            validationmessage: props.validationmessage,
            type: props.type
        };
    }



    


    public render() {
        if (this.state.lineNumber == 1) {
            return <input type={this.state.type} data-custom-input="true" placeholder={this.state.placeholder} data-validation-message={this.state.validationmessage}
                className={this.state.cssClass} id={this.state.title} name={this.state.title} pattern={this.state.pattern}></input>
        }
        else {
            return <textarea data-custom-input="true" className={this.state.cssClass} cols={100} rows={this.state.lineNumber}
                id={this.state.title} name={this.state.title} pattern={this.state.pattern}></textarea>
        }
    }
}