exports.handler = async (event) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify(
            "Hello from the all new, completely remade backend Lambda!"
        ),
    };

    return response;
};
