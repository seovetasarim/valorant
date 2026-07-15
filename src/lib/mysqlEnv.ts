/** MySQL bağlantısı yalnızca ortam değişkenlerinden — valorant-main ile aynı */
export type MysqlConnEnv = {
  host: string
  user: string
  password: string
  database: string
}

export function mysqlConfigFromEnv(): MysqlConnEnv | null {
  const host = process.env.DB_HOST?.trim()
  const user = process.env.DB_USER?.trim()
  const password = (process.env.DB_PASSWORD ?? '').trim()
  const database = process.env.DB_NAME?.trim()
  if (!host || !user || !password || !database) return null
  return { host, user, password, database }
}
