exports.handler = async function () {
  try {
    const response = await fetch(
      'https://63fe336d370fe830d9d040e7.mockapi.io/Items'
    );

    if (!response.ok) {
      return {
        statusCode: response.status,
        body: JSON.stringify({ message: 'Failed to fetch products' }),
      };
    }

    const items = await response.json();

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(items),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: error.message,
      }),
    };
  }
};


