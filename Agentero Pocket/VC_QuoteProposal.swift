//
//  VC_QuoteProposal.swift
//  Agentero Pocket
//
//  Created by Edu on 6/10/21.
//

import Foundation
import UIKit

class VC_QuoteProposal: UIViewController {
    override func viewDidLoad() {
        super.viewDidLoad()
        print("VC_QuoteProposal.viewDidLoad | hello!")
        
        self.title = "Quotes"
        self.navigationController?.navigationBar.prefersLargeTitles = true
    }
}

