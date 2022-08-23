//create component called SignUp
//add managed state to the form. Elements tracked by the state on the component.
//define and assign values
function SignUp(){
    //handle change is the function used to define and assign values. useForm function will take all the elements for which values need to be assigned.
    const [values, handleChange] = useForm({
        year:'',
        name:'',
        email:'',
        password:'',
        checkbox: false
    });


    function handle(){
        console.log('values: ', values);
        
    }
    //add state to element by adding the value of the element.
        //define the onChange event (e). A function that will set the value.
    return (
        /* since all the values are held in 'values', eneter values.element for each element.

        leverage the target name, so add name attribute to each element.

        */
        <>
        <select name="year" value={values.year} onChange={handleChange}>
            <option>Freshman</option>
            <option>Sophmore</option>
            <option>Junior</option>
            <option>Senior</option>
        </select>
        <div>Name</div>
        <input name="name" type="text" value={values.name} onChange={handleChange}/>
        <div>Email</div>
        <input name="email" type="text" value={values.email} onChange={handleChange}/>
        <div>Password</div>
        <input name="password" type="text" value={values.password} onChange={handleChange}/>
        <div><input name="checkbox" type="checkbox" value={values.checkbox} onChange={handleChange} />Remember me</div>
        <button onClick={handle}>Submit</button>
        </>
    )
}

//ReactDOM.render to add ellement to the page and target HTML element 'root'
ReactDOM.render(
    <SignUp/>,
    document.getElementById('root')
)