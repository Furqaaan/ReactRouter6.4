import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import About, { aboutDataLoaderWithParams } from "./components/About";
import Home from "./components/Home";
import Profile from "./components/Profile";

const App = () => {
    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    );
};

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/">
            // The index keyword specifies that, this route is the default
            component that // should be loaded when the parent path is reached
            <Route index element={<Home />} />
            // If you added a loader , then the page will only be loaded after
            the loader // content has finished loading. // The loaded prop can
            only be used in routes created with createBrowserRouter. //
            createBrowserRouter() is the recommended way to create routes in
            react.
            <Route
                path="about/:id?"
                element={<About />}
                loader={aboutDataLoaderWithParams}
            />
            <Route path="profile" element={<Profile />} />
        </Route>
    )
);

export default App;
