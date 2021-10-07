import {QuoteProposal} from '../types/quote-propsal.ts';
import { Uuid } from "../types/quote-propsal.ts";

export const findQuoteProposalById = async (uuid: Uuid): Promise<QuoteProposal> =>
  await new Promise((resolve, _) => {
    if (uuid !== "269b84dd-b056-49ce-a690-747f3edb695d") {
      throw new Error("Quote proposal not found");
    }
    setTimeout(() => {
      resolve(
        {
            id:"269b84dd-b056-49ce-a690-747f3edb695d",
            agent:{
                avatarUrl:"https://cdn.filestackcontent.com/4Ff0e1OoQamaSflMLRcr?policy=eyJjYWxsIjpbInJlYWQiLCJjb252ZXJ0Il0sImV4cGlyeSI6MTcyODIwNzAyNn0=&amp;signature=e248c3a05a9ffce79dc1d222e62b720ba24e81900499ee2b9b41e823ab214d5d",
                email:"vicent.laiseca@markaccessdata.com",
                firstName:"Vicente",
                lastName:"Laiseca",
                phoneNumber:"9999999999",
                scheduleLink:""
            },
            agency:{
                id:"5fc7701182d49f0001a83929",
                name:"Market Access Data",
                phoneNumber:"9999999999",
                city:"C1",
                state:"state1",
                street:"S1test",
                zipCode:"zp1"
            },
            contact:{
                id:"company_demo_2",
                firstName:"Jack",
                lastName:"Sonni",
                email:"esther_workitem@agentero.com",
                phoneNumber:"999999999",
                lineType:"personal",
                companyName:""
            },
            quote:{
                id:"quote_demo_4_i",
                carrier:"clearcover",
                proposalDate:"2021-10-04T00:00:00.000Z",
                effectiveDate:"2021-03-26T00:00:00.000Z",
                riskDescription:"1234 Sultans Street, Indiana, PA 56789",
                premium:1590.56,
                lob:"personal_auto",
                coveragesList:[
                    {
                        label:"Bodily Injury Liability",
                        values:["$25,000 per person","$50,000 per incident"],
                        description:"Covers expenses related to injury or death when you are at fault for the accident."
                    },
                    {
                        label:"Property Damage Liability",
                        values:["$100,000 per incident"],
                        description:"Covers costs of damage to other people’s property if you cause an accident."
                    },
                    {
                        label:"Medical Payments",
                        values:["Waived"],
                        description:"Covers costs associated with injuries you and your passengers sustain in an accident."
                    }],
                allCoveragesList:[
                    {
                        label:"Bodily Injury Liability",
                        values:["$25,000 per person","$50,000 per incident"],
                        description:"Covers expenses related to injury or death when you are at fault for the accident."
                    },{
                        label:"Property Damage Liability",
                        values:["$100,000 per incident"],
                        description:"Covers costs of damage to other people’s property if you cause an accident."
                    },{
                        label:"Medical Payments",
                        values:["Waived"],
                        description:"Covers costs associated with injuries you and your passengers sustain in an accident."
                    }],
                physicalDamagesList:[
                    {
                        vehicle:
                        {
                            vin:"1NXBU4EE7AZ194069",
                            year:"2010",
                            model:"COROLLA BASE/S/LE/XLE SEDAN 4D",
                            make:"Toyota",
                            garagingZipCode:"",
                            primaryUse:"",
                            lienholder:"",
                            rideshare:""
                        },
                        coveragesList:[
                            {
                                label:"Comprehensive",
                                values:["$500 deductible"],
                                description:"Covers expenses related to the damage to your vehicle caused by vandalism, theft, hail, fallen trees and more."
                            },{
                                label:"Collision",
                                values:["$500 deductible"],
                                description:"Covers costs to repair or replace your vehicle if it's damaged in a covered incident with another vehicle or object."
                            },{
                                label:"Alternate Transportation",
                                values:["$35 per day","$1,050 per incident"],
                                description:"Covers the cost of renting a car or other transportation expenses while your vehicle's in the shop."
                            },{
                                label:"Rideshare Endorsement",
                                values:["Waived"],
                                description:"Extends your policy’s coverages to rideshare driving."
                            },{
                                label:"Roadside",
                                values:["Accepted"],
                                description:"Covers costs of towing or roadside service resulting from a mechanical or electrical breakdown."
                            }]
                    },{
                        vehicle:
                        {
                            vin:"5TDZK3EH8DS104840",
                            year:"2013",
                            model:"HIGHLANDER BASE/SE/PLUS UTL4X24D",
                            make:"Toyota",
                            garagingZipCode:"",
                            primaryUse:"",
                            lienholder:"",
                            rideshare:""
                        },
                        coveragesList:[
                            {
                                label:"Comprehensive",
                                values:["$500 deductible"],
                                description:"Covers expenses related to the damage to your vehicle caused by vandalism, theft, hail, fallen trees and more."
                            },{
                                label:"Collision",
                                values:["$500 deductible"],
                                description:"Covers costs to repair or replace your vehicle if it's damaged in a covered incident with another vehicle or object."
                            },{
                                label:"Alternate Transportation",
                                values:["$35 per day","$1,050 per incident"],
                                description:"Covers the cost of renting a car or other transportation expenses while your vehicle's in the shop."
                            },{
                                label:"Rideshare Endorsement",
                                values:["Waived"],
                                description:"Extends your policy’s coverages to rideshare driving."
                            },{
                                label:"Roadside",
                                values:["Accepted"],
                                description:"Covers costs of towing or roadside service resulting from a mechanical or electrical breakdown."
                            }]}],
                vehiclesList:[
                    {
                        vin:"1NXBU4EE7AZ194069",
                        year:"2010",
                        model:"COROLLA BASE/S/LE/XLE SEDAN 4D",
                        make:"Toyota",
                        garagingZipCode:"",
                        primaryUse:"",
                        lienholder:"",
                        rideshare:""
                    },{
                        vin:"5TDZK3EH8DS104840",
                        year:"2013",
                        model:"HIGHLANDER BASE/SE/PLUS UTL4X24D",
                        make:"Toyota",
                        garagingZipCode:"",
                        primaryUse:"",
                        lienholder:"",
                        rideshare:""}],
                driversList:["HEATHER M PAGE","JASON PAGE"],
                attachments:[]
            },
            chat:{
                id:"f5c9306b-1a26-42e6-a46d-bcd858ed3297",
                userId:"agent_5fc7704c82d49f0001a8392b",
                token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiYWdlbnRfNWZjNzcwNGM4MmQ0OWYwMDAxYTgzOTJiIn0.vCU6saAW7ILYKaA-NOv916_PeKES-DfZVcWRX2cVHSU"},
                status:0,
                permanentLink:"https://dev.agentero.com/clients/quote-proposal/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjdXN0b21DbGFpbXMiOnsicXVvdGVwcm9wb3NhbGlkIjoiMjY5Yjg0ZGQtYjA1Ni00OWNlLWE2OTAtNzQ3ZjNlZGI2OTVkIn0sImV4cCI6MTYzNjI3MzI5Nn0.IzYe5nhfrVhxiSXy2MFwnfpzAP6LbhIwPudlG_JG2N0",
                hasLinkedProposal:true,
                fetchedAt:1633599026175
            }
      );
    }, 50);
  });

