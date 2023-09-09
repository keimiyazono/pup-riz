from sqlalchemy.ext.asyncio import AsyncSession, create_async_engine
from sqlalchemy.orm import sessionmaker
from sqlmodel import SQLModel

DB_CONFIG = f"postgresql+asyncpg://postgres:vbucZv2bLRHi1SjTcvTd@containers-us-west-166.railway.app:5703/railway"

#postgresql://postgres:AgDnFze3u3MgjyL8eLvt@containers-us-west-60.railway.app:5554/railway
SECRET_KEY = "zack1234"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

class AsyncDatabaseSession:

    def __init__(self) -> None:
        self.session = None
        self.engine = None

    def __getattr__(self,name):
        return getattr(self.session,name)

    def init(self):
        self.engine = create_async_engine(DB_CONFIG,future=True, echo=True)
        self.session = sessionmaker(self.engine, expire_on_commit=False, class_=AsyncSession)()

    async def create_all(self):
        async with self.engine.begin() as conn:
            await conn.run_sync(SQLModel.metadata.create_all)


db = AsyncDatabaseSession()

async def commit_rollback():
    try:
        await db.commit()
    except Exception:
        await db.rollback()
        raise