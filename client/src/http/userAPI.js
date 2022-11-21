import {$host} from "./index";

export const getUsers = async () =>{
    const {data} = await $host.get('api/users')
    return data
}
    