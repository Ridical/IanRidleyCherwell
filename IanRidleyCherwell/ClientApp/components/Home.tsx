import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class Home extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>
            <h1>Cherwell Technical Test</h1>
            <p>Ian Ridley's technical test for his application to Cherwell.</p>
            <h3>Geometric layouts:</h3>
            <p>
                <a href="1A">1.A</a> - The task, calculate the triangle coordinates for an image with right triangles such that for a given
                row (A-F) and column (1-12) you can produce any of the triangles in the layout below
            </p>
             <p>
                <a href="1B">1.B</a>  - Lastly, given the vertex coordinates, calculate the row and column for the triangle
            </p>
            <p>
                Due by 11/03/2018
            </p>
            <p>
                <a href="1AFull">1.A Less limiting</a>  - Ability to check 1A without the limit of only D-F and 1-12
            </p>
        </div>;
    }
}
