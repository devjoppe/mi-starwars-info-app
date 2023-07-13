export interface ListViewInt {
    id: number,
    name: string,
    title: string
    terrain: string,
    manufacturer: string,
    average_height: string,
    average_lifespan: string,
    vehicle_class: string,
    director: string,
    release_date: string,
    homeworld: {
        id: number,
        name: string
    }
}