import * as React from "react"
import { UiTag } from "@/components/ui/Tag"
import { UiTagList, UiTagListDivider } from "@/components/ui/TagList"
import { StoreReturn } from "@medusajs/types"

type ReturnStatusProps = {
  returnEntity: StoreReturn
  paymentStatus: string
  className?: string
}

export const ReturnStatus: React.FC<ReturnStatusProps> = ({
  returnEntity,
  paymentStatus,
  className,
}) => {
  const isRefunded = paymentStatus === "refunded" || paymentStatus === "partially_refunded"
  const refundLabel = paymentStatus === "partially_refunded" ? "Partially Refunded" : "Refunded"
  const isReceived = returnEntity.status === "received" || returnEntity.status === "partially_received"
  const receiveLabel = returnEntity.status === "partially_received" ? "Partially Received" : "Received"

  return (
    <UiTagList className={className}>
      <UiTag isActive iconName="receipt">
        Requested
      </UiTag>
      <UiTagListDivider />
      <UiTag isActive={isReceived} iconName="package">
        {receiveLabel}
      </UiTag>
      <UiTagListDivider />
      <UiTag isActive={isRefunded} iconName="credit-card">
        {refundLabel}
      </UiTag>
    </UiTagList>
  )
}
