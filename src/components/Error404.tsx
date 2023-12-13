import Layout from "./Layout";
import React from "react";


const Error404: React.FC = () => {

    return (
        <Layout>
        <div className={'Page404'}>
            <h1>404</h1>
            <img src="https://media.giphy.com/media/3o7aCSPqXE5C6T8tBC/giphy.gif" alt="404"/>
            <h2>Page not found</h2>
        </div>
        </Layout>
    );
}


export default Error404;