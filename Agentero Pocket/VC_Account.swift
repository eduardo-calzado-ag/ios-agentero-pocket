//
//  VC_Account.swift
//  Agentero Pocket
//
//  Created by Edu on 7/10/21.
//

import Foundation
import UIKit

class VC_Account: UIViewController {
    override func viewDidLoad() {
        super.viewDidLoad()
        print("VC_Account.viewDidLoad | hello!")
        
        self.title = "Account"
        self.navigationController?.navigationBar.prefersLargeTitles = true
    }
}
