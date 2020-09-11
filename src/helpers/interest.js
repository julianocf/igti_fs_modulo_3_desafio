export function calculateCompundInterest(initialValue, interestRate, period) {
    return initialValue * Math.pow((1 + (interestRate/100)), period);
}