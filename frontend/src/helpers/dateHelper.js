
// date : Date
export function formatDate( date ) {

    // getMonth() return 0 in January, and January is the month 1, no 0.
    const realMonth = date.getMonth() + 1;

    // 2021-06-10 : String
    const yearFormat = date.getFullYear();
    const monthFormat = realMonth < 10 
                    ? ('0' + realMonth)
                    : (realMonth);
    const dayFormat = date.getDate() < 10 
                    ? ('0' + date.getDate())
                    : (date.getDate())
    const dateFormat = `${yearFormat}-${monthFormat}-${dayFormat}`;

    return dateFormat;
}