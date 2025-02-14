import { error } from "@sveltejs/kit"
import testGuidesData from "$lib/data/test-guides.json"

export const load = ({ params }) => {
    const dataIndex =  testGuidesData.findIndex(data => {
        return data.data.slug === params.slug
    })

    if(dataIndex < 0) error(404, "Not found");

    const testGuideData = testGuidesData[dataIndex]

    return { data: testGuideData }
}