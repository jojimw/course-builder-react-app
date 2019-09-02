import React from "react";
import Chart from 'react-google-charts';

import {
    chartOptions,
    chartData
} from "../../resources/resources";

const DashboardBody = props => {
    return (
        <div className="dashboard__body">
            <div className="dashboard__row">
                <h2 className="dashboard__title">Sales</h2>
                <div className="dashboard__type">Internal</div>
            </div>
            <div className="dashboard__chart">
                <Chart
                    width={'100%'}
                    height={'60vh'}
                    chartType="LineChart"
                    loader={<div className="dashboard__chart-loading">Loading Chart...</div>}
                    data={chartData}
                    options={chartOptions}
                    rootProps={{ 'data-testid': '1' }}
                />
            </div>
        </div>
    )
}

export default DashboardBody;