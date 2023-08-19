
export const formatNumber = (number) => {

    return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2
    }).format(number);
}