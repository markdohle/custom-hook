/* Custom Hook to simplify the form
Create a function that takes initial values and then take those values and add them to the local state.
Use the function setSet to update the values.
*/
function useForm(initialValues) {
    const [values, setValues] = React.useState(initialValues);
    //retern an array with the value( state) and a function to update the state on the onChange event.
    return [
        values,
        e => {
            if(e.type === 'change'){
        //object with the values and the update will be the element that we are working on.
                setValues({
                    ...values,
                    [e.target.name]: e.target.value
                })
            }
        }
    ];
}