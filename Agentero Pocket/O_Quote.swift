//
//  O_Quote.swift
//  Agentero Pocket
//
//  Created by Edu on 7/10/21.
//

import Foundation
import UIKit

class O_Quote {
    let carrier: String
    let name: String
    let insuranceType: String
    let price: String
    
    init(carrier: String, name: String, insuranceType: String, price: String) {
        self.carrier = carrier
        self.name = name
        self.insuranceType = insuranceType
        self.price = price
    }
}
