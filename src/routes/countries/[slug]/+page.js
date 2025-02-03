import { error } from "@sveltejs/kit"
import countriesData from "$lib/data/countries.json"

export const load = ({ params }) => {
    const dataIndex =  countriesData.findIndex(data => {
        return data.data.slug === params.slug
    })

    if(dataIndex < 0) error(404, "Not found");

    const countryData = countriesData[dataIndex]

    return { data: countryData }
}