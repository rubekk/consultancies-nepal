import testGuidesData from "$lib/data/test-guides.json";
import { error } from "@sveltejs/kit";

export const load = ({ params }) => {
    const dataIndex = testGuidesData.findIndex(data => {
        return data.data.slug === params.slug;
    });

    if (dataIndex < 0) {
        throw error(404, "Not found");
    }

    const testGuideData = testGuidesData[dataIndex];

    return { data: testGuideData };
};
