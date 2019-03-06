import * as React from 'react';
import * as TextInput from './TextInput';



export class TextInputRow extends React.Component<TextInput.TextInputData, TextInput.TextInputValues> {

    constructor(props: TextInput.TextInputData) {
        super(props);

        if (props.lineNumber == null) {
            props.lineNumber = 1;
        }

        if (props.type == null) {
            props.type = "text";
        }

        var cssClass = props.lineNumber == 1 ? "form-control inputTextArea" : "form-control";

        this.state = {
            title: props.title,
            name: props.title,
            text: props.text,
            cssClass: cssClass,
            lineNumber: props.lineNumber,
            pattern: props.pattern,
            placeholder: props.placeholder,
            validationmessage: props.validationmessage,
            type: props.type
        };
    }


    public render() {

        if (this.state.lineNumber == 1) {
            return <div className="row form-group">
                <div className="col-md-3">
                    <label className="control-label">{this.state.text}</label>
                </div>
                <div className="col-md-9">
                    <TextInput.TextInput text={this.state.text} type={this.state.type} placeholder={this.state.placeholder} validationmessage={this.state.validationmessage}
                        cssClass={this.state.cssClass} title={this.state.title} pattern={this.state.pattern}></TextInput.TextInput>
                </div>
            </div>;
        }

        return <div className="row form-group">
            <div className="col-md-3">
                <label className="control-label">{this.state.text}</label>
            </div>
            <div className="col-md-9">
                <TextInput.TextInput text={this.state.text} cssClass={this.state.cssClass} lineNumber={this.state.lineNumber}
                    title={this.state.title} pattern={this.state.pattern}></TextInput.TextInput>
            </div>
        </div>;
    }
}