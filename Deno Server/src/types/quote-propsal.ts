import { Carrier } from "./appointment.ts";

export type Uuid = string;
export type QuoteProposal = {   
        id: Uuid;
        agent:{
            avatarUrl: string;
            email: string;
            firstName: string;
            lastName: string;
            phoneNumber: string;
            scheduleLink: string;
        },
        agency:{
            id: string;
            name: string;
            phoneNumber: string;
            city: string;
            state: string;
            street: string;
            zipCode: string;
        },
        contact:{
            id: string;
            firstName: string;
            lastName: string;
            email: string;
            phoneNumber: string;
            lineType: string;
            companyName: string;
        },
        quote:{
            id: string;
            carrier: Carrier,
            proposalDate: Date | string;
            effectiveDate: Date | string;
            riskDescription: string;
            premium: number,
            lob: string;
            // deno-lint-ignore no-explicit-any
            coveragesList: any[],
            // deno-lint-ignore no-explicit-any
            allCoveragesList: any[],
            // deno-lint-ignore no-explicit-any
            physicalDamagesList: any[],
            // deno-lint-ignore no-explicit-any
            vehiclesList: any[],
            // deno-lint-ignore no-explicit-any
            driversList: any[],
            // deno-lint-ignore no-explicit-any
            attachments: any[]
        },
        chat:{
            id: Uuid;
            userId:string;
            token: string;
        },
        status: number,
        permanentLink: string;
        hasLinkedProposal: boolean;
        fetchedAt: number
}
