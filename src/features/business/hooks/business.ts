import { useMutation } from "@tanstack/react-query";

export interface IBusinessCreationRequest {
  businessName: string
      businessAddress: string
      latitude: number
			longitude: number
      phone: string
      userId: string | number
      token: string
}

export const useCreateBusiness = (obj : IBusinessCreationRequest) => {
  return 
}