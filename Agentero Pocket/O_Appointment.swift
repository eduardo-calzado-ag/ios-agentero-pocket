//
//  O_Appointment.swift
//  Agentero Pocket
//
//  Created by Edu on 7/10/21.
//

import Foundation
import UIKit

class O_Appointment {
    let logo: UIImage
    let status: UIImage
    let insuranceTypes: String
    let message: String?
    let ctaButton1: String?
    let ctaButton2: String
    
    init(logo: UIImage, status: UIImage, insuranceTypes: String, message: String?, ctaButton1: String?, ctaButton2: String) {
        self.logo = logo
        self.status = status
        self.insuranceTypes = insuranceTypes
        self.message = message
        self.ctaButton1 = ctaButton1
        self.ctaButton2 = ctaButton2
    }
}
