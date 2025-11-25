export interface Order {
    id: number
    userId: number
    price: number
    status: 'pending' | 'paid' | 'shipped'
}
