declare module 'polskie-miejscowosci' {
    const type: [
      {
        Commune: string
        District: string
        Id: string
        Latitude: number
        Longitude: number
        Name: string
        Province: string
        Type: "village" | "city"
      }?
    ]
    export default type
  }