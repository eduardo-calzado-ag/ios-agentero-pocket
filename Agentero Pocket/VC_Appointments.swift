//
//  VC_Appointments.swift
//  Agentero Pocket
//
//  Created by Edu on 6/10/21.
//

import Foundation
import UIKit

class VC_Appointments: UIViewController {
    @IBOutlet weak var tableView: UITableView!
    var appointmentsArray = [O_Appointment]()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        print("VC_Appointments.viewDidLoad | hello!")
        
        self.title = "Appointments"
        self.navigationController?.navigationBar.prefersLargeTitles = true
        
        tableView.delegate = self
        tableView.dataSource = self
        
        initData()
    }
    override func viewWillAppear(_ animated: Bool) {
        self.navigationItem.backButtonTitle = "Back"
        self.tableView.contentInsetAdjustmentBehavior = .never
        self.navigationController?.navigationBar.sizeToFit()
    }
    
    func initData() {
        let a1 = O_Appointment(logo: UIImage(imageLiteralResourceName: "Logo_Havenlife"), status: UIImage(imageLiteralResourceName: "Status_Appointed"), insuranceTypes: "Homeowners, Condo, Dwelling Fire", message: "14 policies last 30 days | 6 quotes", ctaButton1: "See activity", ctaButton2: "Learn More")
        let a2 = O_Appointment(logo: UIImage(imageLiteralResourceName: "Logo_Clearcover"), status: UIImage(imageLiteralResourceName: "Status_Appointed"), insuranceTypes: "Personal Auto", message: "6 policies last 30 days | 6 quotes", ctaButton1: "See activity", ctaButton2: "Learn More")
        let a3 = O_Appointment(logo: UIImage(imageLiteralResourceName: "Logo_Cover"), status: UIImage(imageLiteralResourceName: "Status_Appointed"), insuranceTypes: "Personal Auto", message: "10 policies last 30 days | 184 quotes", ctaButton1: "See activity", ctaButton2: "Learn More")
        let a4 = O_Appointment(logo: UIImage(imageLiteralResourceName: "Logo_Pie"), status: UIImage(imageLiteralResourceName: "Status_Inprogress"), insuranceTypes: "Professional Liability, General Liability, Business Owner Policy", message: "Your application is currently being reviewed", ctaButton1: "", ctaButton2: "Learn More")
        let a5 = O_Appointment(logo: UIImage(imageLiteralResourceName: "Logo_Elephant"), status: UIImage(imageLiteralResourceName: "Status_Appointed"), insuranceTypes: "Professional Liability, General Liability, Business Owner Policy", message: "To see this carrier activity you must visit the carrier portal", ctaButton1: "GO TO CARRIER'S PORTAL", ctaButton2: "Learn More")
        
        appointmentsArray = [a1, a2, a3, a4, a5]
    }
}

extension VC_Appointments: UITableViewDelegate, UITableViewDataSource {
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return appointmentsArray.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell:Cell_Appointment = self.tableView.dequeueReusableCell(withIdentifier: "cell_appointments") as! Cell_Appointment
        if let app = appointmentsArray[indexPath.row] as? O_Appointment {
            cell.logo.image = app.logo
            cell.message.text = app.message
            cell.insuranceTypes.text = app.insuranceTypes.uppercased()
            cell.status.image = app.status
            cell.button1.setTitle(app.ctaButton1, for: .normal)
            cell.button2.setTitle(app.ctaButton2, for: .normal)
        }
        return cell
    }
}



