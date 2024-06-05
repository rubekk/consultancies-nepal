export const load= ({fetch, params}) =>{
    console.log(params);

    return { data: params.kello };
}