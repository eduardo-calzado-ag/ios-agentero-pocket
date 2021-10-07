import { Appointment } from "../types/appointment.ts";

export const findAppointments = async (): Promise<Appointment[]> =>
await new Promise((resolve, _) => {
  setTimeout(() => {
      const mockAppointments: Appointment[] = [
      {carrier:"aon_edge",status:2,releaseDate:"2020-08-31T00:00:00.000Z",lobsList:["flood"],policiesCount:0,quotesCount:0,url:"www.google.com"},
      {carrier:"hippo",status:2,releaseDate:"2021-08-25T00:00:00.000Z",lobsList:["home_owner","condo","dwelling_fire"],policiesCount:0,quotesCount:0,url:"https://producer.myhippo.com/v2/login"},
      {carrier:"elephant",status:3,releaseDate:"2021-06-16T00:00:00.000Z",lobsList:["personal_auto"],policiesCount:0,quotesCount:0,url:"https://agency.elephant.com#postal-code"},
      {carrier:"pouch",status:3,releaseDate:"2021-12-09T00:00:00.000Z",lobsList:["commercial_auto"],policiesCount:0,quotesCount:0,url:""},
      {carrier:"clearcover",status:0,releaseDate:"2020-05-23T00:00:00.000Z",lobsList:["personal_auto"],policiesCount:0,quotesCount:0,url:"https://agents.clearcover.com/quotes"},
      {carrier:"coterie",status:0,releaseDate:"2021-01-31T00:00:00.000Z",lobsList:["professional_liability","general_liability","business_owner_policy"],policiesCount:0,quotesCount:0,url:"https://dashboard.coterieinsurance.com/"},
      {carrier:"cover",status:0,releaseDate:"2021-01-27T00:00:00.000Z",lobsList:["personal_auto"],policiesCount:0,quotesCount:0,url:"https://cover.britecore.com/agent/misc/ko_dashboard"},
      {carrier:"get_covered",status:0,releaseDate:"2021-01-31T00:00:00.000Z",lobsList:["renter","rent_guarantee"],policiesCount:0,quotesCount:0,url:"https://admin.getcoveredinsurance.com/auth/login"},
      {carrier:"haven_life",status:0,releaseDate:"2021-01-05T00:00:00.000Z",lobsList:["life"],policiesCount:0,quotesCount:0,url:"https://partners.havenlife.com/"},
      {carrier:"mileauto",status:0,releaseDate:"2021-12-09T00:00:00.000Z",lobsList:["personal_auto"],policiesCount:0,quotesCount:0,url:"https://www.mileauto.com/"},
      {carrier:"branch",status:1,releaseDate:"2021-04-15T00:00:00.000Z",lobsList:["home_owner","personal_auto","personal_umbrella","renter"],policiesCount:0,quotesCount:0,url:"https://www.ourbranch.com/account/auth/signin"},
      {carrier:"openly",status:0,releaseDate:"2020-06-30T00:00:00.000Z",lobsList:["home_owner","landlord"],policiesCount:0,quotesCount:0,url:"https://portal.openly.com/agents/sign-in"},
      {carrier:"pie_insurance",status:0,releaseDate:"2021-04-14T00:00:00.000Z",lobsList:["workers_compesation"], policiesCount:0,quotesCount:0,url:"https://partner.pieinsurance.com/sign-in"}
    ];
    resolve(mockAppointments);
  }, 50);
});