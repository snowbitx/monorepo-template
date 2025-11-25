export function formatDate(date: Date | string) {
    const d = new Date(date)
    return `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`
}
