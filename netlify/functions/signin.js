function createMockJwt(payload) {
  const header = Buffer.from(
    JSON.stringify({ alg: "HS256", typ: "JWT" })
  ).toString("base64url");

  const body = Buffer.from(JSON.stringify(payload)).toString("base64url");

  return `${header}.${body}.signature`;
}

module.exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const { email, password } = JSON.parse(event.body);

  if (!email || !password) {
    return {
      statusCode: 401,
      body: JSON.stringify({ message: "Invalid credentials" }),
    };
  }

  const jwtToken = createMockJwt({ email });

  return {
    statusCode: 200,
    body: JSON.stringify({
      userId: "mock-user-123",
      email,
      firstName: "Mock",
      lastName: "User",
      jwtToken,
      jwtRefreshToken: "mock.refresh.token",
      roles: ["ROLE_USER"],
    }),
  };
}
