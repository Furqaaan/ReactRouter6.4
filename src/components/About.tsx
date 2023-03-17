import axios from "axios";
import { useLoaderData } from "react-router-dom";

const About = () => {
    // We can use the loader data with this hook
    const data = useLoaderData();

    return <div>{data.title}</div>;
};

export const aboutDataLoader = async () => {
    const { data } = await axios(
        "https://jsonplaceholder.typicode.com/todos/1"
    );
    return data;
};

export const aboutDataLoaderWithParams = async ({ request, params }) => {
    // We have access to the request and the params object over here
    const { id } = params;

    const { data } = await axios(
        "https://jsonplaceholder.typicode.com/todos/" + (id || 1)
    );
    return data;
};

export default About;
