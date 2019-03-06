import * as React from 'react';

export interface LoadingData {
    title: string;
}


export class LoadingPanel extends React.Component<LoadingData, { title: string }> {

    constructor(props: LoadingData) {
        super();

        this.state = {
            title: props.title
        };

        this.showLoading = this.showLoading.bind(this);
        this.hideLoading = this.hideLoading.bind(this);
    }

    showLoading() {

        var loadingPanel = document.getElementById("loadingPanel") as HTMLDivElement;
        var loadingTitle = document.getElementById("loadingTitle") as HTMLHeadingElement;

        loadingPanel.style.display = "flex";
        loadingTitle.innerHTML = this.state.title;

    }

    public hideLoading() {
        var loadingPanel = document.getElementById("loadingPanel") as HTMLDivElement;
        loadingPanel.style.display = "none";
    }

    public render() {
        return <div id="loadingPanel" className='loadingPanel'>
            <div className="loadingContent">
                <div className="row">
                    <div className="col-md-12">
                        <img src={require('../images/site/loading.gif')} />
                        <h3 id="loadingTitle"></h3>
                    </div>
                </div>
            </div>
        </div>;
    }
}
