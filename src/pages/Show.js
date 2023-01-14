import { useLoaderData, Form } from "react-router-dom";


function Show(props){
    const eachcheese = useLoaderData();

    return(
        <div className="eachcheese">
            <h1>{eachcheese.name}</h1>
            <h2>{eachcheese.title}</h2>
            <img src={eachcheese.image} alt={eachcheese.name}/>


            <h2>Update {eachcheese.name}</h2>
            <Form action={`/update/${eachcheese._id}`} method="post">
                <input defaultValue={eachcheese.name} type="input" name="name" placeholder="cheese name"/>
                <input defaultValue={eachcheese.image} type="input" name="image" placeholder="cheese picture"/>
                <input defaultValue={eachcheese.title} type="input" name="title" placeholder="cheese title"/>
                <input type="submit" value={`update ${eachcheese.name}`}/>
                <h2>Delete eachcheese</h2>
            </Form>
            <Form action={`/delete/${eachcheese._id}`} method="post">

                <input type="submit" value={`delete ${eachcheese.name}`}/>

            </Form>

        </div>
    )
}

export default Show;