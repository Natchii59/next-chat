-- CreateTable
CREATE TABLE "threads_likes" (
    "thread_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "threads_likes_pkey" PRIMARY KEY ("thread_id","user_id")
);

-- AddForeignKey
ALTER TABLE "threads_likes" ADD CONSTRAINT "threads_likes_thread_id_fkey" FOREIGN KEY ("thread_id") REFERENCES "threads"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "threads_likes" ADD CONSTRAINT "threads_likes_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
