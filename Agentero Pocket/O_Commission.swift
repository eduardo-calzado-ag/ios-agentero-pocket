//
//  O_Commission.swift
//  Agentero Pocket
//
//  Created by Edu on 7/10/21.
//

import Foundation
import UIKit

class O_Commission {
    let period: String
    let commission: String
    let file: String?
    
    init(period: String, commission: String) {
        self.period = period
        self.commission = commission
        self.file = nil
    }
}
