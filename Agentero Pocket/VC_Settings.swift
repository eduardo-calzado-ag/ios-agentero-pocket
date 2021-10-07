//
//  VC_Settings.swift
//  Agentero Pocket
//
//  Created by Edu on 7/10/21.
//

import Foundation
import UIKit

class VC_Settings: UIViewController {
    override func viewDidLoad() {
        super.viewDidLoad()
        print("VC_Account.viewDidLoad | hello!")
        
        self.title = "Settings"
        self.navigationController?.navigationBar.prefersLargeTitles = true
    }
}
