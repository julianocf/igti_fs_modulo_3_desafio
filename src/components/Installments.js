import React from "react";
import Installment from "./Installment";

export default function Installments({ data }) {
    if (data.length === 0) {
        return <h4>Nenhuma parcela foi gerada com os valores informados.</h4>;
    }

    return data.map((installment) => (
        <Installment key={installment.id} data={installment} />
    ));
}
