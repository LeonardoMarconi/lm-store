-- CreateTable
CREATE TABLE "OrderAddressDelivery" (
    "id" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "postalCode" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "orderId" TEXT NOT NULL,

    CONSTRAINT "OrderAddressDelivery_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "OrderAddressDelivery" ADD CONSTRAINT "OrderAddressDelivery_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
