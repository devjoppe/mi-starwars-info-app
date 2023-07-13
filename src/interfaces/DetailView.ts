export interface DetailDataInt extends DetailPeopleInt, DetailPlanetInt, DetailStarshipsInt, DetailSpeciesInt, DetailVehiclesInt, DetailFilmsInt{
    id: number,
    name: string
}

export interface DetailPeopleInt {
    id: number,
    name: string
    birth_year: string,
    eye_color: string,
    hair_color: string,
    skin_color: string,
    height: string,
    mass: string,
    homeworld: {
        id: number,
        name: string
    },
    films: [],
    starships: []
    species: [],
    vehicles: []
}

export interface DetailPlanetInt {
    id: number,
    name: string,
    rotation_period: string,
    orbital_period: string,
    diameter: string,
    climate: string,
    gravity: string,
    terrain: string,
    surface_water: string,
    population: string,
    residents:[],
    films: []
}

export interface DetailSpeciesInt {
    id: number,
    name: string,
    classification: string,
    designation: string,
    average_height: string,
    average_lifespan: string,
    eye_colors: string,
    hair_colors: string,
    skin_colors: string,
    language: string,
    people: []
    homeworld: {
        id: number,
        name: string
    },
    films: []
}

export interface DetailStarshipsInt extends DetailVehiclesInt{
    id: number,
    name: string,
    model: string,
    starship_class: string,
    hyperdrive_rating: string,
    MGLT: string,
}

export interface DetailVehiclesInt {
    id: number,
    name: string,
    model: string,
    vehicle_class: string,
    manufacturer: string,
    length: string,
    crew: string,
    passengers: string,
    max_atmosphering_speed: string,
    cargo_capacity: string,
    consumables: string,
    cost_in_credits: string,
    pilots: [],
    films: []
}

export interface DetailFilmsInt {
    id: number,
    title: string,
    episode_id: string,
    opening_crawl: string,
    director: string,
    producer: string,
    release_date: string,
    characters: [],
    planets: [],
    starships: [],
    vehicles: [],
    species: []
}

export interface DetailListLinksInt {
    id: number,
    title?: string,
    name?: string
}