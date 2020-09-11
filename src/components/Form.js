import React from "react";

export default function Form({
    data,
    onChangeInitialValue,
    onChangeInterestRate,
    onChangePeriod,
}) {
    const { initialValue, interestRate, period } = data;

    const handleInitialValueChange = (event) => {
        onChangeInitialValue(+event.target.value);
    };

    const handleInterestRateChange = (event) => {
        onChangeInterestRate(+event.target.value);
    };

    const handlePeriodChange = (event) => {
        onChangePeriod(+event.target.value);
    };

    return (
        <>
            <div className="input-field col s4">
                <input
                    id="initial_value"
                    type="number"
                    min="0"
                    max="100000"
                    step="100"
                    value={initialValue}
                    onChange={handleInitialValueChange}
                    autoFocus
                />
                <label htmlFor="initial_value">Capital inicial</label>
            </div>
            <div className="input-field col s4">
                <input
                    id="interest_rate"
                    type="number"
                    min="-12"
                    max="12"
                    step="0.1"
                    value={interestRate}
                    onChange={handleInterestRateChange}
                />
                <label htmlFor="interest_rate">Taxa de juros mensal</label>
            </div>
            <div className="input-field col s4">
                <input
                    id="period"
                    type="number"
                    min="1"
                    max="36"
                    step="1"
                    value={period}
                    onChange={handlePeriodChange}
                />
                <label htmlFor="period">Período (meses)</label>
            </div>
        </>
    );
}
