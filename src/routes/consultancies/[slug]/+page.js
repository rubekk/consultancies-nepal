import { error } from "@sveltejs/kit";
import { data } from "$lib/index.js";

export const load= ({ params }) =>{
  let formattedSlug=params.slug.replaceAll("-"," ");
  let requiredIndex=data.findIndex(item=> {
    return item.name.toLowerCase()==formattedSlug
  });

  if(requiredIndex!==-1) return data[requiredIndex];

  error(404, "Not found");
}