export function formatDollarAmount(number: number) {
    let str = number.toString();
    let parts = str.split('.');

    // Format dollars part with commas
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    let formattedAmount = '$' + parts.join('.');

    return formattedAmount;
}

export interface sale {
    weekEnding: string,
    retailSales: number,
    wholesaleSales: number,
    unitsSold: number,
    retailerMargin: number
}