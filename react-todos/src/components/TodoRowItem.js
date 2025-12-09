// Can only have one parent element.
function TodoRowItem(props) {
    return (
        <tr onClick={() => props.deleteTodo(props.rowNumber)}>
            <th scope='row'>{props.rowNumber}</th>
            <td>{props.rowDesc}</td>
            <td>{props.rowAssigned}</td>
        </tr>
    )
}

// Allow us to use this component in our app.
export default TodoRowItem