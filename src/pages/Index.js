import React from "react";
import { Form, Link, useLoaderData } from "react-router-dom";

function Index(props) {
    const cheese = useLoaderData();
    return (
        <div>
            <h2>Create a eachcheese</h2>
            <Form
                action="/create"
                method="post"
            >
                <input type="input" name="name" placeholder="cheese name" />
                <input
                    type="text"
                    name="image"
                    placeholder="cheese picture"
                />
                <input type="input" name="title" placeholder="cheese title" />

                <input type="submit" value="create eachcheese" />
            </Form>

            <h2>Cheese</h2>
            <div className='container'>
                {cheese.map((eachcheese) => (
                    <div className="card" key={eachcheese._id}>
                        <Link to={`/${eachcheese._id}`} className="eachcheese">
                            <h1>{eachcheese.name}</h1>
                        </Link>
                        <img src={eachcheese.image} alt={eachcheese.name} />
                        <h3>{eachcheese.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Index;