const { env } = process;

const config = {
  username: env.MYSQL_USER || 'root',
  password: env.MYSQL_PASSWORD || 'root',
  database: env.MYSQL_DATABASE || 'cashforce_v3',
  host: env.MYSQL_HOST || 'localhost',
  port: env.MYSQL_PORT || '3306',
  dialect: 'mysql',
  dialectOptions: env.MYSQL_OPTIONS ? JSON.parse(env.MYSQL_OPTIONS) : {},
};

module.exports = {
  development: {
    ...config,
  },
  test: {
    ...config,
  },
};
