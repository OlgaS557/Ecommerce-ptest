module.exports.handler = async (event) => {
  const body = JSON.parse(event.body);

  const { firstName, lastName, email, password } = body;

  if (!email || !password) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Missing fields' }),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      userId: 'mock-user-1',
      firstName,
      lastName,
      email,
      jwtRefreshToken: 'mock-refresh-token',
      roles: ['ROLE_USER'],
    }),
  };
}
