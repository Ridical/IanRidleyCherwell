import * as React from 'react';
import { RouteComponentProps } from 'react-router';

import { CustomTextInput } from './utility/CustomTextInput';

import { TextInputRow } from './objects/TextInputRow';
import { LoadingPanel } from './Loading';
import { CalculationService } from './ts/services/CalculationService';
import * as CalcModels from './ts/model/CalculationModels';
import { OneAOutputModel } from './ts/model/CalculationModels';

interface OneAViewModel {
    showOutput: boolean,
    evenMode: boolean,
    triangle?: CalcModels.TriangleModel,
    validationErrors?: string[],
    input: string,
    specMode: boolean
}

interface OneAProperties {
    specMode: boolean
}

export class OneAComponent extends React.Component<OneAProperties, OneAViewModel> {



    constructor(props: OneAProperties) {
        super(props);

        this.submitRequest = this.submitRequest.bind(this);
        this.displayOutput = this.displayOutput.bind(this);

        this.state = {
            showOutput: false,
            evenMode: false,
            input: "",
            specMode: props.specMode
        }
    }


    submitRequest() {

        var errors = CustomTextInput.validateInputs()
        if (errors.length > 0) {
            this.setState(
                {
                    validationErrors: errors
                });
        }
        else {
            var loading = new LoadingPanel({ title: "Calculating" });
            loading.showLoading();

            var txtRow = document.getElementById("txtRow") as HTMLInputElement;
            var txtCol = document.getElementById("txtColumn") as HTMLInputElement;

            var inputModel: CalcModels.OneAInputModel = {
                row: txtRow.value,
                column: +txtCol.value,
                specMode: this.state.specMode
            };

            var output = CalculationService.OneA(inputModel);

            output.then(t => this.displayOutput(t))
                .catch(e => {
                    loading.hideLoading();
                    alert("An error has occurred - Inputs not valid")
                });
        }

    }

    displayOutput(outputModel: OneAOutputModel) {
        var loading = new LoadingPanel({ title: "" });
        this.setState(
            {
                input: outputModel.input,
                showOutput: true,
                evenMode: outputModel.evenColumn,
                triangle: outputModel as CalcModels.TriangleModel,
                validationErrors: []
            },
            () => loading.hideLoading());

    }

    getOutputView() {
        if (this.state.triangle == null) {
            <h3>An error has occured. Make sure your input is correct.</h3>
        }
        else {
            return <div className="output">
                <h3>Output Data:</h3>
                <div className="row">
                    <div className="col-md-12">
                        <label>{this.state.input}</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <div className="row">
                            <div className="col-md-12">
                                <label>V1x = {this.state.triangle.vertexOne.X}</label>
                                <label>V1y = {this.state.triangle.vertexOne.Y}</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <label>V2x = {this.state.triangle.vertexTwo.X}</label>
                                <label>V2y = {this.state.triangle.vertexTwo.Y}</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <label>V3x = {this.state.triangle.vertexThree.X}</label>
                                <label>V3y = {this.state.triangle.vertexThree.Y}</label>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9">
                        {
                            this.state.evenMode ?
                                <img src={require('../images/evenTriangle.png')}></img>
                                :
                                <img src={require('../images/oddTriangle.png')}></img>
                        }
                    </div>
                </div>
            </div>;
        }

    }

    getValidationErrors() {
        if (typeof (this.state.validationErrors) != "undefined" && this.state.validationErrors.length > 0) {
            return <div className="error-panel">
                <ul>
                    {
                        this.state.validationErrors.map((x, i) =>
                            <li>{x}</li>
                        )
                    }

                </ul>
            </div>;
        }

        return null;

    }

    getRowInput() {
        if (this.state.specMode) {
            return <TextInputRow title="Row" text="Row" pattern="[A-Fa-f]{1}" placeholder="A-F" validationmessage="Row: Enter a letter between A-F" />;
        }
        else {
            return <TextInputRow title="Row" text="Row" pattern="[A-Za-z]{1,10}" placeholder="ABC" validationmessage="Row: Enter up to 10 letters" />;
        }
    }



    getColInput() {
        if (this.state.specMode) {
            return <TextInputRow title="Column" text="Column" type="number" pattern="^([1-9]|[0-1][0-2])$" placeholder="1-12" validationmessage="Column: Enter a between 1 - 12" />;
        }
        else {
            return <TextInputRow title="Column" text="Column" type="number" pattern="[0-9]{1,10}" placeholder="123" validationmessage="Column: Enter up to 10 numbers" />;
        }
    }

    public render() {


        return <div className="question-body">
            <h2>
                1.A
            </h2>
            <div className="row">
                <div className="col-md-12">
                    <p>
                        Calculate the triangle coordinates for an image with right triangles such that
                        for a given row (A-F) and column (1-12) you can produce any of the triangles.
                    </p>
                </div>
            </div>
            {
                typeof (this.state.validationErrors) != "undefined" && this.state.validationErrors.length > 0 ? this.getValidationErrors() : null
            }
            <div className="row">
                <div className="col-md-4">
                    {
                        this.getRowInput()
                    }

                </div>
                <div className="col-md-4 col-md-offset-1">
                    {
                        this.getColInput()
                    }
                </div>
            </div>
            <div className="row buttonRow">
                <div className="col-md-9">
                    <button className="btn btn-primary" onClick={this.submitRequest}>
                        Calculate
                    </button>
                </div>

            </div>
            {
                this.state.showOutput ? this.getOutputView() : null
            }
        </div>;
    }

}
