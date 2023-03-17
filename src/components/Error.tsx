import { useRouteError } from "react-router-dom";

const Error = () => {
    // We can get information of the error with this hook
    const { message } = useRouteError();

    return <div>Error</div>;
};

export default Error;
