import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { OneAComponent } from './OneAComponent';
export class OneA extends React.Component<RouteComponentProps<{}>, {}> {
    constructor() {
        super();

    }

    public render() {
        return <OneAComponent specMode={true}></OneAComponent>;
    }
}
