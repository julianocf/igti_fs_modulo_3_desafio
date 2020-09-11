import React from "react";

import { formatCurrency } from "../helpers/formatHelper";

export default function Installment({ data }) {
    const { id, valueWithInterest, monthlyGain, GainRate } = data;

    const valueTextStyle =
        monthlyGain > 0 ? "green-text text-darken-3" : "red-text text-darken-3";
    const PercentageTextStyle =
        monthlyGain > 0 ? "blue-text text-darken-3" : "orange-text text-darken-3";

    return (
        <div className="col s2">
            <div style={styles.installment}>
                <div style={styles.index}>{id}</div>
                <div style={styles.value}>
                    <div className={valueTextStyle}>
                        {formatCurrency(valueWithInterest)}
                    </div>
                    <div className={valueTextStyle}>
                        {formatCurrency(monthlyGain)}
                    </div>
                    <div className={PercentageTextStyle}>{GainRate} %</div>
                </div>
            </div>
        </div>
    );
}

const styles = {
    installment: {
        display: "flex",
        border: "1px dotted #555",
        borderRadius: "3%",
        margin: "10px",
        width: "100%",
    },
    index: {
        margin: "auto",
        textAlign: "center",
        width: "20%",
        fontWeight: "bold",
        fontSize: "1.2rem",
    },
    value: {
        textAlign: "left",
        width: "80%",
        fontSize: "1.1rem",
    },
};
