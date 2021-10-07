//
//  VC_Home.swift
//  Agentero Pocket
//
//  Created by Edu on 6/10/21.
//

import Foundation
import UIKit

class VC_Home: UIViewController {
    @IBOutlet weak var commissions_box: UIView!
    @IBOutlet weak var appointments_box: UIView!
    @IBOutlet weak var quoteproposal_box: UIView!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        print("VC_Home.viewDidLoad | hello!")
        
        commissions_box.layer.shadowColor = UIColor.black.cgColor
        commissions_box.layer.shadowOffset = CGSize(width: 1, height: 1)
        commissions_box.layer.shadowOpacity = 0.1
        commissions_box.layer.shadowRadius = 5.0
        
        appointments_box.layer.shadowColor = UIColor.black.cgColor
        appointments_box.layer.shadowOffset = CGSize(width: 1, height: 1)
        appointments_box.layer.shadowOpacity = 0.1
        appointments_box.layer.shadowRadius = 5.0
        
        quoteproposal_box.layer.shadowColor = UIColor.black.cgColor
        quoteproposal_box.layer.shadowOffset = CGSize(width: 1, height: 1)
        quoteproposal_box.layer.shadowOpacity = 0.1
        quoteproposal_box.layer.shadowRadius = 5.0
    }
    @IBAction func commissionTap(_ sender: Any) {
        print("comissionTap clicked")
        self.performSegue(withIdentifier: "showCommissions", sender: nil)

    }
    @IBAction func appointmentsTap(_ sender: Any) {
        print("appointmentsTap clicked")
        self.performSegue(withIdentifier: "showAppointments", sender: nil)
    }
    
    @IBAction func quoteTap(_ sender: Any) {
        print("quoteTap clicked")
        self.performSegue(withIdentifier: "showQuotes", sender: nil)
    }
}
