export type Carrier = 
	'hippo'
	| 'clearcover'
	| 'haven_life'
	| 'openly'
	| 'aon_edge'
	| 'get_covered'
	| 'cover'
	| 'pie_insurance'
	| 'coterie'
	| 'branch'
	| 'elephant'
	| 'pouch'
	| 'mileauto';


export enum CarrierAppointmentStatus {
	Available,
	Rejected,
	Appointed,
	InProgress,
	New
}

export type InsuranceType =
	| 'public'
	| 'personal_auto'
	| 'personal_umbrella'
	| 'home_owner'
	| 'renter'
	| 'condo'
	| 'dwelling_fire'
	| 'landlord'
	| 'boat'
	| 'motorcycle'
	| 'flood'
	| 'atv_off_road_vehicle'
	| 'medicare'
	| 'pet'
	| 'snowmobile'
	| 'personal_wind'
	| 'health'
	| 'earthquake'
	| 'vision'
	| 'scheduled_personal_property'
	| 'antique_classic_auto'
	| 'rv_motorhome'
	| 'dental'
	| 'event_liability'
	| 'identity_protection'
	| 'mobile_homeowners'
	| 'life'
	| 'electronic_devices'
	| 'ridesharing'
	| 'travel'
// 	Other = 'other'
	| 'commercial_auto'
// 	Commercial = 'commercial'
| 'inland_marine'
// 	Multiline = 'multiline'
| 'professional_liability'
| 'general_liability'
| 'business_owner_policy'
 | 'workers_compesation'
// 	CommercialProperty = 'commercial_property'
// 	CommercialUmbrella = 'commercial_umbrela'
// 	DirectorsAndOfficers = 'directors_and_officers'
// 	EmploymentPracticesLiability = 'employment_practices_liability'
// 	ErrorsAndOmissions = 'errors_and_omissions'
// 	CommercialPackage = 'commercial_package'
// 	LiquorLiability = 'liquor_liability'
// 	ExcessLiability = 'excess_liability'
// 	CommercialInlandMarine = 'commercial_inland_marine'
// 	OceanMarine = 'ocean_marine'
// 	PolutionLiability = 'polution_liability'
// 	Bond = 'bond'
// 	BondFidelity = 'bond_fidelity'
// 	BondFiduciary = 'bond_fiduciary'
// 	BondSurety = 'bond_surety'
// 	Crime = 'crime'
// 	CyberLiability = 'cyber_liability'
// 	GarageAndDealers = 'garage_and_dealers'
// 	GarageKeepersLegalLiability = 'garage_keepers_legal_liability'
// 	InstallationBuildersRisk = 'installation_builders_risk'
// 	ShortTermDisability = 'short_term_liability'
// 	EmployeeBenefitsLiability = 'employee_benefits_liability'
// 	EquipmentBreakdown = 'equipment_breakdown'
// 	BusinessInterruption = 'business_interruption'
// 	HiredAndNonOwnedAuto = 'hired_and_non_owned_auto'
// 	MedicalMalpractice = 'medical_malpractice'
// 	ProductLiability = 'product_liability'
// 	FiduciaryLiability = 'fiduciary_liability'
|	'habitational'
|	'owners_and_contractors_protective_liability'
// 	FireBoilerAndMachinery = 'fire_boiler_and_machinery'
|  'rent_guarantee';
// }

export interface Appointment {
    carrier: Carrier;
	status: CarrierAppointmentStatus;
	releaseDate: string | Date;
	lobsList: InsuranceType[];
	policiesCount: number;
	quotesCount: number;
	url: string;
  }
  