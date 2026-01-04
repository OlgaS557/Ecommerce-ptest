const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

function createMockJwt(payload) {
    const header = Buffer.from(
        JSON.stringify({ alg: 'HS256', typ: 'JWT' })
    ).toString('base64url');

    const body = Buffer.from(
        JSON.stringify(payload)
    ).toString('base64url');

    return `${header}.${body}.signature`;
}


// ===== MOCK REGISTER =====
app.post('/api/signup', (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    console.log('Mock register body:', req.body);

    // Простая валидация
    if (!email || !password || !firstName || !lastName) {
        return res.status(400).json({ message: 'Missing fields' });
    }
    const jwtToken = createMockJwt({
        email,
        role: 'ROLE_USER'
    });
    // Возвращаем "фейковый" ответ, как настоящий API
    res.json({
        userId: 'mocked-user-123',
        email,
        firstName,
        lastName,
        registrationDate: new Date().toISOString(),
        jwtToken,
        jwtRefreshToken: 'mock-refresh-token',
        roles: ['ROLE_USER']
    });
});

// ===== MOCK LOGIN =====
app.post('/api/signin', (req, res) => {
    console.log('Mock login body:', req.body);
    const { email } = req.body;

    const jwtToken = createMockJwt({
        email,
        role: 'ROLE_USER'
    });

    // простой мок: если email и password есть, возвращаем токены
    if (req.body.email && req.body.password) {
        return res.json({
            userId: 'mocked-user-123',
            email,
            firstName: 'ooo',
            lastName: 'ooo',
            jwtToken,
            jwtRefreshToken: 'mock-refresh-token',
            roles: ['ROLE_USER']
        });
    }

    res.status(401).json({ message: 'Invalid credentials' });
});

app.listen(PORT, () => {
    console.log(`✅ Mock server running on http://localhost:${PORT}`);
});

