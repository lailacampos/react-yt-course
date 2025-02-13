function Food() {
    const fruits = [
        "Orange",
        "Apple",
    ];

    const vegetables = [
        "Carrot",
        "Broccoli",
    ];

    return(
        <ul>
            <li>Banana</li>
            {fruits.map((fruits, index) => (
                <li key={index}>{fruits}</li>
            )) }
            <li>{vegetables[0]}</li>
            <li>{vegetables[1].toUpperCase()}</li>
        </ul>
    );
}

export default Food;