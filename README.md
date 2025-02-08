# インストール
pnpm add -D prisma
pnpm add @prisma/client

# スキーマに基づいてデータベースを更新する
pnpm exec prisma migrate dev --name add_column_to_user

# スキーマに変更があった際は Prisma Client を再生成
pnpm exec prisma generate

# prisma studio
pnpm exec prisma studio

# prisma db pull
``` sh
# sqlite
sqlite3 dev.db
.tables
CREATE TABLE Post (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    content TEXT,
    userId INTEGER NOT NULL,
    FOREIGN KEY (userId) REFERENCES User(id) ON DELETE CASCADE
);
.exit
```

