import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { CustomTextInput } from './utility/CustomTextInput';
import { LoadingPanel } from './Loading';
import { CalculationService } from './ts/services/CalculationService';
import * as CalcModels from './ts/model/CalculationModels';

import { TextInputRow } from './objects/TextInputRow';

interface OneAViewModel {
    showOutput: boolean,
    validationErrors?: string[],
    output: string
}

export class OneB extends React.Component<RouteComponentProps<{}>, OneAViewModel>
{
    constructor() {
        super();

        this.submitRequest = this.submitRequest.bind(this);
        this.displayOutput = this.displayOutput.bind(this);

        this.state = {
            showOutput: false,
            output: ""
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

            var txtV1x = document.getElementById("txtV1x") as HTMLInputElement;
            var txtV1y = document.getElementById("txtV1y") as HTMLInputElement;
            var txtV2x = document.getElementById("txtV2x") as HTMLInputElement;
            var txtV2y = document.getElementById("txtV2y") as HTMLInputElement;
            var txtV3x = document.getElementById("txtV3x") as HTMLInputElement;
            var txtV3y = document.getElementById("txtV3y") as HTMLInputElement;

            var input: CalcModels.OneBInputModel ={
                vertexOne : {
                    X: +txtV1x.value,
                    Y: +txtV1y.value
                },
                vertexTwo: {
                    X: +txtV2x.value,
                    Y: +txtV2y.value
                },
                vertexThree: {
                    X: +txtV3x.value,
                    Y: +txtV3y.value
                }
            };

            var output = CalculationService.OneB(input);

            output.then(x => this.displayOutput(x))
                .catch(e =>
                {
                    loading.hideLoading();
                    alert("An error has occurred - Inputs not valid")
                });;

        }
    }

    displayOutput(outputModel: CalcModels.OneBOutputModel) {
        var loading = new LoadingPanel({ title: "" });
        this.setState(
            {
                showOutput: true,
                output: outputModel.triangle,
                validationErrors: []
            },
            () => loading.hideLoading());

    }

    getOutputView() {
        return <div className="output">
            <h3>Output Data:</h3>
            <div className="row">
                <div className="col-md-12">
                    <label>{this.state.output}</label>
                </div>
            </div>
        </div>
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


    public render() {
        return <div className="question-body">
            <h2>
                1.B
            </h2>
            <div className="row">
                <div className="col-md-12">
                    <p>
                        Given the vertex coordinates, calculate the row and column for the triangles:
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <img src={require("../images/oddTriangle.png")}></img>
                </div>
                <div className="col-md-6">
                    <img src={require("../images/evenTriangle.png")}></img>
                </div>
            </div>
            {
                typeof (this.state.validationErrors) != "undefined" && this.state.validationErrors.length > 0 ? this.getValidationErrors() : null
            }
            <div className="row">
                <div className="row">
                    <div className="col-md-3">
                        <TextInputRow title="V1x" type="number" text="V1x" pattern="[0-9]{1,10}" placeholder="123" validationmessage="V1x must be a valid number" />
                        <TextInputRow title="V1y" type="number" text="V1y" pattern="[0-9]{1,10}" placeholder="123" validationmessage="V1y must be a A valid number" />
                    </div>
                    <div className="col-md-3">
                        <TextInputRow title="V2x" type="number" text="V2x" pattern="[0-9]{1,10}" placeholder="123" validationmessage="V2x must be a valid number" />
                        <TextInputRow title="V2y" type="number" text="V2y" pattern="[0-9]{1,10}" placeholder="123" validationmessage="V2y must be a A valid number" />
                    </div>
                    <div className="col-md-3">
                        <TextInputRow title="V3x" type="number" text="V3x" pattern="[0-9]{1,10}" placeholder="123" validationmessage="V3x must be a valid number" />
                        <TextInputRow title="V3y" type="number" text="V3y" pattern="[0-9]{1,10}" placeholder="123" validationmessage="V3y must be a A valid number" />
                    </div>
                </div>
                <div className="row buttonRow">
                    <div className="col-md-9">
                        <button className="btn btn-primary" onClick={this.submitRequest}>
                            Calculate
                    </button>
                    </div>

                </div>
            </div>
            {
                this.state.showOutput ? this.getOutputView() : null
            }
        </div>;
    }
}