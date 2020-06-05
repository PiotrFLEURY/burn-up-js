import React from 'react';
import { Chart } from 'react-charts'
import { connect } from 'react-redux';

function forecast(startValue, points, length) {
    let dataIndexes = []
    for (var i = length - 1; i < length * 2; i++) {
        dataIndexes.push(i)
    }
    return dataIndexes.map((current, index) => {
        return [current, startValue + (points * index)]
    })
}

function min(array) {
    var min = Math.max(...array)
    for (var i = 0; i < array.length; i++) {
        var value = array[i]
        if (value !== 0 && value < min) {
            min = value
        }
    }

    return min

}

const BurnUpChart = ({ values }) => {

    var realData = values.map((current, index) => {
        return [index, current]
    })

    let lastRealData = values[values.length - 1]

    let maxPoints = Math.max(...values)
    let minPoints = min(values)
    let avgPoints = (values.reduce((a, b) => a + b, 0) / values.length)

    let maxData = forecast(lastRealData, maxPoints, realData.length)
    let minData = forecast(lastRealData, minPoints, realData.length)
    let avgData = forecast(lastRealData, avgPoints, realData.length)

    var data = [
        {
            label: 'Réel',
            data: realData
        },
        {
            label: 'Points max',
            data: maxData
        },
        {
            label: 'Points min',
            data: minData
        },
        {
            label: 'Moyenne',
            data: avgData
        }
    ]

    const axes = React.useMemo(
        () => [
            { primary: true, type: 'linear', position: 'bottom' },
            { type: 'linear', position: 'left' }
        ],
        []
    )


    return (
        <div className="container">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">
                        Burn up chart
                    </h5>
                    <div
                        style={{
                            width: '100%',
                            height: '600px'
                        }}
                    >
                        <Chart data={data} axes={axes} />
                    </div>

                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    values: state.values.data
});

export default connect(mapStateToProps)(BurnUpChart);
