import * as React from 'react';
import { RouteComponentProps } from 'react-router';


export interface ModalOptions {
    title?: string,
    text: string, 
    callback?: () => void,
    id: string
}




export class BootstrapModal extends React.Component<ModalOptions, ModalOptions> {

    constructor(props: ModalOptions) {
        super(props);

        this.state = {
            title: props.title,
            text: props.text,
            callback: props.callback,
            id: props.id
        };
    }

    rawMarkup() {
        return { __html: this.props.text };
    }

    public render() {

        return <div className="modal" id={this.props.id} tabIndex={-1} role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3 className="modal-title">{this.props.title}</h3>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div dangerouslySetInnerHTML={this.rawMarkup()}></div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={this.props.callback} data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>;
    }
}





