module.exports = {
    port: process.env.PORT || 8081,
    db: {
        database: process.env.DB_NAME || 'venm-stack',
        user: process.env.DB_USER || 'venm-stack',
        password: process.env.DB_PASS || 'venm-stack',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: './venm-stack.sqlite'
        }
    },
    authentication: {
        jwtSecret: process.env.JWT_SECRET || 'secret'
    }
}