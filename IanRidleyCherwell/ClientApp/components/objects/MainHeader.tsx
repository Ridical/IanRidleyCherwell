import * as React from 'react';

export interface MainHeaderData {
    text: string;
}


export class MainHeader extends React.Component<MainHeaderData, { headerText: string}> {

    constructor(props: MainHeaderData) {
        super(props);
        this.state = { headerText: props.text };
    }


    public render() {
        return <div className="row centerText">
            <h1 className="fancy">
                <span>{this.state.headerText}</span>
            </h1>
        </div>;
    }
}