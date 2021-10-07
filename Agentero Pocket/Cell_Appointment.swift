//
//  Cell_Appointment.swift
//  Agentero Pocket
//
//  Created by Edu on 7/10/21.
//

import Foundation
import UIKit

class Cell_Appointment: UITableViewCell {
    
    @IBOutlet weak var cell_view: UIView!
    
    @IBOutlet weak var logo: UIImageView!
    @IBOutlet weak var insuranceTypes: UILabel!
    @IBOutlet weak var message: UILabel!
    @IBOutlet weak var status: UIImageView!
    @IBOutlet weak var button1: UIButton!
    @IBOutlet weak var button2: UIButton!
    
    override func awakeFromNib() {
        super.awakeFromNib()
        cell_view.layer.shadowColor = UIColor.black.cgColor
        cell_view.layer.shadowOffset = CGSize(width: 1, height: 1)
        cell_view.layer.shadowOpacity = 0.1
        cell_view.layer.shadowRadius = 5.0
    }
}
