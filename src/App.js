import React, { useState, useEffect } from "react";

import Form from "./components/Form";
import Installments from "./components/Installments";

export default function App() {
    const [initialValue, setInitialValue] = useState(0);
    const [interestRate, setInterestRate] = useState(0);
    const [period, setPeriod] = useState(1);
    const [installments, setInstallments] = useState([]);

    useEffect(() => {
        calculateInstallments(initialValue, interestRate, period);
    }, [initialValue, interestRate, period]);

    const calculateInstallments = (initialValue, interestRate, period) => {
        let installments = [];

        if (initialValue > 0 && (interestRate > 0 || interestRate < 0)) {
            for (let index = 0; index < period; index++) {
                let valueWithInterest = (
                    initialValue * Math.pow(1 + interestRate / 100, index + 1)
                ).toFixed(2);
                let monthlyGain = (valueWithInterest - initialValue).toFixed(2);
                installments = [
                    ...installments,
                    {
                        id: index + 1,
                        valueWithInterest,
                        monthlyGain,
                        GainRate: ((monthlyGain * 100) / initialValue).toFixed(
                            2
                        ),
                    },
                ];
            }
        }
        setInstallments(installments);
    };

    const handleInitialValueChange = (value) => {
        if (isNaN(value)) {
            value = 0;
        }
        setInitialValue(value);
    };
    const handleInterestRateChange = (value) => {
        if (isNaN(value)) {
            value = 0;
        }
        setInterestRate(value);
    };
    const handlePeriodChange = (value) => {
        if (isNaN(value)) {
            value = 1;
        }
        setPeriod(value);
    };

    return (
        <div className="container">
            <h1>React - Juros Compostos</h1>
            <div className="row">
                <Form
                    data={{ initialValue, interestRate, period }}
                    onChangeInitialValue={handleInitialValueChange}
                    onChangeInterestRate={handleInterestRateChange}
                    onChangePeriod={handlePeriodChange}
                />
            </div>
            <div className="row">
                <Installments data={installments} />
            </div>
        </div>
    );
}
