import { Link, NavLink } from "react-router-dom";

const Blog = () => {
    return (
        <div>
            <Link to="/about">About</Link>
            {/* Navlink will have an active class when it is the current page */}
            <NavLink to="/blog">Blog</NavLink>
        </div>
    );
};

export default Blog;
