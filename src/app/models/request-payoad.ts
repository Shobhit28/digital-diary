
export interface CreateBranchPayload {
  name: string;
  city: string;
  address: string;
  pincode: number;
}

export interface CreateApprovalPayload {
  userId: string;
  branchId: string;
}