exports.handler = async (event) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify("The new Lambda says hello!"),
    };

    return response;
};
